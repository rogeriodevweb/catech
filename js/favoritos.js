document.addEventListener("DOMContentLoaded", () => {


    // ==========================
    // BOTÃO VOLTAR
    // ==========================

    const btnVoltar = document.querySelector(".btn-voltar");

    if(btnVoltar){

        btnVoltar.addEventListener("click", () => {

            history.back();

        });

    }



    // ==========================
    // CARREGAR FAVORITOS
    // ==========================

    const listaFavoritos = document.getElementById("listaFavoritos");


    if(!listaFavoritos) return;



    let favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];



    if(favoritos.length === 0){

        listaFavoritos.innerHTML = `

            <p class="sem-favoritos">
                Nenhum produto favorito encontrado.
            </p>

        `;

        return;

    }



    favoritos.forEach(produto => {


        listaFavoritos.innerHTML += `


        <div class="card-produto">


            <img 
            src="${produto.imagem}" 
            alt="${produto.nome}">


            <h2>
                ${produto.nome}
            </h2>



            <span class="preco">

                R$ ${Number(produto.preco)
                .toFixed(2)
                .replace(".",",")}

            </span>



            <div class="acoes">


                <button 
                class="btn-carrinho"
                onclick="adicionarCarrinho(
                    ${produto.id},
                    '${produto.nome}',
                    ${produto.preco},
                    '${produto.imagem}'
                )">

                    Adicionar ao Carrinho

                </button>



                <button 
                class="btn-remover"
                onclick="removerFavorito(${produto.id})">

                    Remover

                </button>


            </div>


        </div>


        `;


    });


});




// ==========================
// REMOVER FAVORITO
// ==========================

function removerFavorito(id){


    let favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];



    favoritos = favoritos.filter(
        produto => produto.id !== id
    );



    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );



    location.reload();


}