// ================================================
// API
// ================================================

const API =
    "https://catech.onrender.com";


// ================================================
// BANNERS
// ================================================

const banners = [

    {

        tipo: "imagem",

        arquivo:
            "assets/banner-home.png",

        tempo: 5000

    },

    {

        tipo: "video",

        arquivo:
            "assets/banner-2.mp4"

    },

    {

        tipo: "video",

        arquivo:
            "assets/banner-3.mp4",


    }

];


let indiceBanner = 0;

let temporizador;


const bannerAtual =
    document.getElementById(
        "bannerAtual"
    );


const btnAnterior =
    document.querySelector(
        ".btn-anterior"
    );


const btnProximo =
    document.querySelector(
        ".btn-proximo"
    );


// ================================================
// CARREGAR BANNER
// ================================================

function carregarBanner() {

    if (!bannerAtual) {

        return;

    }


    clearTimeout(
        temporizador
    );


    bannerAtual.innerHTML = "";


    const banner =
        banners[indiceBanner];


    if (
        banner.tipo === "imagem"
    ) {

        const imagem =
            document.createElement(
                "img"
            );


        imagem.src =
            banner.arquivo;


        imagem.alt =
            "Banner CA Tech";


        bannerAtual.appendChild(
            imagem
        );


        temporizador =
            setTimeout(

                proximoBanner,

                banner.tempo

            );

    }

    else {

        const video =
            document.createElement(
                "video"
            );


        video.src =
            banner.arquivo;


        video.autoplay = true;

        video.muted = true;

        video.playsInline = true;


        bannerAtual.appendChild(
            video
        );


        video.play()
            .catch(() => { });


        video.addEventListener(

            "ended",

            proximoBanner

        );

    }

}


// ================================================
// PRÓXIMO BANNER
// ================================================

function proximoBanner() {

    indiceBanner++;


    if (
        indiceBanner >=
        banners.length
    ) {

        indiceBanner = 0;

    }


    carregarBanner();

}


// ================================================
// BANNER ANTERIOR
// ================================================

function bannerAnterior() {

    indiceBanner--;


    if (
        indiceBanner < 0
    ) {

        indiceBanner =
            banners.length - 1;

    }


    carregarBanner();

}


// ================================================
// EVENTOS DO BANNER
// ================================================

if (btnProximo) {

    btnProximo.addEventListener(

        "click",

        proximoBanner

    );

}


if (btnAnterior) {

    btnAnterior.addEventListener(

        "click",

        bannerAnterior

    );

}


carregarBanner();


// ================================================
// FORMATAR PREÇO
// ================================================

function formatarPreco(valor) {

    const numero =
        Number(valor);


    if (
        Number.isNaN(numero)
    ) {

        return "0,00";

    }


    return numero
        .toFixed(2)
        .replace(".", ",");

}


// ================================================
// ESCAPAR TEXTO
// ================================================

function escaparTexto(texto) {

    if (!texto) {

        return "";

    }


    return texto
        .toString()
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;");

}


// ================================================
// CRIAR CARD
// ================================================

function criarCardProduto(
    produto
) {

    const precoAntigo =
        Number(
            produto.preco_antigo
        ) || 0;


    let precoFinal =
        precoAntigo;


    if (
        produto.preco_promocional !== null &&
        produto.preco_promocional !== undefined &&
        produto.preco_promocional !== ""
    ) {

        precoFinal =
            Number(
                produto.preco_promocional
            );

    }


    // ============================================
    // IMAGEM
    // ============================================

    let imagem =
        produto.imagem;


    if (
        !imagem &&
        produto.imagens
    ) {

        imagem =
            produto.imagens
                .split(",")[0];

    }


    if (!imagem) {

        imagem =
            "assets/sem-imagem.png";

    }


    const nome =
        escaparTexto(
            produto.nome
        );


    const imagemCarrinho =
        escaparTexto(
            imagem
        );


    // ============================================
    // PREÇO ANTIGO
    // ============================================

    let precoAntigoHTML = `

        <p class="p-antigo">

            &nbsp;

        </p>

    `;


    if (
        precoFinal < precoAntigo
    ) {

        precoAntigoHTML = `

            <p class="p-antigo">

                R$
                ${formatarPreco(
                    precoAntigo
                )}

            </p>

        `;

    }


    return `

        <div

            class="card-produtos"

            data-id="${produto.idProduto}"

            data-nome="${nome}"

            data-categoria="${produto.categoria || ""}"

            onclick="
                abrirProduto(
                    ${produto.idProduto}
                )
            "

        >


            <div class="imagem-botao">


                <img

                    class="imagem-produto"

                    src="${imagem}"

                    alt="${nome}"

                    onerror="
                        this.src='assets/sem-imagem.png'
                    "

                >


                <div

                    class="favorito"

                    onclick="
                        event.stopPropagation();

                        favoritar(
                            this,
                            ${produto.idProduto}
                        );
                    "

                >

                    ❤

                </div>


            </div>


            <h3>

                ${produto.nome}

            </h3>


            <span class="categoria-produto">

                ${produto.categoria || ""}

            </span>


            <div class="precos">


                ${precoAntigoHTML}


                <p class="p-promocional">

                    R$
                    ${formatarPreco(
                        precoFinal
                    )}

                </p>


            </div>


            <div class="btn-card">


                <img

                    class="icone-avaliacao"

                    src="assets/avaliacoes.png"

                    alt="Avaliação"

                >


                <h5>

                    4.5

                </h5>


                <button

                    type="button"

                    class="btn-adicionar"

                    onclick="
                        event.stopPropagation();

                        adicionarCarrinho(

                            ${produto.idProduto},

                            '${nome}',

                            ${precoFinal},

                            '${imagemCarrinho}'

                        );
                    "

                >


                    <img

                        src="assets/Carrinho-compras.png"

                        alt="Carrinho"

                    >


                </button>


            </div>


        </div>

    `;

}


// ================================================
// CARREGAR PRODUTOS
// ================================================

async function carregarProdutos() {

    const areaCategorias =
        document.getElementById(
            "areaCategorias"
        );


    try {

        const resposta =
            await fetch(
                `${API}/produtos`
            );


        if (!resposta.ok) {

            throw new Error(

                `Erro HTTP ${resposta.status}`

            );

        }


        const produtos =
            await resposta.json();


        console.log(
            "PRODUTOS:",
            produtos
        );


        areaCategorias.innerHTML =
            "";


        if (
            !Array.isArray(produtos)
        ) {

            throw new Error(
                "A API não retornou uma lista."
            );

        }


        // ============================================
        // AGRUPAR POR CATEGORIA
        // ============================================

        const categorias = {};


        produtos.forEach(

            produto => {


                // Produto inativo
                if (
                    produto.ativo === 0 ||
                    produto.ativo === false
                ) {

                    return;

                }


                const nomeCategoria =
                    produto.categoria
                        ? produto.categoria.trim()
                        : "Outros";


                if (
                    !categorias[nomeCategoria]
                ) {

                    categorias[nomeCategoria] =
                        [];

                }


                categorias[nomeCategoria]
                    .push(
                        produto
                    );

            }

        );


        // ============================================
        // CRIAR CATEGORIAS
        // ============================================

        const nomesCategorias =
            Object.keys(
                categorias
            );


        if (
            nomesCategorias.length === 0
        ) {

            areaCategorias.innerHTML = `

                <p class="sem-produtos">

                    Nenhum produto disponível.

                </p>

            `;


            return;

        }


        nomesCategorias.forEach(

            nomeCategoria => {


                const section =
                    document.createElement(
                        "section"
                    );


                section.classList.add(
                    "secao-produtos"
                );


                // ====================================
                // TÍTULO
                // ====================================

                const cabecalho =
                    document.createElement(
                        "div"
                    );


                cabecalho.classList.add(
                    "titulo-categoria"
                );


                const texto =
                    document.createElement(
                        "div"
                    );


                texto.classList.add(
                    "texto-categoria"
                );


                const titulo =
                    document.createElement(
                        "h2"
                    );


                titulo.textContent =
                    nomeCategoria;


                const descricao =
                    document.createElement(
                        "p"
                    );


                descricao.textContent =
                    `Confira nossos produtos de ${nomeCategoria}.`;


                texto.appendChild(
                    titulo
                );


                texto.appendChild(
                    descricao
                );


                // ====================================
                // VER TUDO
                // ====================================

                const verTudo =
                    document.createElement(
                        "a"
                    );


                verTudo.classList.add(
                    "ver-tudo"
                );


                verTudo.textContent =
                    "Ver tudo";


                verTudo.href =

                    `pages/categorias.html?categoria=${encodeURIComponent(
                        nomeCategoria
                    )
                    }`;


                cabecalho.appendChild(
                    texto
                );


                cabecalho.appendChild(
                    verTudo
                );


                section.appendChild(
                    cabecalho
                );


                // ====================================
                // LISTA
                // ====================================

                const lista =
                    document.createElement(
                        "div"
                    );


                lista.classList.add(
                    "lista-produtos"
                );


                categorias[nomeCategoria]
                    .forEach(

                        produto => {

                            lista
                                .insertAdjacentHTML(

                                    "beforeend",

                                    criarCardProduto(
                                        produto
                                    )

                                );

                        }

                    );


                section.appendChild(
                    lista
                );


                areaCategorias.appendChild(
                    section
                );

            }

        );


    }

    catch (erro) {

        console.error(
            "Erro:",
            erro
        );


        areaCategorias.innerHTML = `

            <p class="sem-produtos">

                Não foi possível carregar
                os produtos.

            </p>

        `;

    }

}


// ================================================
// ABRIR PRODUTO
// ================================================

function abrirProduto(
    idProduto
) {

    window.location.href =

        `pages/produto.html?id=${idProduto}`;

}


// ================================================
// FAVORITOS
// ================================================

function favoritar(
    elemento,
    idProduto
) {

    elemento.classList.toggle(
        "ativo"
    );


    let favoritos =

        JSON.parse(

            localStorage.getItem(
                "favoritos"
            )

        ) || [];


    const card =
        elemento.closest(
            ".card-produtos"
        );


    const nome =
        card
            .querySelector("h3")
            .textContent
            .trim();


    const precoTexto =
        card
            .querySelector(
                ".p-promocional"
            )
            .textContent;


    const preco =

        Number(

            precoTexto
                .replace("R$", "")
                .replace(",", ".")
                .trim()

        );


    const imagem =
        card
            .querySelector(
                ".imagem-produto"
            )
            .src;


    const existe =
        favoritos.find(

            produto =>

                Number(produto.id) ===
                Number(idProduto)

        );


    if (existe) {

        favoritos =
            favoritos.filter(

                produto =>

                    Number(produto.id) !==
                    Number(idProduto)

            );

    }

    else {

        favoritos.push({

            id:
                Number(idProduto),

            nome:
                nome,

            preco:
                preco,

            imagem:
                imagem

        });

    }


    localStorage.setItem(

        "favoritos",

        JSON.stringify(
            favoritos
        )

    );

}


// ================================================
// CARRINHO
// ================================================

function adicionarCarrinho(
    id,
    nome,
    preco,
    imagem
) {

    let carrinho =

        JSON.parse(

            localStorage.getItem(
                "carrinho"
            )

        ) || [];


    const produtoExistente =
        carrinho.find(

            produto =>

                Number(produto.id) ===
                Number(id)

        );


    if (
        produtoExistente
    ) {

        produtoExistente
            .quantidade++;

    }

    else {

        carrinho.push({

            id:
                Number(id),

            nome:
                nome,

            preco:
                Number(preco),

            imagem:
                imagem,

            quantidade:
                1

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


// ================================================
// PESQUISA
// ================================================

function configurarPesquisa() {

    const pesquisa =
        document.getElementById(
            "pesquisaProduto"
        );


    if (!pesquisa) {

        return;

    }


    pesquisa.addEventListener(

        "input",

        function () {


            const termo =
                pesquisa.value
                    .toLowerCase()
                    .trim();


            const cards =

                document.querySelectorAll(
                    ".card-produtos"
                );


            cards.forEach(

                card => {


                    const nome =
                        card.dataset.nome
                            .toLowerCase();


                    const categoria =
                        card.dataset.categoria
                            .toLowerCase();


                    if (

                        nome.includes(
                            termo
                        )

                        ||

                        categoria.includes(
                            termo
                        )

                    ) {

                        card.style.display =
                            "flex";

                    }

                    else {

                        card.style.display =
                            "none";

                    }

                }

            );

        }

    );

}


// ================================================
// INICIAR
// ================================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        carregarProdutos();

        configurarPesquisa();

    }

);