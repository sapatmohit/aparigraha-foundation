import { z } from 'zod';

// Create order request validation
export const createOrderSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().default('INR'),
});

export type CreateOrderRequest = z.infer<typeof createOrderSchema>;

// Create subscription request validation
export const createSubscriptionSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().default('INR'),
  period: z.enum(['daily', 'weekly', 'monthly', 'yearly']).default('monthly'),
  customerName: z.string().optional().default('Donor'),
});

export type CreateSubscriptionRequest = z.infer<typeof createSubscriptionSchema>;

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export type ContactFormRequest = z.infer<typeof contactFormSchema>;

// Webhook payload validation (loose validation, we verify signature separately)
export const webhookPayloadSchema = z.object({
  event: z.string(),
  payload: z.record(z.any()),
});

export type WebhookPayload = z.infer<typeof webhookPayloadSchema>;
