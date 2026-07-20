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





    // Continuar comprando

    const continuar = document.querySelector(".continuar");


    if(continuar){

        continuar.addEventListener("click",()=>{

            history.back();

        });

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