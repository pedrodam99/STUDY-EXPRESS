const express = require("express");
const path = require("path");

const app = express();

const port = 5000;
const basePath = path.join(__dirname, "templates");

app.use(express.static("public"));

const produtosRouters = require("./produtos");
app.use("/produtos", produtosRouters);

app.use((req, res) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
