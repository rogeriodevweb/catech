// =====================================
// IMPORTA CONEXÃO
// =====================================

const conexao = require("../conexao/conexao");



// =====================================
// CADASTRAR COR
// =====================================

function cadastrar(cor, callback){


const sql = `

INSERT INTO Cores

(
    nome,
    codigo_cor
)

VALUES (?,?)

`;



conexao.query(

    sql,

    [

        cor.nome,

        cor.codigo_cor || null

    ],

    callback

);


}



// =====================================
// LISTAR CORES
// =====================================

function listar(callback){


const sql = `

SELECT

idCores,

nome,

codigo_cor

FROM Cores

ORDER BY nome ASC

`;



conexao.query(

    sql,

    callback

);


}



// =====================================
// EXPORTAÇÃO
// =====================================

module.exports = {

    cadastrar,

    listar

};