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

  constructor(keyId: string) {
    this.keyId = keyId;
  }

  loadScript(): Promise<boolean> {
    return new Promise((resolve) => {
      // Check if script is already loaded
      if (typeof window.Razorpay !== 'undefined') {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async initializePayment(options: Omit<RazorpayPaymentOptions, 'key'>): Promise<RazorpayResponse | null> {
    const isScriptLoaded = await this.loadScript();
    if (!isScriptLoaded) {
      console.error('Failed to load Razorpay SDK');
      return null;
    }

    try {
      // creating order from backend
      const backendUrl = import.meta.env.VITE_BACKEND_URL || window.location.origin;
      const response = await fetch(`${backendUrl}/api/create-order.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: options.amount / 100, // Backend expects amount in major units, or we should clarify.
                                        // Backend code: amount * 100. So backend expects major units.
                                        // Frontend 'options.amount' is passed as 'amount * 100' (paise) from DonationModal.
                                        // So we should pass options.amount / 100 to backend.
          currency: options.currency,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();

      return new Promise((resolve) => {
        const rzp = new window.Razorpay({
          key: this.keyId,
          ...options,
          order_id: order.id, // Use the order ID from backend
        } as RazorpayPaymentOptions);

        rzp.open();
      });
    } catch (error) {
      console.error('Error initializing payment:', error);
      return null;
    }
  }

  async initializeSubscription(options: Omit<RazorpaySubscriptionOptions, 'key'>): Promise<RazorpaySubscriptionResponse | null> {
    const isScriptLoaded = await this.loadScript();
    if (!isScriptLoaded) {
      console.error('Failed to load Razorpay SDK');
      return null;
    }

    return new Promise((resolve) => {
      const rzp = new window.Razorpay({
        key: this.keyId,
        ...options,
      } as RazorpaySubscriptionOptions);

      rzp.open();
    });
  }

  async createSubscriptionPlan(amount: number, currency: string = "INR"): Promise<string> {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || window.location.origin;
      const response = await fetch(`${backendUrl}/api/create-subscription.php`, {
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