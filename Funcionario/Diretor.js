import Funcionarios from "./Funcionarios.js";

export default class Diretor extends Funcionarios {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this._bonificacao = 2;
  }
}