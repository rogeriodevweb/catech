const lojistaModel = require("../model/lojista_model");



// =====================================
// CADASTRAR LOJISTA
// =====================================

function cadastrar(req,res){


    const lojista = req.body;



    lojistaModel.cadastrar(

        lojista,

        function(erro, resultado){



            if(erro){


                console.log(erro);


                return res.status(500).json({

                    mensagem:"Erro ao cadastrar lojista"

                });


            }



            res.status(201).json({

                mensagem:"Lojista cadastrado com sucesso!",

                idLojista: resultado.insertId

            });



        }

    );


}



module.exports = {

    cadastrar

};