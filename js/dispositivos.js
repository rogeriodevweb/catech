/* =====================================
   DISPOSITIVOS CONECTADOS - CA TECH
   Controle dos dispositivos da conta
===================================== */



// =====================================
// DETECTAR DISPOSITIVO ATUAL
// =====================================


const dispositivoAtual = document.getElementById(
    "dispositivoAtual"
);


const navegadorAtual = document.getElementById(
    "navegadorAtual"
);





function detectarDispositivo(){


    let sistema = navigator.userAgent;



    if(sistema.includes("Windows")){

        return "Computador Windows";

    }


    else if(sistema.includes("Mac")){

        return "Computador Mac";

    }


    else if(sistema.includes("Android")){

        return "Celular Android";

    }


    else if(sistema.includes("iPhone")){

        return "iPhone";

    }


    else {

        return "Dispositivo desconhecido";

    }


}







function detectarNavegador(){


    let navegador = navigator.userAgent;



    if(navegador.includes("Chrome")){

        return "Google Chrome";

    }



    else if(navegador.includes("Firefox")){

        return "Mozilla Firefox";

    }



    else if(navegador.includes("Safari")){

        return "Safari";

    }



    else if(navegador.includes("Edge")){

        return "Microsoft Edge";

    }



    else {

        return "Navegador desconhecido";

    }


}






// Preencher informações atuais


dispositivoAtual.innerHTML =
    detectarDispositivo();



navegadorAtual.innerHTML =
    detectarNavegador();









// =====================================
// DISPOSITIVOS SALVOS
// =====================================



let dispositivos = JSON.parse(

    localStorage.getItem("dispositivos")

) || [



    {

        id:1,

        nome:"Notebook Dell",

        navegador:"Chrome",

        local:"Brasil",

        acesso:"Hoje às 15:40"

    },


    {

        id:2,

        nome:"Celular Samsung",

        navegador:"Aplicativo CA Tech",

        local:"Brasil",

        acesso:"Ontem às 20:15"

    }


];









// =====================================
// MOSTRAR DISPOSITIVOS
// =====================================


const lista =
document.getElementById(
    "listaDispositivos"
);





function carregarDispositivos(){



    lista.innerHTML = "";



    if(dispositivos.length === 0){


        lista.innerHTML = `

            <p style="color:#94a3b8">

                Nenhum outro dispositivo conectado.

            </p>

        `;


        return;

    }






    dispositivos.forEach((item)=>{



        lista.innerHTML += `

        <div class="item-dispositivo">


            <div class="item-info">


                <strong>
                    ${item.nome}
                </strong>


                <span>
                    Navegador: ${item.navegador}
                </span>


                <span>
                    Local: ${item.local}
                </span>


                <span>
                    Último acesso: ${item.acesso}
                </span>



            </div>



            <button 
            class="btn-remover"
            onclick="removerDispositivo(${item.id})">

                Desconectar

            </button>


        </div>

        `;



    });



}





carregarDispositivos();









// =====================================
// REMOVER DISPOSITIVO
// =====================================


function removerDispositivo(id){



    dispositivos = dispositivos.filter(
        (item)=> item.id !== id
    );



    salvarDispositivos();



    carregarDispositivos();



}









// =====================================
// DESCONECTAR TODOS
// =====================================



const btnDesconectar =
document.querySelector(
    ".btn-desconectar"
);




btnDesconectar.addEventListener(
"click",()=>{



    let confirmar =
    confirm(
        "Deseja desconectar todos os outros dispositivos?"
    );



    if(confirmar){


        dispositivos = [];

        salvarDispositivos();

        carregarDispositivos();



        alert(
            "Todos os outros dispositivos foram desconectados."
        );


    }



});









// =====================================
// SALVAR
// =====================================


function salvarDispositivos(){


    localStorage.setItem(

        "dispositivos",

        JSON.stringify(dispositivos)

    );


}