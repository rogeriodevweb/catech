document.addEventListener("DOMContentLoaded", () => {


    const listaCarrinho = document.querySelector(".lista-carrinho");


    let carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];



    // Caso não tenha produtos

    if(carrinho.length === 0){

        listaCarrinho.innerHTML = `

            <p class="carrinho-vazio">
                Nenhum produto no carrinho.
            </p>

        `;

        return;

    }





    // Mostrar produtos

    listaCarrinho.innerHTML = "";



    carrinho.forEach((produto, index) => {


        listaCarrinho.innerHTML += `

        <div class="produto" data-index="${index}">


            <img src="${produto.imagem}" 
            alt="${produto.nome}">


            <div class="informacoes-produto">


                <h3>
                    ${produto.nome}
                </h3>


                <p>
                    R$ ${produto.preco.toFixed(2)}
                </p>



                <div class="quantidade">


                    <button class="menos">
                        -
                    </button>


                    <span>
                        ${produto.quantidade}
                    </span>


                    <button class="mais">
                        +
                    </button>


                </div>



            </div>


            <button class="remover">
                Remover
            </button>



        </div>

        `;


    });






    // Aumentar quantidade

    document.querySelectorAll(".mais")
    .forEach((botao, index)=>{


        botao.addEventListener("click",()=>{


            carrinho[index].quantidade++;


            salvarCarrinho();


            location.reload();


        });


    });





    // Diminuir quantidade

    document.querySelectorAll(".menos")
    .forEach((botao,index)=>{


        botao.addEventListener("click",()=>{


            if(carrinho[index].quantidade > 1){

                carrinho[index].quantidade--;

            }


            salvarCarrinho();


            location.reload();


        });


    });






    // Remover produto

    document.querySelectorAll(".remover")
    .forEach((botao,index)=>{


        botao.addEventListener("click",()=>{


            carrinho.splice(index,1);


            salvarCarrinho();


            location.reload();


        });


    });







    function salvarCarrinho(){


        localStorage.setItem(

            "carrinho",

            JSON.stringify(carrinho)

        );


    }





  





    // Finalizar compra

    const finalizar = document.querySelector(".finalizar");


    if(finalizar){

        finalizar.addEventListener("click",()=>{


            alert(
                "Redirecionando para o pagamento..."
            );


        });

    }



});

document.addEventListener("DOMContentLoaded", () => {

    const precoProduto = 100; // preço do produto
    let quantidade = 1;

    const quantidadeTexto = document.querySelector(".quantidade span");
    const subtotal = document.querySelector("#subtotal");
    const frete = document.querySelector("#frete");
    const desconto = document.querySelector("#desconto");
    const total = document.querySelector("#total");


    function atualizarCarrinho(){

        let valorSubtotal = precoProduto * quantidade;

        let valorFrete = valorSubtotal > 0 ? 0 : 20;

        let valorDesconto = 0;

        let valorTotal = valorSubtotal + valorFrete - valorDesconto;


        subtotal.textContent = 
            "R$ " + valorSubtotal.toFixed(2).replace(".", ",");


        frete.textContent = 
            "R$ " + valorFrete.toFixed(2).replace(".", ",");


        desconto.textContent =
            "R$ " + valorDesconto.toFixed(2).replace(".", ",");


        total.textContent =
            "R$ " + valorTotal.toFixed(2).replace(".", ",");

    }



    document.querySelector(".mais").addEventListener("click", () => {

        quantidade++;

        quantidadeTexto.textContent = quantidade;

        atualizarCarrinho();

    });



    document.querySelector(".menos").addEventListener("click", () => {

        if(quantidade > 1){

            quantidade--;

            quantidadeTexto.textContent = quantidade;

            atualizarCarrinho();

        }

    });



    atualizarCarrinho();

});
  // Continuar comprando
function continuarComprando() {
    window.location.href = "../index.html";
}