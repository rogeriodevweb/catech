document.addEventListener("DOMContentLoaded", () => {

    console.log("Dashboard carregado!");

    const btnLoja = document.querySelector(".btn-loja");

    btnLoja.addEventListener("click", () => {

        // Altere para a página inicial da sua loja
        window.location.href = "../index.html";

    });

});