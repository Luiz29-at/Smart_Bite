<?php
session_start();
if(!isset($_SESSION['logado'])) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Acesso negado"]);
    exit;
}

$logsFile = 'logs.json';
$logs = [];

if(file_exists($logsFile)) {
    $logs = json_decode(file_get_contents($logsFile), true);
}

$data = json_decode(file_get_contents('php://input'), true);
$logs[] = [
    "action" => $data['action'] ?? "Ação desconhecida",
    "user" => $data['user'] ?? "Admin",
    "time" => date("Y-m-d H:i:s")
];

file_put_contents($logsFile, json_encode($logs, JSON_PRETTY_PRINT));
echo json_encode(["success" => true]);
?>
