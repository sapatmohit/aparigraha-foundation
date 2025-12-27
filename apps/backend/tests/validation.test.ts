import { describe, expect, it } from 'vitest';
import {
    contactFormSchema,
    createOrderSchema,
    createSubscriptionSchema,
} from '../src/lib/validation';

describe('Validation Schemas', () => {
  describe('createOrderSchema', () => {
    it('should validate valid order request', () => {
      const result = createOrderSchema.safeParse({ amount: 500 });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.amount).toBe(500);
        expect(result.data.currency).toBe('INR'); // default
      }
    });

    it('should accept custom currency', () => {
      const result = createOrderSchema.safeParse({ amount: 100, currency: 'USD' });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.currency).toBe('USD');
      }
    });

    it('should reject zero amount', () => {
      const result = createOrderSchema.safeParse({ amount: 0 });
      expect(result.success).toBe(false);
    });

    it('should reject negative amount', () => {
      const result = createOrderSchema.safeParse({ amount: -100 });
      expect(result.success).toBe(false);
    });

    it('should reject missing amount', () => {
      const result = createOrderSchema.safeParse({});
      expect(result.success).toBe(false);
    });
  });

  describe('createSubscriptionSchema', () => {
    it('should validate valid subscription request', () => {
      const result = createSubscriptionSchema.safeParse({ amount: 1000 });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.amount).toBe(1000);
        expect(result.data.period).toBe('monthly'); // default
        expect(result.data.customerName).toBe('Donor'); // default
      }
    });

    it('should accept custom period', () => {
      const result = createSubscriptionSchema.safeParse({
        amount: 500,
        period: 'yearly',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.period).toBe('yearly');
      }
    });

    it('should reject invalid period', () => {
      const result = createSubscriptionSchema.safeParse({
        amount: 500,
        period: 'biweekly',
      });
      expect(result.success).toBe(false);
    });
  });

  describe('contactFormSchema', () => {
    it('should validate valid contact form', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, I have a question.',
      });
      expect(result.success).toBe(true);
    });

    it('should accept optional phone', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210',
        message: 'Hello!',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.phone).toBe('+91 9876543210');
      }
    });

    it('should reject invalid email', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'not-an-email',
        message: 'Hello!',
      });
      expect(result.success).toBe(false);
    });

    it('should reject empty name', () => {
      const result = contactFormSchema.safeParse({
        name: '',
        email: 'john@example.com',
        message: 'Hello!',
      });
      expect(result.success).toBe(false);
    });

    it('should reject empty message', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
      });
      expect(result.success).toBe(false);
    });
  });
});
