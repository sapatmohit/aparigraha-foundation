<?php
// Email service using PHPMailer
// Manual include (no Composer needed)

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Manual includes - no Composer needed
require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

function sendEmail($to, $subject, $htmlBody) {
    $config = require __DIR__ . '/config.php';
    
    $mail = new PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = $config['SMTP_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['SMTP_USER'];
        $mail->Password = $config['SMTP_PASS'];
        $mail->SMTPSecure = $config['SMTP_PORT'] == 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $config['SMTP_PORT'];
        
        // Enable debug output (comment out in production)
        // $mail->SMTPDebug = 2; // 0 = off, 1 = client, 2 = client and server
        
        // Recipients
        $mail->setFrom($config['SMTP_FROM_EMAIL'], $config['SMTP_FROM_NAME']);
        $mail->addAddress($to);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $htmlBody;
        $mail->AltBody = strip_tags($htmlBody); // Plain text version
        
        $mail->send();
        error_log("✓ Email sent successfully to: $to");
        return true;
    } catch (Exception $e) {
        error_log("✗ Email sending failed to $to: {$mail->ErrorInfo}");
        error_log("✗ Exception: " . $e->getMessage());
        return false;
    }
}
