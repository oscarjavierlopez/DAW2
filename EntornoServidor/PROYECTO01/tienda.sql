CREATE DATABASE tienda;


USE tienda;
CREATE TABLE restaurantes(
	codRestaurante INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    clave VARCHAR(100) NOT NULL,
    direccionPostal VARCHAR(100) NOT NULL
);

CREATE TABLE categorias(
	codCategoria INT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    descripcion VARCHAR(150)
);

CREATE TABLE productos(
	codProducto INT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    descripcion VARCHAR(150),
    precio DOUBLE NOT NULL,
    stock INT NOT NULL,
    codCategoria INT NOT NULL,
    FOREIGN KEY(codCategoria) REFERENCES categorias(codCategoria)
);

CREATE TABLE pedidos(
    codPedido INT PRIMARY KEY AUTO_INCREMENT,
	codRestaurante INT NOT NULL,
    fechaPedido DATE NOT NULL,
    precioTotalPedido DOUBLE NOT NULL,
    estado VARCHAR(50) DEFAULT 'no enviado',
    FOREIGN KEY(codRestaurante) REFERENCES restaurantes(codRestaurante)
);
CREATE TABLE pedidosProductos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    codPedido INT NOT NULL,
    codProducto INT NOT NULL,
    precioProducto DOUBLE NOT NULL,
    udsProducto INT NOT NULL,
    FOREIGN KEY(codPedido) REFERENCES pedidos(codPedido),
    FOREIGN KEY(codProducto) REFERENCES productos(codProducto)
);


INSERT INTO restaurantes VALUES (1, 'info@pizzaloca.com', '$2y$10$fWBdURwro71Mm9xd88wbP.K/Q4ckVLUIcgbzgzbqPYOCPTziUSHnG', 'Calle Mayor 12, Madrid');
INSERT INTO restaurantes VALUES (2, 'contacto@tacotime.es', '$2y$10$fWBdURwro71Mm9xd88wbP.K/Q4ckVLUIcgbzgzbqPYOCPTziUSHnG', 'Av. Andalucía 45, Sevilla');
INSERT INTO restaurantes VALUES (3, 'hola@sushiplus.com', '$2y$10$fWBdURwro71Mm9xd88wbP.K/Q4ckVLUIcgbzgzbqPYOCPTziUSHnG', 'Calle Japón 8, Barcelona');
INSERT INTO restaurantes VALUES (4, 'reservas@burgerkingdom.com', '$2y$10$fWBdURwro71Mm9xd88wbP.K/Q4ckVLUIcgbzgzbqPYOCPTziUSHnG', 'Plaza Central 3, Valencia');
INSERT INTO restaurantes VALUES (5, 'admin@veganvibes.es', '$2y$10$fWBdURwro71Mm9xd88wbP.K/Q4ckVLUIcgbzgzbqPYOCPTziUSHnG', 'Calle Verde 22, Bilbao');

INSERT INTO categorias VALUES (1, 'Lácteos', 'Productos derivados de la leche como yogures, quesos y mantequilla');
INSERT INTO categorias VALUES (2, 'Carnes', 'Carnes frescas y embutidos');
INSERT INTO categorias VALUES (3, 'Frutas y Verduras', 'Productos frescos de origen vegetal');
INSERT INTO categorias VALUES (4, 'Panadería', 'Pan, bollería y productos horneados');
INSERT INTO categorias VALUES (5, 'Bebidas', 'Refrescos, zumos y aguas minerales');

INSERT INTO productos VALUES (101, 'Leche entera 1L', 'Leche pasteurizada de vaca en envase de 1 litro', 1.15, 200, 1);
INSERT INTO productos VALUES (102, 'Yogur natural pack x4', 'Yogur sin azúcar en pack de 4 unidades', 1.80, 150, 1);
INSERT INTO productos VALUES (103, 'Queso curado 250g', 'Queso de oveja curado en porciones', 3.95, 80, 1);
INSERT INTO productos VALUES (104, 'Pollo fresco 1kg', 'Pechuga de pollo sin hueso', 5.20, 100, 2);
INSERT INTO productos VALUES (105, 'Carne picada mixta 500g', 'Mezcla de ternera y cerdo', 3.75, 120, 2);
INSERT INTO productos VALUES (106, 'Chorizo ibérico 250g', 'Chorizo curado de cerdo ibérico', 2.90, 90, 2);
INSERT INTO productos VALUES (107, 'Manzanas rojas 1kg', 'Manzanas variedad Fuji', 2.50, 100, 3);
INSERT INTO productos VALUES (108, 'Zanahorias 1kg', 'Zanahorias frescas en bolsa', 1.10, 130, 3);
INSERT INTO productos VALUES (109, 'Plátanos 1kg', 'Plátanos de Canarias', 2.20, 110, 3);
INSERT INTO productos VALUES (110, 'Pan integral 500g', 'Pan de trigo integral con semillas', 1.90, 80, 4);
INSERT INTO productos VALUES (111, 'Croissants pack x6', 'Croissants de mantequilla horneados', 2.40, 60, 4);
INSERT INTO productos VALUES (112, 'Pan de molde blanco', 'Pan de molde sin corteza', 1.75, 100, 4);
INSERT INTO productos VALUES (113, 'Zumo de naranja 1L', 'Zumo 100% exprimido sin azúcares añadidos', 1.75, 120, 5);
INSERT INTO productos VALUES (114, 'Agua mineral 1.5L', 'Agua natural sin gas', 0.65, 300, 5);
INSERT INTO productos VALUES (115, 'Refresco cola 2L', 'Bebida carbonatada sabor cola', 1.25, 200, 5);


