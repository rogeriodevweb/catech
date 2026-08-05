// ===============================
// MOSTRAR / OCULTAR SENHA
// ===============================

document.querySelectorAll(".toggle-senha").forEach((icone) => {

    icone.addEventListener("click", () => {

        const input = document.getElementById(icone.dataset.target);

        if (input.type === "password") {

            input.type = "text";
            icone.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            input.type = "password";
            icone.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

});

// ===============================
// CADASTRAR CLIENTE
// ===============================

document.getElementById("btn-criar-conta").addEventListener("click", async () => {

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const dataNascimento = document.getElementById("dataNascimento").value;

    // ===============================
    // CAMPOS OBRIGATÓRIOS
    // ===============================

    if (
        !nome ||
        !cpf ||
        !telefone ||
        !email ||
        !senha ||
        !confirmarSenha ||
        !dataNascimento
    ) {

        alert("Preencha todos os campos.");
        return;

    }

    // ===============================
    // VALIDAÇÕES DA SENHA
    // ===============================

    if (senha.length < 8 || senha.length > 13) {

        alert("A senha deve possuir entre 8 e 13 caracteres.");
        return;

    }

    if (!/[A-Z]/.test(senha)) {

        alert("A senha deve conter pelo menos uma letra maiúscula.");
        return;

    }

    if (!/[a-z]/.test(senha)) {

        alert("A senha deve conter pelo menos uma letra minúscula.");
        return;

    }

    if (!/[0-9]/.test(senha)) {

        alert("A senha deve conter pelo menos um número.");
        return;

    }

    if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\[\]\\;'`~]/.test(senha)) {

        alert("A senha deve conter pelo menos um caractere especial.");
        return;

    }

    if (senha.toLowerCase().includes(nome.toLowerCase())) {

        alert("A senha não pode conter o nome do usuário.");
        return;

    }

    if (senha !== confirmarSenha) {

        alert("As senhas não coincidem.");
        return;

    }

    // ===============================
    // IDADE
    // ===============================

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mes = hoje.getMonth() - nascimento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoje.getDate() < nascimento.getDate())
    ) {

        idade--;

    }

    if (idade < 18) {

        alert("Você deve ser maior de idade para se cadastrar.");
        return;

    }

    // ===============================
    // E-MAIL
    // ===============================

    const regexEmail =
        /^[^\s@]+@(gmail|hotmail|outlook|yahoo|icloud)\.com$/i;

    if (!regexEmail.test(email)) {

        alert("Digite um e-mail válido.");
        return;

    }

    // ===============================
    // OBJETO
    // ===============================

    const cliente = {

        nome,
        cpf: cpf.replace(/\D/g, ""),
        telefone: telefone.replace(/\D/g, ""),
        email: email,
        senha: senha,
        data_nascimento: dataNascimento,
        loja_idLoja: 1

    };

    console.log(cliente);

    // ===============================
    // ENVIA PARA O NODE
    // ===============================

    try {

        const respostaServidor = await fetch("http://localhost:3000/clientes", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(cliente)

        });

        const resposta = await respostaServidor.json();

        if (!respostaServidor.ok) {

            alert(resposta.mensagem || "Erro ao cadastrar.");
            return;

        }

        alert("Cadastro realizado com sucesso!");

        document.getElementById("cadastroForm").reset();


        // Redireciona para a tela de login
         window.location.href = "../pages/login.html";

    } catch (erro) {

        console.error(erro);
        alert("Erro ao conectar com o servidor.");

    }

});