const express = require("express");

const server = express();

// http://localhost:3000/hello?nome=Leandro&idade=24
// Query params = ?nome=Leandro&idade=24

server.get("/hello", (req, res) => {
  const {nome, idade} = req.query;

  return res.json({
    title: "hello world",
    message: `olá, ${nome}`,
    idade: idade
  });
})

// http://localhost:3000/hello/Leandro
// Route params = /hello/:nome

server.get("/hello/:nome/:idade", (req, res) => {
  const {nome, idade} = req.params;

  return res.json({
    title: "Hello World",
    message: `Olá, ${nome}. Tudo bem?`,
    idade: idade
  })
})

server.listen(3000);

