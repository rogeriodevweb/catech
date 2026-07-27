document.addEventListener("DOMContentLoaded", () => {


    const itensMenu = document.querySelectorAll(".item-menu");


    // pega o nome da página atual
    const paginaAtual = window.location.pathname
        .split("/")
        .pop();



    itensMenu.forEach(item => {


        const link = item.getAttribute("href");


        // verifica qual página está aberta
        if(link === paginaAtual){

            item.classList.add("ativo");

        }



        item.addEventListener("click", () => {


            // remove ativo de todos
            itensMenu.forEach(menu => {

                menu.classList.remove("ativo");

            });



            // adiciona no clicado
            item.classList.add("ativo");


        });



    });



});