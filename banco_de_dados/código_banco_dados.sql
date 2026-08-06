/*criando banco de dados*/
CREATE DATABASE CATech;

-- inicalizar banco de dados
USE CATech;

SHOW TABLES;

-- criar tabelas que nao tem chave estrangeira
CREATE TABLE Lojista (

    idLojista INT PRIMARY KEY AUTO_INCREMENT,

    -- Dados do responsável
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    nascimento DATE,

    -- Dados de acesso
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,

    -- Dados da loja
    nomeLoja VARCHAR(200) NOT NULL,
    cnpj VARCHAR(18) UNIQUE,
    nomeFantasia VARCHAR(200),
    descricao TEXT,

    -- Endereço comercial
    cep VARCHAR(10),
    estado VARCHAR(50),
    cidade VARCHAR(100),
    bairro VARCHAR(100),
    endereco VARCHAR(200),

    -- Contatos da loja
    instagram VARCHAR(100),
    whatsapp VARCHAR(20),

    -- Controle do cadastro
    ativo BOOLEAN DEFAULT FALSE,
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE Endereco(
idEndereco INT PRIMARY KEY auto_increment,
rua VARCHAR(45) not null,
cep varchar(11) not null,
bairro VARCHAR(45) not null,
numero INT,
complemento VARCHAR(200),
tipo VARCHAR(45)
);

CREATE TABLE Forma_pagamento(
idForma_pagamento INT PRIMARY KEY auto_increment,
nome varchar(45) not null,
link varchar(200),
ativo boolean
);

CREATE TABLE Categoria(
idCategoria INT PRIMARY KEY auto_increment,
nome VARCHAR(100) NOT NULL
);



CREATE TABLE Marca(
idMarca INT PRIMARY KEY auto_increment,
nome VARCHAR(100) NOT NULL,
logo LONGBLOB
);

CREATE TABLE Tamanho(
idTamanho INT PRIMARY KEY auto_increment,
tamanho VARCHAR(20)
);

CREATE TABLE Cores(
idCores INT PRIMARY KEY auto_increment,
nome VARCHAR(20) NOT NULL,
codigo_cor VARCHAR(20)
);

-- CRIAR TABELAS COM CHAVE ESTRANGEIRA FK
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

CREATE TABLE Cliente(
idCliente INT PRIMARY KEY auto_increment,
nome VARCHAR(200) NOT NULL,
cpf VARCHAR(120) NOT NULL,
telefone VARCHAR(120) NOT NULL,
email VARCHAR(120) NOT NULL,
senha VARCHAR(13) NOT NULL,
data_nascimento DATE NOT NULL,
loja_idLoja INT,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

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

    FOREIGN KEY (loja_idLoja) 
    REFERENCES Loja(idLoja),

    FOREIGN KEY (marca_idMarca) 
    REFERENCES Marca(idMarca),

    FOREIGN KEY (categorias_idCategorias) 
    REFERENCES Categoria(idCategoria)

);

CREATE TABLE Carrinho(
idCarrinho  INT PRIMARY KEY auto_increment,
quantidade_produto INT,
preco_total FLOAT,
cliente_idCliente int,
FOREIGN KEY (cliente_idCliente) references Cliente (idCliente)
);

CREATE TABLE Avaliacao_produto(
idAvaliacao_produto INT PRIMARY KEY auto_increment,
data_avaliacao date,
nota FLOAT,
descricao text(250),
produto_idProduto int,
FOREIGN KEY (produto_idProduto) references produto (idProduto)
);

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

CREATE TABLE banner (
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
FOREIGN KEY (loja_idLoja) REFERENCES loja(idLoja)
);

CREATE TABLE promocao(
idPromocao INT primary key auto_increment,
data_inicio date not null,
data_final date not null,
valor_promocional Float not null,
nome varchar(45) not null,
banner_idBanner int,
FOREIGN KEY (banner_idBanner) references banner (idBanner)
);

CREATE TABLE cupom(
idCupom INT primary key auto_increment,
nome varchar(45),
data_validade date,
quantidade int,
desconto float,
loja_idLoja int,
FOREIGN KEY (loja_idLoja) references loja (idLoja)
);

CREATE TABLE pedidos(
idPedidos int primary key auto_increment,
data_pedido date not null,
nota_fiscal longblob,
data_entrega date,
status_entrega varchar(45) not null,
status_pagamento varchar(45) not null,
codigo varchar(45) not null,
cliente_idCliente int,
loja_idLoja int,
endereco_idEndereco int,
forma_pagamento_idForma_Pagamento int,
FOREIGN KEY (cliente_idCliente) references cliente (idCliente),
FOREIGN KEY (loja_idLoja) references loja (idLoja),
FOREIGN KEY (endereco_idEndereco) references endereco (idEndereco),
FOREIGN KEY (forma_pagamento_idForma_Pagamento) references forma_pagamento (idforma_pagamento)
);

CREATE TABLE cartao_pagamento(
idCartao_pagamento int primary key auto_increment,
numero VARCHAR(120) not null,
data_vencimento varchar(45) not null,
cvc int not null,
cpf VARCHAR(120) not null,
nome_proprietario varchar(200) not null,
nome_identificacao varchar(45) not null,
bandeira varchar(45) not null,
tipo varchar(45) not null,
ativo boolean not null,
cliente_idCliente int,
FOREIGN KEY (cliente_idCliente) references cliente (idCliente)
);

CREATE TABLE frete(
idFrete int primary key auto_increment,
valor float not null,
tipo varchar(45) not null,
bairro varchar(45),
entrega_full boolean,
codigo_rastreio varchar(100),
pedidos_idPedidos int,
FOREIGN KEY (pedidos_idPedidos) references pedidos (idPedidos)
);

CREATE TABLE cupom_has_categoria(
cupom_idCupom int,
categoria_idCategoria int,
FOREIGN KEY (cupom_idCupom) references cupom (idCupom),
FOREIGN KEY (categoria_idCategoria) references categoria (idCategoria)
);

CREATE TABLE pedidos_has_produto(
pedidos_idPedidos int,
produto_idProduto int,
FOREIGN KEY (pedidos_idPedidos) references pedidos (idPedidos),
FOREIGN KEY (produto_idProduto) references produto (idProduto)
);

CREATE TABLE produto_has_promocao(
produto_idProduto int,
promocao_idPromocao int,
FOREIGN KEY (produto_idProduto) references produto (idProduto),
FOREIGN KEY (promocao_idPromocao) references promocao (idPromocao)
);

CREATE TABLE produto_has_carrinho(
produto_idProduto int,
carrinho_idCarrinho int,
FOREIGN KEY (produto_idProduto) references produto (idProduto),
FOREIGN KEY (carrinho_idCarrinho) references carrinho (idCarrinho)
);

CREATE TABLE categoria_has_promocao(
categoria_idCategoria int,
promocao_idPromocao int,
FOREIGN KEY (categoria_idCategoria) references categoria (idCategoria),
FOREIGN KEY (promocao_idPromocao) references promocao (idPromocao)
);

CREATE TABLE produto_has_tamanho(
produto_idProduto int,
tamanho_idTamanho int,
FOREIGN KEY (produto_idProduto) references produto (idProduto),
FOREIGN KEY (tamanho_idTamanho) references tamanho (idTamanho)
);

CREATE TABLE banner_has_produto(
banner_idBanner int,
produto_idProduto int,
FOREIGN KEY (banner_idBanner) references banner (idbanner),
FOREIGN KEY (produto_idProduto) references produto (idProduto)
);

CREATE TABLE cupom_has_produto(
cupom_idCupom int,
produto_idProduto int,
FOREIGN KEY (cupom_idCupom) references cupom (idCupom),
FOREIGN KEY (produto_idProduto) references produto (idProduto)
);

CREATE TABLE cliente_has_endereco(
cliente_idCliente int,
endereco_idEndereco int,
FOREIGN KEY (cliente_idCliente) references cliente (idCliente),
FOREIGN KEY (endereco_idEndereco) references endereco (idEndereco)
);


-- Comando de modelagem do BD
-- INSERIR, EDITAR, EXCLUIR, LISTAR



-- INSERT - INSERIR DADOS NA TABELA
INSERT INTO Endereco
(rua, cep, bairro, numero, complemento, tipo)
values("Rodoviário",777817089,"Rodoviário",1230,"Ao lado do senac","Comercial");




insert into Lojista
(nome, cpf, email, senha, telefone)
values ("João", 09012209022, "Joao@gmail.com", "123abc", 63992129510);

-- cadastrar os dados da loja
INSERT INTO LOJA
(nome, whatsapp, telefone, email, endereco_idEndereco, lojista_idLojista)
values("CA Tech", "63992057108", "63992057108", "piuutrapp@gmail.com", 1,1);




INSERT INTO Categoria (nome) VALUES
('Componentes de Computador'),
('Processadores'),
('Placas Mãe'),
('Memórias RAM'),
('SSD'),
('HD'),
('Placas de Vídeo'),
('Fontes de Alimentação'),
('Gabinetes'),
('Coolers e Ventoinhas'),
('Cabos e Conectores'),
('Adaptadores'),
('Carregadores'),
('Baterias'),
('Periféricos'),
('Teclados'),
('Mouses'),
('Headsets'),
('Webcams'),
('Monitores'),
('Equipamentos de Rede'),
('Roteadores'),
('Switches'),
('Placas de Rede'),
('Adaptadores Wi-Fi'),
('Ferramentas de Manutenção'),
('Chaves e Kits de Ferramentas'),
('Estações de Solda'),
('Ferro de Solda'),
('Pasta Térmica'),
('Multímetros'),
('Fontes de Bancada'),
('Equipamentos de Teste'),
('Limpeza e Manutenção'),
('Álcool Isopropílico'),
('Escovas e Pincéis'),
('Organização de Cabos'),
('Parafusos e Acessórios'),
('Eletrônicos'),
('Segurança Eletrônica'),
('Câmeras de Segurança'),
('Acessórios de CFTV');
SELECT * FROM produto;
INSERT INTO Marca (nome) VALUES
('Kingston'),
('Logitech'),
('Intel'),
('AMD'),
('Lenovo'),
('Dell'),
('Asus'),
('Samsung'),
('Acer'),
('HP');

INSERT INTO Marca (nome) VALUES
('iFixit'),
('Wera'),
('Bosch'),
('Makita'),
('Stanley'),
('Tramontina'),
('Gedore'),
('Vonder'),
('King Tony'),
('Yihua'),
('Hakko'),
('Quick'),
('WEP'),
('Hikari'),
('Atten'),
('Fluke'),
('Minipa'),
('Extech'),
('UNI-T'),
('Kyoritsu'),
('Dell'),
('Lenovo'),
('HP'),
('Acer'),
('ASUS'),
('Apple'),
('Samsung'),
('MSI'),
('Intel'),
('AMD'),
('NVIDIA'),
('Kingston'),
('Corsair'),
('Western Digital'),
('Seagate'),
('Crucial'),
('Logitech'),
('Thermaltake'),
('Cooler Master'),
('Arctic'),
('DeepCool'),
('TP-Link'),
('D-Link'),
('Ubiquiti'),
('MikroTik'),
('Tenda'),
('Epson'),
('Canon'),
('Brother'),
('LG'),
('Philco'),
('Multilaser'),
('Fortrek'),
('Redragon'),
('HyperX'),
('Razer'),
('JBL'),
('Anker'),
('Baseus'),
('Adata'),
('Team Group'),
('Patriot'),
('Galax'),
('Gigabyte'),
('ASRock'),
('Biostar'),
('EVGA'),
('Zotac'),
('PNY'),
('Sapphire'),
('PowerColor'),
('XPG'),
('Noctua'),
('NZXT'),
('Aerocool'),
('Cougar'),
('Thermaltake'),
('Havit'),
('C3Tech'),
('Knup'),
('Exbom'),
('Bright'),
('Elgin'),
('SMS'),
('APC'),
('Intelbras');

INSERT INTO Lojista
(
    nomeResponsavel,
    cpf,
    cnpj,
    telefone,
    nascimento,
    email,
    senha,
    nomeLoja
)
VALUES
(
    'Maria Oliveira',
    '12345678900',
    '12345678000199',
    '63999999999',
    '1995-08-20',
    'maria@catech.com',
    '123456',
    'CA Tech Eletrônicos'
);




-- LISTAR DADOS DA TABELA
SELECT * FROM Endereco;
SELECT * FROM Lojista;
SELECT * FROM Loja;
SELECT * FROM cliente;
select * from produto;
SELECT * FROM Marca;
SELECT * FROM Categoria;


































