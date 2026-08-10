const form = document.getElementById("loginLojista");


form.addEventListener("submit", async function(e) {

    e.preventDefault();


    // =====================================
    // PEGAR DADOS DO FORMULÁRIO
    // =====================================

    const codigoLoja =
        document.getElementById("codigoLoja").value.trim();

    const senha =
        document.getElementById("senha").value;


    // =====================================
    // ENVIAR PARA O SERVIDOR
    // =====================================

    try {

        const resposta = await fetch(

            "http://localhost:3000/lojistas/login",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    codigoLoja: codigoLoja,

                    senha: senha

                })

            }

        );


        const dados =
            await resposta.json();


        // =====================================
        // VERIFICAR ERRO
        // =====================================

        if (!resposta.ok) {

            alert(

                dados.mensagem ||
                "Código da loja ou senha incorretos."

            );

            return;

        }


        // =====================================
        // SALVAR LOJISTA LOGADO
        // =====================================

        localStorage.setItem(

            "lojistaLogado",

            JSON.stringify(
                dados.lojista
            )

        );


        // =====================================
        // SUCESSO
        // =====================================

        alert(
            dados.mensagem
        );


        // =====================================
        // IR PARA O PAINEL
        // =====================================

        window.location.href =
            "home-lojista.html";


    }

    catch (erro) {

        console.error(erro);

        alert(
            "Erro ao conectar com o servidor."
        );

    }

});