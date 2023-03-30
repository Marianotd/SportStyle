import express from "express";
import cors from "cors";
import db from "./database/db.js";
import ProductRoutes from './routes/routes.js'
import fileUpload from "express-fileupload";

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload());
app.use('/Productos', ProductRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la base de datos')
} catch (error) {
    console.log(`Error de conexión a la base de datos: ${error}`)
}

app.listen(8000, () => {
    console.log('Server running in http://localhost:8000/')
})