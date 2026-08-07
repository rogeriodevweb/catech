//======================================================
// QUANDO A PÁGINA CARREGAR
//======================================================

document.addEventListener("DOMContentLoaded", function(){


//======================================================
// CONFIGURAÇÕES
//======================================================

const API = "http://localhost:3000";



//======================================================
// ELEMENTOS
//======================================================

const selectMarca =
document.getElementById("produtoMarca");


const selectCategoria =
document.getElementById("produtoCategoria");


const selectCor =
document.getElementById("produtoCor");


const selectTamanho =
document.getElementById("produtoTamanho");





//======================================================
// CARREGAR MARCAS
//======================================================

function carregarMarcas(){


fetch(`${API}/marcas`)


.then(response => response.json())


.then(data => {


selectMarca.innerHTML = "";



let opcao =
document.createElement("option");


opcao.value="";


opcao.textContent =
"Selecione uma marca";


selectMarca.appendChild(opcao);



data.forEach(marca=>{


let option =
document.createElement("option");


option.value =
marca.idMarca;


option.textContent =
marca.nome;


selectMarca.appendChild(option);


});


})


.catch(error=>{


console.error(
"Erro ao carregar marcas:",
error
);


});


}





//======================================================
// CARREGAR CATEGORIAS
//======================================================

function carregarCategorias(){


fetch(`${API}/categorias`)


.then(response=>response.json())


.then(data=>{


selectCategoria.innerHTML="";



let opcao =
document.createElement("option");


opcao.value="";


opcao.textContent =
"Selecione uma categoria";


selectCategoria.appendChild(opcao);



data.forEach(categoria=>{


let option =
document.createElement("option");


option.value =
categoria.idCategoria;


option.textContent =
categoria.nome;


selectCategoria.appendChild(option);


});


})


.catch(error=>{


console.error(
"Erro ao carregar categorias:",
error
);


});


}






//======================================================
// SALVAR NOVA CATEGORIA
//======================================================

document
.getElementById("btn-salvar-categoria")
.addEventListener("click", function(){


const nome =
document.getElementById("novaCategoria")
.value
.trim();



if(!nome){

    alert("Digite uma categoria.");

    return;

}



//==========================================
// ENVIAR PARA API
//==========================================

fetch(`${API}/categorias`, {

    method:"POST",

    headers:{

        "Content-Type":"application/json"

    },

    body:JSON.stringify({

        nome:nome

    })

})

.then(response=>response.json())


.then(data=>{


    console.log("RETORNO CATEGORIA:", data);



    if(data.sucesso){


        let option =
        document.createElement("option");



        option.value =
        data.idCategoria;



        option.textContent =
        nome;



        selectCategoria.appendChild(option);



        selectCategoria.value =
        data.idCategoria;



        document
        .getElementById("novaCategoria")
        .value="";



        alert("Categoria salva!");

    }


})


.catch(error=>{


    console.error(
        "Erro ao salvar categoria:",
        error
    );


    alert(
        "Erro ao salvar categoria."
    );


});


});
//======================================================
// SALVAR NOVA MARCA
//======================================================


document
.getElementById("btn-salvar-marca")
.addEventListener("click", function(){



const nome =
document.getElementById("novaMarca")
.value
.trim();



if(!nome){

alert("Digite uma marca.");

return;

}




fetch(`${API}/marcas`,{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({

nome:nome

})


})


.then(response=>response.json())


.then(data=>{


if(data.sucesso){



let option =
document.createElement("option");


option.value =
data.idMarca;


option.textContent =
nome;


selectMarca.appendChild(option);



selectMarca.value =
data.idMarca;



document.getElementById("novaMarca")
.value="";



alert("Marca salva!");


}


})


.catch(error=>{


console.error(error);


alert("Erro ao salvar marca.");


});


});



//======================================================
// SALVAR NOVA COR
//======================================================

document
.getElementById("btn-salvar-cor")
.addEventListener("click", function(){


const nome =
document.getElementById("novaCor")
.value
.trim();



if(!nome){

    alert("Digite uma cor.");

    return;

}



fetch(`${API}/cores`, {

    method:"POST",

    headers:{

        "Content-Type":"application/json"

    },

    body:JSON.stringify({

        nome:nome

    })

})

.then(response=>response.json())


.then(data=>{


    console.log("RETORNO COR:", data);



    if(data.sucesso){


        let option =
        document.createElement("option");



        option.value =
        data.idCores;



        option.textContent =
        nome;



        selectCor.appendChild(option);



        selectCor.value =
        data.idCores;



        document
        .getElementById("novaCor")
        .value="";



        alert("Cor salva!");

    }


})


.catch(error=>{


    console.error(
        "Erro ao salvar cor:",
        error
    );


    alert(
        "Erro ao salvar cor."
    );


});


});

//======================================================
// CARREGAR CORES
//======================================================

function carregarCores(){


fetch(`${API}/cores`)


.then(response=>response.json())


.then(data=>{


selectCor.innerHTML="";


let opcao =
document.createElement("option");


opcao.value="";


opcao.textContent =
"Selecione uma cor";


selectCor.appendChild(opcao);



data.forEach(cor=>{


let option =
document.createElement("option");


option.value =
cor.idCores;


option.textContent =
cor.nome;


selectCor.appendChild(option);


});


})


.catch(error=>{


console.error(
"Erro ao carregar cores:",
error
);


});


}



//======================================================
// SALVAR NOVO TAMANHO
//======================================================

document
.getElementById("btn-salvar-tamanho")
.addEventListener("click", function(){


const tamanho =
document.getElementById("novoTamanho")
.value
.trim();



if(!tamanho){

    alert("Digite um tamanho.");

    return;

}



fetch(`${API}/tamanho`, {

    method:"POST",

    headers:{

        "Content-Type":"application/json"

    },

    body:JSON.stringify({

        tamanho:tamanho

    })

})

.then(response=>response.json())


.then(data=>{


    console.log("RETORNO TAMANHO:", data);



    if(data.sucesso){


        let option =
        document.createElement("option");



        option.value =
        data.idTamanho;



        option.textContent =
        tamanho;



        selectTamanho.appendChild(option);



        selectTamanho.value =
        data.idTamanho;



        document
        .getElementById("novoTamanho")
        .value="";



        alert("Tamanho salvo!");

    }


})


.catch(error=>{


    console.error(
        "Erro ao salvar tamanho:",
        error
    );


    alert(
        "Erro ao salvar tamanho."
    );


});


});

//======================================================
// CARREGAR TAMANHOS
//======================================================

function carregarTamanhos(){


fetch(`${API}/tamanho`)


.then(response=>response.json())


.then(data=>{


selectTamanho.innerHTML="";


let opcao =
document.createElement("option");


opcao.value="";


opcao.textContent =
"Selecione um tamanho";


selectTamanho.appendChild(opcao);



data.forEach(tamanho=>{


let option =
document.createElement("option");


option.value =
tamanho.idTamanho;


option.textContent =
tamanho.tamanho;


selectTamanho.appendChild(option);


});


})


.catch(error=>{


console.error(
"Erro ao carregar tamanhos:",
error
);


});


}





//======================================================
// INICIAR SELECTS
//======================================================


carregarMarcas();

carregarCategorias();

carregarCores();

carregarTamanhos();



});