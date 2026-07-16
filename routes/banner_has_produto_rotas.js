// nesse arquivo, definimos as rotas relacionadas aos banners e produtos e associamos cada rota a uma função do BannerHasProdutoController. As rotas são:
// POST /banner-has-produtos: para cadastrar uma nova associação.
// GET /banner-has-produtos: para listar todas as associações.
// GET /banner-has-produtos/:id: para buscar uma associação específica pelo ID.
// PUT /banner-has-produtos/:id: para atualizar as informações de uma associação específica pelo ID.
// DELETE /banner-has-produtos/:id: para excluir uma associação específica pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos banners e produtos.
const BannerHasProdutoController = require("../controller/banner_has_produto_controller.js");

router.post("/", BannerHasProdutoController.cadastrar);

router.get("/", BannerHasProdutoController.listar);

router.get("/:id", BannerHasProdutoController.buscarPorId);

router.put("/:id", BannerHasProdutoController.atualizar);

router.delete("/:id", BannerHasProdutoController.excluir);

module.exports = router;