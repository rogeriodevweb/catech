// =====================================
// IMPORTA OS MODELS
// =====================================

const lojistaModel = require("../model/lojista_model");

const lojaModel = require("../model/loja_model");


// =====================================
// CADASTRAR LOJISTA
// =====================================

function cadastrar(req, res) {

        console.log(">>> CADASTRO DE LOJISTA CHEGOU <<<");
        console.log(req.body);
        const lojista = req.body;


    // =====================================
    // VERIFICA CÓDIGO DA LOJA
    // =====================================

    if (!lojista.codigoLoja) {

        return res.status(400).json({

            mensagem: "Informe o código da loja."

        });

    }


    // =====================================
    // BUSCAR LOJA PELO CÓDIGO
    // =====================================

    lojaModel.buscarPorCodigo(

        lojista.codigoLoja,

        function (erroLoja, lojas) {


            if (erroLoja) {

                console.log(erroLoja);

                return res.status(500).json({

                    mensagem: "Erro ao buscar a loja."

                });

            }


            // =================================
            // CÓDIGO NÃO ENCONTRADO
            // =================================

            if (lojas.length === 0) {

                return res.status(400).json({

                    mensagem: "Código da loja inválido."

                });

            }


            // =================================
            // PEGA O ID DA LOJA
            // =================================

            lojista.loja_idLoja =
                lojas[0].idLoja;


            // =================================
            // CADASTRA LOJISTA
            // =================================

            lojistaModel.cadastrar(

                lojista,

                function (erro, resultado) {


                  if (erro) {

                    console.error("ERRO AO CADASTRAR LOJISTA:");
                    console.error(erro);

                    return res.status(500).json({

                        mensagem: "Erro ao cadastrar lojista.",

                        erro: erro.message

                    });

                }


                    // =============================
                    // SUCESSO
                    // =============================

                    return res.status(201).json({

                        mensagem:
                            "Lojista cadastrado com sucesso!",

                        idLojista:
                            resultado.insertId

                    });

                }

            );

        }

    );

}

// =====================================
// LOGIN DO LOJISTA
// =====================================

function login(req, res) {

    const codigoLoja = req.body.codigoLoja;
    const senha = req.body.senha;


    // =================================
    // VERIFICA CAMPOS
    // =================================

    if (!codigoLoja || !senha) {

        return res.status(400).json({

            mensagem: "Informe o código da loja e a senha."

        });

    }


    // =================================
    // BUSCAR LOJA PELO CÓDIGO
    // =================================

    lojaModel.buscarPorCodigo(

        codigoLoja,

        function (erroLoja, lojas) {

            if (erroLoja) {

                console.error(erroLoja);

                return res.status(500).json({

                    mensagem: "Erro ao buscar a loja."

                });

            }


            // =================================
            // CÓDIGO NÃO ENCONTRADO
            // =================================

            if (lojas.length === 0) {

                return res.status(401).json({

                    mensagem: "Código da loja ou senha incorretos."

                });

            }


            // =================================
            // ID DA LOJA
            // =================================

            const idLoja =
                lojas[0].idLoja;


            // =================================
            // BUSCAR LOJISTA
            // =================================

            lojistaModel.buscarPorLoja(

                idLoja,

                function (erroLojista, lojistas) {

                    if (erroLojista) {

                        console.error(erroLojista);

                        return res.status(500).json({

                            mensagem:
                                "Erro ao buscar o lojista."

                        });

                    }


                    // =================================
                    // LOJISTA NÃO ENCONTRADO
                    // =================================

                    if (lojistas.length === 0) {

                        return res.status(401).json({

                            mensagem:
                                "Código da loja ou senha incorretos."

                        });

                    }


                    const lojista =
                        lojistas[0];


                    // =================================
                    // VERIFICAR SENHA
                    // =================================

                    if (lojista.senha !== senha) {

                        return res.status(401).json({

                            mensagem:
                                "Código da loja ou senha incorretos."

                        });

                    }


                    // =================================
                    // LOGIN REALIZADO
                    // =================================

                    return res.status(200).json({

                        sucesso: true,

                        mensagem:
                            "Login realizado com sucesso!",

                        lojista: {

                            idLojista:
                                lojista.idLojista,

                            nome:
                                lojista.nome,

                            codigoLoja:
                                codigoLoja,

                            loja_idLoja:
                                lojista.loja_idLoja

                        }

                    });

                }

            );

        }

    );

}
// =====================================
// EXPORTAR
// =====================================

module.exports = {

    cadastrar,

    login

};