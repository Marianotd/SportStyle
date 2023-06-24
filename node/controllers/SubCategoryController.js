import { SubCategory } from "../models/Models.js";

// Traer todos los registros
export async function getAllSubCategories(req, res) {
    try {
        const subcategories = await SubCategory.findAll();

        // Verificar si la tabla está vacía y crear un registro por defecto
        if (subcategories.length === 0) {
            await SubCategory.create({ id: 1, name: "SIN SUBCATEGORIA", id_category: 1 });
        }

        const updatesubcategories = await SubCategory.findAll();
        res.json(updatesubcategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Traer un registro
export async function getSubCategory(req, res) {
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
export async function createSubCategory(req, res) {
    try {
      const subcategory = await SubCategory.create(req.body);
      res.json(subcategory);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Ha ocurrido un error al crear la subcategoria.",
      });
    }
}

// Actualizar un registro
export async function updateSubCategory(req, res) {
    try {
      const [rowsAffected] = await SubCategory.update(req.body, {
        where: { id: req.params.id },
      });
  
      if (rowsAffected === 0) {
        res.status(404).json({ message: "No se encontró la subcategoria para actualizar." });
      } else {
        res.json({ message: "¡SubCategoria actualizada correctamente!" });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message || "Ha ocurrido un error al actualizar la subcategoria.",
      });
    }
}

// Eliminar un registro
export async function deleteSubCategory(req, res) {
    try {
        await SubCategory.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message': '¡Subcategoria eliminada correctamente!'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}