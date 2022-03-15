-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 20-12-2021 a las 11:20:55
-- Versión del servidor: 5.7.28
-- Versión de PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `InfoJobs2`
--

CREATE DATABASE IF NOT EXISTS InfoJobs2;
use InfoJobs2;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Empresas`
--

CREATE TABLE `Empresas` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `Sector` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Url_Web` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Correo` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Persona_contacto` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Correo_contacto` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `CIF` varchar(9) COLLATE utf8_spanish2_ci NOT NULL,
  `Logo` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `Empresas`
--

INSERT INTO `Empresas` (`Id`, `Nombre`, `Descripcion`, `Sector`, `Url_Web`, `Correo`, `Persona_contacto`, `Correo_contacto`, `CIF`, `Logo`) VALUES
(1, 'Empresa1', 'asdasd', 'asdas', 'asdasd', 'asasd', 'asdasd', 'asdasd', 'asdasd', 'asdas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Ofertas`
--

CREATE TABLE `Ofertas` (
  `Id` int(11) NOT NULL,
  `Titulo` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Ubicacion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Requisitos` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Salario` int(11) NOT NULL,
  `Duracion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `IdEmpresa` int(11) NOT NULL,
  `FechaCaducidad` date NOT NULL,
  `EstaActiva` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `Ofertas`
--

INSERT INTO `Ofertas` (`Id`, `Titulo`, `Descripcion`, `Ubicacion`, `Requisitos`, `Salario`, `Duracion`, `IdEmpresa`, `FechaCaducidad`, `EstaActiva`) VALUES
(1, 'PRUEBA 1', 'asdasd', 'asdasd', 'asdasd', 1000, 'asda', 1, '2021-12-14', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Empresas`
--
ALTER TABLE `Empresas`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `Ofertas`
--
ALTER TABLE `Ofertas`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `ForeignKey1` (`IdEmpresa`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Empresas`
--
ALTER TABLE `Empresas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Ofertas`
--
ALTER TABLE `Ofertas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Ofertas`
--
ALTER TABLE `Ofertas`
  ADD CONSTRAINT `ForeignKey1` FOREIGN KEY (`IdEmpresa`) REFERENCES `Empresas` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
