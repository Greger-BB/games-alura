function sortear() {
    //É necessário usar .value ao final, pois o document.getElementById referencia apenas a Tag, e não o valor
    let quantidadeNumerosSorteados = parseInt ( document.getElementById('quantidade').value);
    let inicioIntervalo = parseInt ( document.getElementById('de').value);
    let finalIntervalo = parseInt ( document.getElementById('ate').value);
    let numeroSorteado = sorteadorNumeroIntervalo(inicioIntervalo, finalIntervalo);
    let listaNumerosSorteados = [];
    
    if (quantidadeNumerosSorteados <= (finalIntervalo - inicioIntervalo + 1)) {
        for (let i = 0; i < quantidadeNumerosSorteados; i++) {
            /*Esse loop irá sortear os números, verificar se já existe esse número na lista de números sorteados,
            se não existir, será adicionado, se já existir, será sorteado novamente.*/
            numeroSorteado = sorteadorNumeroIntervalo(inicioIntervalo, finalIntervalo);
            if (listaNumerosSorteados.includes(numeroSorteado)) {
                i--;
            } else {
                listaNumerosSorteados.push(numeroSorteado);
            }
        }
    } else {
        alert ('Número de números sorteados maior que o intervalo disponível ou final do intervalo menor que o ínicio do intervalo.');
    }

    //Após os números sorteados, precisamos mostrar na tela o resultado do sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNumerosSorteados} </label>`;
    alterarStatusBotaoReiniciar();
}

function sorteadorNumeroIntervalo(de, ate) {
    //Retornaremos um número inteiro entre o intervalor de "de" e "até", sendo valores exclusivos.
    //Math.floor retorna o valor mais próximo do inteiro
    return Math.floor ( Math.random() * (ate - de + 1) + de);
}

function reiniciar() {
    alterarStatusBotaoReiniciar();
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}

function alterarStatusBotaoReiniciar() {
    //Pegamos o ID da tag que queremos manipular
    let reiniciar = document.getElementById('btn-reiniciar');
    //Verificamos se a classe do botão está desabilitado ou habilitado, e mudamos para o outro estado
    if (reiniciar.classList.contains('container__botao-desabilitado')) {
        reiniciar.classList.remove('container__botao-desabilitado');
        reiniciar.classList.add('container__botao');
    } else {
        reiniciar.classList.remove('container__botao');
        reiniciar.classList.add('container__botao-desabilitado');
    }
}
