import { Hono } from 'hono';
import { verifyWebhookSignature } from '../lib/crypto';
import { EmailService } from '../services/email';
import type { Env, RazorpayWebhookPayload } from '../types';

const webhook = new Hono<{ Bindings: Env }>();

/**
 * POST /api/webhook
 * Handle Razorpay webhook events
 * Verifies signature before processing
 */
webhook.post('/', async (c) => {
  try {
    // Get raw body for signature verification
    const body = await c.req.text();
    const signature = c.req.header('X-Razorpay-Signature') || '';

    // Validate webhook secret is configured
    if (!c.env.RAZORPAY_WEBHOOK_SECRET) {
      console.error('RAZORPAY_WEBHOOK_SECRET not configured');
      return c.json({ error: 'Webhook not configured' }, 500);
    }

    // Verify signature
    const isValid = await verifyWebhookSignature(
      body,
      signature,
      c.env.RAZORPAY_WEBHOOK_SECRET
    );

    if (!isValid) {
      console.error('Invalid webhook signature');
      return c.json({ error: 'Invalid signature' }, 400);
    }

    // Parse payload
    const payload: RazorpayWebhookPayload = JSON.parse(body);
    const event = payload.event;

    console.log(`Received Razorpay event: ${event}`);

    const emailService = new EmailService(c.env);

    switch (event) {
      case 'payment.captured': {
        const payment = payload.payload.payment?.entity;
        if (!payment) {
          console.error('No payment entity in payload');
          break;
        }

        const email = payment.email || '';
        const amount = payment.amount / 100; // Convert from paise
        const paymentId = payment.id;

        console.log(`Payment captured: ${paymentId} for ${email}: INR ${amount}`);

        // Send confirmation to donor
        if (email) {
          await emailService.sendDonationConfirmation(email, amount);
        }

        // Notify organization
        await emailService.notifyOrganization('one-time', amount, email, paymentId);
        break;
      }

      case 'subscription.charged': {
        const payment = payload.payload.payment?.entity;
        if (!payment) {
          console.error('No payment entity in payload');
          break;
        }

        const email = payment.email || '';
        const amount = payment.amount / 100;
        const paymentId = payment.id;

        console.log(`Subscription charged: ${paymentId} for ${email}: INR ${amount}`);

        // Send confirmation to donor
        if (email) {
          await emailService.sendSubscriptionConfirmation(email, amount);
        }

        // Notify organization
        await emailService.notifyOrganization('subscription', amount, email, paymentId);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event}`);
    }

    return c.json({ status: 'OK' });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default webhook;
