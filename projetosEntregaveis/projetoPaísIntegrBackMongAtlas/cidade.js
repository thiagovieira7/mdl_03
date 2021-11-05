const express = require("express");
const router = express.Router();

let listaMusica = [
  {
    musica: "mulher de fases",
    autor: "raimundos",
    ano: 1996,
    genero: "rock",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Baile começou..." });
});

router.get("/listamusica", (req, res) => {
  res.json(listaMusica);
});

router.get("/listamusica/:id", (req, res) => {
  const id = req.params.id - 1;
  res.json(listaMusica[id]);
});

router.get("/listamusica/:disco", (req, res) => {
  res.status(200).json(listaMusica);
});

router.get("/:disco", (req, res) => {
  const disco = req.params.disco;
  const dance = listaMusica.find((item) => item.disco === disco);
  res.status(200).json(dance);
});

router.get("/disco", (req, res) => {
  const disco = req.params.disco;
  const index = listaMusica.findIndex((item) => item.disco === marca);
  if (index == -1) {
    res.status(204);
    return;
  }
  res.status(200).json({ index: index });
});

router.post("/listamusica", (req, res) => {
  const dance = req.body;
  if (!dance.musica) {
    res.status(400).send({
      message:
        "Musica inválida. Certifique-se de que o body da requisição possui a MUSICA...",
    });
    return;
  } else if (!dance.autor) {
    res.status(400).send({
      message:
        "Autor inválido. Certifique-se de que o body da requisição possui a AUTOR...",
    });
    return;
  } else if (!dance.ano) {
    res.status(400).send({
      message:
        "Ano inválido. Certifique-se de que o body da requisição possui a ANO...",
    });
    return;
  } else if (!dance.genero) {
    res.status(400).send({
      message:
        "Genero inválido. Certifique-se de que o body da requisição possui a GENERO...",
    });
    return;
  }

  listaMusica.push(dance);
  res.status(201).json({ message: "Musica cadastrada com sucesso..." });
});

router.put("/listamusica/:id", (req, res) => {
  const dance = req.body;
  const id = req.params.id - 1;
  listaMusica[id] = dance;
  res.status(200).json({ message: `Musica alterada: ${listaMusica[id]}` });
});

router.delete("/listamusica/:id", (req, res) => {
  const id = req.params.id - 1;
  delete listaMusica[id];
  console.log(listaMusica[id]);
  res.status(200).json(listaMusica);
});

module.exports = router;
