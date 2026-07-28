const clientes = [

    {
        id:1,
        nome:"Carlos Alberto",
        email:"carlos@email.com",
        telefone:"(11) 99999-1111",
        cidade:"São Paulo - SP",
        cadastro:"12/01/2026",
        pedidos:15,
        total:4290.90,
        status:"vip",
        foto:"/assets/cliente1.png"
    },

    {
        id:2,
        nome:"Mariana Souza",
        email:"mariana@email.com",
        telefone:"(21) 98888-2222",
        cidade:"Rio de Janeiro - RJ",
        cadastro:"20/03/2026",
        pedidos:7,
        total:1380.50,
        status:"ativo",
        foto:"/assets/cliente2.png"
    },

    {
        id:3,
        nome:"Lucas Oliveira",
        email:"lucas@email.com",
        telefone:"(31) 97777-3333",
        cidade:"Belo Horizonte - MG",
        cadastro:"05/06/2026",
        pedidos:0,
        total:0,
        status:"inativo",
        foto:"/assets/cliente3.png"
    },

    {
        id:4,
        nome:"Fernanda Lima",
        email:"fernanda@email.com",
        telefone:"(41) 96666-4444",
        cidade:"Curitiba - PR",
        cadastro:"18/07/2026",
        pedidos:12,
        total:2989.90,
        status:"vip",
        foto:"/assets/cliente4.png"
    }

];

const listaClientes=document.getElementById("listaClientes");
const semClientes=document.getElementById("semClientes");

const pesquisa=document.getElementById("pesquisa");
const status=document.getElementById("status");

const totalClientes=document.getElementById("totalClientes");
const clientesCompraram=document.getElementById("clientesCompraram");
const clientesVip=document.getElementById("clientesVip");
const novosClientes=document.getElementById("novosClientes");

atualizarEstatisticas();
renderizarClientes();

pesquisa.addEventListener("input",renderizarClientes);
status.addEventListener("change",renderizarClientes);

function atualizarEstatisticas(){

    totalClientes.textContent=clientes.length;

    clientesCompraram.textContent=
    clientes.filter(cliente=>cliente.pedidos>0).length;

    clientesVip.textContent=
    clientes.filter(cliente=>cliente.status==="vip").length;

    novosClientes.textContent=2;

}

function renderizarClientes(){

    listaClientes.innerHTML="";

    const texto=pesquisa.value.toLowerCase();

    const filtro=status.value;

    const resultado=clientes.filter(cliente=>{

        const pesquisaOk=

        cliente.nome.toLowerCase().includes(texto) ||

        cliente.email.toLowerCase().includes(texto) ||

        cliente.telefone.includes(texto);

        const statusOk=

        filtro==="" ||

        cliente.status===filtro;

        return pesquisaOk && statusOk;

    });

    if(resultado.length===0){

        listaClientes.style.display="none";
        semClientes.style.display="block";

        return;

    }

    listaClientes.style.display="grid";
    semClientes.style.display="none";

    resultado.forEach(cliente=>{

        listaClientes.innerHTML+=`

        <div class="card-cliente">

            <div class="cliente-topo">

                <img src="${cliente.foto}" alt="${cliente.nome}">

                <div class="cliente-info">

                    <h2>${cliente.nome}</h2>

                    <p>${cliente.email}</p>

                </div>

            </div>

            <div class="dados">

                <div class="dado">

                    <span>Telefone</span>

                    <strong>${cliente.telefone}</strong>

                </div>

                <div class="dado">

                    <span>Cidade</span>

                    <strong>${cliente.cidade}</strong>

                </div>

                <div class="dado">

                    <span>Cadastro</span>

                    <strong>${cliente.cadastro}</strong>

                </div>

                <div class="dado">

                    <span>Pedidos</span>

                    <strong>${cliente.pedidos}</strong>

                </div>

                <div class="dado">

                    <span>Total Gasto</span>

                    <strong>

                    ${cliente.total.toLocaleString("pt-BR",{

                        style:"currency",

                        currency:"BRL"

                    })}

                    </strong>

                </div>

                <div class="dado">

                    <span>Status</span>

                    <span class="status ${cliente.status}">

                        ${textoStatus(cliente.status)}

                    </span>

                </div>

            </div>

            <div class="acoes">

                <button
                    class="btn-perfil"
                    onclick="verPerfil(${cliente.id})">

                    👤 Perfil

                </button>

                <button
                    class="btn-pedidos"
                    onclick="verPedidos(${cliente.id})">

                    📦 Pedidos

                </button>

                <button
                    class="btn-contato"
                    onclick="entrarContato(${cliente.id})">

                    💬 Contato

                </button>

                <button
                    class="btn-remover"
                    onclick="removerCliente(${cliente.id})">

                    🗑 Remover

                </button>

            </div>

        </div>

        `;

    });

}

function textoStatus(status){

    switch(status){

        case "vip":
            return "VIP";

        case "ativo":
            return "Ativo";

        case "inativo":
            return "Inativo";

        default:
            return status;

    }

}

function verPerfil(id){

    alert("Abrir perfil do cliente ID: "+id);

}

function verPedidos(id){

    alert("Abrir pedidos do cliente ID: "+id);

}

function entrarContato(id){

    const cliente=clientes.find(c=>c.id===id);

    window.location.href=`mailto:${cliente.email}`;

}

function removerCliente(id){

    if(confirm("Deseja remover este cliente?")){

        const indice=clientes.findIndex(c=>c.id===id);

        clientes.splice(indice,1);

        atualizarEstatisticas();

        renderizarClientes();

    }

}