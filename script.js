const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    socket.on('jogada', (dados) => {
        // Enviar a jogada para o oponente
        socket.broadcast.emit('jogadaOponente', dados);
    });
});



function jogar(escolhaJogador) {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaIA = escolhas[Math.floor(Math.random() * 3)];

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

    document.getElementById('resultado').innerHTML = `Você escolheu: ${escolhaJogador} | IA escolheu: ${escolhaIA} <br> ${resultado}`;
}
