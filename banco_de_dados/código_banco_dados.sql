/*criando banco de dados*/
CREATE DATABASE CATech;

-- inicalizar banco de dados
USE CATech;

-- criar tabelas que nao tem chave estrangeira
CREATE TABLE Lojista(
idLojista INT PRIMARY KEY auto_increment,
nome VARCHAR(200) NOT NULL,
cpf MEDIUMINT(12) NOT NULL UNIQUE,
cnpj MEDIUMINT(15) UNIQUE,
email VARCHAR(120) NOT NULL,
senha VARCHAR(13) NOT NULL,
telefone MEDIUMINT(14)
);

CREATE TABLE Endereco(
idEndereco INT PRIMARY KEY auto_increment,
rua VARCHAR(45) not null,
cep MEDIUMINT(11) not null,
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
idLoja INT PRIMARY KEY auto_increment,
nome VARCHAR(200) NOT NULL,
whatsapp VARCHAR(50),
instagram VARCHAR(50),
facebook VARCHAR(50),
linkedin VARCHAR(50),
telefone MEDIUMINT(14) NOT NULL,
email VARCHAR(120) NOT NULL,
Endereco_idEndereco INT,
Lojista_idLojista INT,
FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco (idEndereco),
FOREIGN KEY (Lojista_idLojista) REFERENCES Lojista (idLojista)
);

CREATE TABLE Cliente(
idCliente INT PRIMARY KEY auto_increment,
nome VARCHAR(200) NOT NULL,
cpf MEDIUMINT(12) NOT NULL,
telefone MEDIUMINT(15) NOT NULL,
email VARCHAR(120) NOT NULL,
senha VARCHAR(13) NOT NULL,
data_nascimento DATE NOT NULL,
loja_idLoja INT,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE PRODUTO(
idproduto INT PRIMARY KEY auto_increment,
nome VARCHAR(100) NOT NULL,
descricao TEXT(1000) not null,
codigo VARCHAR(45) not null,
preco_antigo FLOAT not null,
preco_promocional FLOAT,
quantidade_estoque INT not null,
ativo BOOLEAN,
loja_idLoja INT,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja),
marca_idMarca int,
FOREIGN KEY (Marca_idMarca) references marca (idMarca),
categorias_idCategorias int,
FOREIGN KEY (Categorias_idCategorias) references Categoria (idCategoria)
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

CREATE TABLE imagem_produto(
idImagem_produto INT primary key auto_increment,
arquivo LONGBLOB NOT NULL,
produto_idProduto int,
FOREIGN KEY (produto_idProduto) references produto (idProduto)
);

CREATE TABLE banner(
idBanner INT primary key auto_increment,
imagem LONGBLOB NOT NULL,
data_inicio DATE NOT NULL,
data_final DATE,
status_visibilidade BOOLEAN NOT NULL,
loja_idLoja INT,
FOREIGN KEY (loja_idLoja) references loja (idloja)
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
numero mediumint(40) not null,
data_vencimento varchar(45) not null,
cvc int not null,
cpf mediumint(11) not null,
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

-- LISTAGEM DE TABELAS
SHOW TABLES;

-- INSERT - INSERIR DADOS NA TABELA
INSERT INTO Endereco
(rua, cep, bairro, numero, complemento, tipo)
values("Rodoviário",777817089,"Rodoviário",1230,"Ao lado do senac","Comercial");

-- LISTAR DADOS DA TABELA
SELECT * FROM Endereco;

insert into Lojista
(nome, cpf, email, senha, telefone)
values ("João", 09012209022, "Joao@gmail.com", "123abc", 63992129510);






-- cadastrar os dados da loja
INSERT INTO LOJA
(nome, whatsapp, telefone, email, endereco_idEndereco, lojista_idLojista)
values("CA Tech", "63992057108", "63992057108", "piuutrapp@gmail.com", 1,1);






