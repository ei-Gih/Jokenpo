function jogar(escolhaJogador) {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaIA = escolhas[Math.floor(Math.random() * 3)];

    // Esconde a imagem padrão e exibe as escolhas do jogador e do computador
    document.getElementById('default-choice').style.display = 'none';
    document.getElementById('computer-choice').style.display = 'block';
    document.getElementById('player-choice').style.display = 'block';

    // Atualiza as imagens para mostrar as escolhas do jogador e do computador
    const imagemComputer = document.getElementById('imagem-computer');
    const imagemJogador = document.getElementById('imagem-jogador');

    imagemComputer.src = `img/${escolhaIA}.png`; // Mostra a escolha da IA usando o caminho correto da pasta
    imagemComputer.alt = escolhaIA;

    imagemJogador.src = `img/${escolhaJogador}.png`; // Mostra a escolha do jogador usando o caminho correto da pasta
    imagemJogador.alt = escolhaJogador;

    let resultado = '';

    if (escolhaJogador === escolhaIA) {
        resultado = 'Empate!';
    } else if (
        (escolhaJogador === 'pedra' && escolhaIA === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaIA === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaIA === 'papel')
    ) {
        resultado = 'Você ganhou!';
    } else {
        resultado = 'Você perdeu!';
    }

    document.getElementById('resultado').innerHTML = `${escolhaIA} venceu!`;
}
