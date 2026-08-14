// conectar com o servidor do node.js e o banco de dados MySQL
const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "thomas.proxy.rlwy.net",
    user: "root",
    port: 48179,
    password: "scZMCzucnFLsRIkFhFroLTISoVWutpez", // senha do mySQL
    database: "railway"
});
conexao.connect((erro) => {
    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;
    }
    console.log("banco conectado com suceso!");
});

module.exports = conexao;