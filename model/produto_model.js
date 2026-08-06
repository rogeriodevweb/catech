const conexao = require("../conexao/conexao.js");


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

            m.nome AS marca,

            c.nome AS categoria,

            l.nomeLoja,


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



module.exports = {

    buscarPorId

};