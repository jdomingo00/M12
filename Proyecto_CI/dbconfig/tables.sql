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
	verificado  boolean,
    UNIQUE(userName)
);

CREATE TABLE admins (
    PRIMARY KEY(userName)
) INHERITS (usuarios);

CREATE TABLE profesores (
    nombre      varchar(15),
    apellidos    varchar(50),
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
    dia         date,
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

INSERT INTO admins VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055', 0, true);

INSERT INTO profesores VALUES ('47902065B', '81dc9bdb52d04dc20036dbd8313ed055', 1, true, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');
INSERT INTO profesores VALUES ('47902065C', '81dc9bdb52d04dc20036dbd8313ed055', 1, true, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');
INSERT INTO profesores VALUES ('47902065D', '81dc9bdb52d04dc20036dbd8313ed055', 1, true, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');

INSERT INTO alumnos VALUES ('47902065A', '81dc9bdb52d04dc20036dbd8313ed055', 2, false, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');
INSERT INTO alumnos VALUES ('47902065E', '81dc9bdb52d04dc20036dbd8313ed055', 2, true, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');
INSERT INTO alumnos VALUES ('47902065F', '81dc9bdb52d04dc20036dbd8313ed055', 2, false, 'Julia', 'Domingo Garcia', 'garciadomingojulia@gmail.com', '660602635');

INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-02', 'Puerto', 'Adulto - Iniciacion', '47902065B', 'red');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Adulto - Iniciacion', '47902065B', 'red');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Infantil - Iniciacion', '47902065C', 'purple');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Infantil - Medio', '47902065C', 'purple');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Adulto - Medio', '47902065D', 'orange');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Particular', '47902065D', 'green');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-03', 'Puerto', 'Intensivo', '47902065C', 'blue');
INSERT INTO clases VALUES (DEFAULT, '19:00:00', '2020-06-11', 'Puerto', 'Intensivo', '47902065C', 'blue');
INSERT INTO clases VALUES (DEFAULT, '00:01:00', '2020-06-10', 'Puerto', 'Intensivo', '47902065C', 'blue');

INSERT INTO tipoClases VALUES ('Intensivo', 'Desde hace 10 años impartimos cursos intensivos para aprender a patinar de una forma SEGURA, FÁCIL y DIVERTIDA. Para adultos y para niños, da igual que edad tengas si estás comprendido entre 4 y 90 años. 

Tenemos alumnos de todas las edades. Estos cursos están enfocados para que puedas disfrutar del patinaje y utilizar tus patines sin miedo.

Después del curso intensivo puedes acceder a nuestros cursos MENSUALES. Y seguir aprendiendo más trucos y técnicas.Empezamos desde cómo ponernos las protecciones y los patines, y sólo en la primera sesión aprenderás a frenar de TRES formas diferentes y a patinar con seguridad. 
Sobre todo te enseñaremos qué hay que hacer para NO CAER.');

INSERT INTO tipoClases VALUES ('Adultos', 'Mejor tu patinaje y diviértete. Orientando a alumnos que saben patinar y quieren aprender más técnicas y habilidades.

Si has realizado un curso intensivo en nuestra escuela puedes acceder a nuestras clases, desde mitad de Septiembre a Julio.

Si tienes alguna duda sobre tu nivel u horarios, contacta con nosotros.');

INSERT INTO tipoClases VALUES ('Infantil', 'Escuela de Patinaje Valencia junto con el Club de Velocidad Paiporta organizan clases para niños desde Octubre hasta Junio.
Dentro del mismo horario se separarán a los alumnos por niveles. Pueden empezar a patinar desde los 4 años.

Puedes apuntarte aunque ya hayamos empezado el curso.

Tenemos grupos de patinaje en familia los viernes, sábados y domingos.');

INSERT INTO tipoClases VALUES ('Particulares', 'En la Escuela ofrecemos clases particulares a tu medida, tanto si tienes nivel de patinaje como si quieres empezar desde cero.
Nos amoldamos a tus necesidades. En horario de mañana, mediodía y tarde, también fines de semana.
Y desplazándonos si tienes localizada una zona lisa, limpia y grande.

Te garantizamos una mejora notable de tu nivel de patinaje. Sólo en una hora podemos enseñarte tres formas de frenar y controlar tus patines, es lo que más nos piden nuestros alumnos.

Nuestros alumnos están cubiertos por un seguro médico que cubrirá tus gastos médicos derivados de cualquier lesión que se pudiera producir.');

INSERT INTO horarios VALUES (1, '47902065A', false);
INSERT INTO horarios VALUES (2, '47902065A', false);
INSERT INTO horarios VALUES (2, '47902065E', false);
INSERT INTO horarios VALUES (9, '47902065E', false);
INSERT INTO horarios VALUES (2, '47902065F', false);


