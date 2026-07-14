const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Pedidos_has_produtos
// =========================

function cadastrar(pedidos_has_produtos, callback) {

    const sql = `INSERT INTO Pedidos_has_produtos
        ( pedidos_idPedidos,produtos_idProdutos,c quantidade)
         VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            pedidos_has_produtos.pedidos_idPedidos,
            pedidos_has_produtos.produtos_idProdutos,
            pedidos_has_produtos.quantidade
        ],
        callback
    );

}

// =========================
// Listar Pedidos_has_produtos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Pedidos_has_produtos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Pedidos_has_produtos
        WHERE idPedidos_has_produtos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Pedidos_has_produtos
// =========================

function atualizar(id, pedidos_has_produtos, callback) {

    const sql = `
        UPDATE Pedidos_has_produtos
        SET

            pedidos_idPedidos = ?,
            produtos_idProdutos = ?,
            quantidade = ?
        WHERE idPedidos_has_produtos = ?
    `;

    conexao.query(
        sql,
        [
            pedidos_has_produtos.pedidos_idPedidos,
            pedidos_has_produtos.produtos_idProdutos,
            pedidos_has_produtos.quantidade,
            id
        ],
        callback
    );

}

// =========================
// Excluir Pedidos_has_produtos
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Pedidos_has_produtos
        WHERE idPedidos_has_produtos = ?
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