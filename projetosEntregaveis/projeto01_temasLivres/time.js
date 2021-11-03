const express = require("express");
const router = express.Router();

let listaTimes = [""];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Time em campo" });
});

router.get("/listatimes", (req, res) => {
  res.json(listaTimes);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(listaTimes[id]);
});

router.get("/lista/:time", (req, res) => {
  res.status(200).json(listaTimes);
});

router.get("/:time", (req, res) => {
  const time = req.params.time;
  const timeIndivi = listaTimes.find((item) => item.time === time);
  res.status(200).json(timeIndivi);
});

router.get("/marca", (req, res) => {
  const time = req.params.time;
  const index = listaTimes.findIndex((item) => item.time === time);
  if (index == -1) {
    res.status(204);
    return;
  }
  res.status(200).json({ index: index });
});

router.post("/lista", (req, res) => {
  const timeIndivi = req.body;
  if (!timeIndivi.time) {
    res.status(400).send({
      message:
        "Time inválida. Certifique-se de que o body da requisição possui a TIME...",
    });
    return;
  }
  listaTimes.push(timeIndivi);
  res.status(201).json({ message: "Time cadastrada com sucesso..." });
});

router.put("/lista/:id", (req, res) => {
  const id = req.params.id;
  const timeIndivi = listaTimes[id];
  listaTimes[id] = req.body;
  res.status(200).json({ message: `Time alterada: ${listaTimes[id]}` });
});

router.delete("/lista/:id", (req, res) => {
  const id = req.params.id;
  delete listaTimes[id];
  console.log(listaTimes[id]);
  res.status(200).json(listaTimes);
});

module.exports = router;
