// ========================================
// API
// ========================================

const API =
    "http://localhost:3000";


// ========================================
// PEGAR ID DA URL
// ========================================

const parametros =
    new URLSearchParams(
        window.location.search
    );

const idProduto =
    parametros.get("id");


// ========================================
// VERIFICAR ID
// ========================================

if (!idProduto) {

    alert(
        "Produto não informado."
    );

    window.location.href =
        "../index.html";

}


// ========================================
// VARIÁVEIS
// ========================================

let produtoAtual = null;

let quantidade = 1;


// ========================================
// CARREGAR PRODUTO
// ========================================

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

                `${API}/produtos/detalhes/${idProduto}`

            );


        console.log(
            "STATUS:",
            resposta.status
        );


        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP ${resposta.status}`
            );

        }


        const dados =
            await resposta.json();


        console.log(
            "DADOS RECEBIDOS:",
            dados
        );


        if (
            !dados.sucesso ||
            !dados.produto
        ) {

            throw new Error(
                "Produto não encontrado."
            );

        }


        produtoAtual =
            dados.produto;


        console.log(
            "PRODUTO:",
            produtoAtual
        );


        // ==================================
        // PREENCHER PRODUTO
        // ==================================

        preencherProduto(
            produtoAtual
        );


        // ==================================
        // CARREGAR IMAGENS
        // ==================================

        carregarImagens(
            produtoAtual
        );


        // ==================================
        // CONFIGURAR QUANTIDADE
        // ==================================

        configurarQuantidade(
            produtoAtual.quantidade_estoque
        );


        // ==================================
        // CONFIGURAR BOTÕES
        // ==================================

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


        document.querySelector(
            "#nome-produto"
        ).textContent =
            "Produto não encontrado.";


        alert(
            "Não foi possível carregar os detalhes do produto."
        );

    }

}


// ========================================
// PREENCHER DADOS
// ========================================

function preencherProduto(
    produto
) {

    // ==================================
    // NOME
    // ==================================

    document.querySelector(
        "#nome-produto"
    ).textContent =
        produto.nome;


    // ==================================
    // DESCRIÇÃO
    // ==================================

    document.querySelector(
        "#descricao-produto"
    ).innerHTML =
        produto.descricao || "";


    // ==================================
    // PREÇO ANTIGO
    // ==================================

    const precoAntigo =
        Number(
            produto.preco_antigo
        ) || 0;


    document.querySelector(
        "#preco-antigo"
    ).textContent =

        `R$ ${formatarPreco(
            precoAntigo
        )}`;


    // ==================================
    // PREÇO FINAL
    // ==================================

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


    document.querySelector(
        "#preco-promocional"
    ).textContent =

        `R$ ${formatarPreco(
            precoFinal
        )}`;


    // ==================================
    // DESCONTO
    // ==================================

    const elementoDesconto =
        document.querySelector(
            "#desconto"
        );


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


    // ==================================
    // SKU
    // ==================================

    document.querySelector(
        "#sku"
    ).textContent =

        `SKU: ${produto.codigo}`;


    // ==================================
    // AVALIAÇÃO
    // ==================================

    document.querySelector(
        "#estrela-avaliacao"
    ).src =
        "/assets/avaliacoes.png";


    document.querySelector(
        "#valor-avaliacao"
    ).textContent =
        "";


    // ==================================
    // BOTÕES
    // ==================================

    document.querySelector(
        "#btn-add-carrinho"
    ).textContent =
        "Adicionar ao carrinho";


    document.querySelector(
        "#btn-comprar"
    ).textContent =
        "Comprar agora";

}


// ========================================
// FORMATAR PREÇO
// ========================================

function formatarPreco(
    valor
) {

    return Number(
        valor
    )
        .toFixed(2)
        .replace(
            ".",
            ","
        );

}


// ========================================
// CARREGAR IMAGENS
// ========================================

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


    lateral.innerHTML =
        "";


    let imagens =
        produto.imagens || [];


    // ==================================
    // SE VIER STRING
    // ==================================

    if (
        typeof imagens ===
        "string"
    ) {

        imagens =
            imagens
                .split("|||")
                .filter(
                    imagem =>
                        imagem.trim() !== ""
                );

    }


    console.log(
        "IMAGENS:",
        imagens
    );


    // ==================================
    // SEM IMAGEM
    // ==================================

    if (
        imagens.length === 0
    ) {

        imagemPrincipal.src =
            "/assets/sem-imagem.png";

        return;

    }


    // ==================================
    // IMAGEM PRINCIPAL
    // ==================================

    imagemPrincipal.src =
        imagens[0];


    // ==================================
    // MINIATURAS
    // ==================================

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


// ========================================
// QUANTIDADE
// ========================================

function configurarQuantidade(
    estoque
) {

    quantidade =
        1;


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


    numero.textContent =
        quantidade;


    aumentar.innerHTML =
        '<img src="/assets/botao-adicionar.png" alt="Adicionar">';


    diminuir.innerHTML =
        '<img src="/assets/remover.png" alt="Remover">';


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


// ========================================
// ADICIONAR AO CARRINHO
// ========================================

function adicionarAoCarrinho() {

    if (!produtoAtual) {

        return;

    }


    let carrinho =

        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];


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


    const imagem =

        produtoAtual.imagens &&
        produtoAtual.imagens.length > 0

            ?

        produtoAtual.imagens[0]

            :

        "/assets/sem-imagem.png";


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


// ========================================
// CONFIGURAR BOTÕES
// ========================================

function configurarBotoes() {

    const btnCarrinho =
        document.querySelector(
            "#btn-add-carrinho"
        );


    const btnComprar =
        document.querySelector(
            "#btn-comprar"
        );


    // ========================================
    // BOTÃO ADICIONAR AO CARRINHO
    // ========================================

    if (btnCarrinho) {

        btnCarrinho.onclick =
            function () {

                adicionarAoCarrinho();

            };

    }


    // ========================================
    // BOTÃO COMPRAR - WHATSAPP
    // ========================================

    if (btnComprar) {

        btnComprar.onclick =
            function () {

                // Verificar se o produto foi carregado
                if (!produtoAtual) {

                    alert(
                        "Aguarde o produto carregar."
                    );

                    return;

                }


                // ==================================
                // NÚMERO DO WHATSAPP
                // ==================================

                const numeroWhatsApp =
                    "5563992057108";


                // ==================================
                // PREÇO
                // ==================================

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


                // ==================================
                // MENSAGEM
                // ==================================

                const mensagem =

                    `Olá! Tenho interesse neste produto.

Produto: ${produtoAtual.nome}

Código: ${produtoAtual.codigo}

Preço: R$ ${preco
                        .toFixed(2)
                        .replace(".", ",")}

Quantidade: ${quantidade}

Gostaria de realizar a compra.`;


                // ==================================
                // LINK WHATSAPP
                // ==================================

                const linkWhatsApp =

                    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;


                console.log(
                    "ABRINDO WHATSAPP:"
                );

                console.log(
                    linkWhatsApp
                );


                // ==================================
                // ABRIR WHATSAPP
                // ==================================

                window.open(
                    linkWhatsApp,
                    "_blank"
                );

            };

    }

}


// ========================================
// INICIAR
// ========================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        carregarProduto();

    }

);

