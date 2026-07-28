const produtos = [

    {

        id:1,

        nome:"SSD Kingston 480GB",

        categoria:"Componentes",

        marca:"Kingston",

        preco:229.90,

        estoque:18,

        status:"ativo",

        promocao:true,

        imagem:"/assets/ssd.png"

    },

    {

        id:2,

        nome:"Notebook Dell Inspiron",

        categoria:"Notebook",

        marca:"Dell",

        preco:3499.90,

        estoque:0,

        status:"estoque",

        promocao:false,

        imagem:"/assets/notebook.png"

    },

    {

        id:3,

        nome:"Mouse Gamer Logitech G203",

        categoria:"Periféricos",

        marca:"Logitech",

        preco:149.90,

        estoque:12,

        status:"ativo",

        promocao:true,

        imagem:"/assets/mouse.png"

    },

    {

        id:4,

        nome:"Memória RAM Fury 16GB",

        categoria:"Componentes",

        marca:"Kingston",

        preco:319.90,

        estoque:8,

        status:"inativo",

        promocao:false,

        imagem:"/assets/memoria.png"

    }

];

const listaProdutos = document.getElementById("listaProdutos");

const semProdutos = document.getElementById("semProdutos");

const pesquisa = document.getElementById("pesquisa");

const categoria = document.getElementById("categoria");

const status = document.getElementById("status");

const totalProdutos = document.getElementById("totalProdutos");

const produtosAtivos = document.getElementById("produtosAtivos");

const semEstoque = document.getElementById("semEstoque");

const promocao = document.getElementById("promocao");



carregarCategorias();

atualizarEstatisticas();

renderizarProdutos();



pesquisa.addEventListener("input",renderizarProdutos);

categoria.addEventListener("change",renderizarProdutos);

status.addEventListener("change",renderizarProdutos);



function carregarCategorias(){

    const categorias=[...new Set(produtos.map(produto=>produto.categoria))];

    categorias.forEach(cat=>{

        categoria.innerHTML+=`<option value="${cat}">${cat}</option>`;

    });

}



function atualizarEstatisticas(){

    totalProdutos.textContent=produtos.length;

    produtosAtivos.textContent=produtos.filter(p=>p.status==="ativo").length;

    semEstoque.textContent=produtos.filter(p=>p.status==="estoque").length;

    promocao.textContent=produtos.filter(p=>p.promocao).length;

}



function renderizarProdutos(){

    listaProdutos.innerHTML="";

    const texto=pesquisa.value.toLowerCase();

    const categoriaSelecionada=categoria.value;

    const statusSelecionado=status.value;

    const resultado=produtos.filter(produto=>{

        const pesquisaOk=

        produto.nome.toLowerCase().includes(texto) ||

        produto.marca.toLowerCase().includes(texto);

        const categoriaOk=

        categoriaSelecionada==="" ||

        produto.categoria===categoriaSelecionada;

        const statusOk=

        statusSelecionado==="" ||

        produto.status===statusSelecionado;

        return pesquisaOk && categoriaOk && statusOk;

    });



    if(resultado.length===0){

        listaProdutos.style.display="none";

        semProdutos.style.display="block";

        return;

    }

    listaProdutos.style.display="grid";

    semProdutos.style.display="none";



    resultado.forEach(produto=>{

        listaProdutos.innerHTML+=`

        <div class="card-produto">

            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="info-produto">

                <h2>${produto.nome}</h2>

                <p><strong>Categoria:</strong> ${produto.categoria}</p>

                <p><strong>Marca:</strong> ${produto.marca}</p>

                <p><strong>Estoque:</strong> ${produto.estoque}</p>

                <p class="preco">

                    ${produto.preco.toLocaleString("pt-BR",{

                        style:"currency",

                        currency:"BRL"

                    })}

                </p>

                <span class="status ${produto.status}">

                    ${textoStatus(produto.status)}

                </span>

                <div class="acoes">

                    <button

                        class="btn-editar"

                        onclick="editarProduto(${produto.id})">

                        ✏ Editar

                    </button>

                    <button

                        class="btn-visualizar"

                        onclick="visualizarProduto(${produto.id})">

                        👁 Ver

                    </button>

                    <button

                        class="btn-duplicar"

                        onclick="duplicarProduto(${produto.id})">

                        📄 Duplicar

                    </button>

                    <button

                        class="btn-excluir"

                        onclick="excluirProduto(${produto.id})">

                        🗑 Excluir

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}



function textoStatus(status){

    switch(status){

        case "ativo":

            return "Ativo";

        case "inativo":

            return "Inativo";

        case "estoque":

            return "Sem Estoque";

        default:

            return status;

    }

}



function editarProduto(id){

    alert("Editar produto ID: "+id);

}



function visualizarProduto(id){

    alert("Visualizar produto ID: "+id);

}



function duplicarProduto(id){

    alert("Duplicar produto ID: "+id);

}



function excluirProduto(id){

    const confirmar=confirm("Deseja realmente excluir este produto?");

    if(!confirmar) return;

    const indice=produtos.findIndex(produto=>produto.id===id);

    produtos.splice(indice,1);

    atualizarEstatisticas();

    renderizarProdutos();

}