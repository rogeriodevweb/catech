console.log("login.js carregado");

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



const btnEntrar = document.getElementById("btn-entrar");

btnEntrar.addEventListener("click", () => {

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    if (email === "" || senha === "") {

        mensagem.innerHTML = "Preencha todos os campos.";
        mensagem.style.color = "red";
        return;

    }

    if (senha.length < 8) {

        mensagem.innerHTML = "A senha deve possuir no mínimo 8 caracteres.";
        mensagem.style.color = "red";
        return;

    }

    fetch("https://catech.onrender.com/clientes/login", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        email,
        senha
    })

})

.then(res => res.json())

.then(resposta => {

    if (resposta.sucesso) {

        localStorage.setItem(
            "cliente",
            JSON.stringify(resposta.cliente)
        );

        window.location.href = "../index.html";

    } else {

        mensagem.innerHTML = resposta.mensagem;
        mensagem.style.color = "red";

    }

});
});