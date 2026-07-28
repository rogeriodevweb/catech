const formulario = document.getElementById("formFrete");

const cep = document.getElementById("cep");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const endereco = document.getElementById("endereco");

const correios = document.getElementById("correios");
const transportadora = document.getElementById("transportadora");
const retirada = document.getElementById("retirada");
const entregaPropria = document.getElementById("entregaPropria");

const freteGratis = document.getElementById("freteGratis");
const valorEntrega = document.getElementById("valorEntrega");
const raioEntrega = document.getElementById("raioEntrega");

const prazoMinimo = document.getElementById("prazoMinimo");
const prazoMaximo = document.getElementById("prazoMaximo");

const observacoes = document.getElementById("observacoes");

carregarConfiguracoes();

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(cep.value.trim() === ""){

        alert("Informe o CEP de origem.");

        cep.focus();

        return;

    }

    if(estado.value.trim() === ""){

        alert("Informe o estado.");

        estado.focus();

        return;

    }

    if(cidade.value.trim() === ""){

        alert("Informe a cidade.");

        cidade.focus();

        return;

    }

    if(endereco.value.trim() === ""){

        alert("Informe o endereço.");

        endereco.focus();

        return;

    }

    if(!correios.checked &&
       !transportadora.checked &&
       !retirada.checked &&
       !entregaPropria.checked){

        alert("Selecione pelo menos uma forma de entrega.");

        return;

    }

    if(prazoMinimo.value === ""){

        alert("Informe o prazo mínimo.");

        prazoMinimo.focus();

        return;

    }

    if(prazoMaximo.value === ""){

        alert("Informe o prazo máximo.");

        prazoMaximo.focus();

        return;

    }

    if(Number(prazoMaximo.value) < Number(prazoMinimo.value)){

        alert("O prazo máximo deve ser maior ou igual ao prazo mínimo.");

        prazoMaximo.focus();

        return;

    }

    const configuracaoFrete = {

        cep: cep.value,

        estado: estado.value,

        cidade: cidade.value,

        endereco: endereco.value,

        correios: correios.checked,

        transportadora: transportadora.checked,

        retirada: retirada.checked,

        entregaPropria: entregaPropria.checked,

        freteGratis: Number(freteGratis.value || 0),

        valorEntrega: Number(valorEntrega.value || 0),

        raioEntrega: Number(raioEntrega.value || 0),

        prazoMinimo: Number(prazoMinimo.value),

        prazoMaximo: Number(prazoMaximo.value),

        observacoes: observacoes.value.trim()

    };

    localStorage.setItem(
        "configuracaoFrete",
        JSON.stringify(configuracaoFrete)
    );

    alert("Configurações de frete salvas com sucesso!");

});

function carregarConfiguracoes(){

    const dados = JSON.parse(localStorage.getItem("configuracaoFrete"));

    if(!dados){

        return;

    }

    cep.value = dados.cep || "";

    estado.value = dados.estado || "";

    cidade.value = dados.cidade || "";

    endereco.value = dados.endereco || "";

    correios.checked = dados.correios || false;

    transportadora.checked = dados.transportadora || false;

    retirada.checked = dados.retirada || false;

    entregaPropria.checked = dados.entregaPropria || false;

    freteGratis.value = dados.freteGratis || "";

    valorEntrega.value = dados.valorEntrega || "";

    raioEntrega.value = dados.raioEntrega || "";

    prazoMinimo.value = dados.prazoMinimo || "";

    prazoMaximo.value = dados.prazoMaximo || "";

    observacoes.value = dados.observacoes || "";

}

function voltarPagina(){

    history.back();

}