import { Brand } from "../models/Models.js";

// Traer todos los registros
export async function getAllBrands(req, res) {
    try {
        const brands = await Brand.findAll();

        // Verificar si la tabla está vacía y crear un registro por defecto
        if (brands.length === 0) {
            await Brand.create({ id: 1, name: "SIN MARCA" });
        }

        const updatedBrands = await Brand.findAll();
        res.json(updatedBrands);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
export async function createBrand(req, res) {
    try {
      const brand = await Brand.create(req.body);
      res.json(brand);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Ha ocurrido un error al crear la marca.",
      });
    }
}

// Actualizar un registro
export async function updateBrand(req, res) {
    try {
      const [rowsAffected] = await Brand.update(req.body, {
        where: { id: req.params.id },
      });
  
      if (rowsAffected === 0) {
        res.status(404).json({ message: "No se encontró la marca para actualizar." });
      } else {
        res.json({ message: "¡Marca actualizada correctamente!" });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message || "Ha ocurrido un error al actualizar la marca.",
      });
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