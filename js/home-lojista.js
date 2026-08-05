// ==============================
// HOME DO LOJISTA
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Destacar menu selecionado
    // ==========================

    const itensMenu = document.querySelectorAll(".item-menu");

    itensMenu.forEach(item => {

        item.addEventListener("click", () => {

            itensMenu.forEach(menu => {

                menu.classList.remove("ativo");

            });

            item.classList.add("ativo");

        });

    });

    // ==========================
    // Animação dos cards
    // ==========================

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "0.4s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 100);

    });

});