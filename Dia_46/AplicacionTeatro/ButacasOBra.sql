-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 22-01-2021 a las 10:14:43
-- Versión del servidor: 5.7.28
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `2daw`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ButacasOBra`
--

CREATE TABLE `ButacasOBra` (
  `idObra` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `numeroTotalButacas` int(11) NOT NULL,
  `numeroButacasOcupadas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ButacasOBra`
--

INSERT INTO `ButacasOBra` (`idObra`, `fecha`, `numeroTotalButacas`, `numeroButacasOcupadas`) VALUES
(1, '2022-01-23', 100, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ButacasOBra`
--
ALTER TABLE `ButacasOBra`
  ADD PRIMARY KEY (`idObra`,`fecha`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ButacasOBra`
--
ALTER TABLE `ButacasOBra`
  ADD CONSTRAINT `fkobra` FOREIGN KEY (`idObra`) REFERENCES `Cartelera` (`idObra`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
