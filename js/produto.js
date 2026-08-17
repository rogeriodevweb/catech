// ======================================================
// API
// ======================================================

const API =
    "https://catech.onrender.com";


// ======================================================
// PEGAR ID DA URL
// ======================================================

const parametros =
    new URLSearchParams(
        window.location.search
    );


const idProduto =
    parametros.get("id");


// ======================================================
// VERIFICAR ID
// ======================================================

if (!idProduto) {

    alert(
        "Produto não informado."
    );

    window.location.href =
        "../index.html";

}


// ======================================================
// VARIÁVEIS
// ======================================================

let produtoAtual = null;

let quantidade = 1;


// ======================================================
// TRATAR URL DA IMAGEM
// ======================================================

function tratarImagem(imagem) {

    if (!imagem) {

        return "/assets/sem-imagem.png";

    }


    // URL completa

    if (
        imagem.startsWith("http://") ||
        imagem.startsWith("https://")
    ) {

        return imagem;

    }


    // Rota da API

    if (
        imagem.startsWith("/")
    ) {

        return `${API}${imagem}`;

    }


    // Imagem local

    return imagem;

}


// ======================================================
// CARREGAR PRODUTO
// ======================================================

async function carregarProduto() {

    try {

        console.log(
            "================================"
        );


        console.log(
            "BUSCANDO PRODUTO:",
            idProduto
        );


        const resposta =
            await fetch(
                `${API}/produtos/detalhes/${idProduto}`,
                {

                    method: "GET",

                    headers: {

                        "Accept":
                            "application/json"

                    }

                }
            );


        console.log(
            "STATUS:",
            resposta.status
        );


        // ==================================================
        // LER RESPOSTA COMO TEXTO
        // ==================================================

        const textoResposta =
            await resposta.text();


        console.log(
            "RESPOSTA PRODUTO:",
            textoResposta
        );


        // ==================================================
        // VERIFICAR RESPOSTA VAZIA
        // ==================================================

        if (
            !textoResposta ||
            textoResposta.trim() === ""
        ) {

            throw new Error(
                "O servidor retornou uma resposta vazia."
            );

        }


        // ==================================================
        // CONVERTER JSON
        // ==================================================

        let dados;


        try {

            dados =
                JSON.parse(
                    textoResposta
                );

        }

        catch (erroJSON) {

            console.error(
                "Resposta inválida:",
                textoResposta
            );


            throw new Error(
                "O servidor não retornou JSON válido."
            );

        }


        // ==================================================
        // VERIFICAR HTTP
        // ==================================================

        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                dados.erro ||
                `Erro HTTP ${resposta.status}`
            );

        }


        console.log(
            "DADOS RECEBIDOS:",
            dados
        );


        // ==================================================
        // VERIFICAR PRODUTO
        // ==================================================

        if (
            !dados.sucesso ||
            !dados.produto
        ) {

            throw new Error(
                dados.mensagem ||
                "Produto não encontrado."
            );

        }


        produtoAtual =
            dados.produto;


        console.log(
            "PRODUTO:",
            produtoAtual
        );


        // ==================================================
        // PREENCHER PRODUTO
        // ==================================================

        preencherProduto(
            produtoAtual
        );


        // ==================================================
        // CARREGAR IMAGENS
        // ==================================================

        carregarImagens(
            produtoAtual
        );


        // ==================================================
        // CONFIGURAR QUANTIDADE
        // ==================================================

        configurarQuantidade(
            Number(
                produtoAtual.quantidade_estoque
            ) || 0
        );


        // ==================================================
        // CONFIGURAR BOTÕES
        // ==================================================

        configurarBotoes();


        console.log(
            "PRODUTO CARREGADO COM SUCESSO!"
        );


        console.log(
            "================================"
        );

    }

    catch (erro) {

        console.error(
            "ERRO AO CARREGAR PRODUTO:",
            erro
        );


        const nomeProduto =
            document.querySelector(
                "#nome-produto"
            );


        if (nomeProduto) {

            nomeProduto.textContent =
                "Produto não encontrado.";

        }


        alert(
            "Não foi possível carregar os detalhes do produto."
        );

    }

}


// ======================================================
// PREENCHER DADOS
// ======================================================

function preencherProduto(
    produto
) {

    // ==================================================
    // NOME
    // ==================================================

    const nome =
        document.querySelector(
            "#nome-produto"
        );


    if (nome) {

        nome.textContent =
            produto.nome || "";

    }


    // ==================================================
    // DESCRIÇÃO
    // ==================================================

    const descricao =
        document.querySelector(
            "#descricao-produto"
        );


    if (descricao) {

        descricao.textContent =
            produto.descricao || "";

    }


    // ==================================================
    // PREÇO ANTIGO
    // ==================================================

    const precoAntigo =
        Number(
            produto.preco_antigo
        ) || 0;


    const elementoPrecoAntigo =
        document.querySelector(
            "#preco-antigo"
        );


    if (elementoPrecoAntigo) {

        elementoPrecoAntigo.textContent =
            `R$ ${formatarPreco(
                precoAntigo
            )}`;

    }


    // ==================================================
    // PREÇO FINAL
    // ==================================================

    let precoFinal =
        precoAntigo;


    if (

        produto.preco_promocional !==
        null &&

        produto.preco_promocional !==
        undefined &&

        produto.preco_promocional !==
        ""

    ) {

        precoFinal =
            Number(
                produto.preco_promocional
            );

    }


    const elementoPreco =
        document.querySelector(
            "#preco-promocional"
        );


    if (elementoPreco) {

        elementoPreco.textContent =
            `R$ ${formatarPreco(
                precoFinal
            )}`;

    }


    // ==================================================
    // DESCONTO
    // ==================================================

    const elementoDesconto =
        document.querySelector(
            "#desconto"
        );


    if (
        elementoDesconto
    ) {

        if (
            precoAntigo > 0 &&
            precoFinal < precoAntigo
        ) {

            const desconto =
                (
                    (
                        precoAntigo -
                        precoFinal
                    )
                    /
                    precoAntigo
                ) * 100;


            elementoDesconto.textContent =
                `${desconto.toFixed(0)}% OFF`;

        }

        else {

            elementoDesconto.textContent =
                "";

        }

    }


    // ==================================================
    // SKU
    // ==================================================

    const sku =
        document.querySelector(
            "#sku"
        );


    if (sku) {

        sku.textContent =
            `SKU: ${produto.codigo || ""}`;

    }


    // ==================================================
    // AVALIAÇÃO
    // ==================================================

    const estrela =
        document.querySelector(
            "#estrela-avaliacao"
        );


    if (estrela) {

        estrela.src =
            "/assets/avaliacoes.png";

    }


    const valorAvaliacao =
        document.querySelector(
            "#valor-avaliacao"
        );


    if (valorAvaliacao) {

        valorAvaliacao.textContent =
            "";

    }


    // ==================================================
    // BOTÕES
    // ==================================================

    const btnCarrinho =
        document.querySelector(
            "#btn-add-carrinho"
        );


    if (btnCarrinho) {

        btnCarrinho.textContent =
            "Adicionar ao carrinho";

    }


    const btnComprar =
        document.querySelector(
            "#btn-comprar"
        );


    if (btnComprar) {

        btnComprar.textContent =
            "Comprar agora";

    }

}


// ======================================================
// FORMATAR PREÇO
// ======================================================

function formatarPreco(
    valor
) {

    const numero =
        Number(valor);


    if (
        Number.isNaN(numero)
    ) {

        return "0,00";

    }


    return numero
        .toFixed(2)
        .replace(
            ".",
            ","
        );

}


// ======================================================
// NORMALIZAR IMAGENS
// ======================================================

function normalizarImagens(
    imagens
) {

    if (!imagens) {

        return [];

    }


    // ==================================================
    // ARRAY
    // ==================================================

    if (
        Array.isArray(imagens)
    ) {

        return imagens
            .map(
                imagem =>
                    tratarImagem(
                        imagem
                    )
            )
            .filter(
                imagem =>
                    imagem
            );

    }


    // ==================================================
    // STRING
    // ==================================================

    if (
        typeof imagens ===
        "string"
    ) {

        return imagens

            .split("|||")

            .flatMap(
                item =>
                    item.split(",")
            )

            .map(
                imagem =>
                    imagem.trim()
            )

            .filter(
                imagem =>
                    imagem !== ""
            )

            .map(
                imagem =>
                    tratarImagem(
                        imagem
                    )
            );

    }


    return [];

}


// ======================================================
// CARREGAR IMAGENS
// ======================================================

function carregarImagens(
    produto
) {

    const imagemPrincipal =
        document.querySelector(
            "#imagem-maior"
        );


    const lateral =
        document.querySelector(
            "#img-lateral"
        );


    if (
        !imagemPrincipal ||
        !lateral
    ) {

        return;

    }


    lateral.innerHTML =
        "";


    let imagens =
        normalizarImagens(
            produto.imagens
        );


    // ==================================================
    // CASO A API ENVIE UMA ÚNICA IMAGEM
    // ==================================================

    if (
        imagens.length === 0 &&
        produto.imagem
    ) {

        imagens =
            [
                tratarImagem(
                    produto.imagem
                )
            ];

    }


    console.log(
        "IMAGENS NORMALIZADAS:",
        imagens
    );


    // ==================================================
    // SEM IMAGEM
    // ==================================================

    if (
        imagens.length === 0
    ) {

        imagemPrincipal.src =
            "/assets/sem-imagem.png";


        return;

    }


    // ==================================================
    // IMAGEM PRINCIPAL
    // ==================================================

    imagemPrincipal.src =
        imagens[0];


    imagemPrincipal.onerror =
        function () {

            this.src =
                "/assets/sem-imagem.png";

        };


    // ==================================================
    // MINIATURAS
    // ==================================================

    imagens.forEach(
        (
            imagem,
            indice
        ) => {

            const caixa =
                document.createElement(
                    "div"
                );


            caixa.classList.add(
                "miniatura-box"
            );


            const img =
                document.createElement(
                    "img"
                );


            img.src =
                imagem;


            img.alt =
                `${produto.nome} - imagem ${indice + 1}`;


            img.onerror =
                function () {

                    this.src =
                        "/assets/sem-imagem.png";

                };


            img.addEventListener(
                "click",
                () => {

                    imagemPrincipal.src =
                        imagem;

                }
            );


            caixa.appendChild(
                img
            );


            lateral.appendChild(
                caixa
            );

        }
    );

}


// ======================================================
// QUANTIDADE
// ======================================================

function configurarQuantidade(
    estoque
) {

    quantidade =
        1;


    estoque =
        Number(
            estoque
        ) || 0;


    const numero =
        document.querySelector(
            "#numero-quantidade"
        );


    const aumentar =
        document.querySelector(
            "#aumentar"
        );


    const diminuir =
        document.querySelector(
            "#diminuir"
        );


    if (
        !numero ||
        !aumentar ||
        !diminuir
    ) {

        return;

    }


    numero.textContent =
        quantidade;


    aumentar.innerHTML =
        `
        <img
            src="/assets/botao-adicionar.png"
            alt="Adicionar"
        >
        `;


    diminuir.innerHTML =
        `
        <img
            src="/assets/remover.png"
            alt="Remover"
        >
        `;


    aumentar.onclick =
        function () {

            if (
                quantidade < estoque
            ) {

                quantidade++;

                numero.textContent =
                    quantidade;

            }

            else {

                alert(
                    "Você atingiu o limite disponível em estoque."
                );

            }

        };


    diminuir.onclick =
        function () {

            if (
                quantidade > 1
            ) {

                quantidade--;

                numero.textContent =
                    quantidade;

            }

        };

}


// ======================================================
// ADICIONAR AO CARRINHO
// ======================================================

function adicionarAoCarrinho() {

    if (!produtoAtual) {

        alert(
            "Aguarde o produto carregar."
        );

        return;

    }


    let carrinho;


    try {

        carrinho =
            JSON.parse(
                localStorage.getItem(
                    "carrinho"
                )
            ) || [];

    }

    catch (erro) {

        console.error(
            "Erro no carrinho:",
            erro
        );

        carrinho = [];

    }


    const id =
        Number(
            produtoAtual.idProduto
        );


    const existente =
        carrinho.find(
            item =>
                Number(item.id) ===
                id
        );


    // ==================================================
    // PREÇO
    // ==================================================

    const preco =

        produtoAtual.preco_promocional !==
        null &&

        produtoAtual.preco_promocional !==
        undefined &&

        produtoAtual.preco_promocional !==
        ""

            ?

        Number(
            produtoAtual.preco_promocional
        )

            :

        Number(
            produtoAtual.preco_antigo
        );


    // ==================================================
    // IMAGEM
    // ==================================================

    let imagem;


    const imagens =
        normalizarImagens(
            produtoAtual.imagens
        );


    if (
        imagens.length > 0
    ) {

        imagem =
            imagens[0];

    }

    else if (
        produtoAtual.imagem
    ) {

        imagem =
            tratarImagem(
                produtoAtual.imagem
            );

    }

    else {

        imagem =
            "/assets/sem-imagem.png";

    }


    // ==================================================
    // ADICIONAR
    // ==================================================

    if (existente) {

        existente.quantidade +=
            quantidade;

    }

    else {

        carrinho.push({

            id:
                id,

            nome:
                produtoAtual.nome,

            preco:
                preco,

            imagem:
                imagem,

            quantidade:
                quantidade

        });

    }


    // ==================================================
    // SALVAR
    // ==================================================

    localStorage.setItem(

        "carrinho",

        JSON.stringify(
            carrinho
        )

    );


    alert(
        "Produto adicionado ao carrinho!"
    );

}


// ======================================================
// CONFIGURAR BOTÕES
// ======================================================

function configurarBotoes() {

    const btnCarrinho =
        document.querySelector(
            "#btn-add-carrinho"
        );


    const btnComprar =
        document.querySelector(
            "#btn-comprar"
        );


    // ==================================================
    // ADICIONAR AO CARRINHO
    // ==================================================

    if (
        btnCarrinho
    ) {

        btnCarrinho.onclick =
            function () {

                adicionarAoCarrinho();

            };

    }


    // ==================================================
    // COMPRAR - WHATSAPP
    // ==================================================

    if (
        btnComprar
    ) {

        btnComprar.onclick =
            function () {


                if (!produtoAtual) {

                    alert(
                        "Aguarde o produto carregar."
                    );

                    return;

                }


                // ==========================================
                // NÚMERO DO WHATSAPP
                // ==========================================

                const numeroWhatsApp =
                    "5563992057108";


                // ==========================================
                // PREÇO
                // ==========================================

                const preco =

                    produtoAtual.preco_promocional !==
                    null &&

                    produtoAtual.preco_promocional !==
                    undefined &&

                    produtoAtual.preco_promocional !==
                    ""

                        ?

                    Number(
                        produtoAtual.preco_promocional
                    )

                        :

                    Number(
                        produtoAtual.preco_antigo
                    );


                // ==========================================
                // MENSAGEM
                // ==========================================

                const mensagem =

                    `Olá! Tenho interesse neste produto.

Produto: ${produtoAtual.nome}

Código: ${produtoAtual.codigo}

Preço: R$ ${preco
                        .toFixed(2)
                        .replace(
                            ".",
                            ","
                        )}

Quantidade: ${quantidade}

Gostaria de realizar a compra.`;


                // ==========================================
                // LINK
                // ==========================================

                const linkWhatsApp =

                    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                        mensagem
                    )}`;


                console.log(
                    "ABRINDO WHATSAPP:"
                );


                console.log(
                    linkWhatsApp
                );


                // ==========================================
                // ABRIR
                // ==========================================

                window.open(
                    linkWhatsApp,
                    "_blank"
                );

            };

    }

}


// ======================================================
// INICIAR
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarProduto();

    }
);