const express = require("express");

const router = express.Router();


// =====================================
// IMPORTA CONTROLLER
// =====================================

const produtoController = require("../controller/produto_controller");




// =====================================
// BUSCAR DETALHES DO PRODUTO
// =====================================

router.get(

    "/detalhes/:idProduto",

    produtoController.detalhes

);



module.exports = router;