--Creating database
CREATE DATABASE crudcovid;

--Using database
USE crudcovid;

--Creating table Asociados
CREATE TABLE Asociados (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    tipo_identificacion VARCHAR(50) NOT NULL,
    identificacion VARCHAR(15) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    tipo_asociado VARCHAR(50) NOT NULL,
    tipo_vacuna VARCHAR(50) NOT NULL,
    eps VARCHAR(50)
);

--Creating table Vacunas
CREATE TABLE Vacunas (
    id_vacuna INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_vacuna VARCHAR(50) NOT NULL
);

SHOW TABLES;

--Describe tables
DESCRIBE Asociados;
DESCRIBE Vacunas;

--Eliminate database
DROP DATABASE crudcovid;

--Eliminate tables
DROP TABLE Asociados;
DROP TABLE Vacunas;