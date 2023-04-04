import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/ProductController.js";
import multer, { diskStorage } from "multer";
import path from 'path'
import { fileURLToPath } from 'url';

const router = express.Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/storage/products'),
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

export const upload = multer({ storage: storage }).single('img_url')

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', upload, (req, res) => {
    createProduct(req.body)
})
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

// router.get('/crear', function (req, res, next) {
//     bd.query('CREATE TABLE products (' +
//       'id int NOT NULL AUTO_INCREMENT' +
//       'name varchar(100) NOT NULL' +
//       'description varchar(200)' +
//       'price float(10,2)' +
//       'brand varchar(50)' +
//       'stock int' +
//       'category varchar(50)' +
//       'subCategory varchar(50)' +
//       'gender varchar(10)' +
//       'isNovelty boolean' +
//       'color varchar(50)' +
//       'type varchar(50)' +
//       'active boolean' +
//       'PRIMARY KEY (id, name)' +
//       'createdAt TIMESTAMP  DEFAULT CURRENT_TIMESTAMP NOT NULL' +
//       'updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NUL' +
//       ')', function (error, resultado) {
//         if (error) {
//           console.log(error)
//           return
//         }
//       })
//     res.render('mensajearticulos', { mensaje: 'La tabla se creo correctamente.' })
//   })

export default router