const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar avaliacao_produto
// =========================

function cadastrar(avaliacao_produto, callback) {

    const sql = `INSERT INTO avaliacao_produto
        ( data,nota,descricao,produto_idProduto )
        VALUES (?, ?, ?, ?)`;
        

    conexao.query(
        sql,
        [
            avaliacao_produto.data,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar avaliacao_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM avaliacao_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM avaliacao_produto
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar avaliacao_produto
// =========================

function atualizar(id, avaliacao_produto, callback) {

    const sql = `
        UPDATE avaliacao_produto
        SET

            data = ?,
            nota = ?,
            descricao = ?,
            produto_idProduto = ?
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacao_produto.data,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir avaliacao_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM avaliacao_produto
        WHERE idavaliacao_produto = ?
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