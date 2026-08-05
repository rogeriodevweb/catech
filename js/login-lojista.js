const form = document.getElementById("loginLojista");


form.addEventListener("submit", function(e){


    e.preventDefault();



    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;



    // Usuário de teste

    const lojista = {

        email: "lojista@catech.com",
        senha: "123456"

    };




    if(email === lojista.email && senha === lojista.senha){


        localStorage.setItem(
            "lojistaLogado",
            JSON.stringify(lojista)
        );


        alert("Login realizado com sucesso!");



        window.location.href = "home-lojista.html";



    }

    else{


        alert("E-mail ou senha incorretos!");

    }



});