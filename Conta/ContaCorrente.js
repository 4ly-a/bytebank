import Conta from "./Conta.js";

export default class ContaCorrente extends Conta {
  static numeroContas = 0; // -> static vale para todas as contas

  constructor(cliente, agencia) {
    super(0, cliente, agencia); // chama o elemento pai, pq estamos no construtor -> contaCorrente/
    ContaCorrente.numeroContas += 1;
  }

  sacar(valor) {
    let taxa = 1.1;
    return super._sacar(valor, taxa);
  }
}
