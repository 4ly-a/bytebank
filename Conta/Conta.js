export default class Conta {
  constructor(saldo, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deve instanciar um objeto do tipo conta diretamente"
      );
    }

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
    throw new Error("O método sacar é abstrato");
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
