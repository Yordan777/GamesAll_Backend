import express from 'express';
import dataBase from './config/baseDatos';

async function conexionDB() {
    await dataBase.authenticate()
    await dataBase.sync()
    console.log('conexion existosa db');
}

conexionDB()

const app = express();
//enviar datos
app.use(express.json())

export default app