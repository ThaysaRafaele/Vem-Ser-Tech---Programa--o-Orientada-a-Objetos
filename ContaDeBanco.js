class ContaDeBanco {

  // Construtor 
  constructor(nomeCliente, saldoInicial) {
    this._nomeCliente = nomeCliente;
    this._saldo = saldoInicial;
  }

  get _podePedirEmprestimo() {
    return this._saldo > 2000;
  }

  get _status() {
    return `O cliente ${this._nomeCliente} possui ${this._saldo} reais de saldo no banco`;
  }

  exibirStatus() {
    return this._status;
  }
}

const minhaConta = new ContaDeBanco("Thaysa", 2500);

console.log(minhaConta.exibirStatus());
console.log(minhaConta._nomeCliente);

console.log(`Pode pedir empréstimo? ${minhaConta._podePedirEmprestimo}`);
