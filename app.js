function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let limite_Inferior = parseInt(document.getElementById('de').value);
    let limite_Superior = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero_Gerado;
    let campo = document.getElementById('resultado');

    if (quantidade <= (limite_Superior - limite_Inferior)){
        for (let i = 0; i < quantidade; i++){
            numero_Gerado = gerarNumeroAleatorio(limite_Inferior, limite_Superior);
            if (sorteados.includes(numero_Gerado)){
                i--
            }
            else{
                sorteados.push(numero_Gerado);
            }
        }
    
        campo.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
        document.getElementById('btn-reiniciar').removeAttribute('disabled');
        document.getElementById('btn-sortear').setAttribute('disabled', true);
    }
    else{
        campo.innerHTML = `<label class="texto__paragrafo">A quantidade de números gerados não pode ser
        maior do que a diferença entre os limites! Tente novamente.</label>`;
        document.getElementById('btn-reiniciar').removeAttribute('disabled');
        document.getElementById('btn-sortear').setAttribute('disabled', true);
    }

}

function gerarNumeroAleatorio(inf, sup){
    return parseInt(Math.random() * (sup - inf + 1) + inf);
}

function limparCampo() {
    let quantidade = document.getElementById('quantidade');
    let limite_Inferior = document.getElementById('de');
    let limite_Superior = document.getElementById('ate');
    quantidade.value = '';
    limite_Inferior.value = '';
    limite_Superior.value = '';
}

function reiniciar(){
    limparCampo();
    document.getElementById('btn-sortear').removeAttribute('disabled');
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    let campo = document.getElementById('resultado');
    campo.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora!</label>`

}
