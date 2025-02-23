<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
$mail = new PHPMailer(true);

$mail-> isSMTP();
$firstname = $_POST["firstname"]
$lastname = $_POST["lastname"]
$email= $_POST["email"]
$password = $_POST["password"]
$repeatpassword= $_POST["repeat-password"]