const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartao_pagamento
// =========================

function cadastrar(Cartao_pagamento, callback) {

    const sql = `INSERT INTO Cartao_pagamento
        ( numero,data_vencimento,cvc,cpf,nome_proprietario,
         nome_identificacao,bandeira,tipo,ativo,cliente_idCliente)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            Cartao_pagamento.numero,
            Cartao_pagamento.data_vencimento,
            Cartao_pagamento.cvc,
            Cartao_pagamento.cpf,
            Cartao_pagamento.nome_proprietario,
            Cartao_pagamento.nome_identificacao,
            Cartao_pagamento.bandeira,
            Cartao_pagamento.tipo,
            Cartao_pagamento.ativo,
            Cartao_pagamento.cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Cartoes de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Cartao_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Cartao de Pagamento por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}


function listar(callback) {

    const sql = `
        SELECT * FROM Cartao_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}



// =========================
// Atualizar Cartao de pagamento
// =========================

function atualizar(id, cliente, callback) {

    const sql = `
        UPDATE Cartao_pagamento
        SET

            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            cpf = ?,
            nome_proprietario = ?,
            nome_identificacao = ?,
            bandeira = ?,
            tipo = ?,
            ativo = ?,
            cliente_idCliente = ?
        WHERE idCartao_pagamento = ?
    `;

    conexao.query(
        sql,
        [
            Cartao_pagamento.numero,
            Cartao_pagamento.data_vencimento,
            Cartao_pagamento.cvc,
            Cartao_pagamento.cpf,
            Cartao_pagamento.nome_proprietario,
            Cartao_pagamento.nome_identificacao,
            Cartao_pagamento.bandeira,
            Cartao_pagamento.tipo,
            Cartao_pagamento.ativo,
            Cartao_pagamento.cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cartao de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_pagamento
        WHERE idCartao_pagamento = ?
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