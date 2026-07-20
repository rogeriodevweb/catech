const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Marca
// =========================

function cadastrar(marca, callback) {

    const sql = `
        INSERT INTO Marca
        (nome, logo_marca)
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo_marca
        ],
        callback
    );

}

// =========================
// Listar Marcas
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Marca
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Marca
// =========================

function atualizar(id, marca, callback) {

    const sql = `
        UPDATE Marca
        SET
            nome = ?,
            logo_marca = ?
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo_marca,
            id
        ],
        callback
    );

}

// =========================
// Excluir Marca
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Marca
        WHERE idMarca = ?
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