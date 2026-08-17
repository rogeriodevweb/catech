// ======================================================
// LOGIN DO LOJISTA
// ======================================================


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
        "loginLojista"
    );


// ======================================================
// VERIFICAR SE O FORMULÁRIO EXISTE
// ======================================================

if (form) {

    form.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();


            // ==================================================
            // PEGAR DADOS DO FORMULÁRIO
            // ==================================================

            const codigoLojaInput =
                document.getElementById(
                    "codigoLoja"
                );


            const senhaInput =
                document.getElementById(
                    "senha"
                );


            const codigoLoja =
                codigoLojaInput
                    ? codigoLojaInput.value.trim()
                    : "";


            const senha =
                senhaInput
                    ? senhaInput.value
                    : "";


            // ==================================================
            // VALIDAR CAMPOS
            // ==================================================

            if (
                codigoLoja === "" ||
                senha === ""
            ) {

                alert(
                    "Preencha o código da loja e a senha."
                );

                return;

            }


            // ==================================================
            // ENVIAR PARA O SERVIDOR
            // ==================================================

            try {

                console.log(
                    "LOGIN LOJISTA:"
                );


                console.log(
                    "URL:",
                    `${API}/lojistas/login`
                );


                const resposta =
                    await fetch(
                        `${API}/lojistas/login`,
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

                                    codigoLoja:
                                        codigoLoja,

                                    senha:
                                        senha

                                })

                        }
                    );


                // ==================================================
                // LER RESPOSTA COMO TEXTO
                // ==================================================

                const textoResposta =
                    await resposta.text();


                console.log(
                    "STATUS LOGIN LOJISTA:",
                    resposta.status
                );


                console.log(
                    "RESPOSTA LOGIN LOJISTA:",
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
                // CONVERTER PARA JSON
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

                if (
                    !resposta.ok
                ) {

                    alert(

                        dados.mensagem ||

                        dados.message ||

                        "Código da loja ou senha incorretos."

                    );


                    return;

                }


                // ==================================================
                // VERIFICAR SUCESSO
                // ==================================================

                if (
                    dados.sucesso === false
                ) {

                    alert(

                        dados.mensagem ||

                        "Código da loja ou senha incorretos."

                    );


                    return;

                }


                // ==================================================
                // SALVAR LOJISTA LOGADO
                // ==================================================

                if (
                    dados.lojista
                ) {

                    localStorage.setItem(

                        "lojistaLogado",

                        JSON.stringify(
                            dados.lojista
                        )

                    );

                }


                // ==================================================
                // SUCESSO
                // ==================================================

                alert(

                    dados.mensagem ||

                    "Login realizado com sucesso!"

                );


                // ==================================================
                // IR PARA O PAINEL
                // ==================================================

                window.location.href =
                    "home-lojista.html";


            }

            catch (erro) {

                console.error(
                    "ERRO NO LOGIN DO LOJISTA:",
                    erro
                );


                alert(
                    "Erro ao conectar com o servidor."
                );

            }

        }
    );

}