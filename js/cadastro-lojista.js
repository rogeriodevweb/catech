// =====================================
// PEGAR CÓDIGO DA LOJA DA URL
// =====================================

const parametros =
    new URLSearchParams(window.location.search);

const codigoLoja =
    parametros.get("codigo");


// =====================================
// PREENCHER CÓDIGO NO INPUT
// =====================================

const campoCodigo =
    document.getElementById("codigoLoja");


if (codigoLoja) {

    campoCodigo.value = codigoLoja;

}


// =====================================
// BOTÃO CADASTRAR
// =====================================

document
.getElementById("btnCadastrar")
.addEventListener("click", async function(){


    // =====================================
    // VERIFICAR CÓDIGO
    // =====================================

    if (!codigoLoja) {

        alert(
            "Código da loja não encontrado."
        );

        return;

    }


    // =====================================
    // SENHAS
    // =====================================

    const senha =
        document.getElementById("senha").value;


    const confirmarSenha =
        document.getElementById("confirmarSenha").value;


    // =====================================
    // VERIFICAR SENHA
    // =====================================

    if (senha !== confirmarSenha) {

        alert("As senhas não são iguais!");

        return;

    }


    // =====================================
    // DADOS DO LOJISTA
    // =====================================

    const lojista = {

        // Código da loja
        codigoLoja:
            codigoLoja,


        nome:
            document
            .getElementById("nome")
            .value,


        cpf:
            document
            .getElementById("cpf")
            .value,


        telefone:
            document
            .getElementById("telefone")
            .value,


        nascimento:
            document
            .getElementById("nascimento")
            .value,


        email:
            document
            .getElementById("email")
            .value,


        senha:
            senha,


        nomeLoja:
            document
            .getElementById("nomeLoja")
            .value,


        cnpj:
            document
            .getElementById("cnpj")
            .value,


        nomeFantasia:
            document
            .getElementById("nomeFantasia")
            .value,


        descricao:
            document
            .getElementById("descricao")
            .value,


        cep:
            document
            .getElementById("cep")
            .value,


        estado:
            document
            .getElementById("estado")
            .value,


        cidade:
            document
            .getElementById("cidade")
            .value,


        bairro:
            document
            .getElementById("bairro")
            .value,


        endereco:
            document
            .getElementById("endereco")
            .value,


        instagram:
            document
            .getElementById("instagram")
            .value,


        whatsapp:
            document
            .getElementById("whatsapp")
            .value

    };


    // =====================================
    // ENVIAR PARA O SERVIDOR
    // =====================================

    try {

        const resposta = await fetch(

            "https://catech.onrender.com/lojistas",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(lojista)

            }

        );


        const dados =
            await resposta.json();


        // =====================================
        // CADASTRO REALIZADO
        // =====================================

        if (resposta.ok) {

            alert(
                dados.mensagem
            );


            window.location.href =
                "login-lojista.html";

        }


        // =====================================
        // ERRO
        // =====================================

        else {

            alert(
                dados.mensagem
            );

        }


    }

    catch (erro) {

        console.log(erro);


        alert(
            "Erro ao conectar com o servidor"
        );

    }

});