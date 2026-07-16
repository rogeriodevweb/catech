// nesse arquivo, definimos as rotas relacionadas às avaliações de produtos e associamos cada rota a uma função do AvaliacaoProdutoController. As rotas são:
// POST /avaliacoes: para cadastrar uma nova avaliação.
// GET /avaliacoes: para listar todas as avaliações.
// GET /avaliacoes/:id: para buscar uma avaliação específica pelo ID.
// PUT /avaliacoes/:id: para atualizar as informações de uma avaliação específica pelo ID.
// DELETE /avaliacoes/:id: para excluir uma avaliação específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às avaliações de produtos.
const Avaliacaoprodutocontroller = require("../controller/avaliacao_produto_controller.js");

router.post("/", Avaliacaoprodutocontroller.cadastrar);

router.get("/", AvaliacaoProdutoController.listar);

router.get("/:id", AvaliacaoProdutoController.buscarPorId);

router.put("/:id", AvaliacaoProdutoController.atualizar);

router.delete("/:id", AvaliacaoProdutoController.excluir);

module.exports = router;