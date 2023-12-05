class ContaDeBanco {
    #nomeCliente;
    #saldo;
  
    constructor(nomeCliente, saldoInicial) {
      this.#nomeCliente = nomeCliente;
      this.#saldo = saldoInicial;
    }
  
    #PedirEmprestimo() {
      return this.#saldo > 2000;
    }
  
    #status() {
        console.log(`Pode pedir empréstimo? ${this.#PedirEmprestimo()}`);

        return `O cliente ${this.#nomeCliente} possui ${this.#saldo} reais de saldo no banco`;
    }
  
    exibirStatus() {
      return this.#status();
    }
  }
  
  const minhaConta = new ContaDeBanco("João", 1500);
  
  console.log(minhaConta.exibirStatus());
  