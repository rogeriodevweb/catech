// ======================================================
// API
// ======================================================

const API =
    "https://catech.onrender.com";


// ======================================================
// FORMULÁRIO
// ======================================================

const form =
    document.getElementById(
        "formLoja"
    );


// ======================================================
// CADASTRAR LOJA
// ======================================================

if (form) {

    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            // ==================================================
            // DADOS DA LOJA
            // ==================================================

            const loja = {

                nome:
                    document
                        .getElementById("nome")
                        .value
                        .trim(),


                razaoSocial:
                    document
                        .getElementById("razaoSocial")
                        .value
                        .trim(),


                cnpj:
                    document
                        .getElementById("cnpj")
                        .value
                        .trim(),


                inscricaoEstadual:
                    document
                        .getElementById("inscricaoEstadual")
                        .value
                        .trim(),


                fundacao:
                    document
                        .getElementById("fundacao")
                        .value,


                email:
                    document
                        .getElementById("email")
                        .value
                        .trim()
                        .toLowerCase(),


                telefone:
                    document
                        .getElementById("telefone")
                        .value
                        .trim(),


                whatsapp:
                    document
                        .getElementById("whatsapp")
                        .value
                        .trim(),


                site:
                    document
                        .getElementById("site")
                        .value
                        .trim(),


                instagram:
                    document
                        .getElementById("instagram")
                        .value
                        .trim(),


                facebook:
                    document
                        .getElementById("facebook")
                        .value
                        .trim(),


                linkedin:
                    document
                        .getElementById("linkedin")
                        .value
                        .trim(),


                cep:
                    document
                        .getElementById("cep")
                        .value
                        .trim(),


                estado:
                    document
                        .getElementById("estado")
                        .value
                        .trim(),


                cidade:
                    document
                        .getElementById("cidade")
                        .value
                        .trim(),


                bairro:
                    document
                        .getElementById("bairro")
                        .value
                        .trim(),


                rua:
                    document
                        .getElementById("rua")
                        .value
                        .trim(),


                numero:
                    document
                        .getElementById("numero")
                        .value
                        .trim(),


                complemento:
                    document
                        .getElementById("complemento")
                        .value
                        .trim(),


                descricao:
                    document
                        .getElementById("descricao")
                        .value
                        .trim()

            };


            // ==================================================
            // VALIDAÇÃO
            // ==================================================

            if (

                loja.nome === "" ||

                loja.cnpj === "" ||

                loja.email === "" ||

                loja.telefone === "" ||

                loja.cep === "" ||

                loja.rua === "" ||

                loja.bairro === "" ||

                loja.numero === ""

            ) {

                alert(
                    "Preencha todos os campos obrigatórios."
                );

                return;

            }


            // ==================================================
            // DESABILITAR BOTÃO
            // ==================================================

            const botao =
                form.querySelector(
                    'button[type="submit"]'
                );


            let textoOriginal = "";


            if (botao) {

                textoOriginal =
                    botao.innerText;

                botao.disabled =
                    true;

                botao.innerText =
                    "Cadastrando...";

            }


            // ==================================================
            // ENVIAR PARA O SERVIDOR
            // ==================================================

            try {

                console.log(
                    "ENVIANDO CADASTRO DA LOJA PARA:",
                    `${API}/lojas/cadastrar`
                );


                const resposta =
                    await fetch(
                        `${API}/lojas/cadastrar`,
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "Accept":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(loja)

                        }
                    );


                // ==================================================
                // LER RESPOSTA COMO TEXTO
                // ==================================================

                const textoResposta =
                    await resposta.text();


                console.log(
                    "STATUS CADASTRO LOJA:",
                    resposta.status
                );


                console.log(
                    "RESPOSTA CADASTRO LOJA:",
                    textoResposta
                );


                // ==================================================
                // VERIFICAR RESPOSTA VAZIA
                // ==================================================

                if (
                    !textoResposta ||
                    textoResposta.trim() === ""
                ) {

                    console.error(
                        "O servidor retornou uma resposta vazia."
                    );


                    alert(
                        "O servidor não retornou uma resposta."
                    );


                    return;

                }


                // ==================================================
                // CONVERTER RESPOSTA PARA JSON
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
                        "Resposta inválida do servidor:",
                        textoResposta
                    );


                    alert(
                        "O servidor retornou uma resposta inválida."
                    );


                    return;

                }


                // ==================================================
                // VERIFICAR ERRO HTTP
                // ==================================================

                if (!resposta.ok) {

                    throw new Error(

                        dados.erro ||

                        dados.mensagem ||

                        dados.message ||

                        "Erro ao cadastrar a loja."

                    );

                }


                // ==================================================
                // VERIFICAR CÓDIGO DA LOJA
                // ==================================================

                const codigoLoja =
                    dados.codigoAcesso;


                if (!codigoLoja) {

                    console.error(
                        "Resposta recebida:",
                        dados
                    );


                    throw new Error(
                        "A loja foi cadastrada, mas o servidor não retornou o código de acesso."
                    );

                }


                console.log(
                    "CÓDIGO DA LOJA:",
                    codigoLoja
                );


                // ==================================================
                // TELA DE SUCESSO
                // ==================================================

                document.body.innerHTML = `

                    <div class="sucesso">

                        <div class="card-sucesso">


                            <div class="icone">

                                ✔

                            </div>


                            <h1>

                                Loja cadastrada com sucesso!

                            </h1>


                            <p>

                                O código da sua loja é

                            </p>


                            <div class="codigo">

                                ${codigoLoja}

                            </div>


                            <p>

                                Guarde este código.

                                Ele será utilizado para

                                cadastrar o lojista.

                            </p>


                            <button

                                type="button"

                                onclick="

                                    window.location.href =
                                    'cadastro-lojista.html?codigo=${encodeURIComponent(
                                        codigoLoja
                                    )}'

                                "

                            >

                                Cadastrar Lojista

                            </button>


                        </div>

                    </div>

                `;


            }

            catch (erro) {

                console.error(
                    "ERRO NO CADASTRO DA LOJA:",
                    erro
                );


                alert(
                    erro.message ||
                    "Erro ao cadastrar a loja."
                );


            }

            finally {

                // ==================================================
                // REATIVAR BOTÃO
                // ==================================================

                if (botao) {

                    botao.disabled =
                        false;

                    botao.innerText =
                        textoOriginal;

                }

            }

        }
    );

}