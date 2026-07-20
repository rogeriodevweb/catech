// =====================================
// APARÊNCIA - CA TECH
// Controle das preferências visuais
// =====================================



// ELEMENTOS

const temas = document.querySelectorAll('input[name="tema"]');

const cores = document.querySelectorAll(".cor");

const tamanhoFonte = document.getElementById("tamanhoFonte");

const btnSalvar = document.querySelector(".btn-salvar");







// =====================================
// CARREGAR CONFIGURAÇÕES SALVAS
// =====================================


window.addEventListener("DOMContentLoaded", () => {


    const configuracoes = JSON.parse(
        localStorage.getItem("aparencia")
    );


    if(configuracoes){


        // Tema

        if(configuracoes.tema){

            const temaSelecionado = document.querySelector(
                `input[value="${configuracoes.tema}"]`
            );


            if(temaSelecionado){

                temaSelecionado.checked = true;

                aplicarTema(configuracoes.tema);

            }

        }





        // Fonte

        if(configuracoes.fonte){

            tamanhoFonte.value = configuracoes.fonte;

            aplicarFonte(configuracoes.fonte);

        }





        // Cor

        if(configuracoes.cor){

            document.documentElement.style.setProperty(
                "--cor-principal",
                configuracoes.cor
            );

        }


    }



});









// =====================================
// ALTERAR TEMA
// =====================================


temas.forEach((tema)=>{


    tema.addEventListener("change",()=>{


        aplicarTema(tema.value);


    });


});





function aplicarTema(tema){



    if(tema === "escuro"){


        document.body.style.background = "#020617";

        document.body.style.color = "#ffffff";


    }



    else if(tema === "claro"){


        document.body.style.background = "#f8fafc";

        document.body.style.color = "#0f172a";


    }



    else{


        const hora = new Date().getHours();


        if(hora >= 18 || hora <= 6){


            document.body.style.background = "#020617";


        }

        else{


            document.body.style.background = "#f8fafc";


        }


    }



}









// =====================================
// ALTERAR COR PRINCIPAL
// =====================================


cores.forEach((cor)=>{


    cor.addEventListener("click",()=>{


        let novaCor;



        if(cor.classList.contains("azul")){

            novaCor="#2563eb";

        }


        if(cor.classList.contains("roxo")){

            novaCor="#7c3aed";

        }


        if(cor.classList.contains("verde")){

            novaCor="#16a34a";

        }


        if(cor.classList.contains("vermelho")){

            novaCor="#dc2626";

        }



        document.documentElement.style.setProperty(
            "--cor-principal",
            novaCor
        );



    });


});









// =====================================
// TAMANHO DA FONTE
// =====================================


tamanhoFonte.addEventListener("change",()=>{


    aplicarFonte(
        tamanhoFonte.value
    );


});





function aplicarFonte(tamanho){


    if(tamanho === "pequena"){


        document.body.style.fontSize="14px";


    }



    else if(tamanho === "grande"){


        document.body.style.fontSize="18px";


    }



    else{


        document.body.style.fontSize="16px";


    }


}









// =====================================
// SALVAR CONFIGURAÇÕES
// =====================================


btnSalvar.addEventListener("click",()=>{


    const temaSelecionado = document.querySelector(
        'input[name="tema"]:checked'
    );



    const configuracoes = {


        tema:
        temaSelecionado 
        ? temaSelecionado.value 
        : "automatico",



        fonte:
        tamanhoFonte.value,



        cor:
        getComputedStyle(
            document.documentElement
        ).getPropertyValue("--cor-principal")



    };



    localStorage.setItem(
        "aparencia",
        JSON.stringify(configuracoes)
    );



    alert(
        "Preferências de aparência salvas!"
    );



});