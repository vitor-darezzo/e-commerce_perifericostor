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

function validateRegister(event) {
  event.preventDefault();
  const senha = document.getElementById("reg-senha").value;
  const confirmarSenha = document.getElementById("confirm-senha").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }
  else {
  alert("Cadastro realizado com sucesso!");
  }
}
