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
}