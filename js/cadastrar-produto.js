document.addEventListener("DOMContentLoaded", () => {

    // Botão voltar

    const btnVoltar = document.querySelector(".btn-voltar");

    btnVoltar.addEventListener("click", () => {

        history.back();

    });

    // Botão cancelar

    const btnCancelar = document.querySelector(".btn-cancelar");

    btnCancelar.addEventListener("click", () => {

        if(confirm("Deseja cancelar o cadastro do produto?")){

            document.getElementById("formProduto").reset();

        }

    });

    // Salvar produto

    document
    .getElementById("formProduto")
    .addEventListener("submit", function(e){

        e.preventDefault();

        alert("Produto salvo com sucesso!");

        // Aqui futuramente enviaremos os dados para o PHP.

    });

});