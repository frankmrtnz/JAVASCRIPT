CREATE TABLE `Cartelera` (
  `idObra` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `fechaRepresentacion` date NOT NULL,
  `imagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `Cartelera` (`idObra`, `nombre`, `descripcion`, `fechaRepresentacion`, `imagen`) VALUES
(1, 'HAMLET', 'asasdsa', '2021-01-19', 'hamlet.jpg'),
(2, 'Romo y Juliea', 'asdasdasasdsa', '2021-01-29', 'romeo.jpg');
ALTER TABLE `Cartelera`
  ADD PRIMARY KEY (`idObra`);
ALTER TABLE `Cartelera`
  MODIFY `idObra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
