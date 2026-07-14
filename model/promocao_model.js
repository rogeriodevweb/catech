const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Promocao
// =========================

function cadastrar(promocao, callback) {

    const sql = `INSERT INTO Promocao
        (data_inicio,data_final,valor_promocional,nome,banner_idBanner)
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocional,
            promocao.nome,
            promocao.banner_idBanner
        ],
        callback
    );

}

// =========================
// Listar promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Promocao
// =========================

function atualizar(id, promocao, callback) {

    const sql = `
        UPDATE Promocao
        SET

            data_inicio = ?,
            data_final = ?,
            valor_promocional = ?,
            nome = ?,
            banner_idBanner = ?
        WHERE idPromocao = ?
    `;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocional,
            promocao.nome,
            promocao.banner_idBanner,
            id
        ],
        callback
    );

}

// =========================
// Excluir Promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idPromocao = ?
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