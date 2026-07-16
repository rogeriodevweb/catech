// nesse arquivo, definimos as rotas relacionadas às avaliações de produtos e associamos cada rota a uma função do ProdutoHasPromocaoController. As rotas são:
// POST /produto-has-promocao: para cadastrar uma nova avaliação.
// GET /produto-has-promocao: para listar todas as avaliações.
// GET /produto-has-promocao/:id: para buscar uma avaliação específica pelo ID.
// PUT /produto-has-promocao/:id: para atualizar as informações de uma avaliação específica pelo ID.
// DELETE /produto-has-promocao/:id: para excluir uma avaliação específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos produtos com promoção.
const ProdutoHasPromocaoController = require("../controller/produto_has_promocao_controller.js");

router.post("/", ProdutoHasPromocaoController.cadastrar);

router.get("/", ProdutoHasPromocaoController.listar);

router.get("/:id", ProdutoHasPromocaoController.buscarPorId);

router.put("/:id", ProdutoHasPromocaoController.atualizar);

router.delete("/:id", ProdutoHasPromocaoController.excluir);

module.exports = router;