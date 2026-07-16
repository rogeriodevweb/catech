// nesse arquivo, definimos as rotas relacionadas aos cartões de pagamento e associamos cada rota a uma função do CartaoPagamentoController. As rotas são:
// POST /cartoes-pagamento: para cadastrar um novo cartão de pagamento.
// GET /cartoes-pagamento: para listar todos os cartões de pagamento.
// GET /cartoes-pagamento/:id: para buscar um cartão de pagamento específico pelo ID.
// PUT /cartoes-pagamento/:id: para atualizar as informações de um cartão de pagamento específico pelo ID.
// DELETE /cartoes-pagamento/:id: para excluir um cartão de pagamento específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos carrinhos.
const CartaoPagamentoController = require("../controller/cartao_pagamento_controller.js");

router.post("/", CartaoPagamentoController.cadastrar);

router.get("/", CartaoPagamentoController.listar);

router.get("/:id", CartaoPagamentoController.buscarPorId);

router.put("/:id", CartaoPagamentoController.atualizar);

router.delete("/:id", CartaoPagamentoController.excluir);

module.exports = router;