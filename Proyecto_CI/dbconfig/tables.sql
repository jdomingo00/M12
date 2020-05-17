DROP DATABASE IF EXISTS escueladb;
CREATE DATABASE escueladb;
\c escueladb;

DROP TABLE  IF EXISTS horarios;
DROP TABLE  IF EXISTS clases;
DROP TABLE  IF EXISTS alumnos;
DROP TABLE  IF EXISTS profesores;
DROP TABLE  IF EXISTS admins;
DROP TABLE  IF EXISTS usuarios;

CREATE TABLE usuarios (
    userName    varchar(9) PRIMARY KEY,
    passwd      varchar(20),
    tipo        int,
    UNIQUE(userName)
);

CREATE TABLE admins (
    PRIMARY KEY(userName)
) INHERITS (usuarios);

CREATE TABLE profesores (
    nombre      varchar(15),
    apellido    varchar(50),
    email       varchar(35),
    telefono    varchar(9),
    PRIMARY KEY(userName)
) INHERITS (usuarios);

CREATE TABLE alumnos (
    nombre      varchar(15),
    apellidos   varchar(50),
    email       varchar(35),
    telefono    varchar(9),
    PRIMARY KEY(userName)
) INHERITS (usuarios);

CREATE TABLE clases (
    ID          SERIAL NOT NULL PRIMARY KEY,
    hora        time,
    dia         varchar(9),
    lugar       varchar(20),
    nivel       varchar(50),
    profesor    varchar(9),
    FOREIGN KEY (profesor) REFERENCES profesores (userName)
);

CREATE TABLE horarios (
    clase   int,
    alumno  varchar(9),
    PRIMARY KEY (clase, alumno),
    FOREIGN KEY (alumno) REFERENCES alumnos (userName),
    FOREIGN KEY (clase) REFERENCES clases (ID)
);

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM dbuser;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM dbuser;

DROP ROLE dbuser;

CREATE ROLE dbuser WITH LOGIN PASSWORD '1234';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dbuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO dbuser;

INSERT INTO admins VALUES ('admin', '1234', 0);

INSERT INTO profesores VALUES ('47902065B', '1234', 1, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');

INSERT INTO alumnos VALUES ('47902065A', '1234', 2, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');

INSERT INTO clases VALUES (DEFAULT, '19:00:00', 'Lunes', 'Puerto', 'Adulto - Iniciacion', '47902065B');

INSERT INTO horarios VALUES (1, '47902065A');

