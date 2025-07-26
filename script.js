function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("mensagem-erro");

  if (usuario === "aluno" && senha === "1234") {
    window.location.href = "cursos.html";
  } else {
    erro.textContent = "Usuário ou senha inválidos. Use aluno / 1234";
  }
}
