const prompt = require('prompt-sync')();
class Player {
  constructor(nome) {
    this.nome = nome;
    this.pontuacao = 0;
  }

  fazerJogada() {
    const letra = prompt("Digite uma letra:").toLowerCase();
    return letra;
  }
}

class Match {
  constructor() {
    this.palavraSecreta = this.obterPalavraSecreta();
    this.letrasAdivinhadas = [];
    this.maxTentativas = 6;
    this.tentativasRestantes = this.maxTentativas;
  }

  iniciarPartida() {
    console.log("Nova partida iniciada. Tente adivinhar a palavra!");
    console.log("Dica: Países do mundo");
    this.exibirPalavraAdivinhada();
  }

  obterPalavraSecreta() {
    const palavras = ["brasil", "canada", "alemanha", "australia", "japao"];
    return palavras[Math.floor(Math.random() * palavras.length)];
  }

  processarJogada(letra) {
    this.letrasAdivinhadas.push(letra);
    if (!this.palavraSecreta.includes(letra)) {
      this.tentativasRestantes--;
    }
    this.exibirPalavraAdivinhada();
    this.exibirTentativasRestantes();
  }

  exibirPalavraAdivinhada() {
    const palavraAdivinhada = this.palavraSecreta
      .split("")
      .map((letra) => (this.letrasAdivinhadas.includes(letra) ? letra : "_"))
      .join(" ");
    console.log("Palavra: " + palavraAdivinhada);
  }

  exibirTentativasRestantes() {
    console.log("Tentativas restantes: " + this.tentativasRestantes);
  }

  verificarVitoria() {
    return !this.exibirPalavraAdivinhada().includes("_");
  }

  verificarDerrota() {
    return this.tentativasRestantes <= 0;
  }
}
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

  encerrarJogo() {
    console.log("Jogo encerrado. Pontuação final: " + this.player.pontuacao);
  }

}

const gameController = new GameController();
gameController.iniciarJogo();