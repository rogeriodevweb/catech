// nesse arquivo, definimos as rotas relacionadas aos cupons e associamos cada rota a uma função do CupomHasCategoriasController. As rotas são:
// POST /cupom-has-categorias: para cadastrar um novo relacionamento entre cupom e categoria.
// GET /cupom-has-categorias: para listar todos os relacionamentos entre cupons e categorias.
// GET /cupom-has-categorias/:id: para buscar um relacionamento específico pelo ID.
// PUT /cupom-has-categorias/:id: para atualizar as informações de um relacionamento específico pelo ID.
// DELETE /cupom-has-categorias/:id: para excluir um relacionamento específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons e categorias.
const CupomHasCategoriasController = require("../controller/cupom_has_categoria_controller.js");

router.post("/", CupomHasCategoriasController.cadastrar);

router.get("/", CupomHasCategoriasController.listar);

router.get("/:id", CupomHasCategoriasController.buscarPorId);

router.put("/:id", CupomHasCategoriasController.atualizar);

router.delete("/:id", CupomHasCategoriasController.excluir);

module.exports = router;