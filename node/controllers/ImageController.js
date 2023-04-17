import { Image } from "../models/Models.js";
import multer from "multer";
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs';

// File upload
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/storage/products'),
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage: storage }).single('img')

// Traer todos los registros
export async function getAllImages(req, res) {
    try {
        const images = await Image.findAll()
        images.forEach(image => {
            fs.writeFileSync(path.join(__dirname, `../public/storage/dbimages/${image.name}`), image.data)
        })

        res.json(images)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un registro
export async function getImage (req, res) {
    try {
        const image = await Image.findAll({
            where: { id: req.params.id }
        })
        res.json(image[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createImage (req, res) {  
    // upload()
    Image.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al crear la imagen."
      });
    });
}

// Actualizar un registro
export async function updateImage (req, res) {
    try {
        await Image.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Imagen actualizada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export async function deleteImage (req, res) {
    try {
        await Image.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Imagen eliminada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}