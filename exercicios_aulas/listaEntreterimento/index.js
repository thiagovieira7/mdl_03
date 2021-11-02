
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

let listaGeral = ["FILMES", "MUSICAS", "JOGOS"];

//get para ir ao home

app.get("/", (req, res) => {
    res.send(`Entreterimento: , ${listaGeral}`);
})

app.get("/filmes", (req, res) => {
    res.send(filmes.filter(Boolean));
});

app.listen(port, () => {
  console.info(`APP Rodando em: http://localhost:${port}`);
});
