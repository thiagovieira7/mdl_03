let filmesGeral = [];

app.get("/filmes", (req, res) => {
  const novoFilme = req.body;
  filmesGeral.push(novoFilme);
  res.json({});
});
