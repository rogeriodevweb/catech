document
.getElementById("btnCadastrar")
.addEventListener("click", async function(){



    const senha = document.getElementById("senha").value;

    const confirmarSenha = document.getElementById("confirmarSenha").value;



    // Verifica senha

    if(senha !== confirmarSenha){

        alert("As senhas não são iguais!");

        return;

    }




    const lojista = {


        nomeResponsavel:
        document.getElementById("nomeResponsavel").value,


        cpf:
        document.getElementById("cpf").value,


        telefone:
        document.getElementById("telefone").value,


        nascimento:
        document.getElementById("nascimento").value,


        email:
        document.getElementById("email").value,


        senha:
        senha,


        nomeLoja:
        document.getElementById("nomeLoja").value,


        cnpj:
        document.getElementById("cnpj").value,


        nomeFantasia:
        document.getElementById("nomeFantasia").value,


        descricao:
        document.getElementById("descricao").value,


        cep:
        document.getElementById("cep").value,


        estado:
        document.getElementById("estado").value,


        cidade:
        document.getElementById("cidade").value,


        bairro:
        document.getElementById("bairro").value,


        endereco:
        document.getElementById("endereco").value,


        instagram:
        document.getElementById("instagram").value,


        whatsapp:
        document.getElementById("whatsapp").value


    };





    try {



        const resposta = await fetch(

            "http://localhost:3000/lojistas",

            {


                method:"POST",


                headers:{


                    "Content-Type":"application/json"


                },


                body:JSON.stringify(lojista)


            }


        );





        const dados = await resposta.json();





        if(resposta.ok){


            alert(dados.mensagem);



            window.location.href =
            "login-lojista.html";


        }

        else{


            alert(dados.mensagem);


        }






    }

    catch(erro){


        console.log(erro);


        alert(
            "Erro ao conectar com o servidor"
        );


    }



});