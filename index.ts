import { MongoClient, ObjectId } from "mongodb";

const uriDB = 'mongodb://127.0.0.1:27017';
const connection = new MongoClient(uriDB);
const dbName = 'biblioteca';

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

        const database = connection.db(dbName);
        const collection = database.collection<Libro>('libros');  
        
        
        const argumentos = process.argv.slice(2);
        const accion = argumentos[0]
        

        if (accion) {
            accion.toLowerCase();
        }
        
        switch (accion) {
            case 'crear':{
                const titulo = argumentos[1];
                const autor = argumentos[2];
                const precio = parseFloat(argumentos[3]?? "0");
                const stock = parseInt(argumentos[4]?? "0", 10);
                if (!titulo || !autor || isNaN(precio) || isNaN(stock)) {
                    console.error("Error: Faltan argumentos o son inválidos. Uso: create <titulo> <autor> <precio> <stock>");
                    break;
                }
                const database = connection.db(dbName);
                const collection = database.collection<Libro>('libros');

               
                const resultado = await collection.insertOne({ titulo, autor, precio, stock });
                console.log(`Libro creado con éxito con el ID: ${resultado.insertedId}`);
                break;
            } 
            case 'leer': {
                const libros = await connection.db(dbName).collection<Libro>('libros').find().toArray();
                console.log('Libros en la base de datos:');

                console.log(libros);
                break; 
            }
            case 'actualizar': {
                const id = argumentos[1] ;
                const titulo = argumentos[2] as string;
                const autor = argumentos[3] as string;
                const precio = parseFloat(argumentos[4] ?? "0");
                const stock = parseInt(argumentos[5] ?? "0", 10);

                if (!id || !ObjectId.isValid(id) || !titulo || !autor || isNaN(precio) || isNaN(stock) ) {
                    console.error("Error: Argumentos inválidos. Uso: update <ID> <titulo> <autor> <precio> <stock>");
                    break;
                }

                const result = await collection.findOneAndUpdate(
                    { _id: new ObjectId(id) },
                    { $set: { titulo, autor, precio, stock } },
                    { returnDocument: 'after' } 
                );

                if (result) {
                    console.log("✏️ Libro actualizado:");
                    console.log(result);
                } else {
                    console.log("No se encontró ningún libro con ese ID");
                }
                break;
            }
            case 'eliminar': {
                const id = argumentos[1];
                if (!id || !ObjectId.isValid(id)) {
                    console.error("Error: ID inválido. Uso: delete <ID>");
                    break;
                }
                const result = await collection.deleteOne({ _id: new ObjectId(id) });
                if (result) {
                    console.log("Libro eliminado: ",result );
                } else {
                    console.log("No se encontró ningún libro con ese ID");
                }
                break;
            }


        }
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}
main();