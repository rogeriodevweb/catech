/*=====================================
=      ATALHOS RÁPIDOS
======================================*/

document.querySelectorAll(".atalho").forEach((item)=>{

    item.addEventListener("click",()=>{

        const nome=item.querySelector("span").textContent;

        console.log("Atalho clicado:",nome);

        switch(nome){

            case "Cupons":
                break;

            case "Ofertas":
                break;

            case "Lançamentos":
                break;

            case "Assistência":
                break;

            case "Kits":
                break;

        }

    });

});




// ==========================
// FAVORITOS
// ==========================

function favoritar(elemento, idProduto){


    elemento.classList.toggle("ativo");


    let favoritos = JSON.parse(
        localStorage.getItem("favoritos")
    ) || [];



    // pega os dados do card clicado

    const card = elemento.closest(".card-produtos");


    const nome = card.querySelector("h3").textContent;


    const preco = card.querySelector(".p-promocional").textContent
        .replace("R$","")
        .replace(",",".")
        .trim();



    const imagem = card.querySelector("img").src;



    const produto = {

        id: idProduto,

        nome: nome,

        preco: Number(preco),

        imagem: imagem

    };



    // verifica se já existe

    const existe = favoritos.find(
        item => item.id === idProduto
    );



    if(existe){


        favoritos = favoritos.filter(
            item => item.id !== idProduto
        );


    } else {


        favoritos.push(produto);


    }



    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );


}




// =====================================
// ADICIONAR PRODUTO AO CARRINHO
// =====================================

function adicionarCarrinho(id, nome, preco, imagem) {


    let carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];



    let produtoExistente = carrinho.find(
        produto => produto.id === id
    );



    if (produtoExistente) {

        produtoExistente.quantidade++;

    } 

    else {


        carrinho.push({

            id:id,

            nome:nome,

            preco:preco,

            imagem:imagem,

            quantidade:1

        });


    }



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





// =====================================
// BANNER AUTOMÁTICO CA TECH
// =====================================

const banners = [

    {
        tipo: "imagem",
        arquivo: "assets/banner-home.png",
        tempo: 5000
    },

    {
        tipo: "video",
        arquivo: "assets/banner-2.mp4"
    },

    {
        tipo: "imagem",
        arquivo: "assets/banner-componentes.png",
        tempo: 5000
    }

];

let indiceBanner = 0;

const bannerAtual = document.getElementById("bannerAtual");

const btnAnterior = document.querySelector(".btn-anterior");
const btnProximo = document.querySelector(".btn-proximo");

let temporizador;



function carregarBanner() {

    if (!bannerAtual) return;

    clearTimeout(temporizador);

    bannerAtual.innerHTML = "";

    const banner = banners[indiceBanner];



    if (banner.tipo === "imagem") {

        const img = document.createElement("img");

        img.src = banner.arquivo;
        img.alt = "Banner CA Tech";

        bannerAtual.appendChild(img);

        temporizador = setTimeout(() => {

            proximoBanner();

        }, banner.tempo);

    }

    else {

        const video = document.createElement("video");

        video.src = banner.arquivo;

        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;
        video.controls = false;

        bannerAtual.appendChild(video);

        video.play();

        video.addEventListener("ended", () => {

            proximoBanner();

        });

    }

}



function proximoBanner() {

    indiceBanner++;

    if (indiceBanner >= banners.length) {

        indiceBanner = 0;

    }

    carregarBanner();

}



function bannerAnterior() {

    indiceBanner--;

    if (indiceBanner < 0) {

        indiceBanner = banners.length - 1;

    }

    carregarBanner();

}



if (btnProximo) {

    btnProximo.addEventListener("click", proximoBanner);

}

if (btnAnterior) {

    btnAnterior.addEventListener("click", bannerAnterior);

}



carregarBanner();

// =====================================
// CARREGAR PRODUTOS DA LOJA
// =====================================

async function carregarProdutos() {

    const listaProdutos = document.getElementById("listaProdutos");

    if (!listaProdutos) return;


    try {

        const resposta = await fetch(
            "http://localhost:3000/produto"
        );


        const produtos = await resposta.json();




        produtos.forEach(produto => {


    const preco = produto.preco_promocional 
        ? produto.preco_promocional 
        : produto.preco_antigo;



    listaProdutos.innerHTML += `


    <div class="card-produtos" onclick="abrirProduto(${produto.idproduto})">


        <div class="imagem-botao">


            <img 
            src="../assets/lenovo.png"
            alt="${produto.nome}">


            <div 
class="favorito"
onclick="event.stopPropagation(); favoritar(this, ${produto.idproduto});">

    ❤

</div>


        </div>



        <h3>

            ${produto.nome}

        </h3>



        <div class="precos">


            <p class="p-antigo">

                R$ ${Number(produto.preco_antigo)
                .toFixed(2)
                .replace(".",",")}

            </p>



            <p class="p-promocional">

                R$ ${Number(preco)
                .toFixed(2)
                .replace(".",",")}

            </p>


        </div>




        <div class="btn-card">


            <img 
            src="/assets/avaliacoes.png"
            alt="Avaliações">


            <h5>
                4.5
            </h5>




            <button 
            class="btn-adicionar"


            onclick="
            event.stopPropagation();

            adicionarCarrinho(

                ${produto.idproduto},

                '${produto.nome}',

                ${preco},

                '../assets/lenovo.png'

            )">


                <img 
                src="/assets/Carrinho-compras.png">


            </button>


        </div>


    </div>


    `;


});



    } catch (erro) {


        console.error(
            "Erro ao carregar produtos:",
            erro
        );


    }


}



document.addEventListener(
"DOMContentLoaded",
carregarProdutos
);