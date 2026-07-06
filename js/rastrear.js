document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".btn-voltar").addEventListener("click", () => {

        history.back();

    });

    document.getElementById("btnRastrear").addEventListener("click", () => {

        const codigo = document.getElementById("codigo").value.trim();

        if(codigo === ""){

            alert("Digite um código de rastreamento.");

            return;

        }

        alert("Consulta realizada!\n\nCódigo: " + codigo);

        // Futuramente aqui será feita a consulta na API dos Correios
        // ou da transportadora escolhida.

    });

});