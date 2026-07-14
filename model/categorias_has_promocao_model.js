const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar categorias_has_promocao
// =========================

function cadastrar(categorias_has_promocao, callback) {

    const sql = `INSERT INTO categorias_has_promocao
        ( categorias_idcategorias,promocao_idPromocao)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            categorias_has_promocao.categorias_idcategorias,
            categorias_has_promocao.promocao_idPromocao
        ],
        callback
    );

}

// =========================
// Listar categorias_has_promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM categorias_has_promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM categorias_has_promocao
        WHERE idcategorias_has_promocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Atualizar categorias_has_promocao
// =========================

function atualizar(id, categorias_has_promocao, callback) {

    const sql = `
        UPDATE categorias_has_promocao
        SET

            categorias_idcategorias = ?,
            promocao_idPromocao = ?,
           
        WHERE idcategorias_has_promocao = ?
    `;

    conexao.query(
        sql,
        [
            categorias_has_promocao.categorias_idcategorias,
            categorias_has_promocao.promocao_idPromocao,
            id
        ],
        callback
    );

}

// =========================
// Excluir categorias_has_promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM categorias_has_promocao
        WHERE idcategorias_has_promocao = ?
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