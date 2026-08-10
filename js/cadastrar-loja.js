// =====================================
// FORMULÁRIO
// =====================================

const form = document.getElementById("formLoja");


// =====================================
// CADASTRAR LOJA
// =====================================

form.addEventListener("submit", async function (event) {

    event.preventDefault();


    // =====================================
    // DADOS DA LOJA
    // =====================================

    const loja = {

        nome:
            document.getElementById("nome").value.trim(),

        razaoSocial:
            document.getElementById("razaoSocial").value.trim(),

        cnpj:
            document.getElementById("cnpj").value.trim(),

        inscricaoEstadual:
            document.getElementById("inscricaoEstadual").value.trim(),

        fundacao:
            document.getElementById("fundacao").value,

        email:
            document.getElementById("email").value.trim(),

        telefone:
            document.getElementById("telefone").value.trim(),

        whatsapp:
            document.getElementById("whatsapp").value.trim(),

        site:
            document.getElementById("site").value.trim(),

        instagram:
            document.getElementById("instagram").value.trim(),

        facebook:
            document.getElementById("facebook").value.trim(),

        linkedin:
            document.getElementById("linkedin").value.trim(),

        cep:
            document.getElementById("cep").value.trim(),

        estado:
            document.getElementById("estado").value.trim(),

        cidade:
            document.getElementById("cidade").value.trim(),

        bairro:
            document.getElementById("bairro").value.trim(),

        rua:
            document.getElementById("rua").value.trim(),

        numero:
            document.getElementById("numero").value.trim(),

        complemento:
            document.getElementById("complemento").value.trim(),

        descricao:
            document.getElementById("descricao").value.trim()

    };


    // =====================================
    // VALIDAÇÃO
    // =====================================

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

        alert("Preencha todos os campos obrigatórios.");

        return;

    }


    // =====================================
    // ENVIA PARA O SERVIDOR
    // =====================================

    try {

        const resposta = await fetch(

            "http://localhost:3000/lojas/cadastrar",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(loja)

            }

        );


        const dados = await resposta.json();


        // =====================================
        // VERIFICA ERRO
        // =====================================

        if (!resposta.ok) {

            throw new Error(

                dados.erro ||

                "Erro ao cadastrar a loja."

            );

        }


        // =====================================
        // CÓDIGO GERADO PELO SERVIDOR
        // =====================================

        const codigoLoja =
            dados.codigoAcesso;


        // =====================================
        // TELA DE SUCESSO
        // =====================================

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

                        onclick="window.location.href='cadastro-lojista.html?codigo=${encodeURIComponent(codigoLoja)}'"

                    >

                        Cadastrar Lojista

                    </button>

                </div>

            </div>

        `;


    }

    catch (erro) {

        console.error(erro);

        alert(erro.message);

    }

});