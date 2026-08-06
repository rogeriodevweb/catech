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



            if (resultado.length == 0) {


                return res.status(404).json({

                    mensagem: "Produto não encontrado"

                });


            }



            res.json(resultado[0]);



        }

    );


}





module.exports = {

    detalhes

};