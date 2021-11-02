/* ***Projeto 01: Projeto com lista de objetos armazenando jogos.
 ***Armazenando tudo em uma lista de objetos;
 ***Faremos um GET, POST PUT E DELETE. */

//LISTA DE JOGOS;

const express = require("express");

const app = express();

const port = 3001;

app.use(express.json());
let listaJogos = [];

app.get("/", (req, res) => {
  res.send("Bem vindo ao API Lista de Jogos...");
});

app.get("/listajogos", (req, res) => {
  res.json(listaJogos);
});

app.post("/listajogos", (req, res) => {
  let jogo = req.body;
  listaJogos.push(jogo);
  res.json({ message: "Cadastro realizado" });
});

app.put("/listaJogos:id", (req, res) => {
  const id = req.params.id;
  let jogo = listaJogos[id];
  console.log(jogo);
  listaJogos[id] = req.body;
  res.json(listaJogos[id]);
});

app.delete("/listaJogos:id", (req, res) => {
  const id = req.params.id;
  delete listaJogos[id];
  console.log(listaJogos[id]);
  res.json(listaJogos);
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
