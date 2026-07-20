//==========================================
// IMPORTA O EXPRESS
//==========================================

const express = require("express");

const router = express.Router();

//==========================================
// IMPORTA O CONTROLLER
//==========================================

const pedidosController = require("../controller/pedidos_controller");

//==========================================
// ROTAS
//==========================================

router.post("/", pedidosController.cadastrar);

router.get("/", pedidosController.listar);

router.get("/:id", pedidosController.buscarPorId);

router.put("/:id", pedidosController.atualizar);

router.delete("/:id", pedidosController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;