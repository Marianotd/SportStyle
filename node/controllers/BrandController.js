import Brand from "../models/Brand.js";

// Traer todos los registros
export async function getAllBrands(req, res) {
    try {
        const marcas = await Brand.findAll()
        res.json(marcas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Traer un registro
export async function getBrand(req, res) {
    try {
        const marca = await Brand.findAll({
            where: { id: req.params.id }
        })
        res.json(marca[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createBrand(req, res) {  
    Brand.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al crear marca."
      });
    });
}

// Actualizar un registro
export async function updateBrand(req, res) {
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
export async function deleteBrand(req, res) {
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
