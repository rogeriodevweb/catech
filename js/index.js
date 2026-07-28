/*=====================================
=      ATALHOS RÁPIDOS
======================================*/

document.querySelectorAll(".atalho").forEach((item)=>{

    item.addEventListener("click",()=>{

        const nome=item.querySelector("span").textContent;

        console.log("Atalho clicado:",nome);

        switch(nome){

            case "Cupons":
                // window.location.href="#cupons";
                break;

            case "Ofertas":
                // window.location.href="#ofertas";
                break;

            case "Lançamentos":
                // window.location.href="#lancamentos";
                break;

            case "Assistência":
                // window.location.href="#assistencia";
                break;

            case "Kits":
                // window.location.href="#kits";
                break;

        }

    });

});
document.querySelectorAll(".favorito").forEach(img => {

    img.addEventListener("click", () => {

        if (img.src.includes("heart.png")) {

            img.src = "assets/heart-red.png";

        } else {

            img.src = "assets/heart.png";

        }

    });

});

/*==========================
=       FAVORITOS
==========================*/

document.addEventListener("DOMContentLoaded", () => {

    const favoritos = document.querySelectorAll(".favorito");

    favoritos.forEach(favorito => {

        favorito.addEventListener("click", function () {

            this.classList.toggle("ativo");

        });

    });

});

// =====================================
// ADICIONAR PRODUTO AO CARRINHO
// =====================================

function adicionarCarrinho(id, nome, preco, imagem) {


    // Pega o carrinho salvo
    let carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];



    // Verifica se o produto já está no carrinho

    let produtoExistente = carrinho.find(
        produto => produto.id === id
    );



    if (produtoExistente) {


        // Se já existe, aumenta quantidade

        produtoExistente.quantidade++;


    } else {


        // Se não existe, adiciona

        carrinho.push({

            id: id,

            nome: nome,

            preco: preco,

            imagem: imagem,

            quantidade: 1

        });


    }



    // Salva novamente

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );



    alert("Produto adicionado ao carrinho!");

}
// =====================================
// ABRIR DETALHES DO PRODUTO
// =====================================

function abrirProduto(id){

    window.location.href = `pages/produto.html?id=${id}`;

}