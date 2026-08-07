// =====================================
// IMPORTA MODEL
// =====================================

const midiaProdutoModel =
require("../model/midia_produto_model");




// =====================================
// CADASTRAR MÍDIA
// =====================================

function cadastrar(req,res){


    const arquivo = req.file;



    if(!arquivo){


        return res.status(400).json({

            sucesso:false,

            mensagem:"Nenhuma imagem enviada."

        });


    }



    const midia = {


        arquivo:
            arquivo.buffer,


        tipo_arquivo:
            arquivo.mimetype,


        tipo_midia:

            arquivo.mimetype.startsWith("video")

            ? "video"

            : "imagem",



        principal:

            req.body.principal === "true"
            ||
            req.body.principal === true,



        produto_idProduto:

            req.body.produto_idProduto


    };




    midiaProdutoModel.cadastrar(

        midia,

        (erro,resultado)=>{


            if(erro){


                console.log(erro);


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao salvar mídia."

                });


            }



            res.status(201).json({

                sucesso:true,

                mensagem:"Mídia salva com sucesso!",

                idMidia_produto:
                    resultado.insertId

            });



        }

    );


}





// =====================================
// LISTAR MÍDIAS
// =====================================

function listar(req,res){


    midiaProdutoModel.listar(

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({

                    erro:"Erro ao buscar mídias."

                });


            }



            res.json(resultado);


        }

    );


}





// =====================================
// BUSCAR POR ID
// =====================================

function buscarPorId(req,res){


    const id =
        req.params.idMidia_produto;



    midiaProdutoModel.buscarPorId(

        id,

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({

                    erro:"Erro ao buscar mídia."

                });


            }



            res.json(resultado[0]);


        }

    );


}





// =====================================
// ATUALIZAR
// =====================================

function atualizar(req,res){


    const id =
        req.params.idMidia_produto;



    const arquivo = req.file;



    const midia = {


        arquivo:
            arquivo ? arquivo.buffer : null,


        tipo_arquivo:
            arquivo ? arquivo.mimetype : null,


        tipo_midia:

            arquivo &&
            arquivo.mimetype.startsWith("video")

            ? "video"

            : "imagem",



        principal:

            req.body.principal === "true"


    };




    midiaProdutoModel.atualizar(

        id,

        midia,

        (erro)=>{


            if(erro){


                return res.status(500).json({

                    erro:"Erro ao atualizar mídia."

                });


            }



            res.json({

                sucesso:true,

                mensagem:"Mídia atualizada."

            });


        }

    );


}





// =====================================
// EXCLUIR
// =====================================

function excluir(req,res){


    const id =
        req.params.idMidia_produto;



    midiaProdutoModel.excluir(

        id,

        (erro)=>{


            if(erro){


                return res.status(500).json({

                    erro:"Erro ao excluir mídia."

                });


            }



            res.json({

                sucesso:true,

                mensagem:"Mídia excluída."

            });


        }

    );


}





// =====================================
// EXPORTAÇÃO
// =====================================

module.exports = {


    cadastrar,

    listar,

    buscarPorId,

    atualizar,

    excluir

};