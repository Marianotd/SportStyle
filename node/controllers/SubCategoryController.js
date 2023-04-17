import { SubCategory } from "../models/Models.js";

// Traer todos los registros
export async function getAllSubCategories(req, res) {
    try {
        const subCategories = await SubCategory.findAll()

        res.json(subCategories)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un registro
export async function getSubCategory (req, res) {
    try {
        const subcategory = await SubCategory.findAll({
            where: { id: req.params.id }
        })
        res.json(subcategory[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createSubCategory (req, res) {  
    SubCategory.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al crear la sub categoria."
      });
    });
}

// Actualizar un registro
export async function updateSubCategory (req, res) {
    try {
        await SubCategory.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Sub categoria actualizada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export async function deleteSubCategory (req, res) {
    try {
        await SubCategory.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Sub categoria eliminada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}