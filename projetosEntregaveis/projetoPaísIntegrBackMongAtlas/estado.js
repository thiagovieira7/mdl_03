const express = require("express");
const router = express.Router();

let listaCervejas = [
  {
    marca: "orginal",
    fabricante: "brahma",
    origem: "alemã",
    fermentacao: "pilsen",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Cerveja trincando Ok" });
});

router.get("/listacerveja", (req, res) => {
  res.json(listaCervejas);
});

router.get("/listacerveja/:id", (req, res) => {
  const id = req.params.id - 1;
  res.json(listaCervejas[id]);
});

router.get("/listacerveja/:marca", (req, res) => {
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

router.post("/listacerveja", (req, res) => {
  const cervejinha = req.body;
  if (!cervejinha.marca) {
    res.status(400).send({
      message:
        "Marca inválida. Certifique-se de que o body da requisição possui a MARCA...",
    });
    return;
  } else if (!cervejinha.fabricante) {
    res.status(400).send({
      message:
        "Fabricante inválida. Certifique-se de que o body da requisição possui a FABRICANTE...",
    });
    return;
  } else if (!cervejinha.origem) {
    res.status(400).send({
      message:
        "Origem inválida. Certifique-se de que o body da requisição possui a ORIGEM...",
    });
    return;
  } else if (!cervejinha.fermentacao) {
    res.status(400).send({
      message:
        "Fermentação inválida. Certifique-se de que o body da requisição possui a FERMENTACAO...",
    });
    return;
  }

  listaCervejas.push(cervejinha);
  res.status(201).json({ message: "Cerveja cadastrada com sucesso..." });
});

router.put("/listacerveja/:id", (req, res) => {
  const cervejinha = req.body;
  const id = req.params.id - 1;
  listaCervejas[id] = cervejinha;
  res.status(200).json({ message: `Cerveja alterada: ${listaCervejas[id]}` });
});

router.delete("/listacerveja/:id", (req, res) => {
  const id = req.params.id - 1;
  delete listaCervejas[id];
  console.log(listaCervejas[id]);
  res.status(200).json(listaCervejas);
});

module.exports = router;
