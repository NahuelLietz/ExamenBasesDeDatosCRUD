# ExamenBasesDeDatosCRUD
Trabajo practico 1 para la diplamatura BackEnd UTN 
Biblioteca CRUD - MongoDB & TypeScript

Aplicación de consola desarrollada en Node.js y TypeScript para administrar un inventario de libros mediante operaciones CRUD conectadas directamente a una base de datos MongoDB local.

##  Requisitos 

Para ejecutar este proyecto, necesitás tener instalado:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) ejecutándose localmente en el puerto por defecto (`27017`).

##  Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/NahuelLietz/ExamenBasesDeDatosCRUD.git

2. Instalar bibliotecas
    npm install

3. Uso:
    Crear un libro:
    node index.ts crear <Nombre> <Autor> <Precio> <Stock>
    Mostrar todos los libros:
    node index.ts leer <ID>
    Actualizar un libro:
    node index.ts actualizar  <ID> <Nombre> <Autor> <Precio> <Stock>
    Eliminar un libro por ID:
    node index.ts eliminar <ID>