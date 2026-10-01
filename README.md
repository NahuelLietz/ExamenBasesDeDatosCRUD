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
 ```bash
    npm install


**Crear un libro:**
```bash
node index.ts crear "El Principito" "Antoine de Saint-Exupéry" 15000 10
```

**Mostrar todos los libros:**
```bash
node index.ts leer
```

**Actualizar un libro:**
```bash
node index.ts actualizar <ID_DEL_LIBRO> "Nuevo Título" "Nuevo Autor" 18000 15
```

**Eliminar un libro por ID:**
```bash
node index.ts eliminar <ID_DEL_LIBRO>
```