// criando variaveis
/*Não pode ter:
    -acento
    -espaço
    -símbolo
    -não pode começar com numero
-não pode ser escrito com a primeira letra maiúscula
*/

//variavel que alteram de valor
    let preco_promocional= 59.90;
    let preco= 69.90;
    let desconto= "-14.31%";
    let quantidade= 64;
    let favorito=false;

//variavel que sao constantes/nao alteram de valor
const nomeProduto= "Alicate Crimpagem De Conectores De Passagem Rj45,rj12, Rj11";

const cores=["LARANJA"];
const avaliacoes= 4.3;
const img_miniaturas=
[
    "/assets/chave-teste-1.png",
    "/assets/chave-teste-2.png",
    "/assets/chave-teste-3.png",
    "/assets/chave-teste-4.png",
    "/assets/chave-teste-5.png"
    ];
const img_principal="/assets/chave-teste-1.png";
const descricao="O Kit Detector de Tensão OIVIDA é uma ferramenta compacta e prática para profissionais e iniciantes em elétrica.Detecta tensões de 90 a 1000V, com display digital, alerta sonoro (bip) e indicador luminoso, facilitando a identificação de energia mesmo em locais escuros. Conta ainda com lanterna embutida e design leve de fácil transporte, sendo ideal para uso no dia a dia.Acompanha pilha inclusa, pronto para uso imediato.";
let frete;

//botoes e arquivos
    let btn_add_carrinho;
    let btn_comprar;
    let btn_add_quantidade;
    let btn_remover_quantidade;
    let btn_calcular_frete;

// PREENCHENDO AS IMAGENS NO HTML
// CODIGO PARA PREENCHER

//CRIANDO UMA VARIAVEL PARA RECONHECER O ID DA IMAGEM LATERAL
const lateral = document.getElementById("img-lateral");



// LENDO A QUANTIDADE DE IMAGENS CADASTRADAS E CRIANDO AS TAG IMG

/* ForEach: percorre uma lista de itens ate o final
- ele percorre o primeiro, se ver que tem outro, ele lê o outro 
- quando chega no ultimo ele para de ler e finaliza a execuçao
- img_miniatura é chamado porque e ele que contem a lista de imagens
- depois o forEach e chamado para ler a lista
- e dentro do forEach passamos o tipo de documentolido (imagem)
 */
img_miniaturas.forEach(imagem => {
    // CRIANDO UMA VÁRIAVEL QUE CRIE A TAG IMG NA DIV DO HTML
    const img = document.createElement("img");
 
    // criando o código que mostra as imagens no site
    img.src = imagem;//ele joga o caminho da imagem na tag img
    img.classList.add("img-lateral");//jogar a tag criada na div
 
    /*criando o código que substitui a imagem
     principal pela miniatura clicada*/
    img.addEventListener("click", () => {
        document.getElementById("imagem-maior").src =
            imagem;
    });//ver se a pessoa clicou na imagem
    lateral.appendChild(img);//mostra a imagem adicionada
 
});//fechar o ForEach
 
// preencher a imagem principal
document.getElementById("imagem-maior").src = img_principal;

//-----------------preencher dados do produto---------------------
document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("valor-avaliacao").textContent = avaliacoes;
document.getElementById("preco-antigo").textContent = preco_antigo;
document.getElementById("preco-promocional").textContent = preco_promocional;
document.getElementById("valor-avaliacao").textContent = avaliacoes;
document.getElementById("desconto").textContent = desconto;













