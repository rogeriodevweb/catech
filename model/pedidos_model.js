const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Pedidos
// =========================

function cadastrar(pedidos, callback) {

    const sql = `INSERT INTO Pedidos
        ( data_pedido,nota_fiscal,data_entrega,status_entrega,
         status_pagamento,codigo,cliente_idCliente,Loja_idLoja,endereco_idEndereco,
         formas_pagamento_idFormas_pagamento)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            pedidos.data_pedido,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            pedidos.status_pagamento,
            pedidos.codigo,
            pedidos.cliente_idCliente,
            pedidos.Loja_idLoja,
            pedidos.endereco_idEndereco,
            pedidos.formas_pagamento_idFormas_pagamento
        ],
        callback
    );

}

// =========================
// Listar Pedidos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Pedidos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Pedidos
        WHERE idPedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Pedidos
// =========================

function atualizar(id, pedidos, callback) {

    const sql = `
        UPDATE Pedidos
        SET

            data_pedido = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?,
            status_pagamento = ?,
            codigo = ?,
            cliente_idCliente = ?,
            Loja_idLoja = ?,
            endereco_idEndereco = ?,
            formas_pagamento_idFormas_pagamento = ?
            data_nascimento = ?,
            Loja_idLoja = ?

        WHERE idPedidos = ?
    `;

    conexao.query(
        sql,
        [
            pedidos.data_pedido,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            pedidos.status_pagamento,
            pedidos.codigo,
            pedidos.cliente_idCliente,
            pedidos.Loja_idLoja,
            pedidos.endereco_idEndereco,
            pedidos.formas_pagamento_idFormas_pagamento
        ],
        callback
    );

}

// =========================
// Excluir Pedidos
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Pedidos
        WHERE idPedidos = ?
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