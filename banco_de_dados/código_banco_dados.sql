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
loja idloja

);



















