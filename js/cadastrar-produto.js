//======================================================
// QUANDO A PÁGINA CARREGAR
//======================================================

document.addEventListener("DOMContentLoaded", function () {

    //======================================================
    // CONFIGURAÇÕES
    //======================================================

    const API = "https://catech.onrender.com";


    //======================================================
    // ELEMENTOS PRINCIPAIS
    //======================================================

    const formProduto =
        document.getElementById("form-produto");

    const nome =
        document.getElementById("nome");

    const codigo =
        document.getElementById("codigo");

    const descricao =
        document.getElementById("descricao");

    const precoAntigo =
        document.getElementById("preco_antigo");

    const precoPromocional =
        document.getElementById("preco_promocional");

    const quantidadeEstoque =
        document.getElementById("quantidade_estoque");

    const loja =
        document.getElementById("loja_idLoja");


    //======================================================
    // IMAGENS
    //======================================================

    const inputMidias =
        document.getElementById("midiasProduto");

    const previewImagens =
        document.getElementById("preview-imagens");


    //======================================================
    // SELECTS
    //======================================================

    const selectMarca =
        document.getElementById("produtoMarca");

    const selectCategoria =
        document.getElementById("produtoCategoria");

    const selectCor =
        document.getElementById("produtoCor");

    const selectTamanho =
        document.getElementById("produtoTamanho");

    const selectSecaoHome =
        document.getElementById("secaoHome");


    //======================================================
    // BOTÕES
    //======================================================

    const btnStatus =
        document.getElementById("btn-status");

    const btnSalvar =
        document.getElementById("btn-salvar");


    //======================================================
    // VERIFICAR ELEMENTOS
    //======================================================

    if (!formProduto) {

        console.error(
            "ERRO: #form-produto não encontrado."
        );

        return;
    }


    if (!inputMidias) {

        console.error(
            "ERRO: #midiasProduto não encontrado."
        );

        return;
    }


    if (!previewImagens) {

        console.error(
            "ERRO: #preview-imagens não encontrado."
        );

        return;
    }


    //======================================================
    // STATUS DO PRODUTO
    //======================================================

    let produtoAtivo = true;


    if (btnStatus) {

        btnStatus.addEventListener(
            "click",
            function () {

                produtoAtivo =
                    !produtoAtivo;


                if (produtoAtivo) {

                    btnStatus.textContent =
                        "Produto Ativo";

                } else {

                    btnStatus.textContent =
                        "Produto Inativo";

                }

            }
        );

    }


    //======================================================
    // CARREGAR MARCAS
    //======================================================

    function carregarMarcas() {

        fetch(`${API}/marcas`)

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Erro ao buscar marcas."
                    );

                }

                return response.json();

            })

            .then(data => {

                if (!selectMarca) return;

                selectMarca.innerHTML = "";

                const opcao =
                    document.createElement("option");

                opcao.value = "";

                opcao.textContent =
                    "Selecione uma marca";

                selectMarca.appendChild(opcao);


                data.forEach(marca => {

                    const option =
                        document.createElement("option");

                    option.value =
                        marca.idMarca;

                    option.textContent =
                        marca.nome;

                    selectMarca.appendChild(option);

                });

            })

            .catch(error => {

                console.error(
                    "Erro ao carregar marcas:",
                    error
                );

            });

    }


    //======================================================
    // CARREGAR CATEGORIAS
    //======================================================

    function carregarCategorias() {

        fetch(`${API}/categorias`)

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Erro ao buscar categorias."
                    );

                }

                return response.json();

            })

            .then(data => {

                if (!selectCategoria) return;

                selectCategoria.innerHTML = "";

                const opcao =
                    document.createElement("option");

                opcao.value = "";

                opcao.textContent =
                    "Selecione uma categoria";

                selectCategoria.appendChild(opcao);


                data.forEach(categoria => {

                    const option =
                        document.createElement("option");

                    option.value =
                        categoria.idCategoria;

                    option.textContent =
                        categoria.nome;

                    selectCategoria.appendChild(option);

                });

            })

            .catch(error => {

                console.error(
                    "Erro ao carregar categorias:",
                    error
                );

            });

    }


    //======================================================
    // CARREGAR CORES
    //======================================================

    function carregarCores() {

        fetch(`${API}/cores`)

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Erro ao buscar cores."
                    );

                }

                return response.json();

            })

            .then(data => {

                if (!selectCor) return;

                selectCor.innerHTML = "";

                const opcao =
                    document.createElement("option");

                opcao.value = "";

                opcao.textContent =
                    "Selecione uma cor";

                selectCor.appendChild(opcao);


                data.forEach(cor => {

                    const option =
                        document.createElement("option");

                    option.value =
                        cor.idCores;

                    option.textContent =
                        cor.nome;

                    selectCor.appendChild(option);

                });

            })

            .catch(error => {

                console.error(
                    "Erro ao carregar cores:",
                    error
                );

            });

    }


    //======================================================
    // CARREGAR TAMANHOS
    //======================================================

    function carregarTamanhos() {

        fetch(`${API}/tamanho`)

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Erro ao buscar tamanhos."
                    );

                }

                return response.json();

            })

            .then(data => {

                if (!selectTamanho) return;

                selectTamanho.innerHTML = "";

                const opcao =
                    document.createElement("option");

                opcao.value = "";

                opcao.textContent =
                    "Selecione um tamanho";

                selectTamanho.appendChild(opcao);


                data.forEach(tamanho => {

                    const option =
                        document.createElement("option");

                    option.value =
                        tamanho.idTamanho;

                    option.textContent =
                        tamanho.tamanho;

                    selectTamanho.appendChild(option);

                });

            })

            .catch(error => {

                console.error(
                    "Erro ao carregar tamanhos:",
                    error
                );

            });

    }


    //======================================================
    // NOVA CATEGORIA
    //======================================================

    const btnSalvarCategoria =
        document.getElementById(
            "btn-salvar-categoria"
        );


    if (btnSalvarCategoria) {

        btnSalvarCategoria.addEventListener(
            "click",
            function () {

                const campo =
                    document.getElementById(
                        "novaCategoria"
                    );


                if (!campo) return;


                const nomeCategoria =
                    campo.value.trim();


                if (nomeCategoria === "") {

                    alert(
                        "Digite uma categoria."
                    );

                    return;
                }


                fetch(`${API}/categorias`, {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        nome:
                            nomeCategoria

                    })

                })

                    .then(response =>
                        response.json()
                    )

                    .then(data => {

                        if (data.sucesso) {

                            const option =
                                document.createElement(
                                    "option"
                                );

                            option.value =
                                data.idCategoria;

                            option.textContent =
                                nomeCategoria;

                            selectCategoria.appendChild(
                                option
                            );

                            selectCategoria.value =
                                data.idCategoria;

                            campo.value = "";

                            alert(
                                "Categoria salva com sucesso!"
                            );

                        } else {

                            alert(
                                data.mensagem ||
                                "Erro ao salvar categoria."
                            );

                        }

                    })

                    .catch(error => {

                        console.error(error);

                        alert(
                            "Erro ao salvar categoria."
                        );

                    });

            }
        );

    }


    //======================================================
    // NOVA MARCA
    //======================================================

    const btnSalvarMarca =
        document.getElementById(
            "btn-salvar-marca"
        );


    if (btnSalvarMarca) {

        btnSalvarMarca.addEventListener(
            "click",
            function () {

                const campo =
                    document.getElementById(
                        "novaMarca"
                    );


                if (!campo) return;


                const nomeMarca =
                    campo.value.trim();


                if (nomeMarca === "") {

                    alert(
                        "Digite uma marca."
                    );

                    return;
                }


                fetch(`${API}/marcas`, {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        nome:
                            nomeMarca

                    })

                })

                    .then(response =>
                        response.json()
                    )

                    .then(data => {

                        if (data.sucesso) {

                            const option =
                                document.createElement(
                                    "option"
                                );

                            option.value =
                                data.idMarca;

                            option.textContent =
                                nomeMarca;

                            selectMarca.appendChild(
                                option
                            );

                            selectMarca.value =
                                data.idMarca;

                            campo.value = "";

                            alert(
                                "Marca salva com sucesso!"
                            );

                        } else {

                            alert(
                                data.mensagem ||
                                "Erro ao salvar marca."
                            );

                        }

                    })

                    .catch(error => {

                        console.error(error);

                        alert(
                            "Erro ao salvar marca."
                        );

                    });

            }
        );

    }


    //======================================================
    // NOVA COR
    //======================================================

    const btnSalvarCor =
        document.getElementById(
            "btn-salvar-cor"
        );


    if (btnSalvarCor) {

        btnSalvarCor.addEventListener(
            "click",
            function () {

                const campo =
                    document.getElementById(
                        "novaCor"
                    );


                if (!campo) return;


                const nomeCor =
                    campo.value.trim();


                if (nomeCor === "") {

                    alert(
                        "Digite uma cor."
                    );

                    return;
                }


                fetch(`${API}/cores`, {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        nome:
                            nomeCor

                    })

                })

                    .then(response =>
                        response.json()
                    )

                    .then(data => {

                        if (data.sucesso) {

                            const option =
                                document.createElement(
                                    "option"
                                );

                            option.value =
                                data.idCores;

                            option.textContent =
                                nomeCor;

                            selectCor.appendChild(
                                option
                            );

                            selectCor.value =
                                data.idCores;

                            campo.value = "";

                            alert(
                                "Cor salva com sucesso!"
                            );

                        } else {

                            alert(
                                data.mensagem ||
                                "Erro ao salvar cor."
                            );

                        }

                    })

                    .catch(error => {

                        console.error(error);

                        alert(
                            "Erro ao salvar cor."
                        );

                    });

            }
        );

    }


    //======================================================
    // NOVO TAMANHO
    //======================================================

    const btnSalvarTamanho =
        document.getElementById(
            "btn-salvar-tamanho"
        );


    if (btnSalvarTamanho) {

        btnSalvarTamanho.addEventListener(
            "click",
            function () {

                const campo =
                    document.getElementById(
                        "novoTamanho"
                    );


                if (!campo) return;


                const novoTamanho =
                    campo.value.trim();


                if (novoTamanho === "") {

                    alert(
                        "Digite um tamanho."
                    );

                    return;
                }


                fetch(`${API}/tamanho`, {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        tamanho:
                            novoTamanho

                    })

                })

                    .then(response =>
                        response.json()
                    )

                    .then(data => {

                        if (data.sucesso) {

                            const option =
                                document.createElement(
                                    "option"
                                );

                            option.value =
                                data.idTamanho;

                            option.textContent =
                                novoTamanho;

                            selectTamanho.appendChild(
                                option
                            );

                            selectTamanho.value =
                                data.idTamanho;

                            campo.value = "";

                            alert(
                                "Tamanho salvo com sucesso!"
                            );

                        } else {

                            alert(
                                data.mensagem ||
                                "Erro ao salvar tamanho."
                            );

                        }

                    })

                    .catch(error => {

                        console.error(error);

                        alert(
                            "Erro ao salvar tamanho."
                        );

                    });

            }
        );

    }


    //======================================================
    // PRÉ-VISUALIZAÇÃO DAS IMAGENS
    //======================================================

    inputMidias.addEventListener(
        "change",
        function () {

            previewImagens.innerHTML = "";

            const arquivos =
                Array.from(inputMidias.files);


            arquivos.forEach(
                (arquivo, index) => {

                    // Somente imagens
                    if (
                        !arquivo.type.startsWith(
                            "image/"
                        )
                    ) {

                        return;
                    }


                    //==========================================
                    // CAIXA DA IMAGEM
                    //==========================================

                    const caixa =
                        document.createElement("div");

                    caixa.classList.add(
                        "preview-imagem"
                    );


                    // Primeira imagem começa como principal
                    if (index === 0) {

                        caixa.classList.add(
                            "principal"
                        );

                    }


                    //==========================================
                    // IMAGEM
                    //==========================================

                    const imagem =
                        document.createElement("img");

                    imagem.alt =
                        arquivo.name;


                    const reader =
                        new FileReader();


                    reader.onload =
                        function (event) {

                            imagem.src =
                                event.target.result;

                        };


                    reader.readAsDataURL(
                        arquivo
                    );


                    caixa.appendChild(
                        imagem
                    );


                    //==========================================
                    // NOME DO ARQUIVO
                    //==========================================

                    const nomeArquivo =
                        document.createElement("small");

                    nomeArquivo.textContent =
                        arquivo.name;

                    caixa.appendChild(
                        nomeArquivo
                    );


                    //==========================================
                    // BOTÃO DE PRINCIPAL
                    //==========================================

                    const botao =
                        document.createElement("button");

                    botao.type =
                        "button";

                    botao.classList.add(
                        "btn-principal"
                    );


                    if (index === 0) {

                        botao.textContent =
                            "Imagem principal";

                    } else {

                        botao.textContent =
                            "Usar como principal";

                    }


                    //==========================================
                    // ESCOLHER PRINCIPAL
                    //==========================================

                    botao.addEventListener(
                        "click",
                        function () {

                            document
                                .querySelectorAll(
                                    "#preview-imagens .preview-imagem"
                                )
                                .forEach(
                                    item => {

                                        item.classList.remove(
                                            "principal"
                                        );


                                        const btn =
                                            item.querySelector(
                                                ".btn-principal"
                                            );


                                        if (btn) {

                                            btn.textContent =
                                                "Usar como principal";

                                        }

                                    }
                                );


                            caixa.classList.add(
                                "principal"
                            );


                            botao.textContent =
                                "Imagem principal";

                        }
                    );


                    caixa.appendChild(
                        botao
                    );


                    previewImagens.appendChild(
                        caixa
                    );

                }
            );

        }
    );


    //======================================================
    // CADASTRAR PRODUTO
    //======================================================

    formProduto.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            //==================================================
            // PEGAR VALORES
            //==================================================

            const produtoNome =
                nome.value.trim();

            const produtoCodigo =
                codigo.value.trim();

            const produtoDescricao =
                descricao.value.trim();

            const produtoPrecoAntigo =
                precoAntigo.value;

            const produtoPrecoPromocional =
                precoPromocional.value;

            const produtoQuantidade =
                quantidadeEstoque.value;

            const produtoLoja =
                loja.value;

            const produtoMarca =
                selectMarca.value;

            const produtoCategoria =
                selectCategoria.value;

            const produtoCor =
                selectCor.value;

            const produtoTamanho =
                selectTamanho.value;


            //==================================================
            // PEGAR IMAGENS
            //==================================================

            const arquivos =
                Array.from(
                    inputMidias.files
                );


            //==================================================
            // VALIDAR CAMPOS
            //==================================================

            if (

                produtoNome === "" ||

                produtoCodigo === "" ||

                produtoDescricao === "" ||

                produtoPrecoAntigo === "" ||

                produtoQuantidade === "" ||

                produtoLoja === "" ||

                produtoMarca === "" ||

                produtoCategoria === "" ||

                produtoCor === "" ||

                produtoTamanho === ""

            ) {

                alert(
                    "Preencha todos os campos obrigatórios."
                );

                return;

            }


            //==================================================
            // VALIDAR IMAGENS
            //==================================================

            if (arquivos.length === 0) {

                const continuar =
                    confirm(
                        "Nenhuma imagem foi selecionada. Deseja cadastrar o produto mesmo assim?"
                    );


                if (!continuar) {

                    return;

                }

            }


            //==================================================
            // MONTAR PRODUTO
            //==================================================

            const produto = {

                nome:
                    produtoNome,

                descricao:
                    produtoDescricao,

                codigo:
                    produtoCodigo,

                preco_antigo:
                    Number(
                        produtoPrecoAntigo
                    ),

                preco_promocional:

                    produtoPrecoPromocional === ""

                        ? null

                        : Number(
                            produtoPrecoPromocional
                        ),

                quantidade_estoque:
                    Number(
                        produtoQuantidade
                    ),

                ativo:
                    produtoAtivo,

                loja_idLoja:
                    Number(
                        produtoLoja
                    ),

                marca_idMarca:
                    Number(
                        produtoMarca
                    ),

                categorias_idCategorias:
                    Number(
                        produtoCategoria
                    ),

                cor_idCores:
                    Number(
                        produtoCor
                    ),

                tamanho_idTamanho:
                    Number(
                        produtoTamanho
                    )

            };


            console.log(
                "================================"
            );

            console.log(
                "PRODUTO ENVIADO:"
            );

            console.log(
                produto
            );

            console.log(
                "IMAGENS:"
            );

            console.log(
                arquivos
            );

            console.log(
                "================================"
            );


            //==================================================
            // DESABILITAR BOTÃO
            //==================================================

            if (btnSalvar) {

                btnSalvar.disabled =
                    true;

                btnSalvar.textContent =
                    "Salvando...";

            }


            try {

                //==================================================
                // 1 - CADASTRAR PRODUTO
                //==================================================

                const respostaProduto =
                    await fetch(
                        `${API}/produtos`,
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    produto
                                )

                        }
                    );


                const dataProduto =
                    await respostaProduto.json();


                console.log(
                    "STATUS PRODUTO:",
                    respostaProduto.status
                );


                console.log(
                    "RETORNO PRODUTO:",
                    dataProduto
                );


                if (
                    !respostaProduto.ok
                ) {

                    throw new Error(

                        dataProduto.mensagem ||

                        "Erro ao cadastrar produto."

                    );

                }


                //==================================================
                // 2 - PEGAR ID DO PRODUTO
                //==================================================

                const idProduto =
                    dataProduto.idProduto;


                if (!idProduto) {

                    throw new Error(
                        "O servidor não retornou o ID do produto."
                    );

                }


                console.log(
                    "ID DO PRODUTO:",
                    idProduto
                );


                //==================================================
                // 3 - IDENTIFICAR IMAGEM PRINCIPAL
                //==================================================

                const caixasImagens =
                    Array.from(
                        previewImagens.querySelectorAll(
                            ".preview-imagem"
                        )
                    );


                //==================================================
                // 4 - ENVIAR TODAS AS IMAGENS
                //==================================================

                for (
                    let i = 0;
                    i < arquivos.length;
                    i++
                ) {

                    const arquivo =
                        arquivos[i];


                    // Somente imagens
                    if (
                        !arquivo.type.startsWith(
                            "image/"
                        )
                    ) {

                        console.warn(
                            "Arquivo ignorado:",
                            arquivo.name
                        );

                        continue;

                    }


                    //==============================================
                    // VERIFICAR SE É A PRINCIPAL
                    //==============================================

                    const principal =
                        caixasImagens[i] &&
                        caixasImagens[i]
                            .classList
                            .contains("principal");


                    //==============================================
                    // FORM DATA
                    //==============================================

                    const formularioMidia =
                        new FormData();


                    formularioMidia.append(
                        "arquivo",
                        arquivo
                    );


                    formularioMidia.append(
                        "produto_idProduto",
                        idProduto
                    );


                    formularioMidia.append(
                        "principal",
                        principal
                            ? "true"
                            : "false"
                    );


                    console.log(
                        "================================"
                    );

                    console.log(
                        "ENVIANDO IMAGEM:",
                        arquivo.name
                    );

                    console.log(
                        "PRINCIPAL:",
                        principal
                    );


                    //==============================================
                    // ENVIAR PARA O SERVIDOR
                    //==============================================

                    const respostaMidia =
                        await fetch(

                            `${API}/imagem-produto`,

                            {

                                method:
                                    "POST",

                                body:
                                    formularioMidia

                            }

                        );


                    const dataMidia =
                        await respostaMidia.json();


                    console.log(
                        "RETORNO MÍDIA:",
                        dataMidia
                    );


                    if (
                        !respostaMidia.ok
                    ) {

                        throw new Error(

                            dataMidia.mensagem ||

                            `Erro ao salvar a imagem ${arquivo.name}.`

                        );

                    }

                }


                //==================================================
                // SUCESSO
                //==================================================

                alert(
                    "Produto cadastrado com sucesso!"
                );


                //==================================================
                // LIMPAR CAMPOS
                //==================================================

                nome.value = "";

                codigo.value = "";

                descricao.value = "";

                precoAntigo.value = "";

                precoPromocional.value = "";

                quantidadeEstoque.value = "";

                loja.value = "";


                if (selectMarca) {

                    selectMarca.value = "";

                }


                if (selectCategoria) {

                    selectCategoria.value = "";

                }


                if (selectCor) {

                    selectCor.value = "";

                }


                if (selectTamanho) {

                    selectTamanho.value = "";

                }


                if (selectSecaoHome) {

                    selectSecaoHome.value = "";

                }


                // Limpar imagens
                inputMidias.value = "";

                previewImagens.innerHTML = "";


                // Voltar para ativo
                produtoAtivo = true;


                if (btnStatus) {

                    btnStatus.textContent =
                        "Produto Ativo";

                }


                console.log(
                    "PRODUTO E IMAGENS SALVOS COM SUCESSO!"
                );

            }


            catch (error) {

                console.error(
                    "ERRO AO CADASTRAR PRODUTO:",
                    error
                );


                alert(
                    error.message ||
                    "Erro ao cadastrar produto."
                );

            }


            finally {

                if (btnSalvar) {

                    btnSalvar.disabled =
                        false;

                    btnSalvar.textContent =
                        "Salvar Produto";

                }

            }

        }
    );


    //======================================================
    // INICIAR
    //======================================================

    carregarMarcas();

    carregarCategorias();

    carregarCores();

    carregarTamanhos();

});