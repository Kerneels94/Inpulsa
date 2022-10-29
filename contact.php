<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/inpulsac/PHPMailerTest/PHPMailer/src/Exception.php';
require '/home/inpulsac/PHPMailerTest/PHPMailer/src/PHPMailer.php';
require '/home/inpulsac/PHPMailerTest/PHPMailer/src/SMTP.php';

// Instantiation and passing [ICODE]true[/ICODE] enables exceptions
$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$errors = [];

if (empty($email)) {
    $errors[] = 'Email is empty';
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is invalid';
}


try {
 //Server settings
//  $mail->SMTPDebug = 2; // Enable verbose debug output
 $mail->isSMTP(); // Set mailer to use SMTP
 $mail->Host = 'rbx106.truehost.cloud'; // Specify main and backup SMTP servers
 $mail->SMTPAuth = true; // Enable SMTP authentication
 $mail->Username = 'corrie@inpulsa.co.za'; // SMTP username
 $mail->Password = 'Korrels@28'; // SMTP password
 $mail->SMTPSecure = 'tls'; // Enable TLS encryption, [ICODE]ssl[/ICODE] also accepted
 $mail->Port = 587; // TCP port to connect to

//Recipients
 $mail->setFrom('corrie@inpulsa.co.za', ${name});
 $mail->addAddress('info@inpulsa.co.za', ${name}); // Add a recipient
//  $mail->addAddress('recipient2@example.com'); // Name is optional
 $mail->addReplyTo('info@inpulsa.co.za', 'Information');
 $mail->addCC('corrie@inpulsa.co.za');
//  $mail->addBCC('bcc@example.com');

// Attachments
//  $mail->addAttachment('/home/cpanelusername/attachment.txt'); // Add attachments
//  $mail->addAttachment('/home/cpanelusername/image.jpg', 'new.jpg'); // Optional name

// Content
 $mail->isHTML(true); // Set email format to HTML
 $mail->Subject = 'New message from '.${name};
 $mail->Body = 'Message recieved from: ' .${name}.'<br/>'. ' Email: '. ${email}.'<br/>'.' Their message: ' .${message};
 $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if($mail->send()) {
    header('Location: thank-you.html');
    $name = '';
    $email = '';
    $message = '';    
}else {
    echo "MEssage was not sent successfully";
}

} catch (Exception $e) {
 echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}