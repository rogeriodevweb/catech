const express = require("express");

const router = express.Router();

const lojistaController = require("../controller/lojista_controller");


router.post(
    "/",
    lojistaController.cadastrar
);


module.exports = router;