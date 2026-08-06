//==========================================
// IMPORTA O MODEL
//==========================================

const marcas_Model = require("../model/marca_model");



//==========================================
// CADASTRAR MARCA
//==========================================

function cadastrar(req, res) {


    const marcas_model = req.body;



    // Validação dos campos obrigatórios

    if (

        !marcas_model.nome

    ) {


        return res.status(400).json({

            sucesso:false,

            mensagem:"Preencha todos os campos."

        });


    }



    // Cadastra marca

    marcas_Model.cadastrar(

        marcas_model,

        (erro, resultado)=>{


            if(erro){


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao cadastrar marca."

                });


            }



            return res.status(201).json({


                sucesso:true,

                mensagem:"Marca cadastrada com sucesso!",

                idMarca:resultado.insertId


            });


        }


    );


}





//==========================================
// LISTAR MARCAS
//==========================================

function listar(req,res){


    marcas_Model.listar(

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({


                    sucesso:false,

                    mensagem:"Erro ao listar marcas."


                });


            }



            res.json(resultado);



        }


    );


}





//==========================================
// BUSCAR MARCA POR ID
//==========================================

function buscarPorId(req,res){


    const id = req.params.id;



    marcas_Model.buscarPorId(

        id,

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({


                    sucesso:false,

                    mensagem:"Erro ao buscar marca."


                });


            }



            if(resultado.length === 0){


                return res.status(404).json({


                    sucesso:false,

                    mensagem:"Marca não encontrada."


                });


            }



            res.json(resultado[0]);



        }


    );


}





//==========================================
// ATUALIZAR MARCA
//==========================================

function atualizar(req,res){


    const id = req.params.id;

    const marcas_model = req.body;



    marcas_Model.atualizar(

        id,

        marcas_model,

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({


                    sucesso:false,

                    mensagem:"Erro ao atualizar marca."


                });


            }



            res.json({


                sucesso:true,

                mensagem:"Marca atualizada com sucesso."


            });



        }


    );


}





//==========================================
// EXCLUIR MARCA
//==========================================

function excluir(req,res){


    const id = req.params.id;



    marcas_Model.excluir(

        id,

        (erro,resultado)=>{


            if(erro){


                return res.status(500).json({


                    sucesso:false,

                    mensagem:"Erro ao excluir marca."


                });


            }



            res.json({


                sucesso:true,

                mensagem:"Marca excluída com sucesso."


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