USE login;
CREATE TABLE usuarios(
	 id INT PRIMARY KEY AUTO_INCREMENT,
    nbusuario VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO usuarios (nbusuario, contrasena) VALUES ('juanperez', 'clave123');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('mariagomez', 'segura456');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('carlosruiz', 'pass789');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('lauralopez', 'acceso321');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('andresmartin', 'login654');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('sofiatorres', 'entrada987');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('danielrojas', 'miclave159');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('patriciasanz', 'seguridad753');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('fernandodiaz', 'clave852');
INSERT INTO usuarios (nbusuario, contrasena) VALUES ('veronicamolina', 'contrase123');
