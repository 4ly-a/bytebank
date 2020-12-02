export default class Conta {
  constructor(saldo, cliente, agencia) {
    this._saldo = saldo;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  teste() {
    console.log("teste na minha conta ");
  }

  // acessor do tipo set
  // permitem acesso a propriedades privadas

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    let taxa = 1.5;
    return this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    const valorSacado = valor * taxa;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
