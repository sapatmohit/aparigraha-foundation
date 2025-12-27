<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/email-service.php';
$config = require __DIR__ . '/config.php';

// Verify webhook signature
$signature = $_SERVER['HTTP_X_RAZORPAY_SIGNATURE'] ?? '';
$body = file_get_contents('php://input');

$expectedSignature = hash_hmac('sha256', $body, $config['RAZORPAY_WEBHOOK_SECRET']);

if ($signature !== $expectedSignature) {
    error_log('Invalid webhook signature');
    http_response_code(400);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

$payload = json_decode($body, true);
$event = $payload['event'] ?? '';
$data = $payload['payload'] ?? [];

error_log("Received Razorpay event: $event");

switch ($event) {
    case 'payment.captured':
        $payment = $data['payment']['entity'] ?? [];
        $email = $payment['email'] ?? '';
        $amount = ($payment['amount'] ?? 0) / 100;
        $paymentId = $payment['id'] ?? '';
        
        error_log("Payment captured for $email: $amount");
        
        // Send receipt to donor
        if ($email) {
            sendEmail(
                $email,
                'Thank you for your donation!',
                "<h1>Thank You!</h1><p>We received your donation of INR $amount. Your support means a lot to Aparigraha Foundation.</p>"
            );
        }
        
        // Send notification to organization
        sendEmail(
            'donation@aparigrahafoundation.com',
            "New Donation: INR $amount",
            "
            <h3>New Donation Received</h3>
            <p><strong>Amount:</strong> INR $amount</p>
            <p><strong>Donor Email:</strong> " . ($email ?: 'N/A') . "</p>
            <p><strong>Payment ID:</strong> $paymentId</p>
            "
        );
        break;
        
    case 'subscription.charged':
        $payment = $data['payment']['entity'] ?? [];
        $email = $payment['email'] ?? '';
        $amount = ($payment['amount'] ?? 0) / 100;
        $paymentId = $payment['id'] ?? '';
        
        error_log("Subscription charged for $email: $amount");
        
        // Send receipt to donor
        if ($email) {
            sendEmail(
                $email,
                'Monthly Donation Confirmation',
                "<h1>Thank You!</h1><p>We successfully processed your monthly donation of INR $amount.</p>"
            );
        }
        
        // Send notification to organization
        sendEmail(
            'donation@aparigrahafoundation.com',
            "New Subscription Payment: INR $amount",
            "
            <h3>New Recurring Donation Received</h3>
            <p><strong>Amount:</strong> INR $amount</p>
            <p><strong>Donor Email:</strong> " . ($email ?: 'N/A') . "</p>
            <p><strong>Payment ID:</strong> $paymentId</p>
            "
        );
        break;
}

echo json_encode(['status' => 'OK']);
