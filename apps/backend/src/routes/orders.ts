import { Hono } from 'hono';
import { createOrderSchema } from '../lib/validation';
import { RazorpayService } from '../services/razorpay';
import type { Env } from '../types';

const orders = new Hono<{ Bindings: Env }>();

/**
 * POST /api/create-order
 * Create a Razorpay order for one-time donation
 */
orders.post('/', async (c) => {
  try {
    // Parse and validate request body
    const body = await c.req.json();
    const result = createOrderSchema.safeParse(body);

    if (!result.success) {
      return c.json(
        { error: 'Validation failed', details: result.error.flatten() },
        400
      );
    }

    const { amount, currency } = result.data;

    // Validate environment
    if (!c.env.RAZORPAY_KEY_ID || !c.env.RAZORPAY_KEY_SECRET) {
      console.error('Razorpay credentials not configured');
      return c.json({ error: 'Payment service not configured' }, 500);
    }

    // Create order via Razorpay
    const razorpay = new RazorpayService(c.env);
    const order = await razorpay.createOrder(amount, currency);

    console.log(`Order created: ${order.id} for amount ${amount} ${currency}`);

    return c.json(order);
  } catch (error) {
    console.error('Create order error:', error);
    return c.json({ error: 'Failed to create order' }, 500);
  }
});

export default orders;
