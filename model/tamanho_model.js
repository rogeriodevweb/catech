const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar tamanho
// =========================

function cadastrar(tamanho, callback) {

    const sql = `INSERT INTO Tamanho
        ( tamanho )
        VALUES (?)`;

    conexao.query(
        sql,
        [
            tamanho.tamanho
        ],
        callback
    );

}

// =========================
// Listar Tamanho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Tamanho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM tamanho
        WHERE idTamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Tamanho
// =========================

function atualizar(id, tamanho, callback) {

    const sql = `
        UPDATE Tamanho
        SET

            tamanho = ?,
        WHERE idTamanho = ?
    `;

    conexao.query(
        sql,
        [
            tamanho.tamanho,
            id
        ],
        callback
    );

}  ;

// =========================
// Excluir Tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Tamanho
        WHERE idTamanho = ?
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