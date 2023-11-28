-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2023 a las 11:30:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vueling`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciutats`
--

CREATE TABLE `ciutats` (
  `id` int(11) NOT NULL,
  `nomCiutat` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciutats`
--

INSERT INTO `ciutats` (`id`, `nomCiutat`) VALUES
(1, 'Barcelona'),
(2, 'Madrid'),
(3, 'Valencia'),
(4, 'Sevilla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Cognoms` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `DNI_complet` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `Nom`, `Cognoms`, `email`, `password`, `DNI_complet`) VALUES
(1, 'Juan', 'Apellido', 'juan@gmail.com', '1234', '53001373N'),
(2, 'María', 'Apellido', 'maria@gmail.com', '123456', '42720478W'),
(3, 'Pedro', 'Apellido', 'pedro@gmail.com', '1234567', '10264046C');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciutats`
--
ALTER TABLE `ciutats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciutats`
--
ALTER TABLE `ciutats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
