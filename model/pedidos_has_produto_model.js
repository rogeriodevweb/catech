const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Pedidos_has_produto
// =========================

function cadastrar(pedidos_has_produto, callback) {

    const sql = `
        INSERT INTO Pedidos_has_produto
        (pedidos_idPedidos, produtos_idProdutos, quantidade)
        VALUES (?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            pedidos_has_produto.pedidos_idPedidos,
            pedidos_has_produto.produtos_idProdutos,
            pedidos_has_produto.quantidade
        ],
        callback
    );

}

// =========================
// Listar Pedidos_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Pedidos_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Pedidos_has_produto
        WHERE idPedidos_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Pedidos_has_produto
// =========================

function atualizar(id, pedidos_has_produto, callback) {

    const sql = `
        UPDATE Pedidos_has_produto
        SET
            pedidos_idPedidos = ?,
            produtos_idProdutos = ?,
            quantidade = ?
        WHERE idPedidos_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            pedidos_has_produto.pedidos_idPedidos,
            pedidos_has_produto.produtos_idProdutos,
            pedidos_has_produto.quantidade,
            id
        ],
        callback
    );

}

// =========================
// Excluir Pedidos_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Pedidos_has_produto
        WHERE idPedidos_has_produto = ?
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