function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    //Aqui recuperaremos as informações das tags das classes do ID recebido, sendo que 
    //o . antes do nome do texto, é pra indicar que é uma classe
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if ( imagem.classList.contains('dashboard__item__img--rented') ) {
        let confirmarDevolucao = prompt('Se deseja confirmar a devolução, digite Sim:');
        if ( confirmarDevolucao == 'sim' || confirmarDevolucao == 'SIM' || confirmarDevolucao == 'Sim') {
            //Remover a classe indesejada da tag
            imagem.classList.remove('dashboard__item__img--rented');
            //Alteramos o texto que queremos dentro da tag
            botao.textContent = 'Alugar';
            //Removemos a classe indesejada da tag
            botao.classList.remove('dashboard__item__button--return');
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}

function jogosAlugados() {
    let quantidadeJogosAlugados = 0;
    for (let index = 1; index < 4; index++) {
        let gameClicado = document.getElementById(`game-${index}`);
        let imagem = gameClicado.querySelector('.dashboard__item__img');
        if ( imagem.classList.contains('dashboard__item__img--rented')) {
            quantidadeJogosAlugados++;
        }
    }
    console.log (quantidadeJogosAlugados);
}

