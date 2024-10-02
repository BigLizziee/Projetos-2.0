drop database if exists Clientes;
create database Clientes;
use Clientes;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    altura varchar(50) not null,
    peso varchar(50) not null,
    endereco varchar(50) not null,
    nascimento date not null
);
describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(cpf, nome, sobrenome, altura, peso, endereco, nascimento)
values
("111.111.111-11","Lizzie","Sousa","170","73","Jaguariuna","2008-03-31"),
("222.222.222-22","Renan","Nogueira de Morais","181","84","Amparo","2007-12-28");

select * from Clientes;

drop database if exists Treinadores;
create database Treinadores;
use Treinadores;
create table Treinadores(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    formacao varchar(50) not null,
    endereco varchar(50) not null,
    nascimento date not null
);
describe Treinadores;

-- DML - Popular com dados de teste
insert into Treinadores(cpf, nome, sobrenome, formacao, endereco, nascimento)
values
("111.111.111-11","Joao","Wolff","Ed.fs","Jaguariuna","0000-00-00"),
("222.222.222-22","Francisco","Chico","Ed.fs","jaguariuna","0000-00-00");

select * from Treinadores;