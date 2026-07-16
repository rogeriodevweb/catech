// nesse arquivo, definimos as rotas relacionadas aos endereços e associamos cada rota a uma função do EnderecoController. As rotas são:
// POST /enderecos: para cadastrar um novo endereço.
// GET /enderecos: para listar todos os endereços.
// GET /enderecos/:id: para buscar um endereço específico pelo ID.
// PUT /enderecos/:id: para atualizar as informações de um endereço específico pelo ID.
// DELETE /enderecos/:id: para excluir um endereço específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos endereços.
const Enderecocontroller = require("../controller/endereco_controller.js");

router.post("/", Enderecocontroller.cadastrar);

router.get("/", Enderecocontroller.listar);

router.get("/:id", Enderecocontroller.buscarPorId);

router.put("/:id", Enderecocontroller.atualizar);

router.delete("/:id", Enderecocontroller.excluir);

module.exports = router;