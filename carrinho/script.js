let carrinho = [];
const carrinhoEl = document.getElementById("carrinho");
const itensCarrinhoEl = document.getElementById("itens-carrinho");
const contadorEl = document.getElementById("contador");
const contadorLateralEl = document.getElementById("contador-lateral");

function toggleCarrinho() {
  carrinhoEl.classList.toggle("aberto");
  atualizarCarrinho();
}

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  contadorEl.textContent = carrinho.length;
  contadorLateralEl.textContent = carrinho.length;

  if (carrinho.length === 0) {
    itensCarrinhoEl.innerHTML = "<p>Seu carrinho está vazio</p>";
    return;
  }

  itensCarrinhoEl.innerHTML = "";
  carrinho.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${item.nome}</strong><br>
      <span>${item.preco}</span>
    `;
    itensCarrinhoEl.appendChild(div);
  });
}
