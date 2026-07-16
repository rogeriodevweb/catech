// nesse arquivo, definimos as rotas relacionadas às avaliações de produtos e associamos cada rota a uma função do AvaliacaoProdutoController. As rotas são:
// POST /pedidos-has-produto: para cadastrar uma nova avaliação.
// GET /pedidos-has-produto: para listar todas as avaliações.
// GET /pedidos-has-produto/:id: para buscar uma avaliação específica pelo ID.
// PUT /pedidos-has-produto/:id: para atualizar as informações de uma avaliação específica pelo ID.
// DELETE /pedidos-has-produtos/:id: para excluir uma avaliação específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às avaliações de produtos.
const PedidosHasprodutocontroller = require("../controller/pedidos_has_produto_controller.js");

router.post("/", PedidosHasprodutocontroller.cadastrar);

router.get("/", PedidosHasProdutoController.listar);

router.get("/:id", PedidosHasProdutoController.buscarPorId);

router.put("/:id", PedidosHasProdutoController.atualizar);

router.delete("/:id", PedidosHasProdutoController.excluir);

module.exports = router;