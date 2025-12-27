import { describe, expect, it } from 'vitest';
import { verifyWebhookSignature } from '../src/lib/crypto';

describe('Webhook Signature Verification', () => {
  const testSecret = 'test_webhook_secret_123';

  it('should return true for valid signature', async () => {
    const body = JSON.stringify({ event: 'payment.captured', payload: {} });
    
    // Generate expected signature using the same method
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(testSecret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const signatureBuffer = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(body)
    );
    const validSignature = Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    const result = await verifyWebhookSignature(body, validSignature, testSecret);
    expect(result).toBe(true);
  });

  it('should return false for invalid signature', async () => {
    const body = JSON.stringify({ event: 'payment.captured', payload: {} });
    const invalidSignature = 'invalid_signature_here';

    const result = await verifyWebhookSignature(body, invalidSignature, testSecret);
    expect(result).toBe(false);
  });

  it('should return false for empty signature', async () => {
    const body = JSON.stringify({ event: 'payment.captured', payload: {} });

    const result = await verifyWebhookSignature(body, '', testSecret);
    expect(result).toBe(false);
  });

  it('should return false for empty secret', async () => {
    const body = JSON.stringify({ event: 'payment.captured', payload: {} });
    const signature = 'some_signature';

    const result = await verifyWebhookSignature(body, signature, '');
    expect(result).toBe(false);
  });

  it('should return false when body is tampered', async () => {
    const originalBody = JSON.stringify({ event: 'payment.captured', payload: {} });
    const tamperedBody = JSON.stringify({ event: 'payment.captured', payload: { tampered: true } });
    
    // Generate signature for original body
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(testSecret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const signatureBuffer = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(originalBody)
    );
    const signature = Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    // Verify with tampered body should fail
    const result = await verifyWebhookSignature(tamperedBody, signature, testSecret);
    expect(result).toBe(false);
  });
});
