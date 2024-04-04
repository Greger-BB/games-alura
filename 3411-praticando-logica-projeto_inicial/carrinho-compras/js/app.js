let valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //Primeiro, recuperar as informações do produto escolhido
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = parseFloat ( produto.split('- R$')[1]);
    //calcular o subTotal
    let subTotal = quantidade * precoProduto;
    console.log (nomeProduto);
    console.log (precoProduto);
    console.log (quantidade);
    console.log (subTotal);
    //adicionar o produto ao carrinho e adicionar o subTotal ao total
    let carrinho = document.getElementById('lista-produtos');
    //Aqui é possível adicionar algo na lista, mantendo o que já tinha antes
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`;
    //adicionar o subTotal ao total
    let total = document.getElementById('valor-total');
    valorTotal = valorTotal + subTotal;
    total.innerText = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    //Limpamos o valor total assim como o carrinho dos produtos.
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 0;
    valorTotal = 0;
}