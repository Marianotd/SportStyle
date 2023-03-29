import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/ProductController.js";

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
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