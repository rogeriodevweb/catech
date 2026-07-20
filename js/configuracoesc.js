// ======================================
// CONFIGURAÇÕES CLIENTE - CA TECH
// CONFIGURACOES.js
// ======================================


// Aguarda o carregamento da página

document.addEventListener("DOMContentLoaded", () => {


    console.log("Página de configurações carregada");



    // Seleciona todos os cards

    const cards = document.querySelectorAll(".config-card");



    // Animação simples ao passar o mouse

    cards.forEach(card => {



        card.addEventListener("mouseenter", () => {

            card.style.cursor = "pointer";

        });



    });



});