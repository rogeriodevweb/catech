// =====================================
// IMPORTA EXPRESS
// =====================================

const express = require("express");

const router = express.Router();


// =====================================
// IMPORTA CONTROLLER
// =====================================

const coresController = require("../controller/cores_controller");


// =====================================
// ROTAS
// =====================================


// CADASTRAR COR
router.post(
    "/",
    coresController.cadastrar
);


// BUSCAR CORES
router.get(
    "/",
    coresController.listar
);


// =====================================
// EXPORTAÇÃO
// =====================================

module.exports = router;