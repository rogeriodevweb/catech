// nesse arquivo, definimos as rotas relacionadas aos cupons e associamos cada rota a uma função do CupomHasProdutoController. As rotas são:
// POST /cupom-has-produto: para cadastrar um novo relacionamento entre cupom e produto.
// GET /cupom-has-produto: para listar todos os relacionamentos entre cupons e produtos.
// GET /cupom-has-produto/:id: para buscar um relacionamento específico pelo ID.
// PUT /cupom-has-produto/:id: para atualizar as informações de um relacionamento específico pelo ID.
// DELETE /cupom-has-produto/:id: para excluir um relacionamento específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos cupons e produtos.
const CupomHasProdutoController = require("../controller/cupom_has_produto_controller.js");

router.post("/", CupomHasProdutoController.cadastrar);

router.get("/", CupomHasProdutoController.listar);

router.get("/:id", CupomHasProdutoController.buscarPorId);

router.put("/:id", CupomHasProdutoController.atualizar);

router.delete("/:id", CupomHasProdutoController.excluir);

module.exports = router;

