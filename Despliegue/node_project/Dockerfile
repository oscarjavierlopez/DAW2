# Utilizar una imagen base de Node.js
FROM node

# Crear un directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install

#Copiar código fuente de la app
COPY . .

#Generar Prisma Client
RUN npx prisma generate

# Exponer el puerto de la aplicación(dentro del contenedor)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/index.js"]