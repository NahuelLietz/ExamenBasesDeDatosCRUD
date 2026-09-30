import { MongoClient, ObjectId } from "mongodb";

const uriDB = 'mongodb://127.0.0.1:27017';
const connection = new MongoClient(uriDB);
const db = 'biblioteca';

interface Libro {
    titulo: string;
    autor: string;
    precio: number;
    stock: number;
}
async function main() {
    try {
        await connection.connect();
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}
main();