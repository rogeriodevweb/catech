// =====================================
// IMPORTA CONEXÃO
// =====================================

const conexao =
    require("../conexao/conexao");


// =====================================
// CADASTRAR MÍDIA
// =====================================

function cadastrar(midia, callback) {

    const sql = `

        INSERT INTO midia_produto
        (
            arquivo,
            tipo_arquivo,
            tipo_midia,
            principal,
            produto_idProduto
        )

        VALUES (?, ?, ?, ?, ?)

    `;

    conexao.query(

        sql,

        [
            midia.arquivo,
            midia.tipo_arquivo,
            midia.tipo_midia,
            midia.principal,
            midia.produto_idProduto
        ],

        callback

    );

}


// =====================================
// LISTAR MÍDIAS
// =====================================

function listar(callback) {

    const sql = `

        SELECT
            idMidia_produto,
            tipo_arquivo,
            tipo_midia,
            principal,
            produto_idProduto

        FROM midia_produto

        ORDER BY idMidia_produto DESC

    `;

    conexao.query(
        sql,
        callback
    );

}


// =====================================
// BUSCAR POR ID
// =====================================

function buscarPorId(
    idMidia_produto,
    callback
) {

    const sql = `

        SELECT *

        FROM midia_produto

        WHERE idMidia_produto = ?

    `;

    conexao.query(

        sql,

        [idMidia_produto],

        callback

    );

}


// =====================================
// BUSCAR ARQUIVO
// =====================================

function buscarArquivo(
    idMidia_produto,
    callback
) {

    const sql = `

        SELECT
            arquivo,
            tipo_arquivo,
            tipo_midia

        FROM midia_produto

        WHERE idMidia_produto = ?

        LIMIT 1

    `;

    conexao.query(

        sql,

        [idMidia_produto],

        callback

    );

}


// =====================================
// ATUALIZAR MÍDIA
// =====================================

function atualizar(
    idMidia_produto,
    midia,
    callback
) {

    let sql;
    let valores;


    if (midia.arquivo) {

        sql = `

            UPDATE midia_produto

            SET
                arquivo = ?,
                tipo_arquivo = ?,
                tipo_midia = ?,
                principal = ?

            WHERE idMidia_produto = ?

        `;

        valores = [

            midia.arquivo,
            midia.tipo_arquivo,
            midia.tipo_midia,
            midia.principal,
            idMidia_produto

        ];

    } else {

        sql = `

            UPDATE midia_produto

            SET
                principal = ?

            WHERE idMidia_produto = ?

        `;

        valores = [

            midia.principal,
            idMidia_produto

        ];

    }


    conexao.query(

        sql,

        valores,

        callback

    );

}


// =====================================
// EXCLUIR MÍDIA
// =====================================

function excluir(
    idMidia_produto,
    callback
) {

    const sql = `

        DELETE FROM midia_produto

        WHERE idMidia_produto = ?

    `;

    conexao.query(

        sql,

        [idMidia_produto],

        callback

    );

}


// =====================================
// EXPORTAÇÃO
// =====================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    buscarArquivo,

    atualizar,

    excluir

};