const conexao = require("../conexao/conexao.js");

// ==========================================
// CADASTRAR PRODUTO
// ==========================================

function cadastrar(produto, callback) {

    const sql = `
        INSERT INTO Produto
        (
            nome,
            descricao,
            codigo,
            preco_antigo,
            preco_promocional,
            quantidade_estoque,
            ativo,
            loja_idLoja,
            marca_idMarca,
            categorias_idCategorias
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.loja_idLoja,
            produto.marca_idMarca,
            produto.categorias_idCategorias
        ],
        (erro, resultado) => {

            if (erro) {
                console.error("Erro ao cadastrar produto:", erro);
                return callback(erro, null);
            }

            callback(null, resultado);

        }
    );

}

// ==========================================
// LISTAR PRODUTOS
// ==========================================

function listar(callback) {

    const sql = "SELECT * FROM Produto";

    conexao.query(sql, (erro, resultado) => {

        if (erro) {
            console.error("Erro ao listar produtos:", erro);
            return callback(erro, null);
        }

        callback(null, resultado);

    });

}

// ==========================================
// BUSCAR PRODUTO POR ID
// ==========================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            console.error("Erro ao buscar produto:", erro);
            return callback(erro, null);
        }

        callback(null, resultado);

    });

}

// ==========================================
// ATUALIZAR PRODUTO
// ==========================================

function atualizar(id, produto, callback) {

    const sql = `
        UPDATE Produto
        SET
            nome = ?,
            descricao = ?,
            codigo = ?,
            preco_antigo = ?,
            preco_promocional = ?,
            quantidade_estoque = ?,
            ativo = ?,
            loja_idLoja = ?,
            marca_idMarca = ?,
            categorias_idCategorias = ?
        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.loja_idLoja,
            produto.marca_idMarca,
            produto.categorias_idCategorias,
            id
        ],
        (erro, resultado) => {

            if (erro) {
                console.error("Erro ao atualizar produto:", erro);
                return callback(erro, null);
            }

            callback(null, resultado);

        }
    );

}

// ==========================================
// EXCLUIR PRODUTO
// ==========================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            console.error("Erro ao excluir produto:", erro);
            return callback(erro, null);
        }

        callback(null, resultado);

    });

}

// ==========================================
// EXPORTAÇÃO
// ==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};