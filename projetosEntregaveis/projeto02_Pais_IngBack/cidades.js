const express = require("express");
const router = express.Router();

let lista = [
  {
    nome: "Paraná",
    regiao: "Sul",
    populacao: 11597484,
    valor_salario_minimo: 1101.95
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Dados por estado" });
});

router.get("/lista", (req, res) => {
  res.json(lista);
});

router.get("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  res.json(lista[id]);
});

router.get("/lista/:disco", (req, res) => {
  res.status(200).json(lista);
});

router.get("/:nome", (req, res) => {
  const nome = req.params.nome;
  const estado = lista.find((item) => item.nome === nome);
  res.status(200).json(estado);
});

router.get("/nome", (req, res) => {
  const nomeEstado = req.params.nome;
  const index = lista.findIndex((item) => item.nomeEstado === nome);
  if (index == -1) {
    res.status(204);
    return;
  }
  res.status(200).json({ index: index });
});

router.post("/lista", (req, res) => {
  const estado = req.body;
  if (!estado.musica) {
    res.status(400).send({
      message:
        "Musica inválida. Certifique-se de que o body da requisição possui a MUSICA...",
    });
    return;
  } else if (!estado.autor) {
    res.status(400).send({
      message:
        "Autor inválido. Certifique-se de que o body da requisição possui a AUTOR...",
    });
    return;
  } else if (!estado.ano) {
    res.status(400).send({
      message:
        "Ano inválido. Certifique-se de que o body da requisição possui a ANO...",
    });
    return;
  } else if (!estado.genero) {
    res.status(400).send({
      message:
        "Genero inválido. Certifique-se de que o body da requisição possui a GENERO...",
    });
    return;
  }

  lista.push(estado);
  res.status(201).json({ message: "Musica cadastrada com sucesso..." });
});

router.put("/lista/:id", (req, res) => {
  const estado = req.body;
  const id = req.params.id - 1;
  lista[id] = estado;
  res.status(200).json({ message: `Musica alterada: ${lista[id]}` });
});

router.delete("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  delete lista[id];
  console.log(lista[id]);
  res.status(200).json(lista);
});

module.exports = router;
