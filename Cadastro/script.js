const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

function showRegister() {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
}

function showLogin() {
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
}

function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Criar usuário
  const usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  // Armazenar no localStorage
  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro realizado com sucesso!");

  window.location.href ="../login/login.html"; // Redireciona para tela de login
}
