const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar banner_has_produto
// =========================

function cadastrar(banner_has_produto, callback) {

    const sql = `INSERT INTO banner_has_produto
        ( banner_idBanner,produto_idProduto)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            banner_has_produto.banner_idBanner,
            banner_has_produto.produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar banner_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM banner_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM banner_has_produto
        WHERE idbanner_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar banner_has_produto
// =========================

function atualizar(id, banner_has_produto, callback) {

    const sql = `
        UPDATE banner_has_produto
        SET

            banner_idBanner = ?,
            produto_idProduto = ?

        WHERE idbanner_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            banner_has_produto.banner_idBanner,
            banner_has_produto.produto_idProduto
        ],
        callback
    );

}

// =========================
// Excluir banner_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM banner_has_produto
        WHERE idbanner_has_produto = ?
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