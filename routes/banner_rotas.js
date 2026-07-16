// nesse arquivo, definimos as rotas relacionadas aos banners e associamos cada rota a uma função do BannerController. As rotas são:
// POST /banners: para cadastrar um novo banner.
// GET /banners: para listar todos os banners.
// GET /banners/:id: para buscar um banner específico pelo ID.
// PUT /banners/:id: para atualizar as informações de um banner específico pelo ID.
// DELETE /banners/:id: para excluir um banner específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas aos banners.
const bannercontroller = require("../controller/banner_controller.js");

router.post("/", bannercontroller.cadastrar);

router.get("/", bannercontroller.listar);

router.get("/:id", bannercontroller.buscarPorId);

router.put("/:id", bannercontroller.atualizar);

router.delete("/:id", bannercontroller.excluir);

module.exports = router;