const formulario = document.getElementById("formCupom");

const nomeCupom = document.getElementById("nomeCupom");
const codigoCupom = document.getElementById("codigoCupom");
const descricaoCupom = document.getElementById("descricaoCupom");

const tipoDesconto = document.getElementById("tipoDesconto");
const valorDesconto = document.getElementById("valorDesconto");

const valorMinimo = document.getElementById("valorMinimo");
const limiteUso = document.getElementById("limiteUso");
const limiteCliente = document.getElementById("limiteCliente");

const dataInicio = document.getElementById("dataInicio");
const dataFim = document.getElementById("dataFim");

const categoria = document.getElementById("categoria");
const status = document.getElementById("status");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(nomeCupom.value.trim() === ""){

        alert("Informe o nome do cupom.");

        nomeCupom.focus();

        return;

    }

    if(codigoCupom.value.trim() === ""){

        alert("Informe o código do cupom.");

        codigoCupom.focus();

        return;

    }

    if(valorDesconto.value === "" || Number(valorDesconto.value) <= 0){

        alert("Informe um valor de desconto válido.");

        valorDesconto.focus();

        return;

    }

    if(valorMinimo.value === ""){

        alert("Informe o valor mínimo da compra.");

        valorMinimo.focus();

        return;

    }

    if(limiteUso.value === "" || Number(limiteUso.value) <= 0){

        alert("Informe o limite de utilizações.");

        limiteUso.focus();

        return;

    }

    if(limiteCliente.value === "" || Number(limiteCliente.value) <= 0){

        alert("Informe o limite por cliente.");

        limiteCliente.focus();

        return;

    }

    if(dataInicio.value === ""){

        alert("Informe a data de início.");

        dataInicio.focus();

        return;

    }

    if(dataFim.value === ""){

        alert("Informe a data de expiração.");

        dataFim.focus();

        return;

    }

    if(new Date(dataFim.value) < new Date(dataInicio.value)){

        alert("A data de expiração não pode ser menor que a data de início.");

        dataFim.focus();

        return;

    }

    const cupom = {

        id: Date.now(),

        nome: nomeCupom.value.trim(),

        codigo: codigoCupom.value.trim().toUpperCase(),

        descricao: descricaoCupom.value.trim(),

        tipoDesconto: tipoDesconto.value,

        valorDesconto: Number(valorDesconto.value),

        valorMinimo: Number(valorMinimo.value),

        limiteUso: Number(limiteUso.value),

        limiteCliente: Number(limiteCliente.value),

        dataInicio: dataInicio.value,

        dataFim: dataFim.value,

        categoria: categoria.value,

        status: status.value

    };

    let cupons = JSON.parse(localStorage.getItem("cupons")) || [];

    const codigoExiste = cupons.some(c => c.codigo === cupom.codigo);

    if(codigoExiste){

        alert("Já existe um cupom com esse código.");

        codigoCupom.focus();

        return;

    }

    cupons.push(cupom);

    localStorage.setItem("cupons", JSON.stringify(cupons));

    alert("Cupom cadastrado com sucesso!");

    formulario.reset();

    status.value = "ativo";

    tipoDesconto.value = "porcentagem";

    limiteCliente.value = 1;

}

);

function gerarCodigoCupom(){

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for(let i = 0; i < 8; i++){

        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));

    }

    codigoCupom.value = codigo;

}

codigoCupom.addEventListener("blur", function(){

    codigoCupom.value = codigoCupom.value.toUpperCase();

});

function voltarPagina(){

    history.back();

}