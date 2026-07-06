document.addEventListener("DOMContentLoaded", () => {

    // Voltar

    document
    .querySelector(".btn-voltar")
    .addEventListener("click", () => {

        history.back();

    });

    // Adicionar ao carrinho

    document
    .querySelector(".btn-carrinho")
    .addEventListener("click", () => {

        alert("Produto adicionado ao carrinho!");

    });

    // Remover favorito

    document
    .querySelector(".btn-remover")
    .addEventListener("click", () => {

        if(confirm("Remover este produto dos favoritos?")){

            document.querySelector(".card-produto").remove();

        }

    });

});