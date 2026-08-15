const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

console.log(">>> ESTE SERVIDOR.JS ESTÁ RODANDO <<<");

app.use(cors());
app.use(express.json());


//==========================================
// ARQUIVOS PÚBLICOS / ASSETS
//==========================================

app.use(
    "/assets",
    express.static(
        path.join(__dirname, "..", "assets")
    )
);
//servir o site index.html
app.use(express.static(path.join(__dirname, "..")));


const conexao = require("./conexao");

//==========================================
// CLIENTE
//==========================================
const clienteRotas = require("../routes/cliente_rotas");
app.use("/clientes", clienteRotas);

//==========================================
// AVALIAÇÃO PRODUTO
//==========================================
const avaliacaoProdutoRotas = require("../routes/avaliacao_produto_rotas");
app.use("/avaliacoes-produto", avaliacaoProdutoRotas);

//==========================================
// BANNER
//==========================================
const bannerRotas = require("../routes/banner_rotas");
app.use("/banner", bannerRotas);

//==========================================
// BANNER HAS PRODUTO
//==========================================
const bannerHasProdutoRotas = require("../routes/banner_has_produto_rotas");
app.use("/banner-has-produto", bannerHasProdutoRotas);

//==========================================
// CARRINHO
//==========================================
const carrinhoRotas = require("../routes/carrinho_rotas");
app.use("/carrinho", carrinhoRotas);

//==========================================
// CARTÃO PAGAMENTO
//==========================================
const cartaoPagamentoRotas = require("../routes/cartao_pagamento_rotas");
app.use("/cartao-pagamento", cartaoPagamentoRotas);

//==========================================
// CATEGORIAS
//==========================================
const categoriasRotas = require("../routes/categorias_rotas");
app.use("/categorias", categoriasRotas);

//==========================================
// CATEGORIAS HAS PROMOÇÃO
//==========================================
const categoriasHasPromocaoRotas = require("../routes/categorias_has_promocao_rotas");
app.use("/categorias-has-promocao", categoriasHasPromocaoRotas);


//==========================================
// LOJA
//==========================================

const lojaRotas = require("../routes/loja_rotas");

app.use(
    "/lojas",
    lojaRotas
);

console.log(">>> LOJA ROTAS CARREGADAS <<<");


//==========================================
// LOJISTA
//==========================================

const lojistaRotas = require("../routes/lojista_rotas");

app.use(
    "/lojistas",
    lojistaRotas
);


//==========================================
// CLIENTE HAS ENDEREÇO
//==========================================

const clienteHasEnderecoRotas = require("../routes/cliente_has_endereco_rotas");

app.use(
    "/cliente-has-endereco",
    clienteHasEnderecoRotas
);


//==========================================
// CUPOM
//==========================================

const cupomRotas = require("../routes/cupom_rotas");

app.use(
    "/cupom",
    cupomRotas
);


//==========================================
// CUPOM HAS CATEGORIAS
//==========================================

const cupomHasCategoriasRotas =
    require("../routes/cupom_has_categorias_rotas");

app.use(
    "/cupom-has-categorias",
    cupomHasCategoriasRotas
);


//==========================================
// CUPOM HAS PRODUTO
//==========================================

const cupomHasProdutoRotas =
    require("../routes/cupom_has_produto_rotas");

app.use(
    "/cupom-has-produto",
    cupomHasProdutoRotas
);


//==========================================
// ENDEREÇO
//==========================================

const enderecoRotas =
    require("../routes/endereco_rotas");

app.use(
    "/enderecos",
    enderecoRotas
);


//==========================================
// FORMAS DE PAGAMENTO
//==========================================

const formaPagamentoRotas =
    require("../routes/forma_pagamento_rotas");

app.use(
    "/forma-pagamento",
    formaPagamentoRotas
);


//==========================================
// FRETE
//==========================================

const freteRotas =
    require("../routes/frete_rotas");

app.use(
    "/frete",
    freteRotas
);


//==========================================
// IMAGEM PRODUTO
//==========================================

const imagemProdutoRotas =
    require("../routes/imagem_produto_rotas");

app.use(
    "/imagem-produto",
    imagemProdutoRotas
);


//==========================================
// MARCA
//==========================================

const marcaRotas =
    require("../routes/marca_rotas");

app.use(
    "/marcas",
    marcaRotas
);


//==========================================
// CORES
//==========================================

const coresRotas =
    require("../routes/cores_rotas");

app.use(
    "/cores",
    coresRotas
);


//==========================================
// PEDIDOS
//==========================================

const pedidosRotas =
    require("../routes/pedidos_rotas");

app.use(
    "/pedidos",
    pedidosRotas
);


//==========================================
// PEDIDOS HAS PRODUTO
//==========================================

const pedidosHasProdutoRotas =
    require("../routes/pedidos_has_produto_rotas");

app.use(
    "/pedidos-has-produto",
    pedidosHasProdutoRotas
);


//==========================================
// PRODUTO
//==========================================

const produtoRotas =
    require("../routes/produto_rotas");

app.use(
    "/produtos",
    produtoRotas
);


//==========================================
// PRODUTO HAS CARRINHO
//==========================================

const produtoHasCarrinhoRotas =
    require("../routes/produto_has_carrinho");

app.use(
    "/produto-has-carrinho",
    produtoHasCarrinhoRotas
);


//==========================================
// PRODUTO HAS PROMOÇÃO
//==========================================

const produtoHasPromocaoRotas =
    require("../routes/produto_has_promocao_rotas");

app.use(
    "/produto-has-promocao",
    produtoHasPromocaoRotas
);


//==========================================
// PRODUTO HAS TAMANHO
//==========================================

const produtoHasTamanhoRotas =
    require("../routes/produto_has_tamanho_rotas");

app.use(
    "/produto-has-tamanho",
    produtoHasTamanhoRotas
);


//==========================================
// PROMOÇÃO
//==========================================

const promocaoRotas =
    require("../routes/promocao_rotas");

app.use(
    "/promocao",
    promocaoRotas
);


//==========================================
// TAMANHO
//==========================================

const tamanhoRotas =
    require("../routes/tamanho_rotas");

app.use(
    "/tamanho",
    tamanhoRotas
);


//==========================================
// INICIAR SERVIDOR
//==========================================

console.log(">>> SERVIDOR CORRETO CARREGADO <<<");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}!`);
});