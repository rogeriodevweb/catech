/*criando banco de dados*/
CREATE DATABASE CATech;

-- inicalizar banco de dados
USE CATech;



-- criar tabelas que nao tem chave estrangeira
-- =========================================================
-- 1. LOJISTA
-- =========================================================

CREATE TABLE Lojista (

    idLojista INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    nascimento DATE,

    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,

    nomeLoja VARCHAR(200) NOT NULL,
    cnpj VARCHAR(18) UNIQUE,
    nomeFantasia VARCHAR(200),
    descricao TEXT,

    cep VARCHAR(10),
    estado VARCHAR(50),
    cidade VARCHAR(100),
    bairro VARCHAR(100),
    endereco VARCHAR(200),

    instagram VARCHAR(100),
    whatsapp VARCHAR(20),

    ativo BOOLEAN DEFAULT FALSE,
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


-- =========================================================
-- 2. ENDEREÇO
-- =========================================================

CREATE TABLE Endereco(

    idEndereco INT PRIMARY KEY AUTO_INCREMENT,

    rua VARCHAR(45) NOT NULL,
    cep VARCHAR(11) NOT NULL,
    bairro VARCHAR(45) NOT NULL,
    numero INT,
    complemento VARCHAR(200),
    tipo VARCHAR(45)

);


-- =========================================================
-- 3. FORMA DE PAGAMENTO
-- =========================================================

CREATE TABLE Forma_pagamento(

    idForma_pagamento INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45) NOT NULL,
    link VARCHAR(200),
    ativo BOOLEAN

);


-- =========================================================
-- 4. MARCA
-- =========================================================

CREATE TABLE Marca(

    idMarca INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,
    logo LONGBLOB

);


-- =========================================================
-- 5. CATEGORIA
-- =========================================================

CREATE TABLE Categoria(

    idCategoria INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL

);


-- =========================================================
-- 6. TAMANHO
-- =========================================================

CREATE TABLE Tamanho(

    idTamanho INT PRIMARY KEY AUTO_INCREMENT,

    tamanho VARCHAR(20) NOT NULL

);


-- =========================================================
-- 7. CORES
-- =========================================================

CREATE TABLE Cores(

    idCores INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(20) NOT NULL,
    codigo_cor VARCHAR(20)

);


-- =========================================================
-- 8. LOJA
-- =========================================================

CREATE TABLE Loja(

    idLoja INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,

    whatsapp VARCHAR(50),
    instagram VARCHAR(50),
    facebook VARCHAR(50),
    linkedin VARCHAR(50),

    telefone VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,

    Endereco_idEndereco INT,

    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco)

);


-- =========================================================
-- 9. CLIENTE
-- =========================================================

CREATE TABLE Cliente(

    idCliente INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(120) NOT NULL,
    telefone VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    senha VARCHAR(13) NOT NULL,
    data_nascimento DATE NOT NULL,

    loja_idLoja INT,

    FOREIGN KEY (loja_idLoja)
        REFERENCES Loja(idLoja)

);


-- =========================================================
-- 10. PRODUTO
-- =========================================================

CREATE TABLE Produto(

    idProduto INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100) NOT NULL,

    descricao TEXT NOT NULL,

    codigo VARCHAR(45) NOT NULL UNIQUE,

    preco_antigo DECIMAL(10,2) NOT NULL,

    preco_promocional DECIMAL(10,2),

    quantidade_estoque INT NOT NULL DEFAULT 0,

    ativo BOOLEAN DEFAULT TRUE,

    loja_idLoja INT NOT NULL,

    marca_idMarca INT NOT NULL,

    categorias_idCategorias INT NOT NULL,

    cor_idCores INT NOT NULL,

    tamanho_idTamanho INT NOT NULL,


    FOREIGN KEY (loja_idLoja)
        REFERENCES Loja(idLoja),

    FOREIGN KEY (marca_idMarca)
        REFERENCES Marca(idMarca),

    FOREIGN KEY (categorias_idCategorias)
        REFERENCES Categoria(idCategoria),

    FOREIGN KEY (cor_idCores)
        REFERENCES Cores(idCores),

    FOREIGN KEY (tamanho_idTamanho)
        REFERENCES Tamanho(idTamanho)

);


-- =========================================================
-- 11. MÍDIA DO PRODUTO
-- =========================================================

CREATE TABLE midia_produto(

    idMidia_produto INT PRIMARY KEY AUTO_INCREMENT,

    arquivo LONGBLOB NOT NULL,

    tipo_arquivo VARCHAR(50) NOT NULL,

    tipo_midia ENUM('imagem','video') DEFAULT 'imagem',

    principal BOOLEAN DEFAULT FALSE,

    produto_idProduto INT NOT NULL,

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 12. CARRINHO
-- =========================================================

CREATE TABLE Carrinho(

    idCarrinho INT PRIMARY KEY AUTO_INCREMENT,

    quantidade_produto INT,

    preco_total FLOAT,

    cliente_idCliente INT,

    FOREIGN KEY (cliente_idCliente)
        REFERENCES Cliente(idCliente)

);


-- =========================================================
-- 13. AVALIAÇÃO DO PRODUTO
-- =========================================================

CREATE TABLE Avaliacao_produto(

    idAvaliacao_produto INT PRIMARY KEY AUTO_INCREMENT,

    data_avaliacao DATE,

    nota FLOAT,

    descricao TEXT,

    produto_idProduto INT,

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 14. BANNER
-- =========================================================

CREATE TABLE banner(

    idBanner INT PRIMARY KEY AUTO_INCREMENT,

    titulo VARCHAR(100) NOT NULL,

    descricao TEXT,

    arquivo LONGBLOB NOT NULL,

    tipo_arquivo VARCHAR(50) NOT NULL,

    link VARCHAR(255),

    data_inicio DATE NOT NULL,

    data_final DATE,

    status_visibilidade BOOLEAN NOT NULL DEFAULT TRUE,

    loja_idLoja INT NOT NULL,

    FOREIGN KEY (loja_idLoja)
        REFERENCES Loja(idLoja)

);


-- =========================================================
-- 15. PROMOÇÃO
-- =========================================================

CREATE TABLE promocao(

    idPromocao INT PRIMARY KEY AUTO_INCREMENT,

    data_inicio DATE NOT NULL,

    data_final DATE NOT NULL,

    valor_promocional FLOAT NOT NULL,

    nome VARCHAR(45) NOT NULL,

    banner_idBanner INT,

    FOREIGN KEY (banner_idBanner)
        REFERENCES banner(idBanner)

);


-- =========================================================
-- 16. CUPOM
-- =========================================================

CREATE TABLE cupom(

    idCupom INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(45),

    data_validade DATE,

    quantidade INT,

    desconto FLOAT,

    loja_idLoja INT,

    FOREIGN KEY (loja_idLoja)
        REFERENCES Loja(idLoja)

);


-- =========================================================
-- 17. PEDIDOS
-- =========================================================

CREATE TABLE pedidos(

    idPedidos INT PRIMARY KEY AUTO_INCREMENT,

    data_pedido DATE NOT NULL,

    nota_fiscal LONGBLOB,

    data_entrega DATE,

    status_entrega VARCHAR(45) NOT NULL,

    status_pagamento VARCHAR(45) NOT NULL,

    codigo VARCHAR(45) NOT NULL,

    cliente_idCliente INT,

    loja_idLoja INT,

    endereco_idEndereco INT,

    forma_pagamento_idForma_pagamento INT,


    FOREIGN KEY (cliente_idCliente)
        REFERENCES Cliente(idCliente),

    FOREIGN KEY (loja_idLoja)
        REFERENCES Loja(idLoja),

    FOREIGN KEY (endereco_idEndereco)
        REFERENCES Endereco(idEndereco),

    FOREIGN KEY (forma_pagamento_idForma_pagamento)
        REFERENCES Forma_pagamento(idForma_pagamento)

);


-- =========================================================
-- 18. CARTÃO DE PAGAMENTO
-- =========================================================

CREATE TABLE cartao_pagamento(

    idCartao_pagamento INT PRIMARY KEY AUTO_INCREMENT,

    numero VARCHAR(120) NOT NULL,

    data_vencimento VARCHAR(45) NOT NULL,

    cvc INT NOT NULL,

    cpf VARCHAR(120) NOT NULL,

    nome_proprietario VARCHAR(200) NOT NULL,

    nome_identificacao VARCHAR(45) NOT NULL,

    bandeira VARCHAR(45) NOT NULL,

    tipo VARCHAR(45) NOT NULL,

    ativo BOOLEAN NOT NULL,

    cliente_idCliente INT,

    FOREIGN KEY (cliente_idCliente)
        REFERENCES Cliente(idCliente)

);


-- =========================================================
-- 19. FRETE
-- =========================================================

CREATE TABLE frete(

    idFrete INT PRIMARY KEY AUTO_INCREMENT,

    valor FLOAT NOT NULL,

    tipo VARCHAR(45) NOT NULL,

    bairro VARCHAR(45),

    entrega_full BOOLEAN,

    codigo_rastreio VARCHAR(100),

    pedidos_idPedidos INT,

    FOREIGN KEY (pedidos_idPedidos)
        REFERENCES pedidos(idPedidos)

);


-- =========================================================
-- 20. CUPOM + CATEGORIA
-- =========================================================

CREATE TABLE cupom_has_categoria(

    cupom_idCupom INT,

    categoria_idCategoria INT,

    FOREIGN KEY (cupom_idCupom)
        REFERENCES cupom(idCupom),

    FOREIGN KEY (categoria_idCategoria)
        REFERENCES Categoria(idCategoria)

);


-- =========================================================
-- 21. PEDIDOS + PRODUTO
-- =========================================================

CREATE TABLE pedidos_has_produto(

    pedidos_idPedidos INT,

    produto_idProduto INT,

    FOREIGN KEY (pedidos_idPedidos)
        REFERENCES pedidos(idPedidos),

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 22. PRODUTO + PROMOÇÃO
-- =========================================================

CREATE TABLE produto_has_promocao(

    produto_idProduto INT,

    promocao_idPromocao INT,

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (promocao_idPromocao)
        REFERENCES promocao(idPromocao)

);


-- =========================================================
-- 23. PRODUTO + CARRINHO
-- =========================================================

CREATE TABLE produto_has_carrinho(

    produto_idProduto INT,

    carrinho_idCarrinho INT,

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (carrinho_idCarrinho)
        REFERENCES Carrinho(idCarrinho)

);


-- =========================================================
-- 24. CATEGORIA + PROMOÇÃO
-- =========================================================

CREATE TABLE categoria_has_promocao(

    categoria_idCategoria INT,

    promocao_idPromocao INT,

    FOREIGN KEY (categoria_idCategoria)
        REFERENCES Categoria(idCategoria),

    FOREIGN KEY (promocao_idPromocao)
        REFERENCES promocao(idPromocao)

);


-- =========================================================
-- 25. PRODUTO + TAMANHO
-- =========================================================

CREATE TABLE produto_has_tamanho(

    produto_idProduto INT,

    tamanho_idTamanho INT,

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (tamanho_idTamanho)
        REFERENCES Tamanho(idTamanho)

);


-- =========================================================
-- 26. BANNER + PRODUTO
-- =========================================================

CREATE TABLE banner_has_produto(

    banner_idBanner INT,

    produto_idProduto INT,

    FOREIGN KEY (banner_idBanner)
        REFERENCES banner(idBanner),

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 27. CUPOM + PRODUTO
-- =========================================================

CREATE TABLE cupom_has_produto(

    cupom_idCupom INT,

    produto_idProduto INT,

    FOREIGN KEY (cupom_idCupom)
        REFERENCES cupom(idCupom),

    FOREIGN KEY (produto_idProduto)
        REFERENCES Produto(idProduto)

);


-- =========================================================
-- 28. CLIENTE + ENDEREÇO
-- =========================================================

CREATE TABLE cliente_has_endereco(

    cliente_idCliente INT,

    endereco_idEndereco INT,

    FOREIGN KEY (cliente_idCliente)
        REFERENCES Cliente(idCliente),

    FOREIGN KEY (endereco_idEndereco)
        REFERENCES Endereco(idEndereco)

);

ALTER TABLE Cliente

DROP FOREIGN KEY NOME_DA_CONSTRAINT;

SELECT * FROM Loja;

SHOW CREATE TABLE Cliente;


SHOW TABLES;























