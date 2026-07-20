/* ======================================
   SEGURANÇA CLIENTE - CA TECH
   seguranca.js
====================================== */


document.addEventListener("DOMContentLoaded", () => {


    console.log("Página de segurança carregada");



    // ================================
    // Autenticação em dois fatores
    // ================================


    const doisFatores = document.querySelector(
        ".switch input"
    );



    if (doisFatores) {


        doisFatores.addEventListener("change", () => {


            if (doisFatores.checked) {


                alert(
                    "Autenticação em dois fatores ativada!"
                );


            } else {


                alert(
                    "Autenticação em dois fatores desativada!"
                );


            }


        });


    }







    // ================================
    // Botões de ação
    // ================================


    const botoes = document.querySelectorAll(
        ".seguranca-card button"
    );



    botoes.forEach(botao => {


        botao.addEventListener("click", () => {


            const acao = botao.innerText;



            switch(acao){


                case "Alterar":

                    alert(
                        "Abrir tela de alteração de senha"
                    );

                break;




                case "Ver":

                    alert(
                        "Abrir informações de segurança"
                    );

                break;




                case "Sair":

                    const confirmar = confirm(
                        "Deseja encerrar todas as sessões?"
                    );



                    if(confirmar){

                        alert(
                            "Sessões encerradas com sucesso!"
                        );

                    }


                break;



            }



        });



    });



});