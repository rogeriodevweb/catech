const formulario = document.getElementById("cadastroForm");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    if(nome.value.trim() === ""){
        alert("Informe seu nome.");
        nome.focus();
        return;
    }

    if(email.value.trim() === ""){
        alert("Informe seu e-mail.");
        email.focus();
        return;
    }

    if(senha.value.length < 6){
        alert("A senha deve possuir pelo menos 6 caracteres.");
        senha.focus();
        return;
    }

    if(senha.value !== confirmarSenha.value){
        alert("As senhas não são iguais.");
        confirmarSenha.focus();
        return;
    }

    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "index.html";

});