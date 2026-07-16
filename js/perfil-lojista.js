//==========================================
// AGUARDA CARREGAR A PÁGINA
//==========================================

document.addEventListener("DOMContentLoaded", () => {

    //==========================================
    // BOTÕES
    //==========================================

    const btnSalvar = document.querySelector(".salvar");
    const btnCancelar = document.querySelector(".cancelar");
    const btnDesativar = document.querySelector(".desativar");

    //==========================================
    // SALVAR ALTERAÇÕES
    //==========================================

    btnSalvar.addEventListener("click", () => {

        const senha = document.getElementById("novaSenha").value;
        const confirmar = document.getElementById("confirmarSenha").value;

        if (senha !== confirmar) {

            alert("As senhas não coincidem.");
            return;

        }

        alert("Informações salvas com sucesso!");

    });

    //==========================================
    // CANCELAR
    //==========================================

    btnCancelar.addEventListener("click", () => {

        const confirmar = confirm("Deseja limpar todos os campos?");

        if (!confirmar) return;

        document.querySelector("form")?.reset();

        if (!document.querySelector("form")) {

            document.querySelectorAll("input").forEach(input => {

                if (
                    input.type !== "button" &&
                    input.type !== "submit" &&
                    input.type !== "file" &&
                    !input.readOnly
                ) {

                    input.value = "";

                }

            });

            document.querySelectorAll("textarea").forEach(textarea => {

                textarea.value = "";

            });

            document.querySelectorAll("select").forEach(select => {

                select.selectedIndex = 0;

            });

        }

    });

    //==========================================
    // DESATIVAR CONTA
    //==========================================

    btnDesativar.addEventListener("click", () => {

        const resposta = confirm("Tem certeza que deseja desativar sua conta?");

        if (resposta) {

            alert("Conta desativada.");

        }

    });

    //==========================================
    // INPUT FILE
    //==========================================

    const arquivos = document.querySelectorAll("input[type=file]");

    arquivos.forEach(input => {

        input.addEventListener("change", () => {

            if (input.files.length > 0) {

                console.log(input.files[0].name);

            }

        });

    });

    //==========================================
    // ALTERAR SENHA
    //==========================================

    const senha = document.getElementById("novaSenha");
    const confirmar = document.getElementById("confirmarSenha");

    confirmar.addEventListener("keyup", () => {

        if (senha.value === "") return;

        if (senha.value === confirmar.value) {

            confirmar.style.borderColor = "#22c55e";

        } else {

            confirmar.style.borderColor = "#ef4444";

        }

    });

});