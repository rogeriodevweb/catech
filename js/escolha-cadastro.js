// =========================================
// ESCOLHA DE CADASTRO
// CA TECH
// =========================================


// =========================================
// ANIMAÇÃO DOS CARDS
// =========================================

document.addEventListener("DOMContentLoaded", ()=>{


    const cards = document.querySelectorAll(".card");


    cards.forEach((card, index)=>{


        card.style.opacity = "0";

        card.style.transform = "translateY(50px)";


        setTimeout(()=>{


            card.style.transition = "0.6s ease";


            card.style.opacity = "1";


            card.style.transform = "translateY(0)";


        }, index * 200);



    });



});




// =========================================
// EFEITO AO CLICAR NOS BOTÕES
// =========================================


const botoes = document.querySelectorAll(".card a");


botoes.forEach(botao=>{


    botao.addEventListener("click", ()=>{


        botao.innerHTML = "Carregando...";


    });


});

