import Product from "../models/Product.js";

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
    try {
        let product = {
            name: req.body.name ?? "",
            description: req.body.description ?? "",
            price: req.body.price ?? "",
            brand: req.body.brand ?? "",
            stock: req.body.stock ?? "",
            category: req.body.category ?? "",
            sub_category: req.body.sub_category ?? "",
            gender: req.body.gender ?? "",
            is_novelty: req.body.is_novelty ?? false,
            color: req.body.color ?? "",
            type: req.body.type ?? "",
            img_url: req.body.img_url ?? "",
            active: req.body.active ?? false
        } 

        await Product.create(product)
        res.json({
            'message': '¡Producto creado correctamente!',
            'data': 'Hola'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
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
