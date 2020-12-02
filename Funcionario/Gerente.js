import Funcionarios from "./Funcionarios.js";

export default class Gerente extends Funcionarios {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this._bonificacao = 1.1;
  }
}
