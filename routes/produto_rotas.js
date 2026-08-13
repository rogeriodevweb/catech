//==========================================
// IMPORTAÇÕES
//==========================================

const express = require("express");

const router = express.Router();


//==========================================
// IMPORTA CONTROLLER
//==========================================

const produtoController =
    require("../controller/produto_controller");


//==========================================
// LISTAR TODOS OS PRODUTOS
//==========================================

router.get(
    "/",
    produtoController.listar
);


//==========================================
// CADASTRAR PRODUTO
//==========================================

router.post(
    "/",
    produtoController.cadastrar
);


//==========================================
// BUSCAR DETALHES DO PRODUTO
//==========================================

router.get(
    "/detalhes/:idProduto",
    produtoController.detalhes
);


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;