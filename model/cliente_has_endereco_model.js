const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cliente_has_endereco
// =========================

function cadastrar(cliente_has_endereco, callback) {

    const sql = `INSERT INTO Cliente_has_endereco
        ( Cliente_idCliente, Endereco_idEndereco )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cliente_has_endereco.Cliente_idCliente,
            cliente_has_endereco.Endereco_idEndereco
        ],
        callback
    );

}
// =========================
// Listar Cliente_has_endereco
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cliente_has_endereco
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cliente_has_endereco
        WHERE idCliente_has_endereco = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Cliente_has_endereco
// =========================

function atualizar(id, cliente_has_endereco, callback) {

    const sql = `
        UPDATE Cliente_has_endereco
        SET

            Cliente_idCliente = ?,
            Endereco_idEndereco = ?
        WHERE idCliente_has_endereco = ?
    `;

    conexao.query(
        sql,
        [
            cliente_has_endereco.Cliente_idCliente,
            cliente_has_endereco.Endereco_idEndereco,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cliente_has_endereco
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cliente_has_endereco
        WHERE idCliente_has_endereco = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};