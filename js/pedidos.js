/*====================================
=          FILTRO PEDIDOS            =
====================================*/

const botoesFiltro = document.querySelectorAll(".filtros button");
const pedidos = document.querySelectorAll(".pedido");

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        // Remove botão ativo
        botoesFiltro.forEach(btn => btn.classList.remove("ativo"));

        // Ativa o botão clicado
        botao.classList.add("ativo");

        const status = botao.dataset.status;

        pedidos.forEach(pedido => {

            if(status === "todos"){

                pedido.style.display = "flex";

            }else{

                pedido.style.display =
                pedido.dataset.status === status
                ? "flex"
                : "none";

            }

        });

    });

});


/*====================================
=        PESQUISA PEDIDOS            =
====================================*/

const campoPesquisa = document.getElementById("pesquisaPedido");

campoPesquisa.addEventListener("keyup", () => {

    const texto = campoPesquisa.value.toLowerCase();

    let encontrou = false;

    pedidos.forEach(pedido => {

        const conteudo = pedido.innerText.toLowerCase();

        if(conteudo.includes(texto)){

            pedido.style.display = "flex";
            encontrou = true;

        }else{

            pedido.style.display = "none";

        }

    });

    let mensagem = document.querySelector(".sem-pedidos");

    if(!encontrou){

        if(!mensagem){

            mensagem = document.createElement("h2");

            mensagem.className = "sem-pedidos";

            mensagem.innerHTML = "Nenhum pedido encontrado.";

            document.querySelector(".pedidos").appendChild(mensagem);

        }

    }else{

        if(mensagem){

            mensagem.remove();

        }

    }

});


/*====================================
=      BOTÕES DOS PEDIDOS            =
====================================*/

document.querySelectorAll(".lado-direito button").forEach(botao => {

    botao.addEventListener("click", () => {

        alert("Função em desenvolvimento.");

    });

});