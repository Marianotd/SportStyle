import express from "express";
import cors from "cors";
import db from "./database/db.js";
import Routes from './routes/routes.js'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', Routes)
app.use(express.static(path.join(__dirname, '/public/')))

try {
    await db.authenticate()
    console.log('Conexión exitosa a la base de datos')
} catch (error) {
    console.log(`Error de conexión a la base de datos: ${error}`)
}

app.listen(8000, () => {
    console.log('Server running in http://localhost:8000/')
})