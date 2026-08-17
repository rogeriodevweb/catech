// ======================================================
// LOGIN
// ======================================================

console.log("login.js carregado");


// ======================================================
// ELEMENTOS
// ======================================================

const form =
    document.getElementById("loginForm");


const emailInput =
    document.getElementById("email");


const senhaInput =
    document.getElementById("senha");


const remember =
    document.getElementById("remember");


const btnEntrar =
    document.getElementById("btn-entrar");


const mensagem =
    document.getElementById("mensagem");


// ======================================================
// API
// ======================================================

const API =
    "https://catech.onrender.com";


// ======================================================
// RECUPERAR E-MAIL SALVO
// ======================================================

window.addEventListener(
    "load",
    () => {

        const usuario =
            localStorage.getItem("usuario");


        if (
            usuario &&
            emailInput &&
            remember
        ) {

            emailInput.value =
                usuario;

            remember.checked =
                true;

        }

    }
);


// ======================================================
// BOTÃO ENTRAR
// ======================================================

if (btnEntrar) {

    btnEntrar.addEventListener(
        "click",
        async (evento) => {

            // Evita comportamento padrão
            evento.preventDefault();


            // ==================================================
            // PEGAR VALORES
            // ==================================================

            const email =
                emailInput
                    ? emailInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            const senha =
                senhaInput
                    ? senhaInput.value
                    : "";


            // ==================================================
            // FUNÇÃO PARA MOSTRAR MENSAGEM
            // ==================================================

            function mostrarMensagem(
                texto,
                cor = "red"
            ) {

                if (!mensagem) {
                    return;
                }


                mensagem.innerHTML =
                    texto;


                mensagem.style.color =
                    cor;

            }


            // ==================================================
            // VALIDAR CAMPOS
            // ==================================================

            if (
                email === "" ||
                senha === ""
            ) {

                mostrarMensagem(
                    "Preencha todos os campos."
                );

                return;

            }


            // ==================================================
            // VALIDAR SENHA
            // ==================================================

            if (
                senha.length < 8
            ) {

                mostrarMensagem(
                    "A senha deve possuir no mínimo 8 caracteres."
                );

                return;

            }


            // ==================================================
            // DESABILITAR BOTÃO
            // ==================================================

            btnEntrar.disabled =
                true;


            const textoOriginal =
                btnEntrar.innerText;


            btnEntrar.innerText =
                "Entrando...";


            // ==================================================
            // ENVIAR PARA A API
            // ==================================================

            try {

                console.log(
                    "Enviando login para:",
                    `${API}/clientes/login`
                );


                const respostaServidor =
                    await fetch(
                        `${API}/clientes/login`,
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "Accept":
                                    "application/json"

                            },

                            body:
                                JSON.stringify({

                                    email:
                                        email,

                                    senha:
                                        senha

                                })

                        }
                    );


                // ==================================================
                // LER RESPOSTA COMO TEXTO
                // ==================================================

                const textoResposta =
                    await respostaServidor.text();


                console.log(
                    "STATUS LOGIN:",
                    respostaServidor.status
                );


                console.log(
                    "RESPOSTA LOGIN:",
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


                    mostrarMensagem(
                        "O servidor não retornou uma resposta."
                    );


                    return;

                }


                // ==================================================
                // CONVERTER JSON
                // ==================================================

                let resposta;


                try {

                    resposta =
                        JSON.parse(
                            textoResposta
                        );

                }

                catch (erroJSON) {

                    console.error(
                        "Resposta do servidor não é JSON válido:",
                        textoResposta
                    );


                    mostrarMensagem(
                        "O servidor retornou uma resposta inválida."
                    );


                    return;

                }


                // ==================================================
                // ERRO HTTP
                // ==================================================

                if (
                    !respostaServidor.ok
                ) {

                    console.error(
                        "Erro HTTP:",
                        respostaServidor.status
                    );


                    mostrarMensagem(
                        resposta.mensagem ||
                        resposta.message ||
                        `Erro ao fazer login. Código: ${respostaServidor.status}`
                    );


                    return;

                }


                // ==================================================
                // LOGIN REALIZADO
                // ==================================================

                if (
                    resposta.sucesso
                ) {

                    console.log(
                        "LOGIN REALIZADO:",
                        resposta.cliente
                    );


                    // ==============================================
                    // SALVAR CLIENTE
                    // ==============================================

                    if (
                        resposta.cliente
                    ) {

                        localStorage.setItem(

                            "cliente",

                            JSON.stringify(
                                resposta.cliente
                            )

                        );

                    }


                    // ==============================================
                    // LEMBRAR E-MAIL
                    // ==============================================

                    if (
                        remember &&
                        remember.checked
                    ) {

                        localStorage.setItem(
                            "usuario",
                            email
                        );

                    }

                    else {

                        localStorage.removeItem(
                            "usuario"
                        );

                    }


                    // ==============================================
                    // MENSAGEM DE SUCESSO
                    // ==============================================

                    mostrarMensagem(
                        resposta.mensagem ||
                        "Login realizado com sucesso!",
                        "green"
                    );


                    // ==============================================
                    // REDIRECIONAR
                    // ==============================================

                    setTimeout(
                        () => {

                            window.location.href =
                                "../index.html";

                        },
                        500
                    );


                    return;

                }


                // ==================================================
                // LOGIN NEGADO
                // ==================================================

                mostrarMensagem(

                    resposta.mensagem ||
                    "E-mail ou senha incorretos."

                );


            }

            catch (erro) {

                console.error(
                    "ERRO NO LOGIN:",
                    erro
                );


                mostrarMensagem(
                    "Não foi possível conectar ao servidor."
                );

            }

            finally {

                // ==================================================
                // REATIVAR BOTÃO
                // ==================================================

                btnEntrar.disabled =
                    false;


                btnEntrar.innerText =
                    textoOriginal;

            }

        }
    );

}