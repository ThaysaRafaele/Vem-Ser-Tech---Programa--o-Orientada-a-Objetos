class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerSom() {
      console.log('Som do animal');
    }
  
    dormir() {
      console.log(`${this.nome} está dormindo.`);
    }
  }
  
  class Mamifero extends Animal {
    fazerSom() {
      console.log(`${this.nome} faz um som de mamífero.`);
    }
  
    amamentar() {
      console.log(`${this.nome} está amamentando.`);
    }
  }
  
  const gato = new Mamifero('Vaca');
  gato.fazerSom(); // Saída: Vaca faz um som de mamífero.
  gato.dormir();   // Saída: Vaca está dormindo.
  gato.amamentar(); // Saída: Vaca está amamentando.
  