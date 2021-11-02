const prompt = require("prompt-sync");

console.log(
  "Olá, aconteceu um crime nessa cidade, a Calar foi assassinada brutalmente "
);

const pergunta1 = prompt("Telefonou para a vítima? [S/N]");
const pergunta2 = prompt("Esteve no local do crime? [S/N]");
const pergunta3 = prompt("Mora perto da vítima? [S/N]");
const pergunta4 = prompt("Devia para a vítima? [S/N]");
const pergunta5 = prompt("Já trabalhou com a vítima? [S/N]");

let cont = 0;

if (pergunta1 === "S" || pergunta1 === "s") {
  cont++;
} else if (pergunta2 === "S" || pergunta2 === "s") {
  cont++;
} else if (pergunta3 === "S" || pergunta3 === "s") {
  cont++;
} else if (pergunta4 === "S" || pergunta4 === "s") {
  cont++;
} else if (pergunta5 === "S" || pergunta5 === "s") {
  cont++;
}

console.log(cont);

if (cont == 2) {
  cpmspçe.log("Você é suspeito do crime!");
} else if (cont === 3 || cont === 4) {
  console.log("Você é cumplice do crime!");
} else if (cont === 5) {
  console.log("Você é o assassino!");
} else {
  console.log("Você é inoscente!");
}
