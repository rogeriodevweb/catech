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


    setTimeout(() => {

        window.location.href = "../index.html";

    }, 500);


});
document.getElementById("btn-criar-conta").addEventListener("click", () => {
 
    const nome = document.getElementById("nome").value.trim();
 
    const cpf = document.getElementById("cpf").value.trim();
 
    const telefone = document.getElementById("telefone").value.trim();
 
    const email = document.getElementById("email").value.trim();
 
    const senha = document.getElementById("senha").value;
 
    const dataNascimento = document.getElementById("dataNascimento").value;
 
    const confirmarSenha = document.getElementById("confirmarSenha");

    
 
    if (
        nome == "" ||
        cpf == "" ||
        telefone == "" ||
        email == "" ||
        senha == "" ||
        confirmarSenha == "" ||
        dataNascimento == ""
    ) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";
 
        return;
 
    }
 
    if (senha.length < 8 || senha.length > 13 ) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML =
            "A senha deve possuir entre 8 e 13 caracteres.";
 
        return;
 
    }
 
    if (!email.includes("@")) {
 
        mensagem.style.color = "red";
        mensagem.innerHTML = "Digite um e-mail válido.";
 
        return;
 
    }
 
    mensagem.style.color = "green";
 
    mensagem.innerHTML =
        "Cadastro realizado com sucesso!";
 
    // Objeto pronto para enviar ao Node.js
 
    const cliente = {
 
        nome: nome,
 
        cpf: cpf.replace(/\D/g, ""),
 
        telefone: telefone.replace(/\D/g, ""),
 
        email: email,
 
        senha: senha,
 
        data_nascimento: dataNascimento,
 
        Loja_idLoja: 1
 
    };
 
    console.log(cliente);
 
 
    fetch("http://localhost:3000/clientes", {
 
        method: "POST",
 
        headers: {
            "Content-Type": "application/json"
        },
 
        body: JSON.stringify(cliente)
 
    })
        .then(res => res.json())
 
        .then(resposta => {
 
            if (resposta.sucesso) {
 
                mensagem.style.color = "green";
                mensagem.innerHTML = resposta.mensagem;
 
                // Limpa os campos
                document.getElementById("nome").value = "";
                document.getElementById("cpf").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("senha").value = "";
                document.getElementById("dataNascimento").value = "";
 
            } else {
 
                mensagem.style.color = "red";
                mensagem.innerHTML = resposta.mensagem;
 
            }
 
        })
 
        .catch(() => {
 
            mensagem.style.color = "red";
            mensagem.innerHTML = "Erro ao conectar com o servidor.";
 
        });
 
 
});