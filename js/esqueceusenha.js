const formulario = document.getElementById("recuperarForm");

const email = document.getElementById("email");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(email.value.trim() === ""){

        alert("Digite seu e-mail.");

        email.focus();

        return;

    }

    alert("Se o e-mail estiver cadastrado, enviaremos um link para redefinir sua senha.");

    formulario.reset();

});