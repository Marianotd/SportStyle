import React, { useContext, useEffect, useState } from 'react'
import { generalContext } from '../../context/GeneralContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';

export default function UpdateProduct() {
  const { readAllRegister, readRegister, updateRegister } = useContext(generalContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [images, setImages] = useState([])
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    id_brand: 0,
    id_category: 0,
    id_subcategory: 0,
    gender: '',
    id_image: 0,
    is_novelty: 0,
    active: 0
  })

  useEffect(() => {
    getRegister()
  }, [])

  async function getRegister(){
    const res_products = await readRegister(id, 'Productos')
    const res_brands = await readAllRegister('Marcas')
    const res_categories = await readAllRegister('Categorias')
    const res_subcategories = await readAllRegister('Subcategorias')
    const res_images = await readAllRegister('Imagenes')

    setProduct(res_products)
    setBrands(res_brands)
    setCategories(res_categories)
    setSubcategories(res_subcategories)
    setImages(res_images)
  }

  async function store(e){
    e.preventDefault()

    await updateRegister('Productos', product)
    navigate('/Productos')
  }

  function inputChangeHandler(e){
    let inputName = e.target.name
    let value = e.target.value

    const newDataForm = {...product}
    newDataForm[inputName] = value
    setProduct(newDataForm)
}


  return (
    <div className='tableContainer'>
    <Link className='backButton' to={'/Usuario/Productos'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>
    
    <form onSubmit={store} className='form' method='post'>
      <input type="hidden" id={product.id} />

      <label htmlFor="name">Nombre</label>
      <input type="text" name='name' value={product.name} onChange={inputChangeHandler}  required/>

      <label htmlFor="description">Descripción</label>
      <input type="text" name='description' value={product.description} onChange={inputChangeHandler}  required/>

      <label htmlFor="price">Precio</label>
      <input type="number" name='price' value={product.price} onChange={inputChangeHandler}/>

      <label htmlFor="stock">Stock</label>
      <input type="number" name='stock' value={product.stock} onChange={inputChangeHandler}/>

      <label htmlFor="id_brand">Marca</label>
      <select name="id_brand" onChange={inputChangeHandler} value={product.id_brand} required>
        <option selected>SIN MARCA</option>
        {
          brands.map(brand => {
            return(
              <option key={brand.id} value={brand.id}>{brand.name}</option>
            )
          })
        }
      </select>

      <label htmlFor="id_category">Categoria</label>
      <select name="id_category" onChange={inputChangeHandler} value={product.id_category} required>
        <option selected>SIN CATEGORIA</option>
        {
          categories.map(category => {
            return(
              <option key={category.id} value={category.id}>{category.name}</option>
            )
          })
        }
      </select>

      <label htmlFor="id_subcategory">SubCategoria</label>
      <select name="id_subcategory" onChange={inputChangeHandler} value={product.id_subcategory} required>
        <option selected>SIN SUBCATEGORIA</option>
        {
          subcategories.map(subcategory => {
            return(
              <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
            )
          })
        }
      </select>

      <label htmlFor="gender">Genero</label>
      <select name="gender" onChange={inputChangeHandler} value={product.gender}>
        <option selected>SIN GENERO</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
        <option value="Otro">Otro</option>
      </select>

    </form>
    </div>
  )
}
