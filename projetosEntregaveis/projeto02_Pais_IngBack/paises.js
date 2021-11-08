const express = require("express");
const router = express.Router();

let lista = [
  {
    nome: "Brasil",
    populacao: 213300000,
    linguaMae: "Português Brasileiro",
    pib: 7400000,
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Dados por país" });
});

router.get("/lista", (req, res) => {
  res.json(lista);
});

router.get("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  res.json(lista[id]);
});

router.get("/lista/:nome", (req, res) => {
  res.status(200).json(lista);
});

router.get("/:nome", (req, res) => {
  const nome = req.params.nome;
  const pais = lista.find((item) => item.nome === nome);
  res.status(200).json(pais);
});

router.get("/nome", (req, res) => {
  const nome = req.params.nome;
  const index = lista.findIndex((item) => item.nome === nome);
  if (index == -1) {
    res.status(204);
    return;
  }
  res.status(200).json({ index: index });
});

router.post("/lista", (req, res) => {
  const pais = req.body;
  if (!pais.nome) {
    res.status(400).send({
      message:
        "NOME DO PAÍS inválido. Certifique-se que o body da requisição possui o NOME correto do (pais).",
    });
    return;
  } else if (!pais.populacao) {
    res.status(400).send({
      message:
        "POPULAÇÃO inválida. Certifique-se de que o body da requisição possui o numero total de habitantes no campo (populacao).",
    });
    return;
  } else if (!pais.linguaMae) {
    res.status(400).send({
      message:
        "IDIOMA NATIVO inválida. Certifique-se de que o body da requisição possui a informação da lingua nativa corretamente no campo (linguaMae).",
    });
    return;
  } else if (!pais.pib) {
    res.status(400).send({
      message:
        "PIB inválido. Certifique-se de que o body da requisição possui a informação do produto interno bruto no campo (pib).",
    });
    return;
  }

  lista.push(pais);
  res.status(201).json({ message: "País cadastrado com sucesso..." });
});

router.put("/lista/:id", (req, res) => {
  const pais = req.body;
  const id = req.params.id - 1;
  lista[id] = pais;
  res
    .status(200)
    .json({ message: `Dados do país alterados com sucesso: ${lista[id]}` });
});

router.delete("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  delete lista[id];
  console.log(lista[id]);
  res.status(200).json(lista);
});

module.exports = router;
