// ======================================
// ROTAS DE PRODUTOS
// ======================================

const express = require("express");
const router = express.Router();

const ProdutoController = require("../controller/produto_controller");
const upload = require("../config/upload");

// ===============================
// CADASTRAR PRODUTO
// POST /produtos
// ===============================
router.post(
    "/",
    upload.single("imagem"),
    ProdutoController.cadastrar
);

// ===============================
// LISTAR TODOS OS PRODUTOS
// GET /produtos
// ===============================
router.get("/", ProdutoController.listar);

// ===============================
// BUSCAR PRODUTO POR ID
// GET /produtos/:id
// ===============================
router.get("/:id", ProdutoController.buscarPorId);

// ===============================
// ATUALIZAR PRODUTO
// PUT /produtos/:id
// ===============================
router.put("/:id", ProdutoController.atualizar);

// ===============================
// EXCLUIR PRODUTO
// DELETE /produtos/:id
// ===============================
router.delete("/:id", ProdutoController.excluir);

module.exports = router;