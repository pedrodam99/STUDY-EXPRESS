const express = require("express");
const path = require("path");
const router = express.Router();

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuario é ${name} e tem ${age} anos`);
  res.sendFile(`${basePath}/userform.html`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  //aqui podiamos fazer uma consulta no banco, e resgastar o usuário.
  console.log(`Estamos buscando o usuário ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
