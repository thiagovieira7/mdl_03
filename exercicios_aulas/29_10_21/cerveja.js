const express = require("express");
const router = express.Router();

let listaCervejas = ["ok"];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Cerveja trincando Ok" });
});

router.get("/lista", (req, res) => {
  res.json(listaCervejas);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(listaCervejas[id]);
});

router.get("/lista:marca", (req, res) => {
  res.status(200).json(listaCervejas);
});

router.get("/:marca", (req, res) => {
  const marca = req.params.marca;
  const cervejinha = listaCervejas.find((item) => item.marca === marca);
  res.status(200).json(cervejinha);
});

router.get("/marca", (req, res) => {
  const marca = req.params.marca;
  const index = listaCervejas.findIndex((item) => item.marca === marca);
  if (index == -1) {
    res.status(204);
    return;
  }
  res.status(200).json({ index: index });
});

router.post("/lista", (req, res) => {
  const cervejinha = req.body;
  listaCervejas.push(cervejinha);
  res.status(201).json({ message: "Cerveja cadastrada com sucesso..." });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const cervejinha = listaCervejas[id];
  listaCervejas[id] = req.body;
  res.status(200).json({ message: `Cerveja alterada: ${listaCervejas[id]}` });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  delete listaCervejas[id];
  console.log(listaCervejas[id]);
  res.status(200).json(listaCervejas);
});

module.exports = router;
