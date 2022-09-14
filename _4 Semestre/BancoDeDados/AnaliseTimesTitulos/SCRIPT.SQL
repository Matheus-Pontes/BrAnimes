-- Criando tabelas e colunas

CREATE TABLE Estados
( EstadoId numeric not null,
  Descricao varchar2(50) not null,
  CONSTRAINT estados_pk PRIMARY KEY (EstadoId)
);

CREATE TABLE Times
( 
    TimeId numeric not null Primary key,
    Nome VARCHAR(50) not null,
    Serie VARCHAR(1) NOT NULL,
    EstadoId numeric not null,
    CONSTRAINT fk_estado
        FOREIGN KEY (EstadoId)
        REFERENCES Estados(EstadoId)
);

CREATE TABLE TimesTitulos(
    BrasileiraoQuantidade INT,
    CopaDoBrasilQuantidade INT,
    LibertadoresQuantidade INT,
    SulamericanaQuantidade INT,
    MundialQuantidade INT,
    TimeId numeric not null,
    CONSTRAINT fk_timestitulos
        FOREIGN KEY (TimeId) 
        REFERENCES Times(TimeId)
);

-- Inserindo dados
INSERT INTO Estados (EstadoId, Descricao) VALUES (1, 'SP');

INSERT INTO Times (TimeId, Nome, Serie, EstadoId) VALUES (1, 'TESTE', 'A', 1);

INSERT INTO TimesTitulos (BrasileiraoQuantidade, CopaDoBrasilQuantidade, LibertadoresQuantidade, SulamericanaQuantidade, MundialQuantidade, TimeId) VALUES (2, 3, 2, 1, 1, 1); 

-- consulta de dados
select * from Estados;
select * from Times;
select * from TimesTitulos;