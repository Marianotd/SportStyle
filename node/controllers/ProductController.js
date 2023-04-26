import { Product } from "../models/Models.js";
import { Image } from "../models/Models.js";
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Traer todos los registros
export async function getAllProducts(req, res) {    
    try {
        const productos = await Product.findAll()
        const images = await Image.findAll()
        images.forEach(image => {
            fs.writeFileSync(path.join(__dirname, `../public/storage/${image.dataValues.name}`), image.dataValues.data)
        })
        res.json(productos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un registro
export async function getProduct (req, res) {
    try {
        const image = await Image.findOne({where: { id: req.params.id }})
        fs.writeFileSync(path.join(__dirname, `../public/storage/${image.dataValues.name}`), image.dataValues.data)

        const producto = await Product.findOne({where: { id: req.params.id } })
        console.log(producto)
        res.json(producto)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createProduct (req, res, next) { 
    Image.create(req.body.image)
    .then( image => {
        req.body.id_image = image.dataValues.id
        console.log(image.dataValues.id)
        delete req.body.image

        Product.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
        res.status(500).send({
                message:
                err.message || "Ha ocurrido un error al crear producto."
            });
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Ha ocurrido un error al crear imagen."
        });
    });
    Product.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
    res.status(500).send({
            message:
            err.message || "Ha ocurrido un error al crear producto."
        });
    });
}

// Actualizar un registro
export async function updateProduct (req, res) {
    if(req.file){
        Image.create(req.body.image)
        .then( image => {
            req.body.id_image = image.dataValues.id
            delete req.body.image

            Product.update(req.body, {
                where: { id: req.params.id }
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Ha ocurrido un error al crear producto."
                });
            });
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Ha ocurrido un error al crear imagen."
            });
        });  
    } else {       
        Product.update(req.body, {
            where: { id: req.params.id }
        })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Ha ocurrido un error al crear producto."
            });
        });
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
