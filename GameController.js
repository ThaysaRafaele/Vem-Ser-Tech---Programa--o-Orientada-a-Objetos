class GameController {
  constructor() {
    this.player = new Player("Jogador");
    this.match = new Match();
  }

  iniciarJogo() {
    console.log("Bem-vindo ao Jogo da Forca!");
    this.match.iniciarPartida();
    this.realizarJogada();
  }

  iniciarPartida() {
    console.log("Nova partida iniciada. Tente adivinhar a palavra!");
    console.log("Dica: Países do mundo");
    this.exibirPalavraAdivinhada();
  }

  realizarJogada() {
    const letra = this.player.fazerJogada();
    this.match.processarJogada(letra);

    if (this.match.verificarVitoria()) {
      console.log("Parabéns! Você venceu!");
      this.player.pontuacao += 10;
      this.encerrarJogo();
    } else if (this.match.verificarDerrota()) {
      console.log("Você perdeu. A palavra era: " + this.match.palavraSecreta);
      this.encerrarJogo();
    } else {
      this.realizarJogada();
    }
  }

}