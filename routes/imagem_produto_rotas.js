const express = require("express");

const router = express.Router();

const imagemProdutoController = require("../controller/imagem_produto_controller");

router.post("/", imagemProdutoController.cadastrar);

router.get("/", imagemProdutoController.listar);

router.get("/:id", imagemProdutoController.buscarPorId);

router.put("/:id", imagemProdutoController.atualizar);

router.delete("/:id", imagemProdutoController.excluir);

module.exports = router;