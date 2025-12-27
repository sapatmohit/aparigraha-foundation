import type { Env } from '../types';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * Email service using Resend API
 * https://resend.com/docs/api-reference/emails/send-email
 */
export class EmailService {
  private apiKey: string;
  private fromEmail = 'donations@aparigrahafoundation.com';
  private fromName = 'Aparigraha Foundation';
  private baseUrl = 'https://api.resend.com';

  constructor(env: Env) {
    this.apiKey = env.RESEND_API_KEY;
  }

  /**
   * Send an email via Resend API
   * Fails gracefully - logs error but doesn't throw
   */
  async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.apiKey) {
      console.error('RESEND_API_KEY not configured, skipping email');
      return false;
    }

    try {
      const response = await fetch(`${this.baseUrl}/emails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          from: `${this.fromName} <${this.fromEmail}>`,
          to: [options.to],
          subject: options.subject,
          html: options.html,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(`Email send failed: ${response.status}`, error);
        return false;
      }

      const result = await response.json();
      console.log(`✓ Email sent successfully to ${options.to}:`, result);
      return true;
    } catch (error) {
      console.error('Email send error:', error);
      return false;
    }
  }

  /**
   * Send donation confirmation to donor
   */
  async sendDonationConfirmation(email: string, amount: number): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: 'Thank you for your donation!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #16a34a;">Thank You!</h1>
          <p>We received your donation of <strong>INR ${amount}</strong>.</p>
          <p>Your support means a lot to Aparigraha Foundation and helps us continue our mission.</p>
          <p style="color: #666; margin-top: 20px;">
            With gratitude,<br>
            The Aparigraha Foundation Team
          </p>
        </div>
      `,
    });
  }

  /**
   * Send subscription confirmation to donor
   */
  async sendSubscriptionConfirmation(email: string, amount: number): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: 'Monthly Donation Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #16a34a;">Thank You!</h1>
          <p>We successfully processed your monthly donation of <strong>INR ${amount}</strong>.</p>
          <p>Your recurring support makes a lasting impact on our mission.</p>
          <p style="color: #666; margin-top: 20px;">
            With gratitude,<br>
            The Aparigraha Foundation Team
          </p>
        </div>
      `,
    });
  }

  /**
   * Notify organization about new donation
   */
  async notifyOrganization(
    type: 'one-time' | 'subscription',
    amount: number,
    donorEmail: string,
    paymentId: string
  ): Promise<boolean> {
    const subject = type === 'subscription'
      ? `New Subscription Payment: INR ${amount}`
      : `New Donation: INR ${amount}`;

    const typeLabel = type === 'subscription' ? 'Recurring Donation' : 'Donation';

    return this.sendEmail({
      to: 'donation@aparigrahafoundation.com',
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #16a34a;">New ${typeLabel} Received</h3>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Amount:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">INR ${amount}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Donor Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${donorEmail || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Payment ID:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${paymentId}</td>
            </tr>
          </table>
        </div>
      `,
    });
  }

  /**
   * Send contact form message to organization
   */
  async sendContactMessage(
    name: string,
    email: string,
    phone: string,
    message: string
  ): Promise<boolean> {
    return this.sendEmail({
      to: 'help@aparigrahafoundation.com',
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #16a34a;">New Contact Message</h3>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || 'N/A'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            <strong>Message:</strong>
            <p style="margin-top: 10px;">${message}</p>
          </div>
        </div>
      `,
    });
  }
}
