const senhaCorreta = "LcD2025@";
function login() {
  const senha = document.getElementById("password").value;
  const erro = document.getElementById("login-error");

  if (senha === senhaCorreta) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    erro.textContent = "Senha incorreta.";
  }
}

function showSection(section) {
  const title = document.getElementById("section-title");
  const content = document.getElementById("section-content");

  const secoes = {
    atualizar: "<h2>Atualizar Sistema</h2><p>Verifica e aplica atualizações do Smart Bite.</p>",
    backup: "<h2>Backup</h2><p>Cria e baixa cópias de segurança automáticas.</p>",
    logs: "<h2>Logs</h2><p>Visualiza eventos e atividades recentes do sistema.</p>",
    manutencao: "<h2>Modo Manutenção</h2><p>Ativa o modo de manutenção temporário.</p>",
    admins: "<h2>Gerenciar Admins</h2><p>Adiciona, remove ou altera permissões de administradores.</p>",
    status: "<h2>Status do Servidor</h2><p>Mostra uso de CPU, memória e tempo de atividade.</p>",
    config: "<h2>Configurações Globais</h2><p>Personaliza temas, textos e comportamentos gerais do sistema.</p>"
  };

  title.textContent = section.charAt(0).toUpperCase() + section.slice(1);
  content.innerHTML = secoes[section] || "<p>Selecione uma função válida.</p>";
}
