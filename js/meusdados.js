// Aguarda a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Salvar formulário
    // ==========================

    const form = document.getElementById("formPerfil");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Dados atualizados com sucesso!");

        // Aqui futuramente você envia para o PHP
        // fetch("salvar_perfil.php", {...})

    });


    // ==========================
    // Buscar CEP
    // ==========================

    const btnCep = document.getElementById("buscarCep");

    btnCep.addEventListener("click", () => {

        const cep = document.getElementById("cep").value.trim();

        if (cep === "") {

            alert("Informe um CEP.");

            return;

        }

        console.log("Buscar CEP:", cep);

        // Aqui depois vamos integrar com a API ViaCEP

    });


    // ==========================
    // Encerrar sessão
    // ==========================

    const btnSair = document.querySelector(".btn-sair");

    btnSair.addEventListener("click", () => {

        const sair = confirm("Deseja realmente encerrar a sessão?");

        if (sair) {

            // Redireciona para o logout
            window.location.href = "logout.php";

        }

    });

});