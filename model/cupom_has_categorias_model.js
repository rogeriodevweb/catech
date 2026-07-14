const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cupom_has_categorias
// =========================

function cadastrar(cupom_has_categorias, callback) {

    const sql = `INSERT INTO cupom_has_categorias
        ( cupom_idCupom,categorias_idcategorias )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cupom_has_categorias.cupom_idCupom,
            cupom_has_categorias.categorias_idcategorias
        ],
        callback
    );

}

// =========================
// Listar Cupom_has_categorias
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cupom_has_categorias
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cupom_has_categorias
        WHERE cupom_idCupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar Cupom_has_categorias
// =========================

function atualizar(id, cupom_has_categorias, callback) {

    const sql = `
        UPDATE cupom_has_categorias
        SET

            cupom_idCupom = ?,
            categorias_idcategorias = ?
        WHERE cupom_idCupom = ?
    `;

    conexao.query(
        sql,
        [
            cupom_has_categorias.cupom_idCupom,
            cupom_has_categorias.categorias_idcategorias,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cupom_has_categorias
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cupom_has_categorias
        WHERE cupom_idCupom = ?
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