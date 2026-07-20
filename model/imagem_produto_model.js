const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar imagem_produto
// =========================

function cadastrar(imagem_produto, callback) {

    const sql = `
        INSERT INTO imagem_produto
        (arquivo, produto_idProduto)
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar imagem_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM imagem_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM imagem_produto
        WHERE idImagem_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar imagem_produto
// =========================

function atualizar(id, imagem_produto, callback) {

    const sql = `
        UPDATE imagem_produto
        SET
            arquivo = ?,
            produto_idProduto = ?
        WHERE idImagem_produto = ?
    `;

    conexao.query(
        sql,
        [
            imagem_produto.arquivo,
            imagem_produto.produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir imagem_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM imagem_produto
        WHERE idImagem_produto = ?
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