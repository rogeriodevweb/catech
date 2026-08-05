//==========================================
// IMPORTA O MODEL
//==========================================

const clienteModel = require("../model/cliente_model");

//==========================================
// CADASTRAR CLIENTE
//==========================================

function cadastrar(req, res) {

    const cliente = req.body;

    console.log("Dados recebidos:", cliente);

    // Define a loja padrão caso não seja enviada
    if (!cliente.loja_idLoja) {
        cliente.loja_idLoja = 1;
    }

    // Validação dos campos obrigatórios
    if (
        !cliente.nome ||
        !cliente.cpf ||
        !cliente.telefone ||
        !cliente.email ||
        !cliente.senha ||
        !cliente.data_nascimento
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    // Cadastra o cliente
    clienteModel.cadastrar(cliente, (erro, resultado) => {

        if (erro) {

            console.error("Erro ao cadastrar cliente:");
            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Cliente cadastrado com sucesso!",
            idCliente: resultado.insertId

        });

    });

}

//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {

    clienteModel.listar((erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR CLIENTE POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    clienteModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CLIENTE
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const cliente = req.body;

    clienteModel.atualizar(id, cliente, (erro) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cliente atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CLIENTE
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    clienteModel.excluir(id, (erro) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: erro.sqlMessage || erro.message
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cliente excluído com sucesso."
        });

    });

}


// funcao de login 



function login(req, res) {

    const { email, senha } = req.body;

    clienteModel.buscarPorEmail(email, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno."
            });

        }

        if (resultado.length === 0) {

            return res.json({
                sucesso: false,
                mensagem: "E-mail ou senha inválidos."
            });

        }

        const cliente = resultado[0];

        if (cliente.senha !== senha) {

            return res.json({
                sucesso: false,
                mensagem: "E-mail ou senha inválidos."
            });

        }

        res.json({

            sucesso: true,

            cliente: {

                id: cliente.idCliente,
                nome: cliente.nome,
                email: cliente.email,
                telefone: cliente.telefone,
                cpf: cliente.cpf

            }

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
    excluir,
    login

};