import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Env } from './types';

// Import routes
import orders from './routes/orders';
import subscriptions from './routes/subscriptions';
import webhook from './routes/webhook';
import contact from './routes/contact';

const app = new Hono<{ Bindings: Env }>();

// CORS middleware - allow all origins for now (configure for production)
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'X-Razorpay-Signature'],
}));

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API routes
app.route('/api/create-order', orders);
app.route('/api/create-subscription', subscriptions);
app.route('/api/webhook', webhook);
app.route('/api/send-contact', contact);

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

export default app;
