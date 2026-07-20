/* ======================================
   NOTIFICAÇÕES CLIENTE - CA TECH
   notificacoes.js
====================================== */


document.addEventListener("DOMContentLoaded", () => {


    console.log("Página de notificações carregada");



    // Seleciona todos os switches

    const switches = document.querySelectorAll(
        ".switch input"
    );



    switches.forEach((item) => {



        item.addEventListener("change", () => {



            let status = item.checked 
                ? "ativada" 
                : "desativada";



            const titulo = item
                .closest(".notificacao-card")
                .querySelector("h2")
                .innerText;



            console.log(
                `${titulo}: ${status}`
            );



            /*
                Futuramente aqui pode ser feita
                a atualização no banco de dados:

                Exemplo:

                salvarPreferencia(
                    usuarioId,
                    titulo,
                    item.checked
                );

            */



        });



    });



});