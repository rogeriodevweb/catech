//==========================================
// IMPORTA O MODEL
//==========================================

const imagemProdutoModel = require("../model/imagem_produto_model.js");


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

            mensagem: "Selecione uma imagem ou vídeo."

        });

    }


    //==========================================
    // DADOS DA MÍDIA
    //==========================================

    const midia = {

        arquivo: req.file.buffer,

        tipo_arquivo: req.file.mimetype,

        tipo_midia:
            req.file.mimetype.startsWith("video/")
                ? "video"
                : "imagem",

        principal:
            req.body.principal === "true" ||
            req.body.principal === true ||
            req.body.principal == 1,

        produto_idProduto:
            req.body.produto_idProduto

    };


    //==========================================
    // VALIDAÇÃO
    //==========================================

    if (!midia.produto_idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Informe o produto da mídia."

        });

    }


    //==========================================
    // CADASTRAR NO MODEL
    //==========================================

    imagemProdutoModel.cadastrar(

        midia,

        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao cadastrar mídia."

                });

            }


            return res.status(201).json({

                sucesso: true,

                mensagem: "Mídia cadastrada com sucesso!",

                idMidia_produto: resultado.insertId

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

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao listar mídias."

                });

            }


            res.json(resultado);

        }

    );

}


//==========================================
// BUSCAR MÍDIA POR ID
//==========================================

function buscarPorId(req, res) {


    const idMidia_produto =
        req.params.idMidia_produto;



    imagemProdutoModel.buscarPorId(

        idMidia_produto,

        (erro, resultado) => {


            if (erro) {


                console.log(erro);


                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao buscar mídia."

                });


            }



            if (resultado.length === 0) {


                return res.status(404).json({

                    sucesso: false,

                    mensagem: "Mídia não encontrada."

                });


            }



            res.json(resultado[0]);


        }

    );


}


//==========================================
// ATUALIZAR MÍDIA
//==========================================

function atualizar(req, res) {

    const idMidia_produto = req.params.id;


    const midia = {

        produto_idProduto:
            req.body.produto_idProduto,

        principal:
            req.body.principal === "true" ||
            req.body.principal === true ||
            req.body.principal == 1

    };


    //==========================================
    // SE ENVIOU UM NOVO ARQUIVO
    //==========================================

    if (req.file) {

        midia.arquivo = req.file.buffer;

        midia.tipo_arquivo = req.file.mimetype;

        midia.tipo_midia =
            req.file.mimetype.startsWith("video/")
                ? "video"
                : "imagem";

    }


    //==========================================
    // ATUALIZAR NO MODEL
    //==========================================

    imagemProdutoModel.atualizar(

        idMidia_produto,

        midia,

        (erro) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao atualizar mídia."

                });

            }


            res.json({

                sucesso: true,

                mensagem: "Mídia atualizada com sucesso."

            });

        }

    );

}


//==========================================
// EXCLUIR MÍDIA
//==========================================

function excluir(req, res) {

    const idMidia_produto = req.params.id;


    imagemProdutoModel.excluir(

        idMidia_produto,

        (erro) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao excluir mídia."

                });

            }


            res.json({

                sucesso: true,

                mensagem: "Mídia excluída com sucesso."

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