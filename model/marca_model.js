const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Marca
// =========================

function cadastrar(pedidos, callback) {

    const sql = `INSERT INTO Pedidos
        ( nome,logo_marca)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            pedidos.nome,
            pedidos.logo_marca
        ],
        callback
    );

}
// =========================
// Listar marca
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Marca
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar marca
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
// Listar marca
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Marca
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar marca
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
// Excluir marca
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