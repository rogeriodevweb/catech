//==========================================
// IMPORTA O MODEL
//==========================================

const imagemProdutoModel =
    require("../model/imagem_produto_model.js");


//==========================================
// CADASTRAR MÍDIA
//==========================================

function cadastrar(req, res) {

    //==========================================
    // VERIFICAR ARQUIVO
    //==========================================

    if (!req.file) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Selecione uma imagem ou vídeo."

        });

    }


    //==========================================
    // VERIFICAR PRODUTO
    //==========================================

    if (!req.body.produto_idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o ID do produto."

        });

    }


    //==========================================
    // MONTAR MÍDIA
    //==========================================

    const midia = {

        arquivo:
            req.file.buffer,

        tipo_arquivo:
            req.file.mimetype,

        tipo_midia:
            req.file.mimetype.startsWith("video/")
                ? "video"
                : "imagem",

        principal:
            req.body.principal === "true" ||
            req.body.principal === true ||
            req.body.principal == 1,

        produto_idProduto:
            Number(
                req.body.produto_idProduto
            )

    };


    //==========================================
    // CADASTRAR NO BANCO
    //==========================================

    imagemProdutoModel.cadastrar(

        midia,

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO CADASTRAR MÍDIA:"
                );

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao cadastrar mídia.",

                    erro:
                        erro.sqlMessage ||
                        erro.message

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem:
                    "Mídia cadastrada com sucesso!",

                idMidia_produto:
                    resultado.insertId

            });

        }

    );

}


//==========================================
// LISTAR MÍDIAS
//==========================================

function listar(req, res) {

    imagemProdutoModel.listar(

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO LISTAR MÍDIAS:"
                );

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar mídias.",

                    erro:
                        erro.sqlMessage ||
                        erro.message

                });

            }


            return res.status(200).json(
                resultado
            );

        }

    );

}


//==========================================
// BUSCAR MÍDIA POR ID
//==========================================

function buscarPorId(req, res) {

    const idMidia_produto =
        req.params.idMidia_produto;


    if (!idMidia_produto) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o ID da mídia."

        });

    }


    imagemProdutoModel.buscarPorId(

        idMidia_produto,

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO BUSCAR MÍDIA:"
                );

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar mídia.",

                    erro:
                        erro.sqlMessage ||
                        erro.message

                });

            }


            if (
                resultado.length === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Mídia não encontrada."

                });

            }


            return res.status(200).json(
                resultado[0]
            );

        }

    );

}


//==========================================
// ATUALIZAR MÍDIA
//==========================================

function atualizar(req, res) {

    const idMidia_produto =
        req.params.idMidia_produto;


    if (!idMidia_produto) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o ID da mídia."

        });

    }


    const midia = {

        produto_idProduto:
            req.body.produto_idProduto,

        principal:
            req.body.principal === "true" ||
            req.body.principal === true ||
            req.body.principal == 1

    };


    //==========================================
    // NOVO ARQUIVO
    //==========================================

    if (req.file) {

        midia.arquivo =
            req.file.buffer;

        midia.tipo_arquivo =
            req.file.mimetype;

        midia.tipo_midia =
            req.file.mimetype.startsWith("video/")
                ? "video"
                : "imagem";

    }


    imagemProdutoModel.atualizar(

        idMidia_produto,

        midia,

        (erro) => {

            if (erro) {

                console.log(
                    "ERRO AO ATUALIZAR MÍDIA:"
                );

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar mídia.",

                    erro:
                        erro.sqlMessage ||
                        erro.message

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Mídia atualizada com sucesso."

            });

        }

    );

}


//==========================================
// EXCLUIR MÍDIA
//==========================================

function excluir(req, res) {

    const idMidia_produto =
        req.params.idMidia_produto;


    if (!idMidia_produto) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o ID da mídia."

        });

    }


    imagemProdutoModel.excluir(

        idMidia_produto,

        (erro) => {

            if (erro) {

                console.log(
                    "ERRO AO EXCLUIR MÍDIA:"
                );

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir mídia.",

                    erro:
                        erro.sqlMessage ||
                        erro.message

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Mídia excluída com sucesso."

            });

        }

    );

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