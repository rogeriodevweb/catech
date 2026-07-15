const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Carrinho
// =========================

function cadastrar(Carrinho, callback) {

    const sql = `INSERT INTO Carrinho
        ( quantidade_produto,preco_total,Cliente_idCliente )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            Carrinho.quantidade_produto,
            Carrinho.preco_total,
            Carrinho.Cliente_idCliente,
        ],
        callback
    );

}

// =========================
// Listar Carrinhos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Carrinho
        WHERE idCarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Carrinho
// =========================

function atualizar(id, Carrinho, callback) {

    const sql = `
        UPDATE Carrinho
        SET

            quantidade_produto = ?,
            preco_total = ?,
            Cliente_idCliente = ?
        WHERE idCarrinho = ?
    `;

    conexao.query(
        sql,
        [
            Carrinho.quantidade_produto,
            Carrinho.preco_total,
            Carrinho.Cliente_idCliente,
            id
        ],
        callback
    );
}


// =========================
// Excluir Carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Carrinho
        WHERE idCarrinho = ?
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