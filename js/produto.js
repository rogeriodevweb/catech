const produto = {

nome:
"Kit Eletrica Chave Teste Digital + Caneta Detectora Tensão",
estoque: 8,
descricao: `
<h3>Descrição do Produto</h3>

<p>
O <strong>Kit Elétrica Chave Teste Digital + Caneta Detectora de Tensão</strong> é ideal para eletricistas, técnicos e profissionais que realizam instalações, manutenções e reparos em sistemas elétricos. Desenvolvido para oferecer praticidade, rapidez e segurança, o kit permite identificar a presença de tensão elétrica de forma eficiente.
</p>

<p>
A <strong>Chave Teste Digital</strong> possui visor de fácil leitura para auxiliar na verificação de tensão em tomadas, interruptores, fios e outros componentes elétricos. Já a <strong>Caneta Detectora de Tensão</strong> realiza a detecção sem contato direto, proporcionando mais segurança durante o trabalho.
</p>

<h4>Características</h4>

<ul>
    <li>✔ Chave teste digital de fácil utilização.</li>
    <li>✔ Caneta detectora de tensão sem contato.</li>
    <li>✔ Ideal para instalações e manutenções elétricas.</li>
    <li>✔ Compacto, leve e fácil de transportar.</li>
    <li>✔ Indicado para uso profissional e doméstico.</li>
</ul>

<h4>Conteúdo da Embalagem</h4>

<ul>
    <li>01 Chave Teste Digital</li>
    <li>01 Caneta Detectora de Tensão</li>
</ul>

<p>
<strong>Importante:</strong> Utilize os equipamentos conforme as recomendações de segurança e sempre desligue a rede elétrica quando necessário antes de realizar qualquer manutenção.
</p>
`,
imagemPrincipal:
"/assets/chave-teste-1.png",


imagens:[

"/assets/chave-teste-1.png",
"/assets/chave-teste-2.png",
"/assets/chave-teste-3.png",
"/assets/chave-teste-4.png",
"/assets/chave-teste-5.png"
],



avaliacaoImagem:
"/assets/avaliacoes.png",


avaliacao:
"(178 avaliações)",



precoAntigo:
"R$ 46,90",


preco:
"R$ 22,90",


desconto:
"48,83% OFF",



sku:
"SKU: CZ270F",



botaoCarrinho:
"Adicionar ao carrinho",



botaoComprar:
"Comprar agora"



}






// NOME

document.querySelector("#nome-produto").innerHTML =
produto.nome;



// IMAGEM PRINCIPAL

document.querySelector("#imagem-maior").src =
produto.imagemPrincipal;

document.querySelector("#descricao-produto").innerHTML =
produto.descricao;


// MINIATURAS

const lateral = document.querySelector("#img-lateral");


produto.imagens.forEach((imagem)=>{


    const caixa = document.createElement("div");

    caixa.classList.add("miniatura-box");



    const img = document.createElement("img");

    img.src = imagem;



    img.onclick = ()=>{

        imagemPrincipal.src = imagem;

    }



    caixa.appendChild(img);


    lateral.appendChild(caixa);

const imagemPrincipal = document.querySelector("#imagem-maior");

});




// AVALIAÇÃO


document.querySelector("#estrela-avaliacao").src =
produto.avaliacaoImagem;


document.querySelector("#valor-avaliacao").innerHTML =
produto.avaliacao;



// PREÇOS


document.querySelector("#preco-antigo").innerHTML =
produto.precoAntigo;


document.querySelector("#preco-promocional").innerHTML =
produto.preco;


document.querySelector("#desconto").innerHTML =
produto.desconto;



// SKU

document.querySelector("#sku").innerHTML =
produto.sku;




// BOTÕES

document.querySelector("#btn-add-carrinho").innerHTML =
produto.botaoCarrinho;



document.querySelector("#btn-comprar").innerHTML =
produto.botaoComprar;




// QUANTIDADE
// ÍCONES DOS BOTÕES DE QUANTIDADE

document.querySelector("#aumentar").innerHTML =
'<img src="/assets/botao-adicionar.png" alt="Adicionar">';

document.querySelector("#diminuir").innerHTML =
'<img src="/assets/remover.png" alt="Remover">';



// QUANTIDADE

let quantidade = 1;

const numero = document.querySelector("#numero-quantidade");

numero.textContent = quantidade;

// BOTÃO AUMENTAR
document.querySelector("#aumentar").onclick = () => {

    if (quantidade < produto.estoque) {

        quantidade++;
        numero.textContent = quantidade;

    } else {

        alert("Você atingiu o limite disponível em estoque.");

    }

    const botao = document.querySelector("#aumentar");

    botao.classList.add("click");

    setTimeout(() => {
        botao.classList.remove("click");
    }, 250);

};

// BOTÃO DIMINUIR
document.querySelector("#diminuir").onclick = () => {

    if (quantidade > 1) {
        quantidade--;
    }

    numero.textContent = quantidade;

    const botao = document.querySelector("#diminuir");

    botao.classList.add("click");

    setTimeout(() => {
        botao.classList.remove("click");
    }, 250);

};



























