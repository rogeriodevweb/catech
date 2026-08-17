// ======================================================
// API
// ======================================================

const API =
    "https://catech.onrender.com";


// ======================================================
// ELEMENTOS
// ======================================================

const listaProdutos =
    document.getElementById(
        "listaProdutos"
    );


const semProdutos =
    document.getElementById(
        "semProdutos"
    );


const pesquisa =
    document.getElementById(
        "pesquisa"
    );


const categoria =
    document.getElementById(
        "categoria"
    );


const status =
    document.getElementById(
        "status"
    );


const totalProdutos =
    document.getElementById(
        "totalProdutos"
    );


const produtosAtivos =
    document.getElementById(
        "produtosAtivos"
    );


const semEstoque =
    document.getElementById(
        "semEstoque"
    );


const promocao =
    document.getElementById(
        "promocao"
    );


// ======================================================
// ARRAY DOS PRODUTOS
// ======================================================

let produtos = [];


// ======================================================
// CARREGAR PRODUTOS DA API
// ======================================================

async function carregarProdutos() {

    try {

        console.log(
            "Buscando produtos..."
        );


        const resposta =
            await fetch(
                `${API}/produtos`,
                {

                    method: "GET",

                    headers: {

                        "Accept":
                            "application/json"

                    }

                }
            );


        console.log(
            "Status:",
            resposta.status
        );


        // ==================================================
        // LER COMO TEXTO
        // ==================================================

        const textoResposta =
            await resposta.text();


        console.log(
            "Resposta:",
            textoResposta
        );


        // ==================================================
        // RESPOSTA VAZIA
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
                "JSON inválido:",
                textoResposta
            );


            throw new Error(
                "O servidor não retornou JSON válido."
            );

        }


        // ==================================================
        // VERIFICAR ERRO
        // ==================================================

        if (!resposta.ok) {

            throw new Error(

                dados.mensagem ||

                dados.erro ||

                `Erro HTTP ${resposta.status}`

            );

        }


        // ==================================================
        // VERIFICAR ARRAY
        // ==================================================

        if (
            Array.isArray(dados)
        ) {

            produtos =
                dados;

        }

        else if (
            Array.isArray(
                dados.produtos
            )
        ) {

            produtos =
                dados.produtos;

        }

        else {

            throw new Error(
                "A API não retornou uma lista de produtos."
            );

        }


        console.log(
            "PRODUTOS CARREGADOS:",
            produtos
        );


        // ==================================================
        // PREPARAR PRODUTOS
        // ==================================================

        produtos =
            produtos.map(
                produto => {

                    return {

                        ...produto,

                        id:
                            Number(
                                produto.idProduto ??
                                produto.id
                            ),

                        nome:
                            produto.nome ||
                            "Produto sem nome",

                        categoria:
                            produto.categoria ||
                            produto.nomeCategoria ||
                            "Outros",

                        marca:
                            produto.marca ||
                            produto.nomeMarca ||
                            "Sem marca",

                        estoque:
                            Number(
                                produto.quantidade_estoque ??
                                produto.estoque ??
                                0
                            ),

                        preco:
                            Number(
                                produto.preco_promocional ??
                                produto.preco_antigo ??
                                produto.preco ??
                                0
                            )

                    };

                }
            );


        // ==================================================
        // ATUALIZAR INTERFACE
        // ==================================================

        carregarCategorias();

        atualizarEstatisticas();

        renderizarProdutos();

    }

    catch (erro) {

        console.error(
            "ERRO AO CARREGAR PRODUTOS:",
            erro
        );


        produtos = [];


        if (
            listaProdutos
        ) {

            listaProdutos.innerHTML = `

                <p class="sem-produtos">

                    Não foi possível carregar os produtos.

                </p>

            `;

        }

    }

}


// ======================================================
// CARREGAR CATEGORIAS
// ======================================================

function carregarCategorias() {

    if (
        !categoria
    ) {

        return;

    }


    // ==================================================
    // LIMPAR
    // ==================================================

    categoria.innerHTML = `

        <option value="">

            Todas as categorias

        </option>

    `;


    // ==================================================
    // PEGAR CATEGORIAS ÚNICAS
    // ==================================================

    const categorias = [

        ...new Set(

            produtos
                .map(
                    produto =>
                        produto.categoria
                )
                .filter(
                    categoria =>
                        categoria
                )

        )

    ];


    // ==================================================
    // ADICIONAR
    // ==================================================

    categorias.forEach(
        cat => {

            categoria.innerHTML += `

                <option value="${cat}">

                    ${cat}

                </option>

            `;

        }
    );

}


// ======================================================
// ESTATÍSTICAS
// ======================================================

function atualizarEstatisticas() {

    if (
        totalProdutos
    ) {

        totalProdutos.textContent =
            produtos.length;

    }


    if (
        produtosAtivos
    ) {

        produtosAtivos.textContent =

            produtos.filter(
                produto =>
                    produto.ativo === 1 ||
                    produto.ativo === true ||
                    produto.status === "ativo"
            ).length;

    }


    if (
        semEstoque
    ) {

        semEstoque.textContent =

            produtos.filter(
                produto =>
                    Number(
                        produto.estoque
                    ) <= 0
            ).length;

    }


    if (
        promocao
    ) {

        promocao.textContent =

            produtos.filter(
                produto => {

                    const antigo =
                        Number(
                            produto.preco_antigo
                        ) || 0;


                    const promocional =
                        Number(
                            produto.preco_promocional
                        ) || 0;


                    return (
                        promocional > 0 &&
                        promocional < antigo
                    );

                }
            ).length;

    }

}


// ======================================================
// RENDERIZAR PRODUTOS
// ======================================================

function renderizarProdutos() {

    if (
        !listaProdutos
    ) {

        return;

    }


    listaProdutos.innerHTML =
        "";


    // ==================================================
    // PESQUISA
    // ==================================================

    const texto =
        pesquisa
            ? pesquisa.value
                .toLowerCase()
                .trim()
            : "";


    const categoriaSelecionada =
        categoria
            ? categoria.value
            : "";


    const statusSelecionado =
        status
            ? status.value
            : "";


    // ==================================================
    // FILTRAR
    // ==================================================

    const resultado =
        produtos.filter(
            produto => {


                const nome =
                    String(
                        produto.nome || ""
                    )
                    .toLowerCase();


                const marca =
                    String(
                        produto.marca || ""
                    )
                    .toLowerCase();


                const categoriaProduto =
                    String(
                        produto.categoria || ""
                    );


                const pesquisaOk =

                    nome.includes(
                        texto
                    )

                    ||

                    marca.includes(
                        texto
                    );


                const categoriaOk =

                    categoriaSelecionada === ""

                    ||

                    categoriaProduto ===
                        categoriaSelecionada;


                // ==================================================
                // STATUS
                // ==================================================

                let statusProduto;


                if (
                    Number(
                        produto.estoque
                    ) <= 0
                ) {

                    statusProduto =
                        "estoque";

                }

                else if (

                    produto.ativo === 0 ||

                    produto.ativo === false

                ) {

                    statusProduto =
                        "inativo";

                }

                else {

                    statusProduto =
                        "ativo";

                }


                const statusOk =

                    statusSelecionado === ""

                    ||

                    statusProduto ===
                        statusSelecionado;


                return (

                    pesquisaOk &&

                    categoriaOk &&

                    statusOk

                );

            }
        );


    // ==================================================
    // NENHUM PRODUTO
    // ==================================================

    if (
        resultado.length === 0
    ) {

        listaProdutos.style.display =
            "none";


        if (
            semProdutos
        ) {

            semProdutos.style.display =
                "block";

        }


        return;

    }


    // ==================================================
    // MOSTRAR LISTA
    // ==================================================

    listaProdutos.style.display =
        "grid";


    if (
        semProdutos
    ) {

        semProdutos.style.display =
            "none";

    }


    // ==================================================
    // CRIAR CARDS
    // ==================================================

    resultado.forEach(
        produto => {

            // ==============================================
            // STATUS
            // ==============================================

            let statusProduto;


            if (
                Number(
                    produto.estoque
                ) <= 0
            ) {

                statusProduto =
                    "estoque";

            }

            else if (

                produto.ativo === 0 ||

                produto.ativo === false

            ) {

                statusProduto =
                    "inativo";

            }

            else {

                statusProduto =
                    "ativo";

            }


            // ==============================================
            // IMAGEM
            // ==============================================

            let imagem =
                produto.imagem;


            if (
                !imagem &&
                produto.imagens
            ) {

                if (
                    Array.isArray(
                        produto.imagens
                    )
                ) {

                    imagem =
                        produto.imagens[0];

                }

                else {

                    imagem =
                        String(
                            produto.imagens
                        )
                        .split("|||")[0];

                }

            }


            if (
                !imagem
            ) {

                imagem =
                    "../assets/sem-imagem.png";

            }


            // ==============================================
            // PREÇO
            // ==============================================

            const preco =
                Number(
                    produto.preco
                ) || 0;


            listaProdutos.innerHTML += `

                <div
                    class="card-produto"
                    data-id="${produto.id}"
                >


                    <!-- IMAGEM -->

                    <img

                        src="${imagem}"

                        alt="${produto.nome}"

                        onerror="
                            this.src='../assets/sem-imagem.png'
                        "

                    >


                    <div
                        class="info-produto"
                    >


                        <!-- NOME -->

                        <h2>

                            ${produto.nome}

                        </h2>


                        <!-- CATEGORIA -->

                        <p>

                            <strong>
                                Categoria:
                            </strong>

                            ${produto.categoria}

                        </p>


                        <!-- MARCA -->

                        <p>

                            <strong>
                                Marca:
                            </strong>

                            ${produto.marca}

                        </p>


                        <!-- ESTOQUE -->

                        <p>

                            <strong>
                                Estoque:
                            </strong>

                            ${produto.estoque}

                        </p>


                        <!-- PREÇO -->

                        <p
                            class="preco"
                        >

                            ${preco.toLocaleString(
                                "pt-BR",
                                {
                                    style:
                                        "currency",

                                    currency:
                                        "BRL"
                                }
                            )}

                        </p>


                        <!-- STATUS -->

                        <span
                            class="status ${statusProduto}"
                        >

                            ${textoStatus(
                                statusProduto
                            )}

                        </span>


                        <!-- AÇÕES -->

                        <div
                            class="acoes"
                        >


                            <button

                                type="button"

                                class="btn-editar"

                                onclick="
                                    editarProduto(
                                        ${produto.id}
                                    )
                                "

                            >

                                ✏ Editar

                            </button>


                            <button

                                type="button"

                                class="btn-visualizar"

                                onclick="
                                    visualizarProduto(
                                        ${produto.id}
                                    )
                                "

                            >

                                👁 Ver

                            </button>


                            <button

                                type="button"

                                class="btn-duplicar"

                                onclick="
                                    duplicarProduto(
                                        ${produto.id}
                                    )
                                "

                            >

                                📄 Duplicar

                            </button>


                            <button

                                type="button"

                                class="btn-excluir"

                                onclick="
                                    excluirProduto(
                                        ${produto.id}
                                    )
                                "

                            >

                                🗑 Excluir

                            </button>


                        </div>


                    </div>


                </div>

            `;

        }
    );

}


// ======================================================
// TEXTO STATUS
// ======================================================

function textoStatus(
    statusProduto
) {

    switch (
        statusProduto
    ) {

        case "ativo":

            return "Ativo";


        case "inativo":

            return "Inativo";


        case "estoque":

            return "Sem Estoque";


        default:

            return statusProduto;

    }

}


// ======================================================
// EDITAR PRODUTO
// ======================================================

function editarProduto(
    id
) {

    console.log(
        "Editar produto:",
        id
    );


    window.location.href =
        `cadastrarproduto.html?id=${id}`;

}


// ======================================================
// VISUALIZAR PRODUTO
// ======================================================

function visualizarProduto(
    id
) {

    console.log(
        "Visualizar produto:",
        id
    );


    window.location.href =
        `../pages/produto.html?id=${id}`;

}


// ======================================================
// DUPLICAR PRODUTO
// ======================================================

async function duplicarProduto(
    id
) {

    const produto =
        produtos.find(
            item =>
                Number(
                    item.id
                ) ===
                Number(id)
        );


    if (
        !produto
    ) {

        alert(
            "Produto não encontrado."
        );

        return;

    }


    const confirmar =
        confirm(
            `Deseja duplicar o produto "${produto.nome}"?`
        );


    if (
        !confirmar
    ) {

        return;

    }


    // ==================================================
    // OBSERVAÇÃO
    // ==================================================

    alert(
        "A função de duplicação precisa de uma rota no servidor para criar o novo produto."
    );

}


// ======================================================
// EXCLUIR PRODUTO
// ======================================================

async function excluirProduto(
    id
) {

    const produto =
        produtos.find(
            item =>
                Number(
                    item.id
                ) ===
                Number(id)
        );


    if (
        !produto
    ) {

        alert(
            "Produto não encontrado."
        );

        return;

    }


    const confirmar =
        confirm(

            `Deseja realmente excluir o produto "${produto.nome}"?`

        );


    if (
        !confirmar
    ) {

        return;

    }


    try {

        console.log(
            "EXCLUINDO PRODUTO:",
            id
        );


        const resposta =
            await fetch(
                `${API}/produtos/${id}`,
                {

                    method: "DELETE",

                    headers: {

                        "Accept":
                            "application/json"

                    }

                }
            );


        const textoResposta =
            await resposta.text();


        console.log(
            "RESPOSTA EXCLUSÃO:",
            textoResposta
        );


        let dados = {};


        if (
            textoResposta &&
            textoResposta.trim() !== ""
        ) {

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

            }

        }


        if (
            !resposta.ok
        ) {

            throw new Error(

                dados.mensagem ||

                dados.erro ||

                `Erro HTTP ${resposta.status}`

            );

        }


        alert(
            dados.mensagem ||
            "Produto excluído com sucesso!"
        );


        // ==================================================
        // REMOVER DA LISTA LOCAL
        // ==================================================

        produtos =
            produtos.filter(
                item =>
                    Number(
                        item.id
                    ) !==
                    Number(id)
            );


        atualizarEstatisticas();

        carregarCategorias();

        renderizarProdutos();

    }

    catch (erro) {

        console.error(
            "ERRO AO EXCLUIR PRODUTO:",
            erro
        );


        alert(
            erro.message ||
            "Não foi possível excluir o produto."
        );

    }

}


// ======================================================
// EVENTOS
// ======================================================

if (
    pesquisa
) {

    pesquisa.addEventListener(
        "input",
        renderizarProdutos
    );

}


if (
    categoria
) {

    categoria.addEventListener(
        "change",
        renderizarProdutos
    );

}


if (
    status
) {

    status.addEventListener(
        "change",
        renderizarProdutos
    );

}


// ======================================================
// INICIAR
// ======================================================

carregarProdutos();