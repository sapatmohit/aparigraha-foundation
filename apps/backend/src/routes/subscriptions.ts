import { Hono } from 'hono';
import { createSubscriptionSchema } from '../lib/validation';
import { RazorpayService } from '../services/razorpay';
import type { Env } from '../types';

const subscriptions = new Hono<{ Bindings: Env }>();

/**
 * POST /api/create-subscription
 * Create a Razorpay plan and subscription for recurring donations
 */
subscriptions.post('/', async (c) => {
  try {
    // Parse and validate request body
    const body = await c.req.json();
    const result = createSubscriptionSchema.safeParse(body);

    if (!result.success) {
      return c.json(
        { error: 'Validation failed', details: result.error.flatten() },
        400
      );
    }

    const { amount, currency, period, customerName } = result.data;

    // Validate environment
    if (!c.env.RAZORPAY_KEY_ID || !c.env.RAZORPAY_KEY_SECRET) {
      console.error('Razorpay credentials not configured');
      return c.json({ error: 'Payment service not configured' }, 500);
    }

    const razorpay = new RazorpayService(c.env);

    // Step 1: Create plan
    const plan = await razorpay.createPlan(amount, currency, period);
    console.log(`Plan created: ${plan.id}`);

    // Step 2: Create subscription
    const subscription = await razorpay.createSubscription(plan.id, customerName);
    console.log(`Subscription created: ${subscription.id}`);

    return c.json({
      subscription_id: subscription.id,
      plan_id: plan.id,
    });
  } catch (error) {
    console.error('Create subscription error:', error);
    return c.json({ error: 'Failed to create subscription' }, 500);
  }
});

export default subscriptions;
