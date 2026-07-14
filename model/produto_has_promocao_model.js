const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produto_has_promocao
// =========================

function cadastrar(produto_has_promocao, callback) {

    const sql = `INSERT INTO produto_has_promocao
        ( produto_idProduto,promocao_idPromocao)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_promocao.produto_idProduto,
            produto_has_promocao.promocao_idPromocao
        ],
        callback
    );

}

// =========================
// Listar produto_has_promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_promocao
        WHERE idproduto_has_promocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar produto_has_promocao
// =========================

function atualizar(id, produto_has_promocao, callback) {

    const sql = `
        UPDATE produto_has_promocao
        SET

            produto_idProduto = ?,
            promocao_idPromocao = ?,
           
        WHERE idproduto_has_promocao = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_promocao.produto_idProduto,
            produto_has_promocao.promocao_idPromocao,
            id
        ],
        callback
    );

}

// =========================
// Excluir profuto_has_promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_promocao
        WHERE idproduto_has_promocao = ?
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