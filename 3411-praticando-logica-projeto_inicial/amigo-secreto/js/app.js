let listaNomes = [];
let listaNomesEscolhidos = [];
let quantidadeNomes = 0;

function adicionar() {
    /*Pegamos o nome digitado pelo usuário, verificamos se está vazio ou se o nome já foi digitado antes,
    e após isso adicionamos o nome a uma lista de nomes, assim como quantificamos a quantidade de nomes
    já adicionados*/
    let nome = document.getElementById('nome-amigo');
    let nomesIncluidos = document.getElementById('lista-amigos');
    if (listaNomes.includes(nome.value) || nome.value == '') {
        alert ('Nome já utilizado ou inválido');
    } else {
        nomesIncluidos.textContent = nomesIncluidos.textContent + `${nome.value}, `;
        listaNomes.push(nome.value);
        nome.value = '';
        quantidadeNomes++;
    }
}

function sortear() {
    /*Verificamos se temos no mínimo dois nomes para o sorteio, apõs isso é feito um embaralhamento dos nomes
    com uma lista auxiliar, e a partir da lista auxiliar, temos índices equivalentes para cada nome da 
    lista origial*/
    if (quantidadeNomes >= 2) {
        let listaSorteio = document.getElementById('lista-sorteio');
        for (let index = 0; index < listaNomes.length; index++) {
            let numeroSorteado = parseInt( Math.random() * (listaNomes.length-0) + 0);
            while (numeroSorteado == index || listaNomesEscolhidos.includes(numeroSorteado)) {
                numeroSorteado = parseInt( Math.random() * (listaNomes.length-0) + 0);
            }
            listaNomesEscolhidos.push(numeroSorteado);
        }
        for (let index = 0; index < listaNomes.length; index++) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + `<p>${listaNomes[index]} -> ${listaNomes[listaNomesEscolhidos[index]]} </p>`;
        }
    }
    alert (listaNomes.length);
}

function reiniciar() {
    /*Apenas reiniciamos todas as listas, campos e valores do game*/
    listaNomes = [];
    listaNomesEscolhidos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    quantidadeNomes = 0;
}