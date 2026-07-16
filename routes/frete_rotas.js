// nesse arquivo, definimos as rotas relacionadas aos fretes e associamos cada rota a uma função do FreteController. As rotas são:
// POST /fretes: para cadastrar um novo frete.
// GET /fretes: para listar todos os fretes.
// GET /fretes/:id: para buscar um frete específico pelo ID.
// PUT /fretes/:id: para atualizar as informações de um frete específico pelo ID.
// DELETE /fretes/:id: para excluir um frete específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos fretes.
const fretecontroller = require("../controller/frete_controller.js");

router.post("/", Fretecontroller.cadastrar);

router.get("/", Fretecontroller.listar);

router.get("/:id", Fretecontroller.buscarPorId);

router.put("/:id", Fretecontroller.atualizar);

router.delete("/:id", Fretecontroller.excluir);

module.exports = router;