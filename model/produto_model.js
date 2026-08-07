const conexao = require("../conexao/conexao.js");


// =====================================
// CADASTRAR PRODUTO
// =====================================

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

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

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



// =====================================
// BUSCAR DETALHES DO PRODUTO
// =====================================

function buscarPorId(idProduto, callback) {

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


            -- ID DA LOJA
            p.loja_idLoja,


            -- ID DA MARCA
            p.marca_idMarca,


            -- ID DA CATEGORIA
            p.categorias_idCategorias,


            -- ID DA COR
            p.cor_idCores,


            -- ID DO TAMANHO
            p.tamanho_idTamanho,


            -- NOME DA MARCA
            m.nome AS marca,


            -- NOME DA CATEGORIA
            c.nome AS categoria,


            -- NOME DA COR
            co.nome AS cor,


            -- CÓDIGO DA COR
            co.codigo_cor,


            -- TAMANHO
            t.tamanho AS tamanho,


            -- LOJA
            l.nome AS loja,


            -- IMAGENS E VÍDEOS
            GROUP_CONCAT(

                CONCAT(

                    'data:',

                    mp.tipo_arquivo,

                    ';base64,',

                    TO_BASE64(mp.arquivo)

                )

            ) AS imagens


        FROM Produto p


        INNER JOIN Marca m

            ON p.marca_idMarca = m.idMarca


        INNER JOIN Categoria c

            ON p.categorias_idCategorias = c.idCategoria


        INNER JOIN Cores co

            ON p.cor_idCores = co.idCores


        INNER JOIN Tamanho t

            ON p.tamanho_idTamanho = t.idTamanho


        INNER JOIN Loja l

            ON p.loja_idLoja = l.idLoja


        LEFT JOIN midia_produto mp

            ON p.idProduto = mp.produto_idProduto


        WHERE p.idProduto = ?


        GROUP BY p.idProduto

    `;


    conexao.query(

        sql,

        [idProduto],

        callback

    );

}



// =====================================
// EXPORTAÇÃO
// =====================================

module.exports = {

    cadastrar,

    buscarPorId

};