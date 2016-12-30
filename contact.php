<?php

$destino = 'hello@williamgama.com';
$nome = $_POST["name"];
$email = $_POST["email"];
$telefone = $_POST["phone"];
$assunto = $_POST["subject"];
$mensagem = $_POST["comments"];

$headers = "From: $nome" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$resposta = mail("$destino", "$assunto", "

Nome: $nome

Email: $email

Telefone: $telefone

Mensagem: $mensagem", "$headers");


if ($resposta == 1){

echo "<script>

alert('Obrigado pela sua mensagem. Responderei o mais breve possível.');

window.location.href = 'http://www.williamgama.com';

</script>";

}else{

echo "<script>alert('Não foi possível enviar a sua mensagem, tente novamente mais tarde.');history.go(-1) </script>";

}

?>