import Cliente from "./Cliente.js";
import ContaCorrente from "./Conta/ContaCorrente.js";
import ContaPoupanca from "./Conta/ContaPoupanca.js";
import Gerente from "./Funcionario/Gerente.js";
import Diretor from "./Funcionario/Diretor.js";
import SistemaAutenticacao from "./SisAutenticacao.js";

//Diretor
const diretor = new Diretor("Rodrigo", 10000, 12354687910);
diretor.cadastrarSenha("12345");

//gerente
const gerente = new Gerente("Arnaldo", 5000, 50012345678);

//Cliente
const clienteR = new Cliente("Ricardo", 51478195843);
const contaR = new ContaCorrente(0, clienteR, 1001);
const poupancaR = new ContaPoupanca(0, clienteR, 1001);

//sistema
const estaLogado = SistemaAutenticacao.login(diretor, "12345");

//log
console.log(estaLogado);
