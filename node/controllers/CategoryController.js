import { Category } from "../models/Models.js";

// Traer todos los registros
export async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll()

        res.json(categories)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un registro
export async function getCategory (req, res) {
    try {
        const category = await Category.findAll({
            where: { id: req.params.id }
        })
        res.json(Category[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createCategory (req, res) {  
    Category.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al crear la categoria."
      });
    });
}

// Actualizar un registro
export async function updateCategory (req, res) {
    try {
        await Category.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Categoria actualizada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export async function deleteCategory (req, res) {
    try {
        await Category.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Categoria eliminada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}