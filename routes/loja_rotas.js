//==========================================
// IMPORTA O EXPRESS
//==========================================

const express = require("express");

const router = express.Router();


//==========================================
// IMPORTA O CONTROLLER
//==========================================

const lojaController = require("../controller/loja_controller");


//==========================================
// CADASTRAR LOJA
//==========================================

router.post(
    "/cadastrar",
    lojaController.cadastrar
);


//==========================================
// EXPORTA
//==========================================

module.exports = router;