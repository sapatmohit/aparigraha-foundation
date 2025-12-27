// Environment bindings for Cloudflare Worker
export interface Env {
  RAZORPAY_KEY_ID: string;
  RAZORPAY_KEY_SECRET: string;
  RAZORPAY_WEBHOOK_SECRET: string;
  RESEND_API_KEY: string;
  ENVIRONMENT: string;
}

// Razorpay API response types
export interface RazorpayOrder {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: string;
  created_at: number;
}

export interface RazorpayPlan {
  id: string;
  entity: string;
  interval: number;
  period: string;
  item: {
    id: string;
    name: string;
    amount: number;
    currency: string;
  };
}

export interface RazorpaySubscription {
  id: string;
  entity: string;
  plan_id: string;
  status: string;
  current_start: number;
  current_end: number;
}

// Webhook payload types
export interface RazorpayWebhookPayload {
  event: string;
  payload: {
    payment?: {
      entity: {
        id: string;
        amount: number;
        currency: string;
        email?: string;
        contact?: string;
        notes?: Record<string, string>;
      };
    };
    subscription?: {
      entity: {
        id: string;
        plan_id: string;
        status: string;
      };
    };
  };
}
