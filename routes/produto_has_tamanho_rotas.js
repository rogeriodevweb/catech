// nesse arquivo, definimos as rotas relacionadas às avaliações de produtos e associamos cada rota a uma função do ProdutoHasTamanhoController. As rotas são:
// POST /produto-has-tamanho: para cadastrar uma nova avaliação.
// GET /produto-has-tamanho: para listar todas as avaliações.
// GET /produto-has-tamanho/:id: para buscar uma avaliação específica pelo ID.
// PUT /produto-has-tamanho/:id: para atualizar as informações de uma avaliação específica pelo ID.
// DELETE /produto-has-tamanho/:id: para excluir uma avaliação específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos produtos com tamanho.
const ProdutoHasTamanhoController = require("../controller/produto_has_tamanho_controller.js");

router.post("/", ProdutoHasTamanhoController.cadastrar);

router.get("/", ProdutoHasTamanhoController.listar);

router.get("/:id", ProdutoHasTamanhoController.buscarPorId);

router.put("/:id", ProdutoHasTamanhoController.atualizar);

router.delete("/:id", ProdutoHasTamanhoController.excluir);

module.exports = router;