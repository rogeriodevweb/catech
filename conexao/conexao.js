// conectar com o servidor do node.js e o banco de dados MySQL
const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // senha do mySQL
    database: "CATech"
});
conexao.connect((erro) => {
    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;
    }
    console.log("banco conectado com suceso!");
});

module.exports = conexao;