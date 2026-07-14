const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Forma de Pagamento
// =========================

function cadastrar(formas_pagamento, callback) {

    const sql = `INSERT INTO Formas_Pagamento
        ( nome,link,ativo )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM formas_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Formas_Pagamento
        WHERE idFormas_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Forma de Pagamento
// =========================

function atualizar(id, formas_pagamento, callback) {

    const sql = `
        UPDATE Formas_Pagamento
        SET

            nome = ?,
            link = ?,
            ativo = ?

        WHERE idFormas_Pagamento = ?
    `;

    conexao.query(
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Forma de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Formas_Pagamento
        WHERE idFormas_Pagamento = ?
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