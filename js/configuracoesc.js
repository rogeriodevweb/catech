document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MENU LATERAL
    ========================== */

    const menu = document.querySelectorAll(".menu-config li");
    const abas = document.querySelectorAll(".aba");

    menu.forEach(item => {

        item.addEventListener("click", () => {

            menu.forEach(li => li.classList.remove("ativo"));
            abas.forEach(aba => aba.classList.remove("ativa"));

            item.classList.add("ativo");

            const abaSelecionada = document.getElementById(item.dataset.aba);

            if (abaSelecionada) {

                abaSelecionada.classList.add("ativa");

            }

        });

    });

    /* ==========================
       BOTÕES AZUIS
    ========================== */

    document.querySelectorAll(".btn-azul").forEach(botao => {

        botao.addEventListener("click", () => {

            switch (botao.textContent.trim()) {

                case "Salvar Alterações":
                    alert("Dados salvos com sucesso!");
                    break;

                case "Alterar Foto":
                    alert("Em breve será possível alterar sua foto.");
                    break;

                case "Exportar Meus Dados":
                    alert("Seu download será iniciado.");
                    break;

                default:
                    alert("Função em desenvolvimento.");
                    break;

            }

        });

    });

    /* ==========================
       BOTÃO CINZA
    ========================== */

    const btnSair = document.querySelector(".btn-cinza");

    if (btnSair) {

        btnSair.addEventListener("click", () => {

            if (confirm("Deseja realmente encerrar a sessão?")) {

                alert("Sessão encerrada.");

                // window.location.href = "logout.php";

            }

        });

    }

    /* ==========================
       BOTÃO VERMELHO
    ========================== */

    const btnExcluir = document.querySelector(".btn-vermelho");

    if (btnExcluir) {

        btnExcluir.addEventListener("click", () => {

            if (confirm("Deseja realmente excluir sua conta?\n\nEssa ação não poderá ser desfeita.")) {

                alert("Conta excluída.");

                // window.location.href = "excluirConta.php";

            }

        });

    }

    /* ==========================
       CAMPOS
    ========================== */

    document.querySelectorAll("input, select").forEach(campo => {

        campo.addEventListener("change", () => {

            console.log(`${campo.id} alterado para:`, campo.value);

        });

    });

    /* ==========================
       CHECKBOX
    ========================== */

    document.querySelectorAll('input[type="checkbox"]').forEach(check => {

        check.addEventListener("change", () => {

            console.log("Checkbox:", check.checked);

        });

    });

    /* ==========================
       RADIO
    ========================== */

    document.querySelectorAll('input[type="radio"]').forEach(radio => {

        radio.addEventListener("change", () => {

            console.log("Tema selecionado:", radio.value);

        });

    });

});