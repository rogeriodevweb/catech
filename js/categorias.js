const categorias = [

{
    icone:"🧩",
    titulo:"Componentes",
    descricao:"SSD, HD, RAM, Processadores, Placas-mãe e Fontes."
},

{
    icone:"💻",
    titulo:"Notebooks",
    descricao:"Notebooks, peças, upgrades e acessórios."
},

{
    icone:"🖥️",
    titulo:"Computadores",
    descricao:"PCs completos, Workstations e Mini PCs."
},

{
    icone:"🔧",
    titulo:"Ferramentas Técnicas",
    descricao:"Kits, chaves, pinças, espátulas e manutenção."
},

{
    icone:"⚡",
    titulo:"Equipamentos Elétricos",
    descricao:"Multímetros, fontes de bancada e testadores."
},

{
    icone:"🔌",
    titulo:"Cabos e Adaptadores",
    descricao:"HDMI, USB, SATA, RJ45 e conversores."
},

{
    icone:"🌐",
    titulo:"Redes",
    descricao:"Roteadores, Switches e conectividade."
},

{
    icone:"🖱️",
    titulo:"Periféricos",
    descricao:"Mouse, teclado, headset e webcam."
},

{
    icone:"🔋",
    titulo:"Energia",
    descricao:"Nobreaks, filtros de linha e carregadores."
},

{
    icone:"🧼",
    titulo:"Limpeza Técnica",
    descricao:"Álcool Isopropílico, pasta térmica e limpa contato."
},

{
    icone:"🛠️",
    titulo:"Assistência Técnica",
    descricao:"Serviços e produtos para manutenção."
},

{
    icone:"🔥",
    titulo:"Promoções",
    descricao:"Ofertas especiais e kits para técnicos."
}

];

const area = document.getElementById("categorias");

categorias.forEach(categoria=>{

    area.innerHTML += `
    
    <div class="card">

        <div class="icone">${categoria.icone}</div>

        <h2>${categoria.titulo}</h2>

        <p>${categoria.descricao}</p>

    </div>

    `;

});