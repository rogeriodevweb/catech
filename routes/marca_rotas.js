//==========================================
// IMPORTA O EXPRESS
//==========================================

const express = require("express");

const router = express.Router();

//==========================================
// IMPORTA O CONTROLLER
//==========================================

const marcaController = require("../controller/marca_controller");

//==========================================
// ROTAS
//==========================================

router.post("/", marcaController.cadastrar);

router.get("/", marcaController.listar);

router.get("/:id", marcaController.buscarPorId);

router.put("/:id", marcaController.atualizar);

router.delete("/:id", marcaController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;