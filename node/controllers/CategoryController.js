import { Category } from "../models/Models.js";

// Traer todos los registros
export async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll();

        // Verificar si la tabla está vacía y crear un registro por defecto
        if (categories.length === 0) {
            await Category.create({ id: 1, name: "SIN CATEGORIA" });
        }

        const updatecategories = await Category.findAll();
        res.json(updatecategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Traer un registro
export async function getCategory(req, res) {
    try {
        const category = await Category.findAll({
            where: { id: req.params.id }
        })
        res.json(category[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export async function createCategory(req, res) {
    try {
      const category = await Category.create(req.body);
      res.json(category);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Ha ocurrido un error al crear la categoria.",
      });
    }
}

// Actualizar un registro
export async function updateCategory(req, res) {
    try {
      const [rowsAffected] = await Category.update(req.body, {
        where: { id: req.params.id },
      });
  
      if (rowsAffected === 0) {
        res.status(404).json({ message: "No se encontró la categoria para actualizar." });
      } else {
        res.json({ message: "¡Categoria actualizada correctamente!" });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message || "Ha ocurrido un error al actualizar la categoria.",
      });
    }
}

// Eliminar un registro
export async function deleteCategory(req, res) {
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