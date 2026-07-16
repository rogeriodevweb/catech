// nesse arquivo, definimos as rotas relacionadas aos cartões de pagamento e associamos cada rota a uma função do CategoriasHasPromocaoController. As rotas são:
// POST /categorias-has-promocao: para cadastrar um novo relacionamento entre categoria e promocao.
// GET /categorias-has-promocao: para listar todos os relacionamentos entre categorias e promocoes.
// GET /categorias-has-promocao/:id: para buscar um relacionamento específico pelo ID.
// PUT /categorias-has-promocao/:id: para atualizar as informações de um relacionamento específico pelo ID.
// DELETE /categorias-has-promocao/:id: para excluir um relacionamento específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas as categorias e promocoes.
const CategoriasHasPromocaoController = require("../controller/categoria_has_promocao_controller.js");

router.post("/", CategoriasHasPromocaoController.cadastrar);

router.get("/", CategoriasHasPromocaoController.listar);

router.get("/:id", CategoriasHasPromocaoController.buscarPorId);

router.put("/:id", CategoriasHasPromocaoController.atualizar);

router.delete("/:id", CategoriasHasPromocaoController.excluir);

module.exports = router;