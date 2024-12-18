import express from 'express';
import dataBase from './config/baseDatos';
import rutas from './router';  

async function conexionDB() {
    try {
        await dataBase.authenticate()
        await dataBase.sync()
        console.log('conexion existosa db');
    } catch (error) {
        console.log(error, "error de BASEDATA");
    }
}
conexionDB()

const app = express();

app.use(express.json())
app.use('/games', rutas)
export default app