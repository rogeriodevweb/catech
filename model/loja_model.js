const conexao = require("../conexao/conexao.js");


// =========================
// Cadastrar Loja
// =========================

function cadastrar(Loja, callback) {

    const sql = `
        INSERT INTO Loja
        (
            codigoAcesso,
            nome,
            whatsapp,
            instagram,
            facebook,
            linkedin,
            telefone,
            email,
            Endereco_idEndereco
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;


    conexao.query(

        sql,

        [
            Loja.codigoAcesso,
            Loja.nome,
            Loja.whatsapp,
            Loja.instagram,
            Loja.facebook,
            Loja.linkedin,
            Loja.telefone,
            Loja.email,
            Loja.Endereco_idEndereco
        ],

        callback

    );

}


// =========================
// Listar Lojas
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Loja
    `;


    conexao.query(

        sql,

        callback

    );

}


// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Loja
        WHERE idLoja = ?
    `;


    conexao.query(

        sql,

        [
            id
        ],

        callback

    );

}

// =========================
// Buscar por Código
// =========================

function buscarPorCodigo(codigo, callback) {

    const sql = `
        SELECT *
        FROM Loja
        WHERE codigoAcesso = ?
    `;


    conexao.query(

        sql,

        [codigo],

        callback

    );

}

// =========================
// Exportar funções
// =========================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    buscarPorCodigo

};