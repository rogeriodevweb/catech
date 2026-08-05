// ===========================
// CADASTRAR PRODUTO
// ===========================

const form = document.getElementById("formProduto");


form.addEventListener("submit", (e) => {

    e.preventDefault();


    // pega todos os campos + imagem

    const dados = new FormData(form);



    // ===========================
    // VALIDAÇÃO
    // ===========================

    if(

        dados.get("nome").trim() === "" ||
        dados.get("descricao").trim() === "" ||
        dados.get("codigo").trim() === "" ||
        dados.get("marca_idMarca") === "" ||
        dados.get("categorias_idCategorias") === ""

    ){

        alert("Preencha todos os campos obrigatórios.");

        return;

    }



    // ===========================
    // ENVIA PARA O SERVIDOR
    // ===========================

    fetch("http://localhost:3000/produto", {


        method:"POST",


        body:dados


    })


    .then(res => res.json())


    .then(resposta => {


        if(resposta.sucesso){


            alert("Produto cadastrado com sucesso!");


            form.reset();


            window.location.href="../pages/home-lojista.html";


        }else{


            alert(resposta.mensagem);


        }


    })


    .catch(erro=>{


        console.error(erro);


        alert("Erro ao cadastrar produto.");


    });


});