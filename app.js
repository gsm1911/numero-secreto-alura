let dificuldade = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(`${numeroSecreto}`);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        botaoChutar = document.getElementById('chutar');
        botaoChutar.disabled = true;
        botaoChutar = document.getElementById('reiniciar');
        botaoChutar.disabled = false;
    }
    else{
        exibirTextoNaTela('h1', 'Errou...');
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'Chutou baixo...');
        }else{
            exibirTextoNaTela('p', 'Chutou alto...');
        }
        campo = document.querySelector('input');
        campo.value = ' ';
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * dificuldade + 1);
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${dificuldade}`);
    botaoChutar = document.getElementById('chutar');
    botaoChutar.disabled = false;
    tentativas = 0;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número de 1 a ${dificuldade}`);