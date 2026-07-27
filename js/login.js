const form = document.getElementById("loginForm");

const email = document.getElementById("email");

const senha = document.getElementById("senha");

const remember = document.getElementById("remember");

window.addEventListener("load",()=>{

    const usuario = localStorage.getItem("usuario");

    if(usuario){

        email.value = usuario;

        remember.checked = true;

    }

});

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const usuario = email.value.trim();

    const password = senha.value.trim();

    if(usuario === ""){

        alert("Digite seu e-mail.");

        email.focus();

        return;

    }

    if(password === ""){

        alert("Digite sua senha.");

        senha.focus();

        return;

    }

    if(remember.checked){

        localStorage.setItem("usuario",usuario);

    }else{

        localStorage.removeItem("usuario");

    }

    alert("Login realizado com sucesso!");

   
    // window.location.href = "home.html";

});

