document.addEventListener("DOMContentLoaded", () => {

    const btnMais = document.querySelector(".mais");
    const btnMenos = document.querySelector(".menos");
    const quantidade = document.querySelector(".quantidade span");

    let qtd = 1;

    btnMais.addEventListener("click", () => {

        qtd++;

        quantidade.textContent = qtd;

    });

    btnMenos.addEventListener("click", () => {

        if(qtd > 1){

            qtd--;

            quantidade.textContent = qtd;

        }

    });

    document.querySelector(".remover").addEventListener("click", () => {

        if(confirm("Remover este produto do carrinho?")){

            document.querySelector(".produto").remove();

        }

    });

    document.querySelector(".continuar").addEventListener("click", () => {

        history.back();

    });

    document.querySelector(".finalizar").addEventListener("click", () => {

        alert("Redirecionando para o pagamento...");

        // Exemplo:
        // window.location.href = "checkout.html";

    });

});