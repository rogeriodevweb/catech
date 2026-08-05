// =========================================
// CADASTRO LOJISTA - PÁGINA INICIAL
// CA TECH
// =========================================


// =========================================
// BOTÃO COMEÇAR CADASTRO
// =========================================

function iniciarCadastroLojista(){

    window.location.href = "cadastro-lojista.html";

}



// =========================================
// BOTÃO LOGIN LOJISTA
// =========================================

function entrarContaLojista(){

    window.location.href = "login.html";

}



// =========================================
// ANIMAÇÃO DOS CARDS
// =========================================

document.addEventListener("DOMContentLoaded",()=>{


    const cards = document.querySelectorAll(".card");


    cards.forEach((card,index)=>{


        card.style.opacity = "0";


        card.style.transform = "translateY(40px)";


        setTimeout(()=>{


            card.style.transition = "0.6s";


            card.style.opacity = "1";


            card.style.transform = "translateY(0)";


        }, index * 150);


    });



});



// =========================================
// VERIFICA SE O LOJISTA JÁ POSSUI LOGIN
// =========================================


function verificarLojista(){


    const lojista = localStorage.getItem("lojista");


    if(lojista){


        const botoes = document.querySelectorAll(".btn-principal");


        botoes.forEach(btn=>{


            btn.innerHTML = "Acessar Painel";


            btn.href = "home-lojista.html";


        });


    }


}



document.addEventListener(
    "DOMContentLoaded",
    verificarLojista
);



// =========================================
// SCROLL SUAVE
// =========================================


const links = document.querySelectorAll("a[href^='#']");


links.forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        const destino = document.querySelector(
            link.getAttribute("href")
        );


        destino.scrollIntoView({

            behavior:"smooth"

        });


    });


});

