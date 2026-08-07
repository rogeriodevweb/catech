// =====================================
// IMPORTA MODEL
// =====================================

const coresModel = require("../model/cores_model");


// =====================================
// CADASTRAR COR
// =====================================

function cadastrar(req, res) {


    const cor = req.body;


    if(!cor.nome){


        return res.status(400).json({

            sucesso:false,

            mensagem:"Informe o nome da cor."

        });


    }



    coresModel.cadastrar(

        cor,

        (erro, resultado)=>{


            if(erro){


                console.log(erro);


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao cadastrar cor."

                });


            }



            return res.status(201).json({

                sucesso:true,

                mensagem:"Cor cadastrada com sucesso!",

                idCores:resultado.insertId

            });



        }

    );


}



// =====================================
// LISTAR CORES
// =====================================

function listar(req,res){


    coresModel.listar(

        (erro, resultado)=>{


            if(erro){


                console.log(erro);


                return res.status(500).json({

                    sucesso:false,

                    mensagem:"Erro ao buscar cores."

                });


            }



            res.json(resultado);


        }

    );


}



// =====================================
// EXPORTAÇÃO
// =====================================

module.exports = {

    cadastrar,

    listar

};