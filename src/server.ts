import express from 'express';
import dataBase from './config/baseDatos';

async function conexionDB() {
    try {
        await dataBase.authenticate()
        await dataBase.sync()
        console.log('conexion existosa db');
    } catch (error) {
        console.log(error, "error de bd");
    }
}

conexionDB()

const app = express();
//enviar datos
app.use(express.json())

export default app