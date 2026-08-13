//==========================================
// IMPORTAÇÕES
//==========================================

const express = require("express");

const router = express.Router();


//==========================================
// IMPORTA CONTROLLER
//==========================================

const midiaProdutoController =
    require("../controller/midia_produto_controller");


//==========================================
// MULTER
//==========================================

const multer = require("multer");

const storage =
    multer.memoryStorage();

const upload =
    multer({
        storage: storage
    });


//==========================================
// CADASTRAR MÍDIA
//==========================================

router.post(
    "/",
    upload.single("arquivo"),
    midiaProdutoController.cadastrar
);


//==========================================
// LISTAR MÍDIAS
//==========================================

router.get(
    "/",
    midiaProdutoController.listar
);


//==========================================
// EXIBIR ARQUIVO
//==========================================

router.get(
    "/arquivo/:idMidia_produto",
    midiaProdutoController.arquivo
);


//==========================================
// BUSCAR MÍDIA POR ID
//==========================================

router.get(
    "/:idMidia_produto",
    midiaProdutoController.buscarPorId
);


//==========================================
// ATUALIZAR MÍDIA
//==========================================

router.put(
    "/:idMidia_produto",
    upload.single("arquivo"),
    midiaProdutoController.atualizar
);


//==========================================
// EXCLUIR MÍDIA
//==========================================

router.delete(
    "/:idMidia_produto",
    midiaProdutoController.excluir
);


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;