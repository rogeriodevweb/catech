const form = document.getElementById("formEndereco");

const cep = document.getElementById("cep");

cep.addEventListener("input",()=>{

    let valor = cep.value.replace(/\D/g,'');

    valor = valor.replace(/^(\d{5})(\d)/,"$1-$2");

    cep.value = valor;

});

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const campos = [

        "cep",
        "rua",
        "numero",
        "bairro",
        "cidade",
        "estado"

    ];

    let valido = true;

    campos.forEach(id=>{

        const campo = document.getElementById(id);

        if(campo.value.trim()==""){

            campo.style.border="1px solid red";

            valido=false;

        }else{

            campo.style.border="1px solid #22c55e";

        }

    });

    if(!valido){

        alert("Preencha todos os campos obrigatórios.");

        return;

    }

    alert("Endereço cadastrado com sucesso!");

    form.reset();

});