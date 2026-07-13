/*====================================
=        FILTRO DE CUPONS
====================================*/

const botoesFiltro = document.querySelectorAll(".filtros button");
const cupons = document.querySelectorAll(".cupom");

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        botoesFiltro.forEach(btn => btn.classList.remove("ativo"));

        botao.classList.add("ativo");

        const status = botao.dataset.status;

        cupons.forEach(cupom => {

            if(status === "todos"){

                cupom.style.display = "flex";

            }else{

                cupom.style.display =
                    cupom.dataset.status === status
                    ? "flex"
                    : "none";

            }

        });

    });

});


/*====================================
=        PESQUISA DE CUPONS
====================================*/

const pesquisa = document.getElementById("pesquisarCupom");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    let encontrou = false;

    cupons.forEach(cupom => {

        const conteudo = cupom.innerText.toLowerCase();

        if(conteudo.includes(texto)){

            cupom.style.display = "flex";
            encontrou = true;

        }else{

            cupom.style.display = "none";

        }

    });

    let mensagem = document.querySelector(".sem-cupons");

    if(!encontrou){

        if(!mensagem){

            mensagem = document.createElement("h2");

            mensagem.className = "sem-cupons";

            mensagem.innerHTML = "Nenhum cupom encontrado.";

            document.querySelector(".lista-cupons").appendChild(mensagem);

        }

    }else{

        if(mensagem){

            mensagem.remove();

        }

    }

});


/*====================================
=        COPIAR CUPOM
====================================*/

const botoesCopiar = document.querySelectorAll(".copiar");

botoesCopiar.forEach(botao => {

    botao.addEventListener("click", () => {

        const codigo = botao.dataset.codigo;

        navigator.clipboard.writeText(codigo);

        const textoOriginal = botao.innerText;

        botao.innerText = "✅ Copiado!";

        botao.disabled = true;

        setTimeout(() => {

            botao.innerText = textoOriginal;

            botao.disabled = false;

        }, 2000);

    });

});