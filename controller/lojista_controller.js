// =====================================
// IMPORTA OS MODELS
// =====================================

const lojistaModel = require("../model/lojista_model");
const lojaModel = require("../model/loja_model");


// =====================================
// CADASTRAR LOJISTA
// =====================================

function cadastrar(req, res) {

    console.log("=====================================");
    console.log(">>> CADASTRO DE LOJISTA CHEGOU <<<");
    console.log("BODY RECEBIDO:");
    console.log(req.body);
    console.log("=====================================");

    const lojista = req.body;


    // =====================================
    // VERIFICA CÓDIGO DA LOJA
    // =====================================

    if (!lojista.codigoLoja) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o código da loja."
        });

    }


    // =====================================
    // VERIFICA DATA
    // =====================================

    if (!lojista.nascimento) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe a data de nascimento."
        });

    }


    console.log(
        "DATA RECEBIDA:",
        lojista.nascimento
    );

    console.log(
        "TIPO DA DATA:",
        typeof lojista.nascimento
    );


    // =====================================
    // GARANTE FORMATO YYYY-MM-DD
    // =====================================

    const nascimento = String(
        lojista.nascimento
    ).trim();


    // Verifica se está no formato correto

    if (!/^\d{4}-\d{2}-\d{2}$/.test(nascimento)) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Data de nascimento inválida. Use o formato YYYY-MM-DD."
        });

    }


    // IMPORTANTE:
    // Não usamos new Date() aqui.
    // Mantemos exatamente 2004-02-13.

    lojista.nascimento = nascimento;


    // =====================================
    // BUSCAR LOJA PELO CÓDIGO
    // =====================================

    lojaModel.buscarPorCodigo(

        lojista.codigoLoja,

        function (erroLoja, lojas) {

            // =================================
            // ERRO AO BUSCAR LOJA
            // =================================

            if (erroLoja) {

                console.error(
                    "ERRO AO BUSCAR LOJA:"
                );

                console.error(erroLoja);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar a loja."
                });

            }


            // =================================
            // CÓDIGO NÃO ENCONTRADO
            // =================================

            if (
                !lojas ||
                lojas.length === 0
            ) {

                return res.status(400).json({
                    sucesso: false,
                    mensagem: "Código da loja inválido."
                });

            }


            // =================================
            // PEGA ID DA LOJA
            // =================================

            lojista.Loja_idLoja =
                lojas[0].idLoja;


            console.log(
                "CÓDIGO DA LOJA:",
                lojista.codigoLoja
            );

            console.log(
                "ID DA LOJA ENCONTRADO:",
                lojista.Loja_idLoja
            );

            console.log(
                "DATA FINAL:",
                lojista.nascimento
            );


            // =================================
            // CADASTRAR LOJISTA
            // =================================

            lojistaModel.cadastrar(

                lojista,

                function (erro, resultado) {

                    // =================================
                    // ERRO
                    // =================================

                    if (erro) {

                        console.error(
                            "ERRO AO CADASTRAR LOJISTA:"
                        );

                        console.error(erro);

                        return res.status(500).json({

                            sucesso: false,

                            mensagem:
                                erro.sqlMessage ||
                                erro.message ||
                                "Erro ao cadastrar lojista."

                        });

                    }


                    // =================================
                    // SUCESSO
                    // =================================

                    console.log(
                        "LOJISTA CADASTRADO COM SUCESSO!"
                    );


                    return res.status(201).json({

                        sucesso: true,

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

    const codigoLoja =
        req.body.codigoLoja;

    const senha =
        req.body.senha;


    // =================================
    // VERIFICA CAMPOS
    // =================================

    if (!codigoLoja || !senha) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe o código da loja e a senha."

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

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar a loja."

                });

            }


            // =================================
            // CÓDIGO NÃO ENCONTRADO
            // =================================

            if (
                !lojas ||
                lojas.length === 0
            ) {

                return res.status(401).json({

                    sucesso: false,

                    mensagem:
                        "Código da loja ou senha incorretos."

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

                function (
                    erroLojista,
                    lojistas
                ) {

                    if (erroLojista) {

                        console.error(
                            erroLojista
                        );

                        return res.status(500).json({

                            sucesso: false,

                            mensagem:
                                "Erro ao buscar o lojista."

                        });

                    }


                    // =================================
                    // LOJISTA NÃO ENCONTRADO
                    // =================================

                    if (
                        !lojistas ||
                        lojistas.length === 0
                    ) {

                        return res.status(401).json({

                            sucesso: false,

                            mensagem:
                                "Código da loja ou senha incorretos."

                        });

                    }


                    const lojista =
                        lojistas[0];


                    // =================================
                    // VERIFICAR SENHA
                    // =================================

                    if (
                        lojista.senha !== senha
                    ) {

                        return res.status(401).json({

                            sucesso: false,

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

                            Loja_idLoja:
                                lojista.Loja_idLoja

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