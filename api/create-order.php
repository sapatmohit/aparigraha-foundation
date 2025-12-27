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

if (!$amount) {
    http_response_code(400);
    echo json_encode(['error' => 'Amount is required']);
    exit;
}

// Razorpay API call
$url = 'https://api.razorpay.com/v1/orders';
$data = [
    'amount' => $amount * 100, // Convert to paise
    'currency' => $currency,
    'receipt' => 'receipt_order_' . time()
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
]);
curl_setopt($ch, CURLOPT_USERPWD, $config['RAZORPAY_KEY_ID'] . ':' . $config['RAZORPAY_KEY_SECRET']);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to create order']);
    exit;
}

echo $response;
