//==========================================
// IMPORTA O MODEL
//==========================================

const pedidosModel = require("../model/pedidos_model");

//==========================================
// CADASTRAR PEDIDO
//==========================================

function cadastrar(req, res) {

    const pedido = req.body;

    if (
        !pedido.data_pedido ||
        !pedido.status_entrega ||
        !pedido.status_pagamento ||
        !pedido.codigo ||
        !pedido.cliente_idCliente ||
        !pedido.Loja_idLoja ||
        !pedido.endereco_idEndereco ||
        !pedido.formas_pagamento_idFormas_pagamento
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    pedidosModel.cadastrar(pedido, (erro, resultado) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar pedido."
            });

        }

        res.status(201).json({

            sucesso: true,
            mensagem: "Pedido cadastrado com sucesso!",
            idPedido: resultado.insertId

        });

    });

}

//==========================================
// LISTAR PEDIDOS
//==========================================

function listar(req, res) {

    pedidosModel.listar((erro, resultado) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar pedidos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR PEDIDO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    pedidosModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar pedido."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Pedido não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR PEDIDO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const pedido = req.body;

    pedidosModel.atualizar(id, pedido, (erro) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar pedido."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Pedido atualizado com sucesso."

        });

    });

}

//==========================================
// EXCLUIR PEDIDO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    pedidosModel.excluir(id, (erro) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir pedido."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Pedido excluído com sucesso."

        });

    });

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};