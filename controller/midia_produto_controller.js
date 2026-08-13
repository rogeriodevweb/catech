// =====================================
// IMPORTA MODEL
// =====================================

const midiaProdutoModel =
    require("../model/midia_produto_model");


// =====================================
// CONEXÃO COM BANCO
// =====================================

const conexao =
    require("../conexao/conexao");


// =====================================
// CADASTRAR MÍDIA
// =====================================

function cadastrar(req, res) {

    const arquivo = req.file;


    if (!arquivo) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Nenhuma imagem enviada."

        });

    }


    const midia = {

        arquivo:
            arquivo.buffer,

        tipo_arquivo:
            arquivo.mimetype,

        tipo_midia:

            arquivo.mimetype.startsWith("video/")

                ? "video"
                : "imagem",

        principal:

            req.body.principal === "true" ||
            req.body.principal === true ||
            req.body.principal == 1,

        produto_idProduto:
            req.body.produto_idProduto

    };


    if (!midia.produto_idProduto) {

        return res.status(400).json({

            sucesso: false,

            mensagem: "Produto não informado."

        });

    }


    midiaProdutoModel.cadastrar(

        midia,

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO SALVAR MÍDIA:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao salvar mídia."

                });

            }


            res.status(201).json({

                sucesso: true,

                mensagem: "Mídia salva com sucesso!",

                idMidia_produto:
                    resultado.insertId

            });

        }

    );

}


// =====================================
// LISTAR MÍDIAS
// =====================================

function listar(req, res) {

    midiaProdutoModel.listar(

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO LISTAR MÍDIAS:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem: "Erro ao buscar mídias."

                });

            }


            res.json(resultado);

        }

    );

}


// =====================================
// BUSCAR POR ID
// =====================================

function buscarPorId(req, res) {

    const id =
        req.params.idMidia_produto;


    midiaProdutoModel.buscarPorId(

        id,

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO BUSCAR MÍDIA:",
                    erro
                );

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


// =====================================
// EXIBIR ARQUIVO
// =====================================

function arquivo(req, res) {

    const id =
        req.params.idMidia_produto;


    const sql = `

        SELECT

            arquivo,

            tipo_arquivo

        FROM midia_produto

        WHERE idMidia_produto = ?

    `;


    conexao.query(

        sql,

        [id],

        (erro, resultado) => {

            if (erro) {

                console.log(
                    "ERRO AO BUSCAR ARQUIVO:",
                    erro
                );

                return res.status(500).send(
                    "Erro ao buscar arquivo."
                );

            }


            if (resultado.length === 0) {

                return res.status(404).send(
                    "Arquivo não encontrado."
                );

            }


            const midia =
                resultado[0];


            res.setHeader(
                "Content-Type",
                midia.tipo_arquivo
            );


            res.send(
                midia.arquivo
            );

        }

    );

}


// =====================================
// ATUALIZAR MÍDIA
// =====================================

function atualizar(req, res) {

    const id =
        req.params.idMidia_produto;


    const arquivo =
        req.file;


    // -------------------------------------
    // SE NÃO ENVIOU NOVA IMAGEM
    // -------------------------------------

    if (!arquivo) {

        const sql = `

            UPDATE midia_produto

            SET principal = ?

            WHERE idMidia_produto = ?

        `;


        const principal =

            req.body.principal === "true" ||
            req.body.principal === true ||
            req.body.principal == 1;


        return conexao.query(

            sql,

            [
                principal,
                id
            ],

            (erro) => {

                if (erro) {

                    console.log(
                        "ERRO AO ATUALIZAR MÍDIA:",
                        erro
                    );

                    return res.status(500).json({

                        sucesso: false,

                        mensagem:
                            "Erro ao atualizar mídia."

                    });

                }


                res.json({

                    sucesso: true,

                    mensagem:
                        "Mídia atualizada."

                });

            }

        );

    }


    // -------------------------------------
    // SE ENVIOU NOVA IMAGEM
    // -------------------------------------

    const midia = {

        arquivo:
            arquivo.buffer,

        tipo_arquivo:
            arquivo.mimetype,

        tipo_midia:

            arquivo.mimetype.startsWith("video/")

                ? "video"
                : "imagem",

        principal:

            req.body.principal === "true" ||
            req.body.principal === true ||
            req.body.principal == 1

    };


    midiaProdutoModel.atualizar(

        id,

        midia,

        (erro) => {

            if (erro) {

                console.log(
                    "ERRO AO ATUALIZAR MÍDIA:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao atualizar mídia."

                });

            }


            res.json({

                sucesso: true,

                mensagem:
                    "Mídia atualizada."

            });

        }

    );

}


// =====================================
// EXCLUIR
// =====================================

function excluir(req, res) {

    const id =
        req.params.idMidia_produto;


    midiaProdutoModel.excluir(

        id,

        (erro) => {

            if (erro) {

                console.log(
                    "ERRO AO EXCLUIR MÍDIA:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao excluir mídia."

                });

            }


            res.json({

                sucesso: true,

                mensagem:
                    "Mídia excluída."

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

    arquivo,

    atualizar,

    excluir

};