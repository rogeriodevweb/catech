const historicoLogin = [
    {
        dispositivo: "💻 Windows 11",
        data: "28/07/2026",
        hora: "09:42",
        cidade: "Araguaína - TO",
        ip: "192.168.0.15",
        navegador: "Google Chrome",
        status: "sucesso"
    },

    {
        dispositivo: "📱 Android",
        data: "27/07/2026",
        hora: "21:18",
        cidade: "Araguaína - TO",
        ip: "177.52.xxx.xxx",
        navegador: "Google Chrome Mobile",
        status: "sucesso"
    },

    {
        dispositivo: "💻 Windows 11",
        data: "24/07/2026",
        hora: "14:56",
        cidade: "Palmas - TO",
        ip: "201.33.xxx.xxx",
        navegador: "Microsoft Edge",
        status: "falha"
    },

    {
        dispositivo: "🍎 iPhone",
        data: "20/07/2026",
        hora: "19:31",
        cidade: "Goiânia - GO",
        ip: "179.18.xxx.xxx",
        navegador: "Safari",
        status: "sucesso"
    }
];

const lista = document.getElementById("listaLogin");
const pesquisa = document.getElementById("pesquisa");
const filtro = document.getElementById("statusFiltro");

const totalLogins = document.getElementById("totalLogins");
const ultimoLogin = document.getElementById("ultimoLogin");
const mesLogin = document.getElementById("mesLogin");

const btnExportar = document.getElementById("btnExportar");

atualizarEstatisticas();
renderizarHistorico();

pesquisa.addEventListener("input", renderizarHistorico);

filtro.addEventListener("change", renderizarHistorico);

btnExportar.addEventListener("click", exportarHistorico);

function atualizarEstatisticas() {

    totalLogins.textContent = historicoLogin.length;

    if (historicoLogin.length > 0) {

        ultimoLogin.textContent =
            historicoLogin[0].data + " " + historicoLogin[0].hora;

    }

    const mesAtual = "07/2026";

    const quantidadeMes = historicoLogin.filter(login =>
        login.data.includes(mesAtual)
    ).length;

    mesLogin.textContent = quantidadeMes;

}

function renderizarHistorico() {

    lista.innerHTML = "";

    const texto = pesquisa.value.toLowerCase();

    const status = filtro.value;

    const resultado = historicoLogin.filter(login => {

        const pesquisaTexto =
            login.cidade.toLowerCase().includes(texto) ||
            login.navegador.toLowerCase().includes(texto) ||
            login.ip.toLowerCase().includes(texto) ||
            login.dispositivo.toLowerCase().includes(texto);

        const pesquisaStatus =
            status === "todos" || login.status === status;

        return pesquisaTexto && pesquisaStatus;

    });

    if (resultado.length === 0) {

        lista.innerHTML = `

            <div class="sem-historico">

                <i>📭</i>

                <h2>Nenhum registro encontrado</h2>

                <p>Tente alterar os filtros da pesquisa.</p>

            </div>

        `;

        return;

    }

    resultado.forEach(login => {

        lista.innerHTML += `

            <div class="card-login">

                <div class="cabecalho-login">

                    <div class="dispositivo">

                        <span>${login.dispositivo.substring(0,2)}</span>

                        <div>

                            <h3>${login.dispositivo}</h3>

                        </div>

                    </div>

                    <div class="status ${login.status}">

                        ${login.status === "sucesso" ? "✔ Sucesso" : "❌ Falha"}

                    </div>

                </div>

                <div class="detalhes">

                    <div class="item">

                        <strong>Data</strong>

                        <span>${login.data}</span>

                    </div>

                    <div class="item">

                        <strong>Hora</strong>

                        <span>${login.hora}</span>

                    </div>

                    <div class="item">

                        <strong>Cidade</strong>

                        <span>${login.cidade}</span>

                    </div>

                    <div class="item">

                        <strong>IP</strong>

                        <span>${login.ip}</span>

                    </div>

                    <div class="item">

                        <strong>Navegador</strong>

                        <span>${login.navegador}</span>

                    </div>

                </div>

            </div>

        `;

    });

}

function exportarHistorico() {

    let texto = "HISTÓRICO DE LOGIN\n\n";

    historicoLogin.forEach(login => {

        texto +=
`Dispositivo: ${login.dispositivo}
Data: ${login.data}
Hora: ${login.hora}
Cidade: ${login.cidade}
IP: ${login.ip}
Navegador: ${login.navegador}
Status: ${login.status}

`;

    });

    const arquivo = new Blob([texto], { type: "text/plain" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(arquivo);

    link.download = "historico-login.txt";

    link.click();

    URL.revokeObjectURL(link.href);

}