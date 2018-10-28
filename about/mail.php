<?php

include 'Mailin.php';

date_default_timezone_set('Asia/Jakarta');

$line = date('Y-m-d H:i:s') . " - $_SERVER[REMOTE_ADDR]\t" . gethostname() . "\t" . gethostbyaddr($_SERVER['REMOTE_ADDR']);

if(!isset($_POST['valid_email'])){
	if (!file_exists('logs')) {
	    mkdir('logs', 0755, true);
	}
	file_put_contents('logs/mail.log', $line . ' --- FAILED --- '. PHP_EOL, FILE_APPEND);
	echo "<img src='images/i-see-what-you-did-there.png' />";
	echo "<br><strong>I see what you did there. . .</strong>";
	die();
}

file_put_contents('logs/mail.log', $line . PHP_EOL, FILE_APPEND);

$mailin = new Mailin('williamchanrico@yahoo.co.id', '<SECRET_KEY>');
$mailin->addTo('williamchanrico@yahoo.co.id', 'William Chanrico')
	->setFrom('williamchanrico@arzhon.id', 'Arzhon.id (' . $_POST['name'] . ')')
	->setReplyTo($_POST['email'], $_POST['name'])
	->setSubject($_POST['subject'])
	->setText("Name:\t" . $_POST['name'] . "\nEmail:\t" . $_POST['email'] . "\nMessage:\n" . $_POST['message'] . "\n\n" . $line);

$res = $mailin->send();
if (!$res) {
    echo "Mailer Error: {$res}\n\nContact me at williamchanrico@yahoo.co.id";
} else {
    echo "Message sent!";
    header('Location: message-sent/');
}

?>
