//==========================================
// IMPORTA O MODEL
//==========================================

const produtoModel = require("../model/produto_model");
const imagemProdutoModel = require("../model/imagem_produto_model");

//==========================================
// CADASTRAR PRODUTO + IMAGEM
//==========================================

function cadastrar(req, res) {


    const produto = req.body;


    const imagem = req.file;



    console.log("Dados recebidos:", produto);

    console.log("Imagem recebida:", imagem);



    // Define valores padrão

    if (!produto.loja_idLoja) {

        produto.loja_idLoja = 1;

    }


    if (produto.ativo === undefined) {

        produto.ativo = true;

    }



    // Validação

    if (

        !produto.nome ||
        !produto.descricao ||
        !produto.codigo ||
        produto.preco_antigo == null ||
        produto.quantidade_estoque == null ||
        !produto.loja_idLoja ||
        !produto.marca_idMarca ||
        !produto.categorias_idCategorias

    ) {


        return res.status(400).json({

            sucesso:false,

            mensagem:"Preencha todos os campos obrigatórios."

        });


    }



    // Cadastra produto

    produtoModel.cadastrar(produto, (erro, resultado)=>{


        if(erro){


            console.error(erro);


            return res.status(500).json({

                sucesso:false,

                mensagem:erro.sqlMessage || erro.message

            });


        }



        const idProduto = resultado.insertId;



        // Se tiver imagem, salva

        if(imagem){


            imagemProdutoModel.cadastrar(

                imagem.buffer,

                idProduto,

                (erroImagem)=>{


                    if(erroImagem){


                        console.error(
                            "Erro ao salvar imagem:",
                            erroImagem
                        );


                        return res.status(500).json({

                            sucesso:false,

                            mensagem:"Produto cadastrado, mas erro ao salvar imagem."

                        });


                    }



                    return res.status(201).json({

                        sucesso:true,

                        mensagem:"Produto e imagem cadastrados com sucesso!",

                        idProduto:idProduto

                    });


                }


            );


        }else{


            return res.status(201).json({

                sucesso:true,

                mensagem:"Produto cadastrado sem imagem.",

                idProduto:idProduto

            });


        }



    });


}

//==========================================
// LISTAR PRODUTOS
//==========================================

function listar(req, res) {

    produtoModel.listar((erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR PRODUTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    produtoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Produto não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR PRODUTO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const produto = req.body;

    produtoModel.atualizar(id, produto, (erro) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Produto atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR PRODUTO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    produtoModel.excluir(id, (erro) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Produto excluído com sucesso."
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