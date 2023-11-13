-- Conectarse al servidor MySQL (asegúrate de tener los permisos necesarios)
-- Por ejemplo, desde la línea de comandos:
-- mysql -u tu_usuario -p

-- Crear una nueva base de datos llamada "testM06"
CREATE DATABASE IF NOT EXISTS testM06;

-- Usar la base de datos "testM06"
USE testM06;

-- Crear una tabla llamada "users"
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(50) PRIMARY KEY,
    userpass VARCHAR(150)
);
