// nesse arquivo, definimos as rotas relacionadas às avaliações de produtos e associamos cada rota a uma função do AvaliacaoProdutoController. As rotas são:
// POST /tamanhos: para cadastrar um novo tamanho.
// GET /tamanhos: para listar todos os tamanhos.
// GET /tamanhos/:id: para buscar um tamanho específico pelo ID.
// PUT /tamanhos/:id: para atualizar as informações de um tamanho específico pelo ID.
// DELETE /tamanhos/:id: para excluir um tamanho específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas às avaliações de produtos.
const Tamanhocontroller = require("../controller/tamanho_controller.js");

router.post("/", Tamanhocontroller.cadastrar);

router.get("/", TamanhoController.listar);

router.get("/:id", TamanhoController.buscarPorId);

router.put("/:id", TamanhoController.atualizar);

router.delete("/:id", TamanhoController.excluir);

module.exports = router;