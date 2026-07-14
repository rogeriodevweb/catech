const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Banner
// =========================

function cadastrar(banner, callback) {

    const sql = `INSERT INTO banner
        (imagem,data_inicio,data_final,status_visibilidade,loja_idLoja)
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Banner
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM banner
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner, callback) {

    const sql = `
        UPDATE Banner
        SET

            imagem = ?,
            data_inicio = ?,
            data_final = ?,
            status_visibilidade = ?,
            loja_idLoja = ?,
        WHERE idBanner = ?
    `;
}
// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Banner
        WHERE idBanner = ?
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