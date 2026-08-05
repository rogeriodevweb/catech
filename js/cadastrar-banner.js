//==========================================
// PREVIEW DO ARQUIVO
//==========================================

const arquivoInput = document.getElementById("arquivo");
const preview = document.getElementById("previewImagem");

arquivoInput.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) {

        preview.src = "../assets/imagem-padrao.png";
        return;

    }

    // Apenas imagens possuem preview nesta tela
    if (arquivo.type.startsWith("image/")) {

        const leitor = new FileReader();

        leitor.onload = function (e) {

            preview.src = e.target.result;

        };

        leitor.readAsDataURL(arquivo);

    } else {

        // Se for vídeo, mantém a imagem padrão
        preview.src = "../assets/imagem-padrao.png";

    }

});

//==========================================
// CADASTRAR BANNER
//==========================================

const form = document.getElementById("formBanner");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const arquivo = arquivoInput.files[0];

    if (!arquivo) {

        alert("Selecione uma imagem ou um vídeo.");
        return;

    }

    const formData = new FormData();

    formData.append("arquivo", arquivo);
    formData.append("titulo", document.getElementById("titulo").value);
    formData.append("descricao", document.getElementById("descricao").value);
    formData.append("link", document.getElementById("link").value);
    formData.append("data_inicio", document.getElementById("inicio").value);
    formData.append("data_final", document.getElementById("fim").value);

    formData.append(
        "status_visibilidade",
        document.getElementById("status").value === "ativo"
    );

    // Troque pelo ID da loja logada quando implementar o login
    formData.append("loja_idLoja", 1);

    try {

        const resposta = await fetch("http://localhost:3000/banner", {

            method: "POST",
            body: formData

        });

        const dados = await resposta.json();

        if (resposta.ok) {

            alert(dados.mensagem);

            form.reset();

            preview.src = "../assets/imagem-padrao.png";

        } else {

            alert(dados.mensagem);

        }

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com o servidor.");

    }

});