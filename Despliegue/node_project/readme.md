# PROYECTO NODE
Se pretende elaborar una API REST con NODE.js y Express.js

## Paso 1: Desarrollo
El primer paso es construir la API rest. Para ello debemos:
1. Crear la base de datos en local: ```CREATE DATABASE USERS; ``` y ejecutar las sentencias del fichero users.sql
2. Crear un nuevo proyecto NODE: ```npm init```
3. Instalar express: ```npm install express``` y otras dependencias como prisma o express-validator(quedan reflejadas en el package.json)
4. Crear los siguientes endpoints:
    * ```GET /users``` Devuelve todos los usuarios
    * ```GET /users/:id``` Devuelve tun usuario concreto
    * ```POST /users``` Crea un nuevo usuario
    * ```PATCH /users/:id``` Modifica un usuario
    * ```DELETE /users/:id``` Elimina un usuario

## Paso 2: Crear el Dockerfile y el .dockerignore
1. En el dockerfile llevaremos a cabo las acciones necesarias para que al generar la imagen se cree un directorio de trabajo, se instalen las dependencias, se copien los ficheros de la API y se ejecute el fichero index.js
2. Creamos el .dockerignore en el que introduciremos los ficheros que no son necesarios en producción

## Paso 3: Crear el fichero docker-compose.yml
Necesitaremos levantar 2 servicios:
1. Servicio de la base de datos mysql
2. Servicio de la API REST

## Paso 4: Copiar el proyecto desde el anfitrión al server
1. Crear directorio en el que lo vamos a crear en el servidor: ```mkdir node_project```
2. Copiar el directorio del anfitrión al servidor con WinSCP
3. Entrar en el directorio que hemos copiado

## PASO 5: Levantar el proyecto
Para ello ejecutaremos el comando ```docker compose up -d```

## Evidencias
