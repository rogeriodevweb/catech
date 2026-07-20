//==========================================
// IMPORTA O EXPRESS
//==========================================

const express = require("express");

const router = express.Router();

//==========================================
// IMPORTA O CONTROLLER
//==========================================

const tamanhoController = require("../controller/tamanho_controller");

//==========================================
// ROTAS
//==========================================

router.post("/", tamanhoController.cadastrar);

router.get("/", tamanhoController.listar);

router.get("/:id", tamanhoController.buscarPorId);

router.put("/:id", tamanhoController.atualizar);

router.delete("/:id", tamanhoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;