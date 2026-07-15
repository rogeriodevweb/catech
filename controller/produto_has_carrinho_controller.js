//==========================================
// IMPORTA O MODEL
//==========================================

const produtoHasCarrinhoModel = require("../model/produto_has_carrinho_model");

//==========================================
// CADASTRAR RELACIONAMENTO
//==========================================

function cadastrar(req, res) {

    const relacionamento = req.body;

    // Validação dos campos obrigatórios

    if (
        !relacionamento.produto_idProduto ||
        !relacionamento.carrinho_idCarrinho
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    produtoHasCarrinhoModel.cadastrar(relacionamento, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar relacionamento."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Relacionamento cadastrado com sucesso!"

        });

    });

}

//==========================================
// LISTAR RELACIONAMENTOS
//==========================================

function listar(req, res) {

    produtoHasCarrinhoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar relacionamentos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR RELACIONAMENTO
//==========================================

function buscarPorId(req, res) {

    const produto = req.params.produto;
    const carrinho = req.params.carrinho;

    produtoHasCarrinhoModel.buscarPorId(produto, carrinho, (erro, resultado) => {

        if (erro) {

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
// ATUALIZAR RELACIONAMENTO
//==========================================

function atualizar(req, res) {

    const produto = req.params.produto;
    const carrinho = req.params.carrinho;
    const relacionamento = req.body;

    produtoHasCarrinhoModel.atualizar(
        produto,
        carrinho,
        relacionamento,
        (erro) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar relacionamento."
                });

            }

            res.json({
                sucesso: true,
                mensagem: "Relacionamento atualizado com sucesso."
            });

        }
    );

}

//==========================================
// EXCLUIR RELACIONAMENTO
//==========================================

function excluir(req, res) {

    const produto = req.params.produto;
    const carrinho = req.params.carrinho;

    produtoHasCarrinhoModel.excluir(produto, carrinho, (erro) => {

        if (erro) {

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