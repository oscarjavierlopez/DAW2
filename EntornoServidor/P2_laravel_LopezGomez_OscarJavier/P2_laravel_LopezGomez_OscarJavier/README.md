# Proyecto 1 Laravel - Lista de chollos

## 1. Descripción:
Este proyecto consiste en el desarrollo de una aplicación web en Laravel para gestionar una lista de chollos organizados por categorías. Forma parte del módulo Desarrollo Web en Entorno Servidor (2º DAW – IES Julián Marías).

La aplicación permite a los usuarios autenticados crear, editar, eliminar y visualizar chollos, así como las categorías asociadas. 

El sistema implementa una relación Uno a Muchos (1:N) entre categorías y chollos, de modo que una categoría puede contener múltiples chollos, pero cada chollo pertenece únicamente a una categoría.

La página web incluye también autenticación mediante laravel breeze.

El objetivo del proyecto es aplicar los conocimientos de Laravel, MVC, Blade, migraciones, controladores, rutas, validación, autenticación y gestión de bases de datos, siguiendo buenas prácticas de desarrollo web.

## 2. Tecnologías utilizadas:
* Laravel 12.46.0
* PHP 8.2.12
* MySQL
* Composer
* Breeze

## 3. Requisitos previos:
* Instalar php
* Instalar composer
* Instalar laravel
* Instalar XAMPP
* Instalar Node.js y npm

## 4. Instrucciones de ejecución:
1. Arrancar en XAMPP los servicios Apache y MySQL
2. Crear la base de datos en PHPMyAdmin: Para ello deberemos ejecutar la primera línea del fichero inserts.sql ```CREATE DATABASE citas;```
3. Ejecutar las migraciones de creación de tablas: Para ello deberemos ejecutar en nuestro proyecto laravel el comando ```php artisan migrate```
4. Insertar datos en las tablas: Para ello ejecutaremos de la línea 3 a la 35 del fichero inserts.sql
5. Levantar el servidor en laravel: Para ello ejecutaremos el comando ```php artisan serve```
6. Abrir la web en el navegador: Para ello copiaremos la URL que nos devolvió el paso anterior en el navegador
7. Presionar el enlace 'registrarse'.
8. Realizar un crud de clientes y servicios para comprobar que se puede insertar, modificar, ver y borrar.
9. Entrar en el enlace 'ver detalles' de los clientes para abrir la página en la que se muestran sus detalles
10. Hacer un CRUD de citas comprobando que se cumplen las reglas de validación(No permitir citas en el pasado y comprobar solapes)
11. cerrar sesión