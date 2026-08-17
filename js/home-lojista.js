// ======================================================
// HOME DO LOJISTA
// ======================================================

document.addEventListener("DOMContentLoaded", () => {


    // ==================================================
    // DESTACAR MENU SELECIONADO
    // ==================================================

    const itensMenu =
        document.querySelectorAll(".item-menu");


    itensMenu.forEach(item => {

        item.addEventListener("click", () => {


            // Remover ativo de todos

            itensMenu.forEach(menu => {

                menu.classList.remove("ativo");

            });


            // Adicionar ativo ao selecionado

            item.classList.add("ativo");

        });

    });


    // ==================================================
    // ANIMAÇÃO DOS CARDS
    // ==================================================

    const cards =
        document.querySelectorAll(".card");


    cards.forEach((card, index) => {


        // Estado inicial

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";


        // Animação

        setTimeout(() => {

            card.style.transition =
                "0.4s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, index * 100);

    });

});