const form = document.getElementById("formSenha");

const senhaAtual = document.getElementById("senhaAtual");

const novaSenha = document.getElementById("novaSenha");

const confirmarSenha = document.getElementById("confirmarSenha");

const barra = document.getElementById("forcaSenha");

const texto = document.getElementById("textoForca");

document.querySelectorAll(".mostrar").forEach(botao=>{

    botao.addEventListener("click",()=>{

        const input=document.getElementById(botao.dataset.input);

        input.type=input.type==="password" ? "text" : "password";

    });

});

novaSenha.addEventListener("input",()=>{

    let pontos=0;

    if(novaSenha.value.length>=8) pontos++;

    if(/[A-Z]/.test(novaSenha.value)) pontos++;

    if(/[0-9]/.test(novaSenha.value)) pontos++;

    if(/[!@#$%^&*(),.?":{}|<>]/.test(novaSenha.value)) pontos++;

    if(pontos==1){

        barra.style.width="25%";
        barra.style.background="#ef4444";
        texto.innerHTML="Senha fraca";

    }

    else if(pontos==2){

        barra.style.width="50%";
        barra.style.background="#f59e0b";
        texto.innerHTML="Senha média";

    }

    else if(pontos==3){

        barra.style.width="75%";
        barra.style.background="#3b82f6";
        texto.innerHTML="Senha boa";

    }

    else if(pontos==4){

        barra.style.width="100%";
        barra.style.background="#22c55e";
        texto.innerHTML="Senha forte";

    }

    else{

        barra.style.width="0";
        texto.innerHTML="Força da senha";

    }

});

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(senhaAtual.value==""){

        alert("Informe a senha atual.");

        senhaAtual.focus();

        return;

    }

    if(novaSenha.value.length<8){

        alert("A nova senha deve possuir pelo menos 8 caracteres.");

        novaSenha.focus();

        return;

    }

    if(novaSenha.value!=confirmarSenha.value){

        alert("As senhas não coincidem.");

        confirmarSenha.focus();

        return;

    }

    alert("Senha alterada com sucesso!");

    form.reset();

    barra.style.width="0";

    texto.innerHTML="Força da senha";

});