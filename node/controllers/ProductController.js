import { Product } from "../models/Models.js";

// Traer todos los registros
export async function getAllProducts(req, res) {
    try {
        const productos = await Product.findAll()
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
export async function createProduct (req, res) {  
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
