//==========================================
// IMPORTA O MODEL
//==========================================

const produtoModel =
    require("../model/produto_model");


//==========================================
// LISTAR TODOS OS PRODUTOS
//==========================================

function listar(req, res) {

    produtoModel.listar(

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO LISTAR PRODUTOS:"
                );

                console.log(erro);

                return res
                    .status(500)
                    .json({

                        sucesso: false,

                        mensagem:
                            "Erro ao listar produtos.",

                        erro:
                            erro.sqlMessage ||
                            erro.message

                    });

            }


            return res
                .status(200)
                .json(resultado);

        }

    );

}


//==========================================
// BUSCAR DETALHES DO PRODUTO + IMAGENS
//==========================================

function detalhes(req, res) {

    const idProduto =
        req.params.idProduto;


    //======================================
    // VALIDAR ID
    //======================================

    if (!idProduto) {

        return res
            .status(400)
            .json({

                sucesso: false,

                mensagem:
                    "Informe o ID do produto."

            });

    }


    //======================================
    // BUSCAR PRODUTO NO MODEL
    //======================================

    produtoModel.buscarPorId(

        idProduto,

        (erro, resultado) => {

            //==================================
            // ERRO NO BANCO
            //==================================

            if (erro) {

                console.log(
                    "ERRO AO BUSCAR PRODUTO:"
                );

                console.log(erro);

                return res
                    .status(500)
                    .json({

                        sucesso: false,

                        mensagem:
                            "Erro ao buscar produto.",

                        erro:
                            erro.sqlMessage ||
                            erro.message

                    });

            }


            //==================================
            // PRODUTO NÃO ENCONTRADO
            //==================================

            if (
                resultado.length === 0
            ) {

                return res
                    .status(404)
                    .json({

                        sucesso: false,

                        mensagem:
                            "Produto não encontrado."

                    });

            }


            //==================================
            // PEGAR PRODUTO
            //==================================

            const produto =
                resultado[0];


            //==================================
            // BUSCAR IMAGENS
            //==================================

            let imagens = [];


            if (
                produto.imagens &&
                produto.imagens.trim() !== ""
            ) {

                imagens =
                    produto.imagens
                        .split("|||")
                        .filter(
                            imagem =>
                                imagem.trim() !== ""
                        );

            }


            //==================================
            // COLOCAR ARRAY DE IMAGENS
            // NO PRODUTO
            //==================================

            produto.imagens =
                imagens;


            //==================================
            // GARANTIR ID CORRETO
            //==================================

            produto.idProduto =
                Number(produto.idProduto);


            //==================================
            // LOGS PARA CONFERIR
            //==================================

            console.log(
                "================================"
            );

            console.log(
                "DETALHES DO PRODUTO"
            );

            console.log(
                "ID:",
                produto.idProduto
            );

            console.log(
                "NOME:",
                produto.nome
            );

            console.log(
                "IMAGENS:",
                produto.imagens
            );

            console.log(
                "================================"
            );


            //==================================
            // RETORNAR PRODUTO + IMAGENS
            //==================================

            return res
                .status(200)
                .json({

                    sucesso: true,

                    produto: produto

                });

        }

    );

}


//==========================================
// CADASTRAR PRODUTO
//==========================================

function cadastrar(req, res) {

    const produto =
        req.body;


    //======================================
    // STATUS
    //======================================

    produto.ativo =

        produto.ativo === false ||

        produto.ativo === "false" ||

        produto.ativo === 0 ||

        produto.ativo === "0"

            ? false

            : true;


    //======================================
    // VALIDAR CAMPOS
    //======================================

    if (

        !produto.nome ||

        !produto.descricao ||

        !produto.codigo ||

        produto.preco_antigo ===
        undefined ||

        produto.preco_antigo ===
        null ||

        produto.preco_antigo === "" ||

        produto.quantidade_estoque ===
        undefined ||

        produto.quantidade_estoque ===
        null ||

        produto.quantidade_estoque === "" ||

        !produto.loja_idLoja ||

        !produto.marca_idMarca ||

        !produto.categorias_idCategorias ||

        !produto.cor_idCores ||

        !produto.tamanho_idTamanho

    ) {

        return res
            .status(400)
            .json({

                sucesso: false,

                mensagem:
                    "Preencha todos os campos obrigatórios."

            });

    }


    //======================================
    // PREÇO PROMOCIONAL
    //======================================

    if (

        produto.preco_promocional === "" ||

        produto.preco_promocional === undefined

    ) {

        produto.preco_promocional =
            null;

    }


    //======================================
    // CADASTRAR NO MODEL
    //======================================

    produtoModel.cadastrar(

        produto,

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO CADASTRAR PRODUTO:"
                );

                console.log(erro);

                return res
                    .status(500)
                    .json({

                        sucesso: false,

                        mensagem:
                            "Erro ao cadastrar produto.",

                        erro:
                            erro.sqlMessage ||
                            erro.message

                    });

            }


            return res
                .status(201)
                .json({

                    sucesso: true,

                    mensagem:
                        "Produto cadastrado com sucesso!",

                    idProduto:
                        resultado.insertId

                });

        }

    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    listar,

    detalhes,

    cadastrar

};