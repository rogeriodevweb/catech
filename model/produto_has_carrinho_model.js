const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produto_has_carrinho
// =========================

function cadastrar(produto_has_carrinho, callback) {

    const sql = `INSERT INTO produto_has_carrinho
        ( produto_idProduto,carrinho_idCarrinho)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_carrinho.produto_idProduto,
            produto_has_carrinho.carrinho_idCarrinho
        ],
        callback
    );

}

// =========================
// Listar produto_has_carrinho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_carrinho
        WHERE idproduto_has_carrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar produto_has_carrinho
// =========================

function atualizar(id, produto_has_carrinho, callback) {

    const sql = `
        UPDATE produto_has_carrinho
        SET

            produto_idProduto = ?,
            carrinho_idCarrinho = ?,
           
        WHERE idproduto_has_carrinho = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_carrinho.produto_idProduto,
            produto_has_carrinho.carrinho_idCarrinho,
            id
        ],
        callback
    );

}

// =========================
// Excluir produto_has_carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_carrinho
        WHERE idproduto_has_carrinho = ?
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