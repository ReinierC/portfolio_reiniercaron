<?php
if(isset( $_POST['naam']))
  $name = $_POST['naam'];
if(isset( $_POST['sendermail']))
  $email = $_POST['sendermail'];
if(isset( $_POST['bericht']))
  $message = $_POST['bericht'];
if ($name === ''){
//  echo "Dit veld invullen a.u.b.";
  die();
}
if ($email === ''){
//  echo "Dit veld invullen a.u.b.";
  die();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
//    echo "foutief email adres";
    die();
  }
}
if ($message === ''){
//  echo "Dit veld invullen a.u.b.";
  die();
}
$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "reinier.caron@gmail.com";
$subject = "message from website reiniercaron.nl";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
//echo "Email sent!";
?>
