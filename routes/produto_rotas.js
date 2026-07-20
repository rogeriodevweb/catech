//==========================================
// IMPORTA O EXPRESS
//==========================================

const express = require("express");

const router = express.Router();

//==========================================
// IMPORTA O CONTROLLER
//==========================================

const produtoController = require("../controller/produto_controller");

//==========================================
// ROTAS
//==========================================

router.post("/", produtoController.cadastrar);

router.get("/", produtoController.listar);

router.get("/:id", produtoController.buscarPorId);

router.put("/:id", produtoController.atualizar);

router.delete("/:id", produtoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;