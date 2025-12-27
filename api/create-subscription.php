<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$config = require __DIR__ . '/config.php';
$input = json_decode(file_get_contents('php://input'), true);

$amount = $input['amount'] ?? 0;
$currency = $input['currency'] ?? 'INR';
$period = $input['period'] ?? 'monthly';
$customerName = $input['customerName'] ?? 'Donor';

if (!$amount) {
    http_response_code(400);
    echo json_encode(['error' => 'Amount is required']);
    exit;
}

$auth = $config['RAZORPAY_KEY_ID'] . ':' . $config['RAZORPAY_KEY_SECRET'];

// Step 1: Create Plan
$planUrl = 'https://api.razorpay.com/v1/plans';
$planData = [
    'period' => $period,
    'interval' => 1,
    'item' => [
        'name' => "Donation Plan - $amount $currency",
        'amount' => $amount * 100,
        'currency' => $currency,
        'description' => "Monthly donation of $amount $currency"
    ]
];

$ch = curl_init($planUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($planData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_USERPWD, $auth);

$planResponse = curl_exec($ch);
$planHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($planHttpCode !== 200) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to create plan']);
    exit;
}

$plan = json_decode($planResponse, true);

// Step 2: Create Subscription
$subUrl = 'https://api.razorpay.com/v1/subscriptions';
$subData = [
    'plan_id' => $plan['id'],
    'customer_notify' => 1,
    'total_count' => 120,
    'quantity' => 1,
    'notes' => [
        'customer_name' => $customerName
    ]
];

$ch = curl_init($subUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($subData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_USERPWD, $auth);

$subResponse = curl_exec($ch);
$subHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($subHttpCode !== 200) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to create subscription']);
    exit;
}

$subscription = json_decode($subResponse, true);

echo json_encode([
    'subscription_id' => $subscription['id'],
    'plan_id' => $plan['id']
]);
