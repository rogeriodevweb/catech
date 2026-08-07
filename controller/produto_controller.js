// =====================================
// IMPORTA MODEL
// =====================================

const produtoModel = require("../model/produto_model");


// =====================================
// BUSCAR DETALHES DO PRODUTO
// =====================================

function detalhes(req, res) {

    const idProduto = req.params.idProduto;


    produtoModel.buscarPorId(

        idProduto,

        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({

                    erro: "Erro ao buscar produto"

                });

            }


            if (resultado.length === 0) {

                return res.status(404).json({

                    mensagem: "Produto não encontrado"

                });

            }


            res.json(resultado[0]);

        }

    );

}


// =====================================
// CADASTRAR PRODUTO
// =====================================

function cadastrar(req, res) {

    const produto = req.body;


    // =====================================
    // STATUS DO PRODUTO
    // =====================================

    produto.ativo =
        produto.ativo === false ||
        produto.ativo === "false" ||
        produto.ativo === 0 ||
        produto.ativo === "0"
            ? false
            : true;


    // =====================================
    // VALIDAÇÃO
    // =====================================

    if (

        !produto.nome ||
        !produto.descricao ||
        !produto.codigo ||
        !produto.preco_antigo ||
        !produto.quantidade_estoque ||
        !produto.loja_idLoja ||
        !produto.marca_idMarca ||
        !produto.categorias_idCategorias ||
        !produto.cor_idCores ||
        !produto.tamanho_idTamanho

    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Preencha todos os campos obrigatórios."

        });

    }


    // =====================================
    // CADASTRAR NO MODEL
    // =====================================

    produtoModel.cadastrar(

        produto,

        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao cadastrar produto."

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem: "Produto cadastrado com sucesso!",

                idProduto: resultado.insertId

            });

        }

    );

}


// =====================================
// EXPORTA CONTROLLER
// =====================================

module.exports = {

    detalhes,

    cadastrar

};