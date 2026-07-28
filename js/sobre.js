// =====================================
// BOTÃO VOLTAR
// =====================================

function voltarPagina(){

    window.history.back();

}





// =====================================
// ANIMAÇÃO DOS CARDS
// =====================================


document.addEventListener("DOMContentLoaded",()=>{


    const cards = document.querySelectorAll(
        ".sobre-card, .diferencial, .numero-box"
    );


    cards.forEach(card=>{


        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";



        setTimeout(()=>{


            card.style.transition = ".6s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";


        },100);



    });



});






// =====================================
// ANO AUTOMÁTICO DO FOOTER
// =====================================


const ano = new Date().getFullYear();


const footer = document.querySelector("footer p");


if(footer){


    footer.innerHTML =
    `© ${ano} CA Tech Solutions — Distrito Empresarial, Araguaína - TO`;


}