import Cliente from "./Cliente.js";
import ContaCorrente from "./Conta/ContaCorrente.js";
import ContaPoupanca from "./Conta/ContaPoupanca.js"

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
