<?php
include_once('conexao.php');

$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$cep = $_POST['cep'];
$email = $_POST['email'];
$estado = $_POST['estado'];
$cidade = $_POST['cidade'];
$ocorrido = $_POST['mensagem'];
$tipo = $_POST['select'];

$sql = "INSERT INTO dados_denuncia(nome, cpf, cep, email, estado, cidade, ocorrido, tipo) VALUES ('$nome', '$cpf', '$cep', '$email', '$estado', '$cidade', '$ocorrido', '$tipo')";

$query = mysqli_query($conexao, $sql);

if($query) {
    echo "<script>
    window.alert('Registrado com sucesso!')
    window.location.replace('../denunciar.html')
    </script>";
}
?>