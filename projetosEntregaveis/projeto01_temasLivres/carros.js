const express = require("express");
const router = express.Router();

let listaCarros = [
  {
    marca: "mclaren",
    modelo: "P1",
    ano: 2021,
    potencia: 737,
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Bem vindo a Garagem" });
});

router.get("/listacarros", (req, res) => {
  res.json(listaCarros);
});

router.get("/listacarros/:id", (req, res) => {
  const id = req.params.id - 1;
  res.json(listaCarros[id]);
});

router.get("/listacarros/:marca", (req, res) => {
  res.status(200).json(listaCarros);
});

router.get("/:carros", (req, res) => {
  const carro = req.params.carro;
  const carroUnit = listaCarros.find((item) => item.carro === carro);
  res.status(200).json(carroUnit);
});

router.get("/marca", (req, res) => {
  const carro = req.params.carro;
  const index = listaCarros.findIndex((item) => item.carro === carro);
  if (index == -1) {
    res.status(204);
    return;
  }
  res.status(200).json({ index: index });
});

router.post("/listacarros", (req, res) => {
  const carroUnit = req.body;
  if (!carroUnit.marca) {
    res.status(400).send({
      message:
        "Marca inválida. Certifique-se de que o body da requisição possui a MARCA...",
    });
    return;
  } else if (!carroUnit.modelo) {
    res.status(400).send({
      message:
        "Modelo inválida. Certifique-se de que o body da requisição possui a MODELO...",
    });
    return;
  } else if (!carroUnit.ano) {
    res.status(400).send({
      message:
        "Ano inválida. Certifique-se de que o body da requisição possui a ANO...",
    });
    return;
  } else if (!carroUnit.potencia) {
    res.status(400).send({
      message:
        "Potencia inválida. Certifique-se de que o body da requisição possui a POTENCIA...",
    });
    return;
  }

  listaCarros.push(carroUnit);
  res.status(201).json({ message: "Carro cadastrada com sucesso..." });
});

router.put("/listacarros/:id", (req, res) => {
  const carro = req.body;
  const id = req.params.id - 1;
  listaCarros[id] = carro;
  res.status(200).json({ message: `Carro alterada: ${listaCarros[id]}` });
});

router.delete("/listacarros/:id", (req, res) => {
  const id = req.params.id - 1;
  delete listaCarros[id];
  console.log(listaCarros[id]);
  res.status(200).json(listaCarros);
});

module.exports = router;
