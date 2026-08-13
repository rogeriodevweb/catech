//==========================================
// IMPORTA CONEXÃO
//==========================================

const conexao =
    require("../conexao/conexao.js");


//==========================================
// CADASTRAR PRODUTO
//==========================================

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
            categorias_idCategorias,
            cor_idCores,
            tamanho_idTamanho
        )

        VALUES
        (
            ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?
        )

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

            produto.cor_idCores,

            produto.tamanho_idTamanho

        ],

        callback

    );

}


//==========================================
// LISTAR TODOS OS PRODUTOS
//==========================================

function listar(callback) {

    const sql = `

        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

            p.codigo,

            p.preco_antigo,

            p.preco_promocional,

            p.quantidade_estoque,

            p.ativo,


            p.loja_idLoja,

            p.marca_idMarca,

            p.categorias_idCategorias,

            p.cor_idCores,

            p.tamanho_idTamanho,


            m.nome AS marca,

            c.nome AS categoria,

            co.nome AS cor,

            co.codigo_cor,

            t.tamanho,

            l.nome AS loja,


            (
                SELECT

                    CONCAT(

                        'http://localhost:3000/imagem-produto/arquivo/',

                        mp.idMidia_produto

                    )

                FROM midia_produto mp

                WHERE

                    mp.produto_idProduto =
                    p.idProduto

                    AND

                    mp.tipo_midia = 'imagem'

                ORDER BY

                    mp.principal DESC,

                    mp.idMidia_produto ASC

                LIMIT 1

            ) AS imagem


        FROM Produto p


        INNER JOIN Marca m

            ON p.marca_idMarca =
               m.idMarca


        INNER JOIN Categoria c

            ON p.categorias_idCategorias =
               c.idCategoria


        INNER JOIN Cores co

            ON p.cor_idCores =
               co.idCores


        INNER JOIN Tamanho t

            ON p.tamanho_idTamanho =
               t.idTamanho


        INNER JOIN Loja l

            ON p.loja_idLoja =
               l.idLoja


        ORDER BY

            c.nome ASC,

            p.nome ASC

    `;


    conexao.query(

        sql,

        callback

    );

}


//==========================================
// BUSCAR PRODUTO PELO ID
//==========================================

function buscarPorId(

    idProduto,

    callback

) {

    const sql = `

        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

            p.codigo,

            p.preco_antigo,

            p.preco_promocional,

            p.quantidade_estoque,

            p.ativo,


            p.loja_idLoja,

            p.marca_idMarca,

            p.categorias_idCategorias,

            p.cor_idCores,

            p.tamanho_idTamanho,


            m.nome AS marca,

            c.nome AS categoria,

            co.nome AS cor,

            co.codigo_cor,

            t.tamanho,

            l.nome AS loja,


            GROUP_CONCAT(

                CONCAT(

                    'http://localhost:3000/imagem-produto/arquivo/',

                    mp.idMidia_produto

                )

                ORDER BY

                    mp.principal DESC,

                    mp.idMidia_produto ASC

                SEPARATOR '|||'

            ) AS imagens


        FROM Produto p


        INNER JOIN Marca m

            ON p.marca_idMarca =
               m.idMarca


        INNER JOIN Categoria c

            ON p.categorias_idCategorias =
               c.idCategoria


        INNER JOIN Cores co

            ON p.cor_idCores =
               co.idCores


        INNER JOIN Tamanho t

            ON p.tamanho_idTamanho =
               t.idTamanho


        INNER JOIN Loja l

            ON p.loja_idLoja =
               l.idLoja


        LEFT JOIN midia_produto mp

            ON p.idProduto =
               mp.produto_idProduto

            AND

               mp.tipo_midia = 'imagem'


        WHERE

            p.idProduto = ?


        GROUP BY

            p.idProduto,

            p.nome,

            p.descricao,

            p.codigo,

            p.preco_antigo,

            p.preco_promocional,

            p.quantidade_estoque,

            p.ativo,

            p.loja_idLoja,

            p.marca_idMarca,

            p.categorias_idCategorias,

            p.cor_idCores,

            p.tamanho_idTamanho,

            m.nome,

            c.nome,

            co.nome,

            co.codigo_cor,

            t.tamanho,

            l.nome

    `;


    conexao.query(

        sql,

        [idProduto],

        callback

    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId

};