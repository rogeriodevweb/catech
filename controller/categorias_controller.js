//==========================================
// IMPORTA O MODEL
//==========================================

const categorias_Model = require("../model/categorias_model");

//==========================================
// CADASTRAR CATEGORIA
//==========================================

function cadastrar(req, res) {

    const categorias_model = req.body;

    // Validação dos campos obrigatórios

    if (
        !categorias_model.nome
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Cadastra categoria

    categorias_Model.cadastrar(categorias_model, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar categoria."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Categoria cadastrada com sucesso!",
            idCategoria: resultado.insertId

        });

    });

}

//==========================================
// LISTAR categorias
//==========================================

function listar(req, res) {

    categorias_Model.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar categorias."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR CATEGORIA POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    categorias_Model.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar categorias."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Categoria não encontrada."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CATEGORIA
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const categorias_model = req.body;

    categorias_Model.atualizar(id, categorias_model, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar categorias."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Categoria atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CATEGORIA
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    categorias_Model.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir categoria."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Categoria excluída com sucesso."
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