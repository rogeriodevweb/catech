const dadosFinanceiros = {

    receitaTotal: 128540.90,

    vendasMes: 182,

    ticketMedio: 706.27,

    saldoDisponivel: 38420.50,

    saldoPendente: 5960.80,

    lucroLiquido: 116830.40,

    totalVendido: 128540.90,

    taxas: 11710.50,

    lucro: 116830.40,

    repasse: "30/07/2026"

};

const recebimentos = [

    {
        data:"30/07/2026",
        valor:4250.90,
        status:"Agendado"
    },

    {
        data:"05/08/2026",
        valor:3810.45,
        status:"Agendado"
    },

    {
        data:"10/08/2026",
        valor:5140.20,
        status:"Agendado"
    }

];

const pagamentos = [

    {
        cliente:"Carlos Alberto",
        pedido:"#1201",
        pagamento:"Pix",
        valor:359.90,
        status:"Pago"
    },

    {
        cliente:"Mariana Souza",
        pedido:"#1202",
        pagamento:"Cartão",
        valor:2199.90,
        status:"Liberado"
    },

    {
        cliente:"Lucas Oliveira",
        pedido:"#1203",
        pagamento:"Boleto",
        valor:499.90,
        status:"Pendente"
    }

];

const produtos = [

    {
        nome:"Notebook Dell Inspiron",
        vendidos:18,
        lucro:28650.90
    },

    {
        nome:"SSD Kingston 480GB",
        vendidos:94,
        lucro:13840.50
    },

    {
        nome:"Mouse Logitech G203",
        vendidos:77,
        lucro:6120.00
    }

];

const extrato = [

    {
        data:"27/07/2026",
        descricao:"Pedido #1520",
        tipo:"Venda",
        valor:"+ R$ 1.249,90"
    },

    {
        data:"26/07/2026",
        descricao:"Taxa da Plataforma",
        tipo:"Comissão",
        valor:"- R$ 62,49"
    },

    {
        data:"25/07/2026",
        descricao:"Pedido #1516",
        tipo:"Venda",
        valor:"+ R$ 379,90"
    },

    {
        data:"24/07/2026",
        descricao:"Estorno Pedido #1508",
        tipo:"Estorno",
        valor:"- R$ 219,90"
    }

];

const alertas = [

    "✅ Seu próximo repasse será realizado em 30/07/2026.",

    "📈 O faturamento deste mês aumentou 18% em relação ao mês anterior.",

    "💰 Você possui saldo disponível para saque.",

    "⚠ Existem pagamentos aguardando liberação."

];

const banco = {

    nome:"Banco do Brasil",

    agencia:"1234-5",

    conta:"12345-6",

    pix:"catech@email.com"

};

function moeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}

/*==============================
CARDS
==============================*/

receitaTotal.textContent = moeda(dadosFinanceiros.receitaTotal);

vendasMes.textContent = dadosFinanceiros.vendasMes;

ticketMedio.textContent = moeda(dadosFinanceiros.ticketMedio);

saldoDisponivel.textContent = moeda(dadosFinanceiros.saldoDisponivel);

saldoPendente.textContent = moeda(dadosFinanceiros.saldoPendente);

lucroLiquido.textContent = moeda(dadosFinanceiros.lucroLiquido);

/*==============================
RESUMO
==============================*/

totalVendido.textContent = moeda(dadosFinanceiros.totalVendido);

taxas.textContent = moeda(dadosFinanceiros.taxas);

lucro.textContent = moeda(dadosFinanceiros.lucro);

repasse.textContent = dadosFinanceiros.repasse;

/*==============================
RECEBIMENTOS
==============================*/

const tabelaRecebimentos = document.getElementById("tabelaRecebimentos");

recebimentos.forEach(item=>{

    tabelaRecebimentos.innerHTML += `

        <tr>

            <td>${item.data}</td>

            <td>${moeda(item.valor)}</td>

            <td>${item.status}</td>

        </tr>

    `;

});

/*==============================
PAGAMENTOS
==============================*/

const tabelaPagamentos = document.getElementById("tabelaPagamentos");

pagamentos.forEach(item=>{

    tabelaPagamentos.innerHTML += `

        <tr>

            <td>${item.cliente}</td>

            <td>${item.pedido}</td>

            <td>${item.pagamento}</td>

            <td>${moeda(item.valor)}</td>

            <td>${item.status}</td>

        </tr>

    `;

});

/*==============================
PRODUTOS
==============================*/

const tabelaProdutos = document.getElementById("tabelaProdutos");

produtos.forEach(item=>{

    tabelaProdutos.innerHTML += `

        <tr>

            <td>${item.nome}</td>

            <td>${item.vendidos}</td>

            <td>${moeda(item.lucro)}</td>

        </tr>

    `;

});

/*==============================
EXTRATO
==============================*/

const tabelaExtrato = document.getElementById("tabelaExtrato");

extrato.forEach(item=>{

    tabelaExtrato.innerHTML += `

        <tr>

            <td>${item.data}</td>

            <td>${item.descricao}</td>

            <td>${item.tipo}</td>

            <td>${item.valor}</td>

        </tr>

    `;

});

/*==============================
BANCO
==============================*/

document.getElementById("banco").textContent = banco.nome;

document.getElementById("agencia").textContent = banco.agencia;

document.getElementById("conta").textContent = banco.conta;

document.getElementById("pix").textContent = banco.pix;

/*==============================
ALERTAS
==============================*/

const listaAlertas = document.getElementById("listaAlertas");

alertas.forEach(alerta=>{

    listaAlertas.innerHTML += `

        <li>${alerta}</li>

    `;

});

/*==============================
BOTÕES
==============================*/

document.querySelector(".btn-editar").addEventListener("click",()=>{

    alert("Tela para editar dados bancários.");

});

document.querySelector(".btn-pdf").addEventListener("click",()=>{

    alert("Exportação em PDF em desenvolvimento.");

});

document.querySelector(".btn-excel").addEventListener("click",()=>{

    alert("Exportação para Excel em desenvolvimento.");

});

document.querySelector(".btn-saque").addEventListener("click",()=>{

    alert("Solicitação de saque enviada com sucesso.");

});

function voltarPagina(){

    history.back();

}