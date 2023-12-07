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

  class Ave extends Animal {
    fazerSom() {
      console.log(`${this.nome} faz um som de ave.`);
    }
  
    voar() {
      console.log(`${this.nome} está voando.`);
    }

    botarOvos() {
        console.log(`${this.nome} está botando ovos.`);
    }
  }

  class Ornitorrinco extends Mamifero {
        // botarOvos() {
        //     console.log(`${this.nome} está botando ovos.`);
        //   }
  }

  class Pinguim extends Ave {
    nadar() {
      console.log(`${this.nome} está nadando.`);
    }
  }
  
const cachoro = new Mamifero('Lola');
cachoro.fazerSom(); 
cachoro.dormir();  
cachoro.amamentar();

const ornitorrinco = new Ornitorrinco('Juju');
ornitorrinco.fazerSom(); 
ornitorrinco.amamentar(); //Ornitorrinco herda de Mamifero
// ornitorrinco.botarOvos(); //Ornitorrinco herda de Ave
(new Ave('Juju')).botarOvos(); // Ornitorrinco herda de Ave
//tive que criar uma instância da classe ave para acessar o método botarOvos

const pinguim = new Pinguim('Happy feet');
pinguim.fazerSom(); 
pinguim.voar();      //Pinguim herda de Ave
pinguim.nadar();     

//a classe Mamifero herda a classe Animal
//Ornitorrinco herda tanto de Mamifero quanto de Ave (botar ovos)
