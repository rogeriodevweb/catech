// ======================================================
// URL DA API
// ======================================================

const API = "https://catech.onrender.com";


// ======================================================
// MOSTRAR / OCULTAR SENHA
// ======================================================

document.querySelectorAll(".toggle-senha").forEach((icone) => {

    icone.addEventListener("click", () => {

        const input =
            document.getElementById(icone.dataset.target);

        if (!input) {
            return;
        }

        if (input.type === "password") {

            input.type = "text";

            icone.classList.replace(
                "fa-eye",
                "fa-eye-slash"
            );

        } else {

            input.type = "password";

            icone.classList.replace(
                "fa-eye-slash",
                "fa-eye"
            );

        }

    });

});


// ======================================================
// CADASTRAR CLIENTE
// ======================================================

const botaoCadastro =
    document.getElementById("btn-criar-conta");


if (botaoCadastro) {

    botaoCadastro.addEventListener(
        "click",
        async () => {

            // ==================================================
            // PEGAR VALORES
            // ==================================================

            const nome =
                document
                    .getElementById("nome")
                    .value
                    .trim();


            const cpf =
                document
                    .getElementById("cpf")
                    .value
                    .trim();


            const telefone =
                document
                    .getElementById("telefone")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim()
                    .toLowerCase();


            const senha =
                document
                    .getElementById("senha")
                    .value;


            const confirmarSenha =
                document
                    .getElementById("confirmarSenha")
                    .value;


            const dataNascimento =
                document
                    .getElementById("data_nascimento")
                    .value;


            // ==================================================
            // CAMPOS OBRIGATÓRIOS
            // ==================================================

            if (
                !nome ||
                !cpf ||
                !telefone ||
                !email ||
                !senha ||
                !confirmarSenha ||
                !dataNascimento
            ) {

                alert(
                    "Preencha todos os campos."
                );

                return;

            }


            // ==================================================
            // VALIDAÇÃO DO CPF
            // ==================================================

            const cpfLimpo =
                cpf.replace(/\D/g, "");


            if (cpfLimpo.length !== 11) {

                alert(
                    "Digite um CPF válido."
                );

                return;

            }


            // ==================================================
            // VALIDAÇÃO DO TELEFONE
            // ==================================================

            const telefoneLimpo =
                telefone.replace(/\D/g, "");


            if (
                telefoneLimpo.length < 10 ||
                telefoneLimpo.length > 11
            ) {

                alert(
                    "Digite um telefone válido."
                );

                return;

            }


            // ==================================================
            // VALIDAÇÕES DA SENHA
            // ==================================================

            if (
                senha.length < 8 ||
                senha.length > 13
            ) {

                alert(
                    "A senha deve possuir entre 8 e 13 caracteres."
                );

                return;

            }


            if (!/[A-Z]/.test(senha)) {

                alert(
                    "A senha deve conter pelo menos uma letra maiúscula."
                );

                return;

            }


            if (!/[a-z]/.test(senha)) {

                alert(
                    "A senha deve conter pelo menos uma letra minúscula."
                );

                return;

            }


            if (!/[0-9]/.test(senha)) {

                alert(
                    "A senha deve conter pelo menos um número."
                );

                return;

            }


            if (
                !/[!@#$%^&*(),.?":{}|<>_\-+=/\[\]\\;'`~]/.test(
                    senha
                )
            ) {

                alert(
                    "A senha deve conter pelo menos um caractere especial."
                );

                return;

            }


            // ==================================================
            // SENHA NÃO PODE CONTER O NOME
            // ==================================================

            if (
                senha
                    .toLowerCase()
                    .includes(
                        nome.toLowerCase()
                    )
            ) {

                alert(
                    "A senha não pode conter o nome do usuário."
                );

                return;

            }


            // ==================================================
            // CONFIRMAR SENHA
            // ==================================================

            if (senha !== confirmarSenha) {

                alert(
                    "As senhas não coincidem."
                );

                return;

            }


            // ==================================================
            // VALIDAR DATA
            // ==================================================

            const nascimento =
                new Date(
                    dataNascimento + "T00:00:00"
                );


            if (
                Number.isNaN(
                    nascimento.getTime()
                )
            ) {

                alert(
                    "Digite uma data de nascimento válida."
                );

                return;

            }


            // ==================================================
            // CALCULAR IDADE
            // ==================================================

            const hoje =
                new Date();


            let idade =
                hoje.getFullYear() -
                nascimento.getFullYear();


            const mes =
                hoje.getMonth() -
                nascimento.getMonth();


            if (
                mes < 0 ||
                (
                    mes === 0 &&
                    hoje.getDate() <
                    nascimento.getDate()
                )
            ) {

                idade--;

            }


            if (idade < 18) {

                alert(
                    "Você deve ser maior de idade para se cadastrar."
                );

                return;

            }


            // ==================================================
            // E-MAIL
            // ==================================================

            const regexEmail =
                /^[^\s@]+@(gmail|hotmail|outlook|yahoo|icloud)\.com$/i;


            if (!regexEmail.test(email)) {

                alert(
                    "Digite um e-mail válido."
                );

                return;

            }


            // ==================================================
            // DATA
            // ==================================================

            const dataFormatada =
                dataNascimento;


            console.log(
                "Data de nascimento:",
                dataFormatada
            );


            // ==================================================
            // OBJETO DO CLIENTE
            // ==================================================

            const cliente = {

                nome: nome,

                cpf: cpfLimpo,

                telefone: telefoneLimpo,

                email: email,

                senha: senha,

                data_nascimento:
                    dataFormatada,

                loja_idLoja: 1

            };


            // ==================================================
            // MOSTRAR DADOS NO CONSOLE
            // ==================================================

            console.log(
                "CLIENTE ENVIADO:",
                cliente
            );


            console.log(
                "TIPO DA DATA:",
                typeof cliente.data_nascimento
            );


            // ==================================================
            // DESABILITAR BOTÃO
            // ==================================================

            botaoCadastro.disabled = true;

            const textoOriginal =
                botaoCadastro.innerText;


            botaoCadastro.innerText =
                "Cadastrando...";


            // ==================================================
            // ENVIAR PARA O SERVIDOR
            // ==================================================

            try {

                console.log(
                    "ENVIANDO PARA:",
                    `${API}/clientes`
                );


                const respostaServidor =
                    await fetch(
                        `${API}/clientes`,
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "Accept":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(cliente)

                        }
                    );


                // ==================================================
                // LER RESPOSTA COMO TEXTO PRIMEIRO
                // ==================================================

                const textoResposta =
                    await respostaServidor.text();


                console.log(
                    "STATUS DO SERVIDOR:",
                    respostaServidor.status
                );


                console.log(
                    "RESPOSTA DO SERVIDOR:",
                    textoResposta
                );


                // ==================================================
                // TENTAR CONVERTER PARA JSON
                // ==================================================

                let resposta = {};


                if (
                    textoResposta &&
                    textoResposta.trim() !== ""
                ) {

                    try {

                        resposta =
                            JSON.parse(
                                textoResposta
                            );

                    } catch (erroJSON) {

                        console.error(
                            "Resposta não é JSON:",
                            textoResposta
                        );


                        alert(
                            "O servidor retornou uma resposta inválida."
                        );

                        return;

                    }

                }


                // ==================================================
                // ERRO HTTP
                // ==================================================

                if (!respostaServidor.ok) {

                    console.error(
                        "ERRO HTTP:",
                        respostaServidor.status
                    );


                    alert(
                        resposta.mensagem ||
                        resposta.message ||
                        `Erro ao cadastrar. Código: ${respostaServidor.status}`
                    );

                    return;

                }


                // ==================================================
                // SUCESSO
                // ==================================================

                alert(
                    resposta.mensagem ||
                    "Cadastro realizado com sucesso!"
                );


                // ==================================================
                // LIMPAR FORMULÁRIO
                // ==================================================

                const formulario =
                    document.getElementById(
                        "cadastroForm"
                    );


                if (formulario) {

                    formulario.reset();

                }


                // ==================================================
                // REDIRECIONAR PARA LOGIN
                // ==================================================

                window.location.href =
                    "../pages/login.html";


            } catch (erro) {

                console.error(
                    "ERRO NO CADASTRO:",
                    erro
                );


                alert(
                    "Não foi possível conectar ao servidor."
                );


            } finally {

                // ==================================================
                // REATIVAR BOTÃO
                // ==================================================

                botaoCadastro.disabled =
                    false;


                botaoCadastro.innerText =
                    textoOriginal;

            }

        }
    );

}