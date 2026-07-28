// ==========================================
// DADOS DO CLIENTE
// ==========================================


const cliente = {

    foto: "../assets/perfil.png",

    nome: "",

    cpf: "",

    dataNascimento: "",

    sexo: "",


    email: "",

    celular: "",

    telefone: "",


    cep: "",

    rua: "",

    numero: "",

    complemento: "",

    bairro: "",

    cidade: "",

    estado: ""

};





// ==========================================
// CARREGAR DADOS NA TELA
// ==========================================


window.addEventListener("DOMContentLoaded", () => {


    document.getElementById("fotoPerfil").src = cliente.foto;


    document.getElementById("nomeCliente").textContent = cliente.nome;

    document.getElementById("emailCliente").textContent = cliente.email;



    document.getElementById("nome").value = cliente.nome;

    document.getElementById("cpf").value = cliente.cpf;

    document.getElementById("dataNascimento").value = cliente.dataNascimento;

    document.getElementById("sexo").value = cliente.sexo;



    document.getElementById("email").value = cliente.email;

    document.getElementById("celular").value = cliente.celular;

    document.getElementById("telefone").value = cliente.telefone;



    document.getElementById("cep").value = cliente.cep;

    document.getElementById("rua").value = cliente.rua;

    document.getElementById("numero").value = cliente.numero;

    document.getElementById("complemento").value = cliente.complemento;

    document.getElementById("bairro").value = cliente.bairro;

    document.getElementById("cidade").value = cliente.cidade;

    document.getElementById("estado").value = cliente.estado;



});





// ==========================================
// ALTERAR FOTO
// ==========================================


document
.getElementById("alterarFoto")
.addEventListener("click", () => {


    alert("Sistema de alteração de foto será conectado ao banco futuramente.");


});





// ==========================================
// SALVAR ALTERAÇÕES
// ==========================================


document
.getElementById("salvarPerfil")
.addEventListener("click", () => {



    cliente.nome = document.getElementById("nome").value;

    cliente.cpf = document.getElementById("cpf").value;

    cliente.dataNascimento = document.getElementById("dataNascimento").value;

    cliente.sexo = document.getElementById("sexo").value;



    cliente.email = document.getElementById("email").value;

    cliente.celular = document.getElementById("celular").value;

    cliente.telefone = document.getElementById("telefone").value;



    cliente.cep = document.getElementById("cep").value;

    cliente.rua = document.getElementById("rua").value;

    cliente.numero = document.getElementById("numero").value;

    cliente.complemento = document.getElementById("complemento").value;

    cliente.bairro = document.getElementById("bairro").value;

    cliente.cidade = document.getElementById("cidade").value;

    cliente.estado = document.getElementById("estado").value;



    // Atualiza resumo do perfil

    document.getElementById("nomeCliente").textContent = cliente.nome;

    document.getElementById("emailCliente").textContent = cliente.email;



    alert("Perfil atualizado com sucesso!");



});