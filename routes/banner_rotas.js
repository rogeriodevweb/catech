//==========================================
// IMPORTAÇÕES
//==========================================

const express = require("express");
const router = express.Router();

const bannerController = require("../controller/banner_controller");

//==========================================
// MULTER
//==========================================

const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});

//==========================================
// ROTAS
//==========================================

// Cadastrar Banner
router.post(
    "/",
    upload.single("arquivo"),
    bannerController.cadastrar
);

// Listar Todos os Banners
router.get(
    "/",
    bannerController.listar
);

// Buscar Banner por ID
router.get(
    "/:id",
    bannerController.buscarPorId
);

// ==========================
// Buscar Arquivo do Banner
// ==========================
router.get(
    "/:id/arquivo",
    bannerController.buscarArquivo
);

// Atualizar Banner
router.put(
    "/:id",
    upload.single("arquivo"),
    bannerController.atualizar
);

// Excluir Banner
router.delete(
    "/:id",
    bannerController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;