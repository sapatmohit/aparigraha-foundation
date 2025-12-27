
This project is built with:

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for better development experience
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [shadcn/ui](https://ui.shadcn.com/) - Reusable components built with Radix UI and Tailwind CSS
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

## Docker Deployment

This project includes Docker configuration for easy deployment.

### Building the Docker Image

```bash
docker build -t aparigraha-foundation .
```

### Running with Docker

```bash
docker run -d -p 80:80 --name aparigraha-app aparigraha-foundation
```

### Running with Docker Compose

```bash
docker-compose up -d
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

- `VITE_RAZORPAY_KEY_ID` - Your Razorpay key ID
- `VITE_RAZORPAY_KEY_SECRET` - Your Razorpay key secret

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Razorpay Integration

This project includes a complete donation system integrated with Razorpay for processing one-time and recurring payments.

### Features

- One-time donations
- Recurring donations (AutoPay)
- Secure payment processing
- Responsive donation modal
- Subscription management

### Frontend Components

- `src/components/DonationModal.tsx` - Main donation interface
- `src/lib/razorpay.ts` - Razorpay service integration
- Integrated into HeroSection, Navigation, and Footer components

### Backend (in `backend/` directory)

- Webhook handling for payment notifications
- Subscription management
- Security verification for webhook requests

### Setup

1. Create a Razorpay account at <https://razorpay.com>
2. Obtain your API keys from the Razorpay dashboard
3. Add your keys to the `.env` file:

   ```
   VITE_RAZORPAY_KEY_ID=your_key_id_here
   VITE_RAZORPAY_KEY_SECRET=your_key_secret_here
   ```

4. Configure webhooks in your Razorpay dashboard to point to your server endpoint

## Deployment

You can build and deploy this project using the standard deployment process for Vite applications.
