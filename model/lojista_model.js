const conexao = require("../conexao/conexao.js");


// =====================================
// CADASTRAR LOJISTA
// =====================================

function cadastrar(lojista, callback) {


    const sql = `

        INSERT INTO Lojista

        (

            nomeResponsavel,
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
            whatsapp

        )

        VALUES

        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)

    `;



    conexao.query(

        sql,

        [

            lojista.nomeResponsavel,
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
            lojista.whatsapp

        ],

        callback

    );


}



module.exports = {

    cadastrar

};