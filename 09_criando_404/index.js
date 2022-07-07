const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const basePath = path.join(__dirname, "templates");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use((req, res) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log("Esta rodando.....");
});
