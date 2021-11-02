const express = require("express");

const app = express();

const port = 3001;

app.use(express.json());

const calculadora = require("./index");

let resultado = 0;
resultado = [];

while (novoCalculo === "SIM") {
  while (operacao !== listaOperacao) {
    let operacao = prompt("Informe a operação: ");
    operacao = operacao.toUpperCase;
    let a = prompt("Informe o primeiro valor: ");
    let b = prompt("informe o segundo valor");
    if (operacao == "SOMA" || operacao == "+") {
      SOMA;
      resultado.push(resultado);
    } else if (operacao == "SUBTRAIR" || operacao == "-") {
      SUBTRAIR;
      resultado.push(resultado);
    } else if (operacao == "MULTIPLICAR" || operacao == "*") {
      MULTIPLICAR;
      resultado.push(resultado);
    } else if (operacao == "DIVIDIR" || operacao == "/") {
      DIVIDIR;
      resultado.push(resultado);
    } else {
      console.log("OPERAÇÃO INVÁLIDA...");
    }
  }
  novoCalculo = prompt("Deseja realizar uma nova operação? ");
  novoCalculo = novoCalculo.toUpperCase();
}



console.log("O resultado do calculo é:", calculadora.resultado);
