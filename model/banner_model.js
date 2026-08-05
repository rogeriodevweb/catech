const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Banner
// =========================

function cadastrar(banner, callback) {

    const sql = `
        INSERT INTO banner
        (
            titulo,
            descricao,
            arquivo,
            tipo_arquivo,
            link,
            data_inicio,
            data_final,
            status_visibilidade,
            loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            banner.titulo,
            banner.descricao,
            banner.arquivo,
            banner.tipo_arquivo,
            banner.link,
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
        SELECT *
        FROM banner
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Banner por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner, callback) {

    const sql = `
        UPDATE banner
        SET
            titulo = ?,
            descricao = ?,
            arquivo = ?,
            tipo_arquivo = ?,
            link = ?,
            data_inicio = ?,
            data_final = ?,
            status_visibilidade = ?,
            loja_idLoja = ?
        WHERE idBanner = ?
    `;

    conexao.query(
        sql,
        [
            banner.titulo,
            banner.descricao,
            banner.arquivo,
            banner.tipo_arquivo,
            banner.link,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar Arquivo do Banner
// =========================

function buscarArquivo(id, callback) {

    const sql = `
        SELECT
            arquivo,
            tipo_arquivo
        FROM banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarArquivo,
    atualizar,
    excluir

};