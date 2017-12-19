<?php

/* Set e-mail recipient */
$myemail  = "reinier.caron@gmail.com";


/* Check all form inputs using check_input function */
$naam       = check_input($_POST['naam'], "We missen je naam nog");
$onderwerp  = check_input($_POST['onderwerp']);
$tel      = check_input($_POST['tel']);
$mail      = check_input($_POST['sendermail'], "we hebben je email adres nog niet");
$vraag      = check_input($_POST['vraag'], "Er is nog geen bericht geschreven.");

  foreach ($_POST as $key => $value) {
    echo '<p><strong>' . $key.':</strong> '.$value.'</p>';
  }



/* If e-mail is not valid show error message
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $mail))
{
    show_error("E-mail klopt niet");
}
*/


/* Functions we used*/
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
    show_error($problem);
}

return $data;
}

function show_error($myError)
{
?>
<html>
<body>

<b>We missen de volgende gegevens:</b><br />
<?php echo $myError; ?>

</body>
</html>
<?php
exit();
}


/* Let's prepare the message for the e-mail */
$message = "Bericht van formulier op reiniercaron.nl.

Er is contact gemaakt via de website:

Naam: $naam
E-mail adres: $mail
Telefoon nummer: $tel
Onderwerp: $onderwerp

Vraag:
$vraag

Einde bericht.
";

/* Send the message using mail() function */
//mail($myemail, $onderwerp, $message);

// if the url field is empty
if(isset($_POST['email']) && $_POST['email'] == ''){
     // then send the form to your email
          mail($myemail, $onderwerp, $message);
		  //mail( 'reiniercaron@gmail.com', 'Contact Form', print_r($_POST,true) );
}
// otherwise, let the spammer think that they got their message through

/* Redirect visitor to the thank you page */
header('Location: ../index.html#gotocontact');
exit();

?>
