import express from "express";
import { getAllBrands, getBrand, createBrand, updateBrand, deleteBrand } from '../controllers/BrandController.js'    
import { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../controllers/CategoryController.js'    
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/ProductController.js";
import { getAllSubCategories, getSubCategory, createSubCategory, updateSubCategory, deleteSubCategory } from '../controllers/SubCategoryController.js'    

const router = express.Router()

// Brands
router.get('/Marcas', getAllBrands)
router.get('/Marcas/:id', getBrand)
router.post('/Marcas', createBrand)
router.put('/Marcas/:id', updateBrand)
router.delete('/Marcas/:id', deleteBrand)

// Category
router.get('/Categorias', getAllCategories)
router.get('/Categorias/:id', getCategory)
router.post('/Categorias', createCategory)
router.put('/Categorias/:id', updateCategory)
router.delete('/Categorias/:id', deleteCategory)

// Products
router.get('/Productos', getAllProducts)
router.get('/Productos/:id', getProduct)
router.post('/Productos', createProduct)
router.put('/Productos/:id', updateProduct)
router.delete('/Productos/:id', deleteProduct)

// SubCategory
router.get('/SubCategorias', getAllSubCategories)
router.get('/SubCategorias/:id', getSubCategory)
router.post('/SubCategorias', createSubCategory)
router.put('/SubCategorias/:id', updateSubCategory)
router.delete('/SubCategorias/:id', deleteSubCategory)

export default router