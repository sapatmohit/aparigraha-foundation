import { Hono } from 'hono';
import { contactFormSchema } from '../lib/validation';
import { EmailService } from '../services/email';
import type { Env } from '../types';

const contact = new Hono<{ Bindings: Env }>();

/**
 * POST /api/send-contact
 * Handle contact form submissions
 */
contact.post('/', async (c) => {
  try {
    // Parse and validate request body
    const body = await c.req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return c.json(
        { error: 'Validation failed', details: result.error.flatten() },
        400
      );
    }

    const { name, email, phone, message } = result.data;

    // Validate email service is configured
    if (!c.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return c.json({ error: 'Email service not configured' }, 500);
    }

    const emailService = new EmailService(c.env);
    const success = await emailService.sendContactMessage(
      name,
      email,
      phone || 'N/A',
      message
    );

    if (success) {
      console.log(`Contact message sent from ${email}`);
      return c.json({ success: true, message: 'Message sent successfully' });
    } else {
      return c.json({ error: 'Failed to send message' }, 500);
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return c.json({ error: 'Failed to send message' }, 500);
  }
});

export default contact;
