// ======================================================
// CARRINHO
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // ==================================================
        // ELEMENTOS
        // ==================================================

        const listaCarrinho =
            document.querySelector(
                ".lista-carrinho"
            );


        const subtotalElemento =
            document.querySelector(
                "#subtotal"
            );


        const freteElemento =
            document.querySelector(
                "#frete"
            );


        const descontoElemento =
            document.querySelector(
                "#desconto"
            );


        const totalElemento =
            document.querySelector(
                "#total"
            );


        const finalizar =
            document.querySelector(
                ".finalizar"
            );


        // ==================================================
        // PEGAR CARRINHO
        // ==================================================

        let carrinho = [];


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
                "Erro ao ler carrinho:",
                erro
            );


            carrinho = [];

        }


        // ==================================================
        // FORMATAR PREÇO
        // ==================================================

        function formatarPreco(
            valor
        ) {

            const numero =
                Number(valor) || 0;


            return numero
                .toFixed(2)
                .replace(
                    ".",
                    ","
                );

        }


        // ==================================================
        // SALVAR CARRINHO
        // ==================================================

        function salvarCarrinho() {

            localStorage.setItem(

                "carrinho",

                JSON.stringify(
                    carrinho
                )

            );

        }


        // ==================================================
        // CALCULAR TOTAIS
        // ==================================================

        function atualizarTotais() {

            let subtotal =
                0;


            // ==============================================
            // SOMAR PRODUTOS
            // ==============================================

            carrinho.forEach(
                produto => {

                    const preco =
                        Number(
                            produto.preco
                        ) || 0;


                    const quantidade =
                        Number(
                            produto.quantidade
                        ) || 0;


                    subtotal +=
                        preco *
                        quantidade;

                }
            );


            // ==============================================
            // FRETE
            // ==============================================

            let frete =
                0;


            if (
                subtotal > 0
            ) {

                // Frete grátis
                frete = 0;

            }


            // ==============================================
            // DESCONTO
            // ==============================================

            const desconto =
                0;


            // ==============================================
            // TOTAL
            // ==============================================

            const total =
                subtotal +
                frete -
                desconto;


            // ==============================================
            // MOSTRAR
            // ==============================================

            if (
                subtotalElemento
            ) {

                subtotalElemento.textContent =
                    `R$ ${formatarPreco(
                        subtotal
                    )}`;

            }


            if (
                freteElemento
            ) {

                freteElemento.textContent =
                    `R$ ${formatarPreco(
                        frete
                    )}`;

            }


            if (
                descontoElemento
            ) {

                descontoElemento.textContent =
                    `R$ ${formatarPreco(
                        desconto
                    )}`;

            }


            if (
                totalElemento
            ) {

                totalElemento.textContent =
                    `R$ ${formatarPreco(
                        total
                    )}`;

            }

        }


        // ==================================================
        // RENDERIZAR CARRINHO
        // ==================================================

        function renderizarCarrinho() {

            if (
                !listaCarrinho
            ) {

                return;

            }


            // ==============================================
            // CARRINHO VAZIO
            // ==============================================

            if (
                carrinho.length === 0
            ) {

                listaCarrinho.innerHTML = `

                    <p class="carrinho-vazio">

                        Nenhum produto no carrinho.

                    </p>

                `;


                atualizarTotais();


                return;

            }


            // ==============================================
            // LIMPAR
            // ==============================================

            listaCarrinho.innerHTML =
                "";


            // ==============================================
            // PRODUTOS
            // ==============================================

            carrinho.forEach(
                (
                    produto,
                    index
                ) => {


                    const preco =
                        Number(
                            produto.preco
                        ) || 0;


                    const quantidade =
                        Number(
                            produto.quantidade
                        ) || 1;


                    const imagem =
                        produto.imagem ||
                        "../assets/sem-imagem.png";


                    listaCarrinho.innerHTML += `

                        <div
                            class="produto"
                            data-index="${index}"
                        >


                            <!-- IMAGEM -->

                            <img
                                src="${imagem}"
                                alt="${produto.nome || "Produto"}"
                                onerror="
                                    this.src='../assets/sem-imagem.png'
                                "
                            >


                            <!-- INFORMAÇÕES -->

                            <div class="informacoes-produto">


                                <h3>

                                    ${produto.nome || "Produto"}

                                </h3>


                                <p>

                                    R$ ${formatarPreco(
                                        preco
                                    )}

                                </p>


                                <!-- QUANTIDADE -->

                                <div class="quantidade">


                                    <button
                                        type="button"
                                        class="menos"
                                        data-index="${index}"
                                    >

                                        -

                                    </button>


                                    <span>

                                        ${quantidade}

                                    </span>


                                    <button
                                        type="button"
                                        class="mais"
                                        data-index="${index}"
                                    >

                                        +

                                    </button>


                                </div>


                            </div>


                            <!-- REMOVER -->

                            <button
                                type="button"
                                class="remover"
                                data-index="${index}"
                            >

                                Remover

                            </button>


                        </div>

                    `;

                }
            );


            // ==============================================
            // BOTÃO +
            // ==============================================

            document
                .querySelectorAll(
                    ".mais"
                )
                .forEach(
                    botao => {

                        botao.addEventListener(
                            "click",
                            () => {

                                const index =
                                    Number(
                                        botao.dataset.index
                                    );


                                if (
                                    !carrinho[index]
                                ) {

                                    return;

                                }


                                carrinho[index]
                                    .quantidade++;


                                salvarCarrinho();


                                renderizarCarrinho();

                            }
                        );

                    }
                );


            // ==============================================
            // BOTÃO -
            // ==============================================

            document
                .querySelectorAll(
                    ".menos"
                )
                .forEach(
                    botao => {

                        botao.addEventListener(
                            "click",
                            () => {

                                const index =
                                    Number(
                                        botao.dataset.index
                                    );


                                if (
                                    !carrinho[index]
                                ) {

                                    return;

                                }


                                if (
                                    carrinho[index]
                                        .quantidade > 1
                                ) {

                                    carrinho[index]
                                        .quantidade--;

                                }

                                else {

                                    carrinho.splice(
                                        index,
                                        1
                                    );

                                }


                                salvarCarrinho();


                                renderizarCarrinho();

                            }
                        );

                    }
                );


            // ==============================================
            // BOTÃO REMOVER
            // ==============================================

            document
                .querySelectorAll(
                    ".remover"
                )
                .forEach(
                    botao => {

                        botao.addEventListener(
                            "click",
                            () => {

                                const index =
                                    Number(
                                        botao.dataset.index
                                    );


                                if (
                                    !carrinho[index]
                                ) {

                                    return;

                                }


                                carrinho.splice(
                                    index,
                                    1
                                );


                                salvarCarrinho();


                                renderizarCarrinho();

                            }
                        );

                    }
                );


            // ==============================================
            // ATUALIZAR VALORES
            // ==============================================

            atualizarTotais();

        }


        // ==================================================
        // FINALIZAR COMPRA
        // ==================================================

        if (
            finalizar
        ) {

            finalizar.addEventListener(
                "click",
                () => {


                    if (
                        carrinho.length === 0
                    ) {

                        alert(
                            "Seu carrinho está vazio."
                        );

                        return;

                    }


                    // ======================================
                    // SALVAR NOVAMENTE
                    // ======================================

                    salvarCarrinho();


                    // ======================================
                    // IR PARA PAGAMENTO
                    // ======================================

                    window.location.href =
                        "../pages/pagamento.html";

                }
            );

        }


        // ==================================================
        // INICIAR
        // ==================================================

        renderizarCarrinho();

    }
);


// ======================================================
// CONTINUAR COMPRANDO
// ======================================================

function continuarComprando() {

    window.location.href =
        "../index.html";

}