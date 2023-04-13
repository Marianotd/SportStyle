import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/ProductController.js";
import { createBrand, deleteBrand, getAllBrands, getBrand, updateBrand } from "../controllers/BrandController.js";
import multer from "multer";
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = express.Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ALMACENAMIENTO IMAGENES
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/storage/products'),
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})


const upload = multer({ storage: storage }).single('img')


// CRUD PRODUCTOS
router.get('/Productos', getAllProducts)
router.get('/Productos/:id', getProduct)
router.post('/Productos', upload, (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, `../public/storage/products/${req.file.filename}`))
    console.log(req.file.mimetype)
    req.body.img_name = req.file ? req.file.originalname : ''
    req.body.img_data = req.file ? data : ''
    req.body.img_type = req.file ? req.file.mimetype : ''
    createProduct(req, res)
})
router.put('/Productos/:id', updateProduct)
router.delete('/Productos/:id', deleteProduct)

// CRUD MARCAS
router.get('/Marcas', getAllBrands)
router.get('/Marcas/:id', getBrand)
router.post('/Marcas', createBrand)
router.put('/Marcas/:id', updateBrand)
router.delete('/Marcas/:id', deleteBrand)

export default router