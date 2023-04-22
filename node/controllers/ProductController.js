import { Product } from "../models/Models.js";
import { Image } from "../models/Models.js";
import multer, { diskStorage } from "multer";
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/storage'),
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
}).single('image')

// Traer todos los registros
export async function getAllProducts(req, res) {    
    try {
        const productos = await Product.findAll()
        const images = await Image.findAll()
        images.forEach(image => {
            fs.writeFileSync(path.join(__dirname, `../public/storage/dbimages/${image.name}`), image.data)
        })
        res.json(productos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un registro
export async function getProduct (req, res) {
    try {
        const producto = await Product.findAll({
            where: { id: req.params.id }
        })
        res.json(producto[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createProduct (req, res, next) {  
    upload(req, res, next)

    res.json('Hola')


    // Product.create(req.body)
    // .then(data => {
    //     res.json(data)
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Ha ocurrido un error al crear producto."
    //   });
    // });
}

// Actualizar un registro
export async function updateProduct (req, res) {
    try {
        await Product.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Producto actualizado correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export async function deleteProduct (req, res) {
    try {
        await Product.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Producto eliminado correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
