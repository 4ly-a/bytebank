import Cliente from "./Cliente.js";
import ContaCorrente from "./Conta/ContaCorrente.js";
import ContaPoupanca from "./Conta/ContaPoupanca.js";
import Gerente from "./Funcionario/Gerente.js";
import Diretor from "./Funcionario/Diretor.js";
import SistemaAutenticacao from "./SisAutenticacao.js";

//Diretor
const diretor = new Diretor("Rodrigo", 10000, 12354687910);

//gerente
const gerente = new Gerente("Arnaldo", 5000, 50012345678);

//Cliente
const clienteR = new Cliente("Ricardo", 51478195843, "333");

//sistema

diretor.cadastrarSenha("111");
gerente.cadastrarSenha("222");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "111");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "222");
const clienteEstaLogado = SistemaAutenticacao.login(clienteR, "333");

//log
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
