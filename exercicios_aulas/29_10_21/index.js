//construir com temas de  cerveja / time / livre...
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Que comece a bebedeira..." });
});

const cervejaRouter = require("cerveja");
app.use("/cerveja", cervejaRouter);

// const timeRouter = require("./time");
// app.use("/time", timeRouter);

// const musicasRouter = require("./musicas");
// app.use("/musicas", musicasRouter);

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`);
});
