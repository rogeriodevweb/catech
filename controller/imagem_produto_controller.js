//==========================================
// IMPORTA O MODEL
//==========================================

const imagemProdutoModel = require("../model/imagem_produto_model");

//==========================================
// CADASTRAR IMAGEM
//==========================================

function cadastrar(req, res) {

    const imagem = req.body;

    // Validação dos campos obrigatórios

    if (
        !imagem.arquivo ||
        !imagem.produto_idProduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    imagemProdutoModel.cadastrar(imagem, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar imagem."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Imagem cadastrada com sucesso!",
            idImagem: resultado.insertId

        });

    });

}

//==========================================
// LISTAR IMAGENS
//==========================================

function listar(req, res) {

    imagemProdutoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar imagens."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR IMAGEM POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    imagemProdutoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar imagem."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Imagem não encontrada."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR IMAGEM
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const imagem = req.body;

    imagemProdutoModel.atualizar(id, imagem, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar imagem."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR IMAGEM
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    imagemProdutoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir imagem."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Imagem excluída com sucesso."
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