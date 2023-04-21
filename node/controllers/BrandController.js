import { Brand } from "../models/Models.js";

// Traer todos los registros
export async function getAllBrands(req, res) {
    try {
        const brands = await Brand.findAll()

        res.json(brands)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un registro
export async function getBrand (req, res) {
    try {
        const brand = await Brand.findAll({
            where: { id: req.params.id }
        })
        res.json(brand[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createBrand (req, res) {  
    Brand.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al crear la marca."
      });
    });
}

// Actualizar un registro
export async function updateBrand (req, res) {
    try {
        await Brand.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Marca actualizada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export async function deleteBrand (req, res) {
    try {
        await Brand.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Marca eliminada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}