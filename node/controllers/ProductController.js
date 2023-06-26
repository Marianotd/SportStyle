import { Product, Image } from "../models/Models.js";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Traer todos los registros
export async function getAllProducts(req, res) {
  try {
    const productos = await Product.findAll();
    const images = await Image.findAll();

    const writePromises = images.map((image) => {
      const filePath = path.join(__dirname, `../public/storage/${image.dataValues.name}`);
      return fs.promises.writeFile(filePath, image.dataValues.data);
    });

    await Promise.all(writePromises);

    const productosWithImages = productos.map((producto) => {
      const image = images.find((img) => img.id === producto.id_image);
      const imageName = image ? image.dataValues.name : null;
      return {
        ...producto.dataValues,
        image: imageName,
      };
    });

    // Eliminar el campo id_image de cada producto
    const productosWithoutIdImage = productosWithImages.map((producto) => {
      delete producto.id_image;
      return producto;
    });

    res.json(productosWithoutIdImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Traer un registro
export async function getProduct(req, res) {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });
    const image = await Image.findOne({ where: { id: product.id_image } });

    if (image) {
      const imagePath = path.join(__dirname, `../public/storage/${image.dataValues.name}`);
      fs.writeFileSync(imagePath, image.dataValues.data);
      product.dataValues.image = image.dataValues.name;
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear un registro
export async function createProduct(req, res, next) {
  try {
    const image = await Image.create({name: req.file.originalname, type: req.file.mimetype, data: req.file});
    req.body.id_image = image.dataValues.id;
    delete req.body.image;

    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Ha ocurrido un error al crear el producto.",
    });
  }
}

// Actualizar un registro
export async function updateProduct(req, res) {
  try {
    if (req.file) {
      // Verificar si ya existe una imagen con el mismo nombre
      const existingImage = await Image.findOne({
        where: { name: req.file.originalname },
      });

      if (existingImage) {
        req.body.id_image = existingImage.id;
      } else {
        // Crear una nueva imagen si no existe
        const image = await Image.create({
          name: req.file.originalname,
          type: req.file.mimetype,
          data: req.file,
        });
        req.body.id_image = image.dataValues.id;
      }

      delete req.body.image;
    }

    const product = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Ha ocurrido un error al actualizar el producto.",
    });
  }
}

// Eliminar un registro
export async function deleteProduct(req, res) {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });

    if (product) {
      const image = await Image.findOne({ where: { id: product.id_image } });

      await product.destroy(); // Eliminar el producto

      if (image) {
        const imagePath = path.join(__dirname, `../public/storage/${image.dataValues.name}`);

        // Verificar si el archivo de imagen existe antes de intentar eliminarlo
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath); // Eliminar la imagen de la carpeta local
        }

        await image.destroy(); // Eliminar la imagen de la tabla Image
      }
    }

    res.json({ message: "El producto ha sido eliminado correctamente." });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Ha ocurrido un error al eliminar el producto.",
    });
  }
}
