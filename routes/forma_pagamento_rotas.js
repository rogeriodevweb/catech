// nesse arquivo, definimos as rotas relacionadas às formas de pagamento e associamos cada rota a uma função do FormasPagamentoController. As rotas são:
// POST /formas-pagamento: para cadastrar uma nova forma de pagamento.
// GET /formas-pagamento: para listar todas as formas de pagamento.
// GET /formas-pagamento/:id: para buscar uma forma de pagamento específica pelo ID.
// PUT /formas-pagamento/:id: para atualizar as informações de uma forma de pagamento específica pelo ID.
// DELETE /formas-pagamento/:id: para excluir uma forma de pagamento específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às formas de pagamento.
const Formaspagamentocontroller = require("../controller/forma_pagamento_controller.js");

router.post("/", Formaspagamentocontroller.cadastrar);

router.get("/", Formaspagamentocontroller.listar);

router.get("/:id", Formaspagamentocontroller.buscarPorId);

router.put("/:id", Formaspagamentocontroller.atualizar);

router.delete("/:id", Formaspagamentocontroller.excluir);

module.exports = router;