<?php
// Test SMTP configuration
// Upload this to api/ folder and visit: https://yourdomain.com/api/test-email.php

require_once __DIR__ . '/email-service.php';

// Test email
$testEmail = 'your-test-email@example.com'; // Change this to your email
$result = sendEmail(
    $testEmail,
    'Test Email from Aparigraha Foundation',
    '<h1>Test Email</h1><p>If you receive this, SMTP is working correctly!</p>'
);

if ($result) {
    echo "✓ Email sent successfully! Check $testEmail";
} else {
    echo "✗ Email failed to send. Check PHP error logs in Hostinger.";
}

// Display configuration (without sensitive data)
$config = require __DIR__ . '/config.php';
echo "<hr><h3>SMTP Configuration:</h3>";
echo "<ul>";
echo "<li>Host: " . $config['SMTP_HOST'] . "</li>";
echo "<li>Port: " . $config['SMTP_PORT'] . "</li>";
echo "<li>User: " . $config['SMTP_USER'] . "</li>";
echo "<li>From: " . $config['SMTP_FROM_EMAIL'] . "</li>";
echo "</ul>";
echo "<p><strong>Note:</strong> Delete this file after testing for security!</p>";
