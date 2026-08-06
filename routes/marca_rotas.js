//==========================================
// ROTAS DE MARCA
//==========================================
//
// POST /marcas
// Cadastrar uma nova marca.
//
// GET /marcas
// Listar todas as marcas.
//
// GET /marcas/:id
// Buscar uma marca pelo ID.
//
// PUT /marcas/:id
// Atualizar uma marca.
//
// DELETE /marcas/:id
// Excluir uma marca.
//


const express = require("express");

const router = express.Router();


// Importa Controller

const MarcaController = require("../controller/marca_controller.js");



//==========================================
// CADASTRAR MARCA
//==========================================

router.post(

    "/",

    MarcaController.cadastrar

);



//==========================================
// LISTAR MARCAS
//==========================================

router.get(

    "/",

    MarcaController.listar

);



//==========================================
// BUSCAR MARCA POR ID
//==========================================

router.get(

    "/:id",

    MarcaController.buscarPorId

);



//==========================================
// ATUALIZAR MARCA
//==========================================

router.put(

    "/:id",

    MarcaController.atualizar

);



//==========================================
// EXCLUIR MARCA
//==========================================

router.delete(

    "/:id",

    MarcaController.excluir

);



module.exports = router;