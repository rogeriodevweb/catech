const formulario = document.getElementById("formCategoria");

const nomeCategoria = document.getElementById("nomeCategoria");
const descricaoCategoria = document.getElementById("descricaoCategoria");
const categoriaPai = document.getElementById("categoriaPai");
const statusCategoria = document.getElementById("statusCategoria");
const ordem = document.getElementById("ordem");
const imagemCategoria = document.getElementById("imagemCategoria");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(nomeCategoria.value.trim() === ""){

        alert("Informe o nome da categoria.");

        nomeCategoria.focus();

        return;

    }

    if(descricaoCategoria.value.trim() === ""){

        alert("Informe uma descrição para a categoria.");

        descricaoCategoria.focus();

        return;

    }

    if(ordem.value === "" || Number(ordem.value) <= 0){

        alert("Informe uma ordem de exibição válida.");

        ordem.focus();

        return;

    }

    const categoria = {

        id: Date.now(),

        nome: nomeCategoria.value.trim(),

        descricao: descricaoCategoria.value.trim(),

        categoriaPai: categoriaPai.value,

        status: statusCategoria.value,

        ordem: Number(ordem.value),

        imagem: imagemCategoria.files.length > 0
            ? imagemCategoria.files[0].name
            : ""

    };

    let categorias = JSON.parse(localStorage.getItem("categorias")) || [];

    categorias.push(categoria);

    localStorage.setItem("categorias", JSON.stringify(categorias));

    alert("Categoria cadastrada com sucesso!");

    formulario.reset();

    statusCategoria.value = "Ativa";

    ordem.value = 1;

});

function voltarPagina(){

    history.back();

}