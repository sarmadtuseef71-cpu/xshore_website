<?php
// public/api/send-email.php

// 1. Accept POST requests only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Only POST is accepted.']);
    exit;
}

// 2. Return JSON responses only
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Adjust for production if necessary
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Require config
$configFile = __DIR__ . '/config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    error_log("Missing config.php in /api directory.");
    echo json_encode(['error' => 'Internal server error. Configuration missing.']);
    exit;
}
$config = require $configFile;

// Get JSON payload
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true) ?? [];

// 5. Honeypot spam protection
$honeypot = trim($input['company_website'] ?? '');
if (!empty($honeypot)) {
    // Silent fail for bots
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Enquiry received.']);
    exit;
}

// 6. Sanitize all submitted values
$name = htmlspecialchars(trim($input['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars(trim($input['company'] ?? ''), ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars(trim($input['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$need = htmlspecialchars(trim($input['need'] ?? ''), ENT_QUOTES, 'UTF-8');
$type = htmlspecialchars(trim($input['type'] ?? ''), ENT_QUOTES, 'UTF-8');
$location = htmlspecialchars(trim($input['location'] ?? ''), ENT_QUOTES, 'UTF-8');
$notes = htmlspecialchars(trim($input['notes'] ?? ''), ENT_QUOTES, 'UTF-8');
$page = filter_var(trim($input['page'] ?? 'Unknown'), FILTER_SANITIZE_URL);

// 3. & 4. Validate required fields and email format
$errors = [];
if (empty($need)) $errors[] = 'What do you need? is required.';
if (empty($type)) $errors[] = 'Type is required.';
if (empty($name)) $errors[] = 'Name is required.';
if (empty($company)) $errors[] = 'Company is required.';
if (empty($phone)) $errors[] = 'Phone is required.';
if (empty($location)) $errors[] = 'Location is required.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required.';
}

if (!empty($errors)) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Validation failed', 'details' => $errors]);
    exit;
}

// Prepare email content
$date = date('Y-m-d H:i:s T');
$subject = "New [{$type}] Quote Request from Xshore Website";
$htmlBody = "
    <h2>New Website Quote Request</h2>
    <p><strong>What do you need?:</strong> {$need}</p>
    <p><strong>Enquiry Type:</strong> {$type}</p>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Company Name:</strong> {$company}</p>
    <p><strong>Phone / WhatsApp:</strong> {$phone}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Emirate / Site Location:</strong> {$location}</p>
    <p><strong>Notes:</strong><br/>" . (!empty($notes) ? nl2br($notes) : 'None') . "</p>
    <hr/>
    <p><em>Page submitted from:</em> {$page}</p>
    <p><em>Submission time:</em> {$date}</p>
";

// Resend API via cURL
$resendPayload = json_encode([
    'from' => $config['from_email'],
    'to' => [$config['to_email']],
    'subject' => $subject,
    'html' => $htmlBody,
    'reply_to' => $email
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $resendPayload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $config['resend_api_key'],
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully.']);
} else {
    http_response_code(500); // Internal Server Error
    error_log("Resend API Error: HTTP Code {$httpCode}, Response: {$response}");
    echo json_encode(['error' => 'Failed to send email. Please try again later.']);
}
