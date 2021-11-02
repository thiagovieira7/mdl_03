const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

let listaPessoas = [];

app.get("/", (req, res) => {
  res.json(listaPessoas);
});

app.get("/", (req, res) => {
  const pessoa = req.body;
  //   console.log(req.body);
  listaPessoas.push(pessoa);
  res.json({});
});

app.listen(port, () => {
  console.info(`app rodando em: http://localhost:${port}`);
});
