document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelectorAll(".menu-item");
    const abas = document.querySelectorAll(".aba");

    menu.forEach(item => {
        item.addEventListener("click", () => {

            menu.forEach(i => i.classList.remove("ativo"));
            abas.forEach(a => a.classList.remove("ativo"));

            item.classList.add("ativo");

            const aba = document.getElementById(item.dataset.aba);

            if (aba) {
                aba.classList.add("ativo");
            }

        });
    });

});