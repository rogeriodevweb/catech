const conexao = require("../conexao/conexao.js");

// ==========================================
// CADASTRAR CLIENTE
// ==========================================

function cadastrar(cliente, callback) {

    const sql = `
        INSERT INTO Cliente
        (
            nome,
            cpf,
            telefone,
            email,
            senha,
            data_nascimento,
            loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            cliente.nome,
            cliente.cpf,
            cliente.telefone,
            cliente.email,
            cliente.senha,
            cliente.data_nascimento,
            cliente.loja_idLoja
        ],
        (erro, resultado) => {

            if (erro) {
                console.error("Erro ao cadastrar cliente:", erro);
                return callback(erro, null);
            }

            callback(null, resultado);

        }
    );

}

// ==========================================
// LISTAR CLIENTES
// ==========================================

function listar(callback) {

    const sql = "SELECT * FROM Cliente";

    conexao.query(sql, (erro, resultado) => {

        if (erro) {
            console.error("Erro ao listar clientes:", erro);
            return callback(erro, null);
        }

        callback(null, resultado);

    });

}

// ==========================================
// BUSCAR CLIENTE POR ID
// ==========================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cliente
        WHERE idCliente = ?
    `;

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            console.error("Erro ao buscar cliente:", erro);
            return callback(erro, null);
        }

        callback(null, resultado);

    });

}

// ==========================================
// BUSCAR CLIENTE POR EMAIL
// ==========================================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM Cliente
        WHERE email = ?
    `;

    conexao.query(sql, [email], (erro, resultado) => {

        if (erro) {
            console.error("Erro ao buscar email:", erro);
            return callback(erro, null);
        }

        callback(null, resultado);

    });

}

// ==========================================
// ATUALIZAR CLIENTE
// ==========================================

function atualizar(id, cliente, callback) {

    const sql = `
        UPDATE Cliente
        SET
            nome = ?,
            cpf = ?,
            telefone = ?,
            email = ?,
            senha = ?,
            data_nascimento = ?,
            loja_idLoja = ?
        WHERE idCliente = ?
    `;

    conexao.query(
        sql,
        [
            cliente.nome,
            cliente.cpf,
            cliente.telefone,
            cliente.email,
            cliente.senha,
            cliente.data_nascimento,
            cliente.loja_idLoja,
            id
        ],
        (erro, resultado) => {

            if (erro) {
                console.error("Erro ao atualizar cliente:", erro);
                return callback(erro, null);
            }

            callback(null, resultado);

        }
    );

}

// ==========================================
// EXCLUIR CLIENTE
// ==========================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cliente
        WHERE idCliente = ?
    `;

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            console.error("Erro ao excluir cliente:", erro);
            return callback(erro, null);
        }

        callback(null, resultado);

    });

}

// ==========================================
// EXPORTAÇÃO
// ==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir

};