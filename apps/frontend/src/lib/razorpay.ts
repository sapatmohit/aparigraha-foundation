// Razorpay integration service
interface RazorpayBaseOptions {
  key: string;
  name: string;
  description: string;
  image?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
  subscription_id?: string;
  recurring?: boolean;
}

interface RazorpayPaymentOptions extends RazorpayBaseOptions {
  amount: number;
  currency: string;
  handler: (response: RazorpayResponse) => void;
}

interface RazorpaySubscriptionOptions extends RazorpayBaseOptions {
  subscription_id: string;
  handler: (response: RazorpaySubscriptionResponse) => void;
}

type RazorpayOptions = RazorpayPaymentOptions | RazorpaySubscriptionOptions;

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpaySubscriptionResponse {
  razorpay_payment_id?: string;
  razorpay_subscription_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}

class RazorpayService {
  private keyId: string;
  private scriptLoaded: boolean = false;
  private scriptLoadingPromise: Promise<boolean> | null = null;

  constructor(keyId: string) {
    this.keyId = keyId;
  }

  /**
   * Load Razorpay script with caching to prevent multiple loads
   */
  loadScript(): Promise<boolean> {
    // Return cached promise if already loading/loaded
    if (this.scriptLoadingPromise) {
      return this.scriptLoadingPromise;
    }

    // Check if script is already loaded
    if (typeof window.Razorpay !== 'undefined') {
      this.scriptLoaded = true;
      return Promise.resolve(true);
    }

    this.scriptLoadingPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        this.scriptLoaded = true;
        resolve(true);
      };
      script.onerror = () => {
        this.scriptLoadingPromise = null; // Reset to allow retry
        resolve(false);
      };
      document.body.appendChild(script);
    });

    return this.scriptLoadingPromise;
  }

  /**
   * Preload script for faster payment initialization
   */
  preloadScript(): void {
    this.loadScript().catch(() => {});
  }

  async initializePayment(options: Omit<RazorpayPaymentOptions, 'key'>): Promise<RazorpayResponse | null> {
    const isScriptLoaded = await this.loadScript();
    if (!isScriptLoaded) {
      console.error('Failed to load Razorpay SDK');
      throw new Error('Failed to load Razorpay SDK');
    }

    // Create order from backend
    const backendUrl = import.meta.env.VITE_BACKEND_URL || window.location.origin;
    const response = await fetch(`${backendUrl}/api/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: options.amount / 100,
        currency: options.currency,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Order creation failed:', errorText);
      throw new Error('Failed to create order');
    }

    const order = await response.json();

    return new Promise((resolve, reject) => {
      const { handler, ...restOptions } = options;
      
      const rzp = new window.Razorpay({
        key: this.keyId,
        ...restOptions,
        order_id: order.id,
        handler: (response: RazorpayResponse) => {
          // Call original handler if provided
          if (handler) {
            handler(response);
          }
          resolve(response);
        },
        modal: {
          ondismiss: () => {
            // User closed the modal without completing payment
            resolve(null);
          },
          escape: true,
          backdropclose: false,
        },
      } as RazorpayPaymentOptions & { modal: { ondismiss: () => void; escape: boolean; backdropclose: boolean } });

      rzp.open();
    });
  }

  async initializeSubscription(options: Omit<RazorpaySubscriptionOptions, 'key'>): Promise<RazorpaySubscriptionResponse | null> {
    const isScriptLoaded = await this.loadScript();
    if (!isScriptLoaded) {
      console.error('Failed to load Razorpay SDK');
      throw new Error('Failed to load Razorpay SDK');
    }

    return new Promise((resolve) => {
      const { handler, ...restOptions } = options;
      
      const rzp = new window.Razorpay({
        key: this.keyId,
        ...restOptions,
        handler: (response: RazorpaySubscriptionResponse) => {
          // Call original handler if provided
          if (handler) {
            handler(response);
          }
          resolve(response);
        },
        modal: {
          ondismiss: () => {
            // User closed the modal without completing payment
            resolve(null);
          },
          escape: true,
          backdropclose: false,
        },
      } as RazorpaySubscriptionOptions & { modal: { ondismiss: () => void; escape: boolean; backdropclose: boolean } });

      rzp.open();
    });
  }

  async createSubscriptionPlan(amount: number, currency: string = "INR"): Promise<string> {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || window.location.origin;
      const response = await fetch(`${backendUrl}/api/create-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          period: 'monthly',
          customerName: 'Donor' // You might want to pass real name if available here, but currently it's just amount
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create subscription');
      }

      const data = await response.json();
      return data.subscription_id;
    } catch (error) {
      console.error('Error creating subscription:', error);
      // Fallback for demo or error handling - rethrow or return mock if backend fails is dangerous for real money
      // But for this task, if backend fails, we should probably fail. 
      // However user might not have started backend yet.
      // I'll return a mock string with a log if it fails, OR just throw.
      // Throwing is safer.
      throw error;
    }
  }
}

// Export a singleton instance
// Note: In a real app, you should get this key from environment variables
export const razorpayService = new RazorpayService(import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder');