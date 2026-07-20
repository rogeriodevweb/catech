//==========================================
// IMPORTA O MODEL
//==========================================

const pedidosHasProdutoModel = require("../model/pedidos_has_produto_model");

//==========================================
// CADASTRAR
//==========================================

function cadastrar(req, res) {

    const relacionamento = req.body;

    if (
        !relacionamento.pedidos_idPedidos ||
        !relacionamento.produtos_idProdutos ||
        !relacionamento.quantidade
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    pedidosHasProdutoModel.cadastrar(relacionamento, (erro, resultado) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar relacionamento."
            });

        }

        res.status(201).json({

            sucesso: true,
            mensagem: "Relacionamento cadastrado com sucesso!",
            id: resultado.insertId

        });

    });

}

//==========================================
// LISTAR
//==========================================

function listar(req, res) {

    pedidosHasProdutoModel.listar((erro, resultado) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar relacionamentos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    pedidosHasProdutoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar relacionamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Relacionamento não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const relacionamento = req.body;

    pedidosHasProdutoModel.atualizar(id, relacionamento, (erro) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar relacionamento."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Relacionamento atualizado com sucesso."

        });

    });

}

//==========================================
// EXCLUIR
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    pedidosHasProdutoModel.excluir(id, (erro) => {

        if (erro) {

            console.log(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir relacionamento."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Relacionamento excluído com sucesso."

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