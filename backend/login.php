<?php
session_start();
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$senha = $data['senha'] ?? '';

if ($senha === "LcD2025@") {
    $_SESSION['logado'] = true;
    echo json_encode(["success" => true, "message" => "Login bem-sucedido"]);
} else {
    echo json_encode(["success" => false, "message" => "Senha incorreta"]);
}
?>
