DROP DATABASE IF EXISTS escueladb;
CREATE DATABASE escueladb;
\c escueladb;

DROP TABLE  IF EXISTS horarios;
DROP TABLE  IF EXISTS tipoClases;
DROP TABLE  IF EXISTS clases;
DROP TABLE  IF EXISTS alumnos;
DROP TABLE  IF EXISTS profesores;
DROP TABLE  IF EXISTS admins;
DROP TABLE  IF EXISTS usuarios;

CREATE TABLE usuarios (
    userName    varchar(9) PRIMARY KEY,
    passwd      varchar(60),
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
    verificado  boolean,
    PRIMARY KEY(userName)
) INHERITS (usuarios);

CREATE TABLE clases (
    ID          SERIAL NOT NULL PRIMARY KEY,
    hora        time,
    dia         varchar(10),
    lugar       varchar(20),
    nivel       varchar(50),
    profesor    varchar(9),
	color		varchar(10),
    FOREIGN KEY (profesor) REFERENCES profesores (userName)
);

CREATE TABLE tipoClases (
    nivel       varchar(30),
    descripcion text
);

CREATE TABLE horarios (
    clase       int,
    alumno      varchar(9),
    asistencia  boolean,
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

INSERT INTO admins VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055', 0);

INSERT INTO profesores VALUES ('47902065B', '81dc9bdb52d04dc20036dbd8313ed055', 1, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');
INSERT INTO profesores VALUES ('47902065C', '81dc9bdb52d04dc20036dbd8313ed055', 1, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');
INSERT INTO profesores VALUES ('47902065D', '81dc9bdb52d04dc20036dbd8313ed055', 1, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');

INSERT INTO alumnos VALUES ('47902065A', '81dc9bdb52d04dc20036dbd8313ed055', 2, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635', false);
INSERT INTO alumnos VALUES ('47902065E', '81dc9bdb52d04dc20036dbd8313ed055', 2, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635', true);
INSERT INTO alumnos VALUES ('47902065F', '81dc9bdb52d04dc20036dbd8313ed055', 2, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635', false);

INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-02', 'Puerto', 'Adulto - Iniciacion', '47902065B', 'red');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Adulto - Iniciacion', '47902065B', 'red');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Infantil - Iniciacion', '47902065C', 'purple');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Infantil - Medio', '47902065C', 'purple');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Adulto - Medio', '47902065D', 'orange');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Particular', '47902065D', 'green');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Intensivo', '47902065C', 'blue');

INSERT INTO tipoClases VALUES ('Adulto', 'Mejor tu patinaje y diviértete. Orientando a alumnos que saben patinar y quieren aprender más técnicas y habilidades.

Si has realizado un curso intensivo en nuestra escuela puedes acceder a nuestras clases, desde mitad de Septiembre a Julio.

Si tienes alguna duda sobre tu nivel u horarios, contacta con nosotros.');

INSERT INTO horarios VALUES (1, '47902065A', false);
INSERT INTO horarios VALUES (2, '47902065A', false);


