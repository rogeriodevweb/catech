// nesse arquivo, definimos as rotas relacionadas às avaliações de produtos e associamos cada rota a uma função do AvaliacaoProdutoController. As rotas são:
// POST /produto-has-carrinho: para cadastrar uma nova avaliação.
// GET /produto-has-carrinho: para listar todas as avaliações.
// GET /produto-has-carrinho/:id: para buscar uma avaliação específica pelo ID.
// PUT /produto-has-carrinho/:id: para atualizar as informações de uma avaliação específica pelo ID.
// DELETE /produto-has-carrinho/:id: para excluir uma avaliação específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às avaliações de produtos.
const ProdutoHasCarrinhoController = require("../controller/produto_has_carrinho_controller.js");

router.post("/", ProdutoHasCarrinhoController.cadastrar);

router.get("/", ProdutoHasCarrinhoController.listar);

router.get("/:id", ProdutoHasCarrinhoController.buscarPorId);

router.put("/:id", ProdutoHasCarrinhoController.atualizar);

router.delete("/:id", ProdutoHasCarrinhoController.excluir);

module.exports = router;