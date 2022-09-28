CREATE TABLE Estados
( 
  EstadoId INT not null,
  Descricao varchar(50) not null,
  CONSTRAINT estados_pk PRIMARY KEY (EstadoId)
);

CREATE TABLE Times
( 
    TimeId INT not null Primary key,
    Nome VARCHAR(50) not null,
    Serie VARCHAR(1) NOT NULL,
    EstadoId INT not null,
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
    TimeId INT not null,
    CONSTRAINT fk_timestitulos
        FOREIGN KEY (TimeId) 
        REFERENCES Times(TimeId)
);