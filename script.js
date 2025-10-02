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

function loginUsuario() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  // Recuperar usuário salvo
  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado. Crie uma conta!");
    window.location.href = "../Cadastro/cadastro.html";
  }

  if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
    alert("Login realizado com sucesso!");
    window.location.href ="../tela_principal/site.html" ; // Redireciona para home
  } else {
    alert("Email ou senha incorretos!");
  }
}
