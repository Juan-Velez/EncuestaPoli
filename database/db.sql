--Creating database
CREATE DATABASE crudcovid;

--Using database
USE crudcovid;

--Creating table Empleados
CREATE TABLE Asociados (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    tipo_identifiacion VARCHAR(50) NOT NULL,
    identificacion VARCHAR(15) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    tipo_asociado VARCHAR(50) NOT NULL,
    tipo_vacuna VARCHAR(50) NOT NULL,
    eps VARCHAR(50)
);

--Creating table Areas
CREATE TABLE Vacunas(
    idVacuna INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_vacuna VARCHAR(50) NOT NULL
);

SHOW TABLES;

--Describe tables
DESCRIBE Empleados;
DESCRIBE Vacunas;


--Eliminate database
DROP DATABASE crudcovid;

--Eliminate tables
DROP TABLE Asociados;
DROP TABLE Vacunas;
