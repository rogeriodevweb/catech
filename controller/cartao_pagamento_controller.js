//==========================================
// IMPORTA O MODEL
//==========================================

const cartaoPagamentoModel = require("../model/cartao_pagamento_model");

//==========================================
// CADASTRAR CARTÃO
//==========================================

function cadastrar(req, res) {

    const cartao = req.body;

    // Validação dos campos obrigatórios

    if (
        !cartao.numero ||
        !cartao.data_vencimento ||
        cartao.cvc == null ||
        !cartao.cpf ||
        !cartao.nome_proprietario ||
        !cartao.nome_identificacao ||
        !cartao.bandeira ||
        !cartao.tipo ||
        cartao.ativo == null ||
        !cartao.cliente_idCliente
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    cartaoPagamentoModel.cadastrar(cartao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar cartão."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Cartão cadastrado com sucesso!",
            idCartaoPagamento: resultado.insertId

        });

    });

}

//==========================================
// LISTAR CARTÕES
//==========================================

function listar(req, res) {

    cartaoPagamentoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cartões."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR CARTÃO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    cartaoPagamentoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cartão."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cartão não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CARTÃO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const cartao = req.body;

    cartaoPagamentoModel.atualizar(id, cartao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cartão."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CARTÃO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    cartaoPagamentoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cartão."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cartão excluído com sucesso."
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