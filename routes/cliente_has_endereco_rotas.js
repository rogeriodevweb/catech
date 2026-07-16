// nesse arquivo, definimos as rotas relacionadas aos cartões de pagamento e associamos cada rota a uma função do ClienteHasEnderecoController. As rotas são:
// POST /cliente-has-endereco: para cadastrar um novo relacionamento entre cliente e endereco.
// GET /cliente-has-endereco: para listar todos os relacionamentos entre clientes e enderecos.
// GET /cliente-has-endereco/:id: para buscar um relacionamento específico pelo ID.
// PUT /cliente-has-endereco/:id: para atualizar as informações de um relacionamento específico pelo ID.
// DELETE /cliente-has-endereco/:id: para excluir um relacionamento específico pelo ID.


const express = require("express");
// Importando o módulo express para criar rotas e lidar com requisições HTTP.
const router = express.Router();
// Criando um objeto router para definir as rotas relacionadas as categorias e promocoes.
const ClienteHasEnderecoController = require("../controller/cliente_has_endereco_controller.js");

router.post("/", ClienteHasEnderecoController.cadastrar);

router.get("/", ClienteHasEnderecoController.listar);

router.get("/:id", ClienteHasEnderecoController.buscarPorId);

router.put("/:id", ClienteHasEnderecoController.atualizar);

router.delete("/:id", ClienteHasEnderecoController.excluir);

module.exports = router;