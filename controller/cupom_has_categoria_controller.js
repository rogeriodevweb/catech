//==========================================
// IMPORTA O MODEL
//==========================================

const cupomHasCategoriaModel = require("../model/cupom_has_categoria_model");

//==========================================
// CADASTRAR RELACIONAMENTO
//==========================================

function cadastrar(req, res) {

    const relacionamento = req.body;

    // Validação dos campos obrigatórios

    if (
        !relacionamento.cupom_idCupom ||
        !relacionamento.categoria_idCategoria
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    cupomHasCategoriaModel.cadastrar(relacionamento, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar relacionamento."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Relacionamento cadastrado com sucesso!"

        });

    });

}

//==========================================
// LISTAR RELACIONAMENTOS
//==========================================

function listar(req, res) {

    cupomHasCategoriaModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar relacionamentos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR RELACIONAMENTO
//==========================================

function buscarPorId(req, res) {

    const cupom = req.params.cupom;
    const categoria = req.params.categoria;

    cupomHasCategoriaModel.buscarPorId(cupom, categoria, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar relacionamento."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Relacionamento não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR RELACIONAMENTO
//==========================================

function atualizar(req, res) {

    const cupom = req.params.cupom;
    const categoria = req.params.categoria;
    const relacionamento = req.body;

    cupomHasCategoriaModel.atualizar(cupom, categoria, relacionamento, (erro) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar relacionamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Relacionamento atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR RELACIONAMENTO
//==========================================

function excluir(req, res) {

    const cupom = req.params.cupom;
    const categoria = req.params.categoria;

    cupomHasCategoriaModel.excluir(cupom, categoria, (erro) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir relacionamento."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Relacionamento excluído com sucesso."
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
    atualizar,
    excluir

};