function buscar() {
      const termo = document.querySelector('input').value;
      alert("Você pesquisou por: " + termo);
    }
 function abrirCarrinho() {
      document.getElementById('carrinho').classList.add('aberto');
    }

    function fecharCarrinho() {
      document.getElementById('carrinho').classList.remove('aberto');
    }
