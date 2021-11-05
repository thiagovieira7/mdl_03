//construir com temas de  cerveja / time / livre...
const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Escolha entre /carros, /cerveja, /musica." });
});

const cervejaRouter = require("./cerveja");
app.use("/cerveja", cervejaRouter);

const timeRouter = require("./carros");
app.use("/carros", timeRouter);

const musicaRouter = require("./musica");
app.use("/musica", musicaRouter);

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`);
});
