/* ======================================
   PRIVACIDADE CLIENTE - CA TECH
   privacidade.js
====================================== */


document.addEventListener("DOMContentLoaded", () => {


    console.log("Página de privacidade carregada");



    // ================================
    // Controle dos switches
    // ================================


    const switches = document.querySelectorAll(
        ".switch input"
    );



    switches.forEach((item) => {



        item.addEventListener("change", () => {



            const titulo = item
                .closest(".privacidade-card")
                .querySelector("h2")
                .innerText;



            const status = item.checked
                ? "ativado"
                : "desativado";



            console.log(
                `${titulo}: ${status}`
            );



            /*
                Futuramente enviar para o banco:

                atualizarPrivacidade(
                    usuarioId,
                    titulo,
                    item.checked
                );

            */



        });



    });







    // ================================
    // Botões de gerenciamento
    // ================================


    const botoes = document.querySelectorAll(
        ".privacidade-card button"
    );



    botoes.forEach((botao) => {



        botao.addEventListener("click", () => {



            const acao = botao.innerText;



            switch(acao){



                case "Gerenciar":

                    alert(
                        "Abrir gerenciamento de permissões"
                    );

                break;




                case "Ver dados":

                    alert(
                        "Abrir dados armazenados da conta"
                    );

                break;



            }



        });



    });



});