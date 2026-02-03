CREATE DATABASE citas;

INSERT INTO clientes (nombre, email, telefono, activo, created_at, updated_at) VALUES
('Laura Fernández', 'laura.fernandez@example.com', '612345678', 1, NOW(), NOW()),
('Carlos Gómez', 'carlos.gomez@example.com', '622334455', 1, NOW(), NOW()),
('María López', 'maria.lopez@example.com', NULL, 1, NOW(), NOW()),
('Javier Martín', 'javier.martin@example.com', '699112233', 0, NOW(), NOW()),
('Ana Ruiz', 'ana.ruiz@example.com', '634556677', 1, NOW(), NOW()),
('Pedro Sánchez', 'pedro.sanchez@example.com', NULL, 1, NOW(), NOW()),
('Lucía Navarro', 'lucia.navarro@example.com', '678998877', 0, NOW(), NOW()),
('Miguel Torres', 'miguel.torres@example.com', '611223344', 1, NOW(), NOW()),
('Sara Iglesias', 'sara.iglesias@example.com', NULL, 1, NOW(), NOW()),
('David Romero', 'david.romero@example.com', '645778899', 1, NOW(), NOW());

INSERT INTO servicios (nombre, duracion_minutos, precio, activo, created_at, updated_at) VALUES
('Corte de pelo', 30, 15.00, 1, NOW(), NOW()),
('Coloración', 90, 45.00, 1, NOW(), NOW()),
('Peinado', 45, 20.00, 1, NOW(), NOW()),
('Manicura', 40, 18.00, 1, NOW(), NOW()),
('Pedicura', 50, 22.00, 1, NOW(), NOW()),
('Masaje relajante', 60, 35.00, 1, NOW(), NOW()),
('Depilación cera', 30, 12.00, 1, NOW(), NOW()),
('Tratamiento facial', 75, 50.00, 1, NOW(), NOW());

INSERT INTO citas (user_id, cliente_id, servicio_id, fecha, hora, estado, notas, created_at, updated_at) VALUES
(1, 3, 2, '2026-02-26', '10:00:00', 'activa', 'Primera sesión', NOW(), NOW()),
(2, 7, 6, '2026-02-27', '11:30:00', 'activa', NULL, NOW(), NOW()),
(1, 1, 1, '2026-02-28', '09:15:00', 'cancelada', 'Cancelada por el cliente', NOW(), NOW()),
(2, 4, 3, '2026-03-01', '14:00:00', 'activa', 'Cliente nuevo', NOW(), NOW()),
(1, 6, 6, '2026-03-02', '16:45:00', 'activa', NULL, NOW(), NOW()),
(2, 2, 4, '2026-03-03', '13:00:00', 'cancelada', 'Reprogramar para la próxima semana', NOW(), NOW()),
(1, 9, 7, '2026-03-04', '12:00:00', 'activa', 'Revisión técnica', NOW(), NOW()),
(2, 5, 8, '2026-03-05', '15:30:00', 'activa', NULL, NOW(), NOW()),
(1, 8, 2, '2026-03-06', '10:30:00', 'activa', 'Cliente puntual', NOW(), NOW()),
(2, 10, 1, '2026-03-07', '17:00:00', 'cancelada', 'Cancelada por motivos personales', NOW(), NOW());


