<?php
// Load environment variables from .env file
function loadEnv($path) {
    if (!file_exists($path)) {
        return;
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        
        if (!array_key_exists($name, $_ENV)) {
            putenv("$name=$value");
            $_ENV[$name] = $value;
        }
    }
}

// Load .env file
loadEnv(__DIR__ . '/.env');

// Configuration - reads from environment variables
return [
    'RAZORPAY_KEY_ID' => getenv('RAZORPAY_KEY_ID') ?: 'your_razorpay_key_id',
    'RAZORPAY_KEY_SECRET' => getenv('RAZORPAY_KEY_SECRET') ?: 'your_razorpay_key_secret',
    'RAZORPAY_WEBHOOK_SECRET' => getenv('RAZORPAY_WEBHOOK_SECRET') ?: 'your_webhook_secret',
    
    'SMTP_HOST' => getenv('SMTP_HOST') ?: 'smtp.hostinger.com',
    'SMTP_PORT' => getenv('SMTP_PORT') ?: 465,
    'SMTP_USER' => getenv('SMTP_USER') ?: 'donations@yourdomain.com',
    'SMTP_PASS' => getenv('SMTP_PASS') ?: 'your_email_password',
    'SMTP_FROM_NAME' => getenv('SMTP_FROM_NAME') ?: 'Aparigraha Foundation',
    'SMTP_FROM_EMAIL' => getenv('SMTP_FROM_EMAIL') ?: 'donations@yourdomain.com',
];
