-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-02-2026 a las 13:28:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `eventos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `imagen` text NOT NULL,
  `id_municipio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `nombre`, `fecha`, `descripcion`, `imagen`, `id_municipio`) VALUES
(1, 'Feria del Libro', '2026-03-15', 'Evento cultural', 'https://www.turismoliterario.com/wp-content/uploads/2019/03/feria-del-libro.jpg', 1),
(2, 'Concierto de Primavera', '2026-04-10', 'Música en vivo', 'https://www.hosteleriamadrid.com/wp-content/uploads/2019/11/MusicaCallejera.jpg', 2),
(3, 'Mercado Medieval', '2026-05-20', 'Mercado temático', 'https://www.valenciaextra.com/uploads/s1/16/92/37/20/mercado-medieval-orihuela-en-una-edicion-anterior_4_1000x563.jpeg', 3),
(4, 'Festival Gastronómico', '2026-06-05', 'Gastronomía local', 'https://www.portforum.com/wp-content/uploads/2025/09/PF_festival_china_1920x1080-2048x1152.jpg', 4),
(5, 'Carrera Popular', '2026-07-01', 'Deporte al aire libre', 'https://www.liceolapaz.com/wp-content/uploads/2018/01/III-Carrera-Matogrande-2.2.1.jpg', 5),
(6, 'Noche de las Velas', '2026-08-12', 'Iluminación nocturna', 'https://sevillasecreta.co/wp-content/uploads/2024/05/Vejer-de-la-Frontera-Noche-de-las-velas-2.jpg', 1),
(7, 'Teatro en la Plaza', '2026-09-18', 'Obra teatral', 'https://www.lavozdemedinadigital.com/wordpress/wp-content/uploads/2024/09/IMG_2418.jpeg', 2),
(8, 'Feria de Artesanía', '2026-10-03', 'Artesanos locales', 'https://ociovalladolid.com/wp-content/uploads/2023/03/20230331_184240-1-800x445.jpg', 3),
(9, 'Concierto de Otoño', '2026-11-11', 'Música clásica', 'https://www.orquestafilarmonia.com/wp-content/uploads/2022/10/Musica-clasica-para-el-disfrute-de-todos-los-publicos-1.jpg', 4),
(10, 'Navidad en la Ciudad', '2026-12-20', 'Actividades navideñas', 'https://www.corbataslester.com/magazine/wp-content/uploads/2018/12/nuremberg.jpg', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos_usuarios`
--

CREATE TABLE `eventos_usuarios` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_evento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`id`, `nombre`) VALUES
(1, 'Valladolid'),
(2, 'Medina del Campo'),
(3, 'Tordesillas'),
(4, 'Laguna de Duero'),
(5, 'Arroyo de la Encomienda');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` enum('administrador','usuario') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`) VALUES
(1, 'administrador'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `id_rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `contrasena`, `id_rol`) VALUES
(1, 'admin1', 'admin123', 1),
(2, 'admin2', 'admin456', 1),
(3, 'usuario1', 'user123', 2),
(4, 'usuario2', 'user456', 2),
(5, 'usuario3', 'user789', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos_usuarios`
--
ALTER TABLE `eventos_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `eventos_usuarios`
--
ALTER TABLE `eventos_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `municipios`
--
ALTER TABLE `municipios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
