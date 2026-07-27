// ===============================
// PRODUTOS CADASTRADOS
// ===============================

const produtos = {

    1: {

        nome:
        "Kit Eletrica Chave Teste Digital + Caneta Detectora Tensão",

        estoque: 8,

        descricao: `
<h3>Descrição do Produto</h3>

<p>
O <strong>Kit Elétrica Chave Teste Digital + Caneta Detectora de Tensão</strong> é ideal para eletricistas, técnicos e profissionais que realizam instalações, manutenções e reparos em sistemas elétricos.
</p>

<p>
A <strong>Chave Teste Digital</strong> possui visor de fácil leitura para auxiliar na verificação de tensão em tomadas, interruptores, fios e outros componentes elétricos.
</p>

<h4>Características</h4>

<ul>
<li>✔ Chave teste digital.</li>
<li>✔ Caneta detectora sem contato.</li>
<li>✔ Ideal para manutenção elétrica.</li>
<li>✔ Compacto e leve.</li>
<li>✔ Uso profissional e doméstico.</li>
</ul>

<h4>Conteúdo</h4>

<ul>
<li>01 Chave Teste Digital</li>
<li>01 Caneta Detectora</li>
</ul>
`,

        imagemPrincipal:
        "/assets/chave-teste-1.png",

        imagens: [

            "/assets/chave-teste-1.png",
            "/assets/chave-teste-2.png",
            "/assets/chave-teste-3.png",
            "/assets/chave-teste-4.png",
            "/assets/chave-teste-5.png"

        ],

        avaliacaoImagem:
        "/assets/avaliacoes.png",

        avaliacao:
        "(178 avaliações)",

        precoAntigo:
        "R$ 46,90",

        preco:
        "R$ 22,90",

        desconto:
        "48,83% OFF",

        sku:
        "SKU: CZ270F",

        botaoCarrinho:
        "Adicionar ao carrinho",

        botaoComprar:
        "Comprar agora"

    },

    // ==========================================
    // PRODUTO 2
    // ==========================================

    2: {

        nome:
        "Alicate Crimpagem De Conectores De Passagem RJ45, RJ12, RJ11",

        estoque: 15,

        descricao: `
<h3>Descrição do Produto</h3>

<p>
Alicate profissional para crimpar conectores RJ45, RJ12 e RJ11.
Ideal para técnicos de informática, instaladores de redes e manutenção.
</p>

<ul>
<li>✔ Crimpagem precisa</li>
<li>✔ Corte de fios</li>
<li>✔ Decapador integrado</li>
<li>✔ Cabo emborrachado</li>
<li>✔ Alta resistência</li>
</ul>
`,

        imagemPrincipal:
        "/assets/alicate-de-crimpagem.png",

        imagens: [

            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png"

        ],

        avaliacaoImagem:
        "/assets/avaliacoes.png",

        avaliacao:
        "(96 avaliações)",

        precoAntigo:
        "R$ 69,90",

        preco:
        "R$ 59,90",

        desconto:
        "14% OFF",

        sku:
        "SKU: AL450",

        botaoCarrinho:
        "Adicionar ao carrinho",

        botaoComprar:
        "Comprar agora"

    },

    // ==========================================
    // PRODUTO 3
    // ==========================================

    3: {

        nome:
        "Alicate Crimpagem De Conectores De Passagem RJ45, RJ12, RJ11",

        estoque: 10,

        descricao: `
<h3>Descrição do Produto</h3>

<p>
Ferramenta profissional indicada para instalação e manutenção de redes de computadores.
</p>

<ul>
<li>✔ Excelente acabamento</li>
<li>✔ Alta durabilidade</li>
<li>✔ Fácil utilização</li>
</ul>
`,

        imagemPrincipal:
        "/assets/alicate-de-crimpagem.png",

        imagens: [

            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png",
            "/assets/alicate-de-crimpagem.png"

        ],

        avaliacaoImagem:
        "/assets/avaliacoes.png",

        avaliacao:
        "(55 avaliações)",

        precoAntigo:
        "R$ 69,90",

        preco:
        "R$ 59,90",

        desconto:
        "14% OFF",

        sku:
        "SKU: AL451",

        botaoCarrinho:
        "Adicionar ao carrinho",

        botaoComprar:
        "Comprar agora"

    }

};

// ===============================
// IDENTIFICA O PRODUTO
// ===============================

const idProduto = new URLSearchParams(window.location.search).get("id") || 1;

const produto = produtos[idProduto];

// ========================================
// CARREGA AS INFORMAÇÕES DO PRODUTO
// ========================================

// Nome
document.querySelector("#nome-produto").innerHTML = produto.nome;

// Imagem principal
const imagemPrincipal = document.querySelector("#imagem-maior");
imagemPrincipal.src = produto.imagemPrincipal;

// Descrição
document.querySelector("#descricao-produto").innerHTML = produto.descricao;

// ========================================
// MINIATURAS
// ========================================

const lateral = document.querySelector("#img-lateral");

// limpa as miniaturas
lateral.innerHTML = "";

produto.imagens.forEach((imagem) => {

    const caixa = document.createElement("div");
    caixa.classList.add("miniatura-box");

    const img = document.createElement("img");
    img.src = imagem;

    img.addEventListener("click", () => {
        imagemPrincipal.src = imagem;
    });

    caixa.appendChild(img);
    lateral.appendChild(caixa);

});

// ========================================
// AVALIAÇÃO
// ========================================

document.querySelector("#estrela-avaliacao").src =
produto.avaliacaoImagem;

document.querySelector("#valor-avaliacao").innerHTML =
produto.avaliacao;

// ========================================
// PREÇOS
// ========================================

document.querySelector("#preco-antigo").innerHTML =
produto.precoAntigo;

document.querySelector("#preco-promocional").innerHTML =
produto.preco;

document.querySelector("#desconto").innerHTML =
produto.desconto;

// ========================================
// SKU
// ========================================

document.querySelector("#sku").innerHTML =
produto.sku;

// ========================================
// BOTÕES
// ========================================

document.querySelector("#btn-add-carrinho").innerHTML =
produto.botaoCarrinho;

document.querySelector("#btn-comprar").innerHTML =
produto.botaoComprar;

// ========================================
// ÍCONES DOS BOTÕES
// ========================================

document.querySelector("#aumentar").innerHTML =
'<img src="/assets/botao-adicionar.png" alt="Adicionar">';

document.querySelector("#diminuir").innerHTML =
'<img src="/assets/remover.png" alt="Remover">';

// ========================================
// QUANTIDADE
// ========================================

let quantidade = 1;

const numero = document.querySelector("#numero-quantidade");

numero.textContent = quantidade;

// AUMENTAR
document.querySelector("#aumentar").addEventListener("click", () => {

    if (quantidade < produto.estoque) {

        quantidade++;
        numero.textContent = quantidade;

    } else {

        alert("Você atingiu o limite disponível em estoque.");

    }

    const botao = document.querySelector("#aumentar");

    botao.classList.add("click");

    setTimeout(() => {

        botao.classList.remove("click");

    }, 250);

});

// DIMINUIR

document.querySelector("#diminuir").addEventListener("click", () => {

    if (quantidade > 1) {

        quantidade--;

        numero.textContent = quantidade;

    }

    const botao = document.querySelector("#diminuir");

    botao.classList.add("click");

    setTimeout(() => {

        botao.classList.remove("click");

    }, 250);

});

// ========================================
// ADICIONAR AO CARRINHO
// ========================================

document.querySelector("#btn-add-carrinho").addEventListener("click", () => {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const existente = carrinho.find(item => item.id == idProduto);

    if (existente) {

        existente.quantidade += quantidade;

    } else {

        carrinho.push({

            id: idProduto,

            nome: produto.nome,

            preco: produto.preco,

            imagem: produto.imagemPrincipal,

            quantidade: quantidade

        });

    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");

});

// ========================================
// COMPRAR AGORA
// ========================================

document.querySelector("#btn-comprar").addEventListener("click", () => {

    document.querySelector("#btn-add-carrinho").click();

    window.location.href = "carrinho.html";

});