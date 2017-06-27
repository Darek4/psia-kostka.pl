<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'Od: '; 
    $to = 'rezerwacja@psia-kostka.pl'; 
    $subject = 'Formularz kontaktowy';

    $body = "Od: $name\n E-Mail: $email\n Wiadomość:\n $message";

     if ($_POST['submit']) {
        mail ($to, $subject, $body, $from); 
    }
    
?>

<script language="javascript" type="text/javascript">
        alert('Wiadomość została wysłana');
        window.location = 'kontakt.html';
</script>
