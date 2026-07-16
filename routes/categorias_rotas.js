// nesse arquivo, definimos as rotas relacionadas aos cartões de pagamento e associamos cada rota a uma função do CategoriasController. As rotas são:
// POST /categorias: para cadastrar uma nova categoria.
// GET /categorias: para listar todas as categorias.
// GET /categorias/:id: para buscar uma categoria específica pelo ID.
// PUT /categorias/:id: para atualizar as informações de uma categoria específica pelo ID.
// DELETE /categorias/:id: para excluir uma categoria específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas as categorias e promocoes.
const CategoriasController = require("../controller/categorias_controller.js");

router.post("/", CategoriasController.cadastrar);

router.get("/", CategoriasController.listar);

router.get("/:id", CategoriasController.buscarPorId);

router.put("/:id", CategoriasController.atualizar);

router.delete("/:id", CategoriasController.excluir);

module.exports = router;