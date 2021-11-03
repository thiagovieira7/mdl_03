const express = require("express");
const router = express.Router();

let listaMusica = [""];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Baile começou..." });
});

router.get("/listamusica", (req, res) => {
  res.json(listaMusica);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
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
  if (!dance.disco) {
    res.status(400).send({
      message:
        "Musica inválida. Certifique-se de que o body da requisição possui a MUSICA...",
    });
    return;
  }
  listaMusica.push(dance);
  res.status(201).json({ message: "Musica cadastrada com sucesso..." });
});

router.put("/lista/:id", (req, res) => {
  const id = req.params.id;
  const dance = listaMusica[id];
  listaMusica[id] = req.body;
  res.status(200).json({ message: `Musica alterada: ${listaMusica[id]}` });
});

router.delete("/lista/:id", (req, res) => {
  const id = req.params.id;
  delete listaMusica[id];
  console.log(listaMusica[id]);
  res.status(200).json(listaMusica);
});

module.exports = router;
