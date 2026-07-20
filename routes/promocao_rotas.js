//==========================================
// IMPORTA O EXPRESS
//==========================================

const express = require("express");

const router = express.Router();

//==========================================
// IMPORTA O CONTROLLER
//==========================================

const promocaoController = require("../controller/promocao_controller");

//==========================================
// ROTAS
//==========================================

router.post("/", promocaoController.cadastrar);

router.get("/", promocaoController.listar);

router.get("/:id", promocaoController.buscarPorId);

router.put("/:id", promocaoController.atualizar);

router.delete("/:id", promocaoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;