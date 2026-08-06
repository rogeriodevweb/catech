//======================================================
// QUANDO A PÁGINA CARREGAR
//======================================================

document.addEventListener("DOMContentLoaded", function(){



//======================================================
// CADASTRAR PRODUTO
//======================================================

document.getElementById("btn-salvar")
.addEventListener("click", function (event) {


    event.preventDefault();


    const formData = new FormData();



    //==========================================
    // DADOS DO PRODUTO
    //==========================================

    formData.append("loja_idLoja",
        document.getElementById("loja_idLoja").value
    );


    formData.append("nome",
        document.getElementById("nome").value
    );


    formData.append("categorias_idCategorias",
        document.getElementById("categorias_idCategorias").value
    );


    formData.append("marca_idMarca",
        document.getElementById("marca_idMarca").value
    );


    formData.append("preco_antigo",
        document.getElementById("preco_antigo").value
    );


    formData.append("preco_promocional",
        document.getElementById("preco_promocional").value
    );


    formData.append("quantidade_estoque",
        document.getElementById("quantidade_estoque").value
    );


    formData.append("codigo",
        document.getElementById("codigo").value
    );


    formData.append("descricao",
        document.getElementById("descricao").value
    );


    formData.append("ativo",
        document.getElementById("ativo").value
    );



    //==========================================
    // IMAGEM PRINCIPAL
    //==========================================

    const imagemPrincipal =
    document.getElementById("imagem_principal").files[0];


    if(imagemPrincipal){

        formData.append(
            "imagem_principal",
            imagemPrincipal
        );

    }



    //==========================================
    // GALERIA
    //==========================================

    const galeria =
    document.getElementById("galeria_imagens").files;


    for(let i = 0; i < galeria.length; i++){

        formData.append(
            "galeria_imagens",
            galeria[i]
        );

    }



    fetch("http://localhost:3000/produtos",{


        method:"POST",

        body:formData


    })


    .then(response=>response.json())


    .then(data=>{


        console.log(data);


        alert("Produto cadastrado com sucesso!");


        document.getElementById("formProduto").reset();



    })


    .catch(error=>{


        console.error(error);


        alert("Erro ao cadastrar produto.");

    });



});





//======================================================
// CADASTRAR CATEGORIA
//======================================================


document.getElementById("btnCategoria")
.addEventListener("click",function(){



const nomeCategoria =
document.getElementById("novaCategoria")
.value
.trim();



if(nomeCategoria===""){


    alert("Digite o nome da categoria.");

    return;

}



fetch("http://localhost:3000/categorias",{


    method:"POST",


    headers:{


        "Content-Type":"application/json"


    },


    body:JSON.stringify({

        nome:nomeCategoria

    })


})


.then(response=>response.json())


.then(data=>{


    console.log(data);


    alert("Categoria cadastrada com sucesso!");


    document.getElementById("novaCategoria").value="";


    carregarCategorias();


})


.catch(error=>{


    console.error(error);


    alert("Erro ao cadastrar categoria.");

});


});





//======================================================
// CARREGAR CATEGORIAS
//======================================================


function carregarCategorias(){


fetch("http://localhost:3000/categorias")


.then(response=>response.json())


.then(categorias=>{


const select =
document.getElementById("categorias_idCategorias");



select.innerHTML =
'<option value="">Selecione uma categoria</option>';



categorias.forEach(categoria=>{


const option =
document.createElement("option");



option.value =
categoria.idCategoria;



option.textContent =
categoria.nome;



select.appendChild(option);



});


});


}





//======================================================
// CARREGAR MARCAS
//======================================================


function carregarMarcas(){


fetch("http://localhost:3000/marcas")


.then(response=>response.json())


.then(marcas=>{


const select =
document.getElementById("marca_idMarca");



select.innerHTML =
'<option value="">Selecione uma marca</option>';



marcas.forEach(marca=>{


const option =
document.createElement("option");



option.value =
marca.idMarca;



option.textContent =
marca.nome;



select.appendChild(option);



});


});


}





//======================================================
// CADASTRAR MARCA
//======================================================


document.getElementById("btnMarca")
.addEventListener("click",function(){



const nomeMarca =
document.getElementById("novaMarca")
.value
.trim();



if(nomeMarca===""){


    alert("Digite o nome da marca.");

    return;

}



fetch("http://localhost:3000/marcas",{


method:"POST",


headers:{


    "Content-Type":"application/json"


},


body:JSON.stringify({

    nome:nomeMarca

})


})


.then(response=>response.json())


.then(data=>{


console.log(data);


alert("Marca cadastrada com sucesso!");



document.getElementById("novaMarca").value="";



carregarMarcas();



})


.catch(error=>{


console.error(error);


alert("Erro ao cadastrar marca.");



});


});





//======================================================
// CARREGAR SELECTS AO ABRIR
//======================================================


carregarCategorias();

carregarMarcas();



});