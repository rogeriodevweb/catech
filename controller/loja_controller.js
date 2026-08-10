//==========================================
// IMPORTA OS MODELS
//==========================================

const lojaModel = require("../model/loja_model");

const enderecoModel = require("../model/endereco_model");


//==========================================
// GERAR CÓDIGO DA LOJA
//==========================================

function gerarCodigoLoja() {

    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "CAT-";


    for (let i = 0; i < 6; i++) {

        const indice =
            Math.floor(
                Math.random() * caracteres.length
            );

        codigo += caracteres[indice];

    }


    return codigo;

}


//==========================================
// CADASTRAR LOJA
//==========================================

function cadastrar(req, res) {

    const loja = req.body;


    //==========================================
    // VALIDAÇÃO
    //==========================================

    if (

        !loja.nome ||

        !loja.cnpj ||

        !loja.email ||

        !loja.telefone ||

        !loja.cep ||

        !loja.rua ||

        !loja.bairro ||

        !loja.numero

    ) {

        return res.status(400).json({

            sucesso: false,

            erro: "Preencha todos os campos obrigatórios."

        });

    }


    //==========================================
    // DADOS DO ENDEREÇO
    //==========================================

    const endereco = {

        rua: loja.rua,

        cep: loja.cep,

        bairro: loja.bairro,

        numero: loja.numero,

        complemento: loja.complemento,

        tipo: "Comercial"

    };


    //==========================================
    // CADASTRA ENDEREÇO
    //==========================================

    enderecoModel.cadastrar(

        endereco,

        function (erroEndereco, resultadoEndereco) {


            if (erroEndereco) {

                console.error(erroEndereco);

                return res.status(500).json({

                    sucesso: false,

                    erro: "Erro ao cadastrar o endereço."

                });

            }


            //==================================
            // ID DO ENDEREÇO
            //==================================

            const idEndereco =
                resultadoEndereco.insertId;


            //==================================
            // GERAR CÓDIGO DA LOJA
            //==================================

            const codigoAcesso =
                gerarCodigoLoja();


            //==================================
            // MONTAR DADOS DA LOJA
            //==================================

            const dadosLoja = {

                codigoAcesso: codigoAcesso,

                nome: loja.nome,

                whatsapp: loja.whatsapp,

                instagram: loja.instagram,

                facebook: loja.facebook,

                linkedin: loja.linkedin,

                telefone: loja.telefone,

                email: loja.email,

                Endereco_idEndereco: idEndereco

            };


            //==================================
            // CADASTRAR LOJA
            //==================================

            lojaModel.cadastrar(

                dadosLoja,

                function (erroLoja, resultadoLoja) {


                    if (erroLoja) {

                        console.error(erroLoja);

                        return res.status(500).json({

                            sucesso: false,

                            erro: "Erro ao cadastrar a loja."

                        });

                    }


                    //==================================
                    // SUCESSO
                    //==================================

                    return res.status(201).json({

                        sucesso: true,

                        mensagem:
                            "Loja cadastrada com sucesso.",

                        idLoja:
                            resultadoLoja.insertId,

                        codigoAcesso:
                            codigoAcesso

                    });

                }

            );

        }

    );

}


//==========================================
// EXPORTA
//==========================================

module.exports = {

    cadastrar

};