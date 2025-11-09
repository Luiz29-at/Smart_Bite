<?php
session_start();
if(!isset($_SESSION['logado'])) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Acesso negado"]);
    exit;
}

// Aqui você pode colocar a lógica de update real
echo json_encode(["success" => true, "message" => "Sistema atualizado com sucesso"]);
?>
