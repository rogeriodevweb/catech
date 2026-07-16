// nesse arquivo, definimos as rotas relacionadas às marcas e associamos cada rota a uma função do MarcaController. As rotas são:
// POST /marcas: para cadastrar uma nova marca.
// GET /marcas: para listar todas as marcas.
// GET /marcas/:id: para buscar uma marca específica pelo ID.
// PUT /marcas/:id: para atualizar as informações de uma marca específica pelo ID.
// DELETE /marcas/:id: para excluir uma marca específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às marcas.
const Marcacontroller = require("../controller/marca_controller.js");

router.post("/", Marcacontroller.cadastrar);

router.get("/", MarcaController.listar);

router.get("/:id", MarcaController.buscarPorId);

router.put("/:id", MarcaController.atualizar);

router.delete("/:id", MarcaController.excluir);

module.exports = router;