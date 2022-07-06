const express = require("express");
const path = require("path");

const app = express();

const port = 3000;
const basePath = path.join(__dirname, "templates");

app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  //aqui podiamos fazer uma consulta no banco, e resgastar o usuário.
  console.log(`Estamos buscando o usuário ${id}`);
  res.sendFile(`${basePath}/user.html`);
});

app.get("/users", (req, res) => {
  console.log("Lista todos os usuários...");
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
