//==========================================
// DADOS DO LOJISTA
//==========================================



   const lojista = {

    banner: "../assets/banner-home.png",

    logo: "../assets/logo-loja.png",

    nome: "CA Tech",

    avaliacao: "⭐ 4.9 (528 avaliações)",

    descricao:
    "A CA Tech é especializada em informática, computadores, notebooks, periféricos, assistência técnica e acessórios. Trabalhamos apenas com produtos de qualidade, oferecendo atendimento rápido, garantia e segurança para nossos clientes.",

    cidade: "Araguaína - TO",

    telefone: "(63) 99999-9999",

    email: "contato@catech.com",

    site: "www.catech.com",

    produtos: 254,

    pedidos: 5218,

    clientes: 1890,

    resposta: "5 min"

};



//==========================================
// PREENCHER DADOS
//==========================================

document.getElementById("banner-loja").src = lojista.banner;

document.getElementById("logo-loja").src = lojista.logo;

document.getElementById("nome-loja").textContent = lojista.nome;

document.getElementById("avaliacao-loja").textContent = lojista.avaliacao;

document.getElementById("descricao-loja").textContent = lojista.descricao;

document.getElementById("cidade-loja").textContent = lojista.cidade;

document.getElementById("telefone-loja").textContent = lojista.telefone;

document.getElementById("email-loja").textContent = lojista.email;

document.getElementById("site-loja").textContent = lojista.site;

document.getElementById("produtos-loja").textContent = lojista.produtos;

document.getElementById("pedidos-loja").textContent = lojista.pedidos;

document.getElementById("clientes-loja").textContent = lojista.clientes;

document.getElementById("tempo-resposta").textContent = lojista.resposta;

//==========================================
// CRIAR AVALIAÇÕES
//==========================================

const lista = document.getElementById("lista-avaliacoes");

avaliacoes.forEach(avaliacao => {

    const card = document.createElement("div");

    card.className = "avaliacao";

    card.innerHTML = `

        <h3>${avaliacao.estrelas}</h3>

        <strong>${avaliacao.nome}</strong>

        <p>${avaliacao.comentario}</p>

    `;

    lista.appendChild(card);

});

//==========================================
// BOTÕES
//==========================================

document.getElementById("btn-produtos").addEventListener("click", () => {

    window.location.href = "produtos-lojista.html";

});

document.getElementById("btn-contato").addEventListener("click", () => {

    alert("Em breve você poderá conversar com o lojista!");

});