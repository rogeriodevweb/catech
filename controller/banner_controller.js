//==========================================
// IMPORTA O MODEL
//==========================================

const bannerModel = require("../model/banner_model");

//==========================================
// CADASTRAR BANNER
//==========================================

function cadastrar(req, res) {

    const banner = req.body;

    // Recebe o arquivo enviado pelo Multer
    banner.arquivo = req.file ? req.file.buffer : null;
    banner.tipo_arquivo = req.file ? req.file.mimetype : null;

    // Converte o valor recebido para boolean
    banner.status_visibilidade =
        banner.status_visibilidade === "true" ||
        banner.status_visibilidade === true ||
        banner.status_visibilidade == 1;

    // Validação dos campos obrigatórios
    if (
        !banner.titulo ||
        !banner.descricao ||
        !banner.arquivo ||
        !banner.tipo_arquivo ||
        !banner.link ||
        !banner.data_inicio ||
        banner.status_visibilidade == null ||
        !banner.loja_idLoja
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    bannerModel.cadastrar(banner, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar banner."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Banner cadastrado com sucesso!",
            idBanner: resultado.insertId

        });

    });

}

//==========================================
// LISTAR BANNERS
//==========================================

function listar(req, res) {

    bannerModel.listar((erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar banners."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR BANNER POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    bannerModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar banner."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Banner não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// BUSCAR ARQUIVO DO BANNER
//==========================================

function buscarArquivo(req, res) {

    const id = req.params.id;

    bannerModel.buscarArquivo(id, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar arquivo do banner."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Banner não encontrado."
            });

        }

        const banner = resultado[0];

        res.setHeader("Content-Type", banner.tipo_arquivo);

        res.send(banner.arquivo);

    });

}

//==========================================
// ATUALIZAR BANNER
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const banner = req.body;

    if (req.file) {

        banner.arquivo = req.file.buffer;
        banner.tipo_arquivo = req.file.mimetype;

    }

    banner.status_visibilidade =
        banner.status_visibilidade === "true" ||
        banner.status_visibilidade === true ||
        banner.status_visibilidade == 1;

    bannerModel.atualizar(id, banner, (erro) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar banner."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Banner atualizado com sucesso."

        });

    });

}

//==========================================
// EXCLUIR BANNER
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    bannerModel.excluir(id, (erro) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir banner."
            });

        }

        res.json({

            sucesso: true,
            mensagem: "Banner excluído com sucesso."

        });

    });

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarArquivo,
    atualizar,
    excluir

};