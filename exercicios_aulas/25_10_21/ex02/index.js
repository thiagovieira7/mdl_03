const express = require("express");

const app = express();

const port = 3001;

app.use(express.json());



let listaOperacao = [
  "SOMA",
  "SUBTRAIR",
  "MULTIPLICAR",
  "DIVIDIR",
  "+",
  "-",
  "*",
  "/",
];

function SOMA(a, b) {
  a + b;
}

function SUBTRAIR(a, b) {
  a - b;
}

function MULTIPLICAR(a, b) {
  a * b;
}
function DIVIDIR(a, b) {
  a / b;
}

let novoCalculo = 0;



module.exports = {
  listaOperacao,

};
