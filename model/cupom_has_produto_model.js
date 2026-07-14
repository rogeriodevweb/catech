const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cupom_has_produto
// =========================

function cadastrar(Cupom_has_produto, callback) {

    const sql = `INSERT INTO Cupom_has_produto
        ( Cupom_idCupom, Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            Cupom_has_produto.Cupom_idCupom,
            Cupom_has_produto.Produto_idProduto
        ],
        callback
    );

}
// =========================
// Listar Cupom_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cliente_has_endereco
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_produto
        WHERE idCupom_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Cliente_has_endereco
// =========================

function atualizar(id, Cupom_has_produto, callback) {

    const sql = `
        UPDATE Cupom_has_produto
        SET

            Cupom_idCupom = ?,
            Produto_idProduto = ?
        WHERE idCupom_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            Cupom_has_produto.Cupom_idCupom,
            Cupom_has_produto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cupom_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cupom_has_produto
        WHERE idCupom_has_produto = ?
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