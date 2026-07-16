//==========================================
// IMPORTA O MODEL
//==========================================

const formaPagamentoModel = require("../model/forma_pagamento_model");

//==========================================
// CADASTRAR
//==========================================

function cadastrar(req, res) {

    const formaPagamento = req.body;

    if (
        !formaPagamento.nome ||
        formaPagamento.ativo === undefined
    ) {
        return res.status(400).json({
            erro: "Preencha todos os campos obrigatórios."
        });
    }

    formaPagamentoModel.cadastrar(formaPagamento, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json(resultado);

    });

}

//==========================================
// LISTAR
//==========================================

function listar(req, res) {

    formaPagamentoModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

}

//==========================================
// BUSCAR POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    formaPagamentoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        if (resultado.length === 0) {
            return res.status(404).json({
                erro: "Forma de pagamento não encontrada."
            });
        }

        res.status(200).json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const formaPagamento = req.body;

    if (
        !formaPagamento.nome ||
        formaPagamento.ativo === undefined
    ) {
        return res.status(400).json({
            erro: "Preencha todos os campos obrigatórios."
        });
    }

    formaPagamentoModel.atualizar(id, formaPagamento, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

}

//==========================================
// EXCLUIR
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    formaPagamentoModel.excluir(id, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

}

//==========================================

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir
};