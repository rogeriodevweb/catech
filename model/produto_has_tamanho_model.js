const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produto_has_tamanho
// =========================

function cadastrar(produto_has_tamanho, callback) {

    const sql = `INSERT INTO produto_has_tamanho
        ( produto_idProduto, tamanho_idTamanho )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_tamanho.produto_idProduto,
            produto_has_tamanho.tamanho_idTamanho
        ],
        callback
    );

}

// =========================
// Listar produto_has_tamanho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_tamanho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_tamanho
        WHERE idproduto_has_tamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar produto_has_tamanho
// =========================

function atualizar(id, produto_has_tamanho, callback) {

    const sql = `
        UPDATE produto_has_tamanho
        SET

            produto_idProduto = ?,
            tamanho_idTamanho = ?
    
        WHERE idproduto_has_tamanho = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_tamanho.produto_idProduto,
            produto_has_tamanho.tamanho_idTamanho,
            id
        ],
        callback
    );

}

// =========================
// Excluir produto_has_tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_tamanho
        WHERE idproduto_has_tamanho = ?
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