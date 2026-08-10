const conexao = require("../conexao/conexao.js");

// =====================================
// CADASTRAR LOJISTA
// =====================================

function cadastrar(lojista, callback) {

    const sql = `

        INSERT INTO Lojista

        (

            nome,
            cpf,
            telefone,
            nascimento,
            email,
            senha,
            nomeLoja,
            cnpj,
            nomeFantasia,
            descricao,
            cep,
            estado,
            cidade,
            bairro,
            endereco,
            instagram,
            whatsapp,
            loja_idLoja

        )

        VALUES

        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)

    `;

    conexao.query(

        sql,

        [

            lojista.nome,
            lojista.cpf,
            lojista.telefone,
            lojista.nascimento,
            lojista.email,
            lojista.senha,
            lojista.nomeLoja,
            lojista.cnpj,
            lojista.nomeFantasia,
            lojista.descricao,
            lojista.cep,
            lojista.estado,
            lojista.cidade,
            lojista.bairro,
            lojista.endereco,
            lojista.instagram,
            lojista.whatsapp,
            lojista.loja_idLoja

        ],

        callback

    );

}


// =====================================
// BUSCAR LOJISTA PELA LOJA
// =====================================

function buscarPorLoja(idLoja, callback) {

    const sql = `

        SELECT *

        FROM Lojista

        WHERE loja_idLoja = ?

    `;


    conexao.query(

        sql,

        [idLoja],

        callback

    );

}


// =====================================
// EXPORTAR
// =====================================

module.exports = {

    cadastrar,

    buscarPorLoja

};