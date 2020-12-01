import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";

//Ricardo
const clienteR = new Cliente("Ricardo", 51478195843);
const contaR = new ContaCorrente(0, clienteR, 1001);
const poupancaR = new ContaPoupanca(0, clienteR, 1001);

//operações
contaR.depositar(500);
contaR.sacar(100);

poupancaR.depositar(500);
poupancaR.sacar(100);

//log
console.log(contaR);
