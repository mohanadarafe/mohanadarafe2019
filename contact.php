<?php

$value = $_COOKIE["valid"];
$name = $_POST['name'];
$honey_name = $_POST['honey_name'];
$email = $_POST['email'];
$msg = $_POST['message'];

$isValid = $value == "false";

if($isValid == 1 || !empty($honey_name)) {
    echo "Something went wrong, please try again.";
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPmailer/src/Exception.php';
require 'PHPmailer/src/PHPMailer.php';
require 'PHPmailer/src/SMTP.php';

$mail = new PHPMailer();

$mail->isSMTP(); 
$mail->CharSet = "utf-8";		    
$mail->SMTPDebug = 3;		    
$mail->SMTPOptions = array(
                            'ssl' => array(
                            'verify_peer' => false,
                            'verify_peer_name' => false,
                            'allow_self_signed' => true));

$mail->SMTPAuth = false; 
$mail->SMTPSecure = false;			
$mail->Host = 'localhost';
$mail->Port = 25; 
$mail->Username = "";
$mail->Password = ""; 
$mail->setFrom($email);
$mail->Subject = $name;
$mail->MsgHTML($msg);
$mail->addAddress(''); // To address

if ($mail->send()){
  header('Location: thankyou.html');
}
else{
  echo "Something went wrong";
}
?>
