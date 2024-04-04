function comprar (){
    //Precisamos recuperar o tipo do ingresso, assim como a quantidade digitada
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt ( document.getElementById('qtd').value);
    /*Após recuperar a quantidade de ingressos digitada, precisamos verificar se a quantidade escolhida
    é válida nas regras de comprar, ou seja, mínimo 1 ingresso e no máximo 10, assim como
    outros pequenos tratamentos*/
    if (quantidadeIngresso < 1) {
        alert ('Número de ingressos selecionados é menor que 1! Digite outro valor');
        document.getElementById('qtd').value = 0;
        quantidadeIngresso = 0;
    } else {
        if (quantidadeIngresso > 10) {
            alert ('Número de ingressos selecionados é maior que 10! Digite outro valor');
            document.getElementById('qtd').value = 0;
            quantidadeIngresso = 0;
        } else {
            if (quantidadeIngresso >= 1 && quantidadeIngresso <= 10) {
            } else {
                alert ('Valor inválido! Digite outro valor');
                document.getElementById('qtd').value = 0;
            }
        }
    }

    //Aqui recupera-se a quantidade de ingressos disponíveis para cada tipo
    let quantidadePista = document.getElementById('qtd-pista');
    let quantidadeSuperior = document.getElementById('qtd-superior');
    let quantidadeInferior = document.getElementById('qtd-inferior');
    //Aqui verifica-se se a quantidade de ingressos escolhida, há a disponibilidade daquele tipo.
    if (tipoIngresso == 'pista'){
        if (quantidadeIngresso > parseInt(quantidadePista.textContent)) {
            alert ('Quantidade de ingressos selecionados é maior que a quantidade disponível!');
        } else {
            if (quantidadeIngresso != 0) {
                quantidadePista.textContent = `${quantidadePista.textContent-quantidadeIngresso}`;
                alert ('Ingressos comprados com sucesso!');
                document.getElementById('qtd').value = 0;
            }
        }
    } else {
        if (tipoIngresso == 'inferior'){
            if (quantidadeIngresso > parseInt(quantidadeInferior.textContent)) {
                alert ('Quantidade de ingressos selecionados é maior que a quantidade disponível!');
            } else {
                if (quantidadeIngresso != 0) {
                    quantidadeInferior.textContent = `${quantidadeInferior.textContent-quantidadeIngresso}`;
                    alert ('Ingressos comprados com sucesso!');
                    document.getElementById('qtd').value = 0;
                }
            }
        } if (tipoIngresso == 'superior'){
            if (quantidadeIngresso > parseInt(quantidadeSuperior.textContent)) {
                alert ('Quantidade de ingressos selecionados é maior que a quantidade disponível!');
            } else {
                if (quantidadeIngresso != 0) {
                    quantidadeSuperior.textContent = `${quantidadeSuperior.textContent-quantidadeIngresso}`;
                    alert ('Ingressos comprados com sucesso!');
                    document.getElementById('qtd').value = 0;
                }
            }
        }
    }
}