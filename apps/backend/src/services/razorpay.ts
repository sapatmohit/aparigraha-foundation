import type { Env, RazorpayOrder, RazorpayPlan, RazorpaySubscription } from '../types';

/**
 * Razorpay API client for Cloudflare Workers
 */
export class RazorpayService {
  private keyId: string;
  private keySecret: string;
  private baseUrl = 'https://api.razorpay.com/v1';

  constructor(env: Env) {
    this.keyId = env.RAZORPAY_KEY_ID;
    this.keySecret = env.RAZORPAY_KEY_SECRET;
  }

  private getAuthHeader(): string {
    const credentials = btoa(`${this.keyId}:${this.keySecret}`);
    return `Basic ${credentials}`;
  }

  /**
   * Create a Razorpay order for one-time payment
   */
  async createOrder(amount: number, currency: string = 'INR'): Promise<RazorpayOrder> {
    const response = await fetch(`${this.baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getAuthHeader(),
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to paise
        currency,
        receipt: `receipt_order_${Date.now()}`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Razorpay order creation failed:', error);
      throw new Error(`Failed to create order: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Create a Razorpay plan for recurring payments
   */
  async createPlan(
    amount: number,
    currency: string = 'INR',
    period: string = 'monthly'
  ): Promise<RazorpayPlan> {
    const response = await fetch(`${this.baseUrl}/plans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getAuthHeader(),
      },
      body: JSON.stringify({
        period,
        interval: 1,
        item: {
          name: `Donation Plan - ${amount} ${currency}`,
          amount: amount * 100,
          currency,
          description: `${period.charAt(0).toUpperCase() + period.slice(1)} donation of ${amount} ${currency}`,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Razorpay plan creation failed:', error);
      throw new Error(`Failed to create plan: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Create a Razorpay subscription
   */
  async createSubscription(
    planId: string,
    customerName: string = 'Donor'
  ): Promise<RazorpaySubscription> {
    const response = await fetch(`${this.baseUrl}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getAuthHeader(),
      },
      body: JSON.stringify({
        plan_id: planId,
        customer_notify: 1,
        total_count: 120, // 10 years of monthly payments
        quantity: 1,
        notes: {
          customer_name: customerName,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Razorpay subscription creation failed:', error);
      throw new Error(`Failed to create subscription: ${response.status}`);
    }

    return response.json();
  }
}
