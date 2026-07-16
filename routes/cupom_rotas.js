// nesse arquivo, definimos as rotas relacionadas aos cupons e associamos cada rota a uma função do CupomController. As rotas são:
// POST /cupons: para cadastrar um novo cupom.
// GET /cupons: para listar todos os cupons.
// GET /cupons/:id: para buscar um cupom específico pelo ID.
// PUT /cupons/:id: para atualizar as informações de um cupom específico pelo ID.
// DELETE /cupons/:id: para excluir um cupom específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons.
const Cupomcontroller = require("../controller/cupom_controller.js");

router.post("/", Cupomcontroller.cadastrar);

router.get("/", Cupomcontroller.listar);

router.get("/:id", Cupomcontroller.buscarPorId);

router.put("/:id", Cupomcontroller.atualizar);

router.delete("/:id", Cupomcontroller.excluir);

module.exports = router;