//==========================================
// IMPORTA O EXPRESS
//==========================================

const express = require("express");

const router = express.Router();

//==========================================
// IMPORTA O CONTROLLER
//==========================================

const pedidosHasProdutoController = require("../controller/pedidos_has_produto_controller");

//==========================================
// ROTAS
//==========================================

router.post("/", pedidosHasProdutoController.cadastrar);

router.get("/", pedidosHasProdutoController.listar);

router.get("/:id", pedidosHasProdutoController.buscarPorId);

router.put("/:id", pedidosHasProdutoController.atualizar);

router.delete("/:id", pedidosHasProdutoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;