const express = require("express");

const router = express.Router();

const lojistaController = require("../controller/lojista_controller");


router.post(
    "/",
    (req, res, next) => {

        console.log(">>> ROTA /LOJISTAS CHEGOU <<<");

        next();

    },
    lojistaController.cadastrar
);

// =====================================
// LOGIN DO LOJISTA
// =====================================

router.post(
    "/login",
    lojistaController.login
);
module.exports = router;