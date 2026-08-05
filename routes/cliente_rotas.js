// ======================================
// ROTAS DE CLIENTES
// ======================================

const express = require("express");
const router = express.Router();

const ClienteController = require("../controller/cliente_controller");

// ===============================
// CADASTRAR CLIENTE
// POST /clientes
// ===============================
router.post("/", ClienteController.cadastrar);

// ===============================
// LISTAR TODOS OS CLIENTES
// GET /clientes
// ===============================
router.get("/", ClienteController.listar);

// ===============================
// BUSCAR CLIENTE POR ID
// GET /clientes/:id
// ===============================
router.get("/:id", ClienteController.buscarPorId);

// ===============================
// ATUALIZAR CLIENTE
// PUT /clientes/:id
// ===============================
router.put("/:id", ClienteController.atualizar);

// ===============================
// EXCLUIR CLIENTE
// DELETE /clientes/:id
// ===============================
router.delete("/:id", ClienteController.excluir);

// ===============================
// LOGIN DE CLIENTE
// POST /clientes/login
// ===============================
router.post("/login", ClienteController.login);



module.exports = router;