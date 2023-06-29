import React, { useContext, useEffect, useState } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';
import { generalContext } from '../../../context/GeneralContext';

export default function CreateProduct() {
  const { readAllRegister, createRegister } = useContext(generalContext)
  const navigate = useNavigate()
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [file, setFile] = useState()
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    id_brand: 1,
    id_category: 1,
    id_subcategory: 1,
    gender: 'SIN GENERO',
    id_image: 1,
    is_novelty: 0,
    active: 0
  })

  useEffect(() => {
    getRegister()
  }, [])

  async function getRegister(){
    const res_brands = await readAllRegister('Marcas')
    const res_categories = await readAllRegister('Categorias')
    const res_subcategories = await readAllRegister('Subcategorias')

    setBrands(res_brands)
    setCategories(res_categories)
    setSubcategories(res_subcategories)
  }

  function inputChangeHandler(e){
    let inputName = e.target.name
    let value = e.target.value.toUpperCase()

    if(e.target.type === 'checkbox'){
      value = e.target.checked ? 1 : 0 
    }

    const newDataForm = {...product}
    newDataForm[inputName] = value
    setProduct(newDataForm)
  }

  function inputFileChangeHandler(e){
    setFile(e.target.files[0])
  }

  async function store(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', product.name)
    formData.append('description', product.description)
    formData.append('price', product.price)
    formData.append('stock', product.stock)
    formData.append('id_brand', product.id_brand)
    formData.append('id_category', product.id_category)
    formData.append('id_subcategory', product.id_subcategory)
    formData.append('gender', product.gender)
    formData.append('id_image', product.id_image)
    formData.append('is_novelty', product.is_novelty)
    formData.append('active', product.active)

    formData.append('image', file)

    try {
      await createRegister('Productos', formData)
    } catch (error) {
      console.error(error); 
    }

    navigate('/Usuario/Productos')
  }


  return (
    <div className='tableContainer'>
    <Link className='backButton' to={'/Usuario/Productos'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>
    
      <form onSubmit={store} className='form' method='post' encType='multipart/form-data'>
        <input type="hidden" id={product.id} />

        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' value={product.name ?? ''} onChange={inputChangeHandler} required/>

        <label htmlFor="description">Descripción</label>
        <input type="text" name='description' value={product.description ?? ''} onChange={inputChangeHandler}/>

        <label htmlFor="price">Precio</label>
        <input type="number" name='price' value={product.price ?? ''} onChange={inputChangeHandler}/>

        <label htmlFor="stock">Stock</label>
        <input type="number" name='stock' value={product.stock ?? ''} onChange={inputChangeHandler}/>

        <label htmlFor="id_brand">Marca</label>
        <select name="id_brand" onChange={inputChangeHandler} value={product.id_brand ?? 1} required>
          {
            brands.map(brand => {
              return(
                <option key={brand.id} value={brand.id} >{brand.name}</option>
              )
            })
          }
        </select>

        <label htmlFor="id_category">Categoria</label>
        <select name="id_category" onChange={inputChangeHandler} value={product.id_category ?? 1} required>
          {
            categories.map(category => {
              return(
                <option key={category.id} value={category.id}>{category.name}</option>
              )
            })
          }
        </select>

        <label htmlFor="id_subcategory">SubCategoria</label>
        <select name="id_subcategory" value={product.id_subcategory ?? ""} onChange={inputChangeHandler} required>
          <option value="" disabled={!product.id_subcategory}>Selecciona una subcategoría</option>
          {subcategories.map(subcategory => {
            return (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            )
          })}
        </select>

        <label htmlFor="gender">Genero</label>
        <select name="gender" onChange={inputChangeHandler} value={product.gender ?? 'Sin genero'}>
          <option disabled>SIN GENERO</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otro</option>
        </select>

        <label htmlFor="image">Imagen</label>
        <input type="file" name='image' onChange={inputFileChangeHandler} required/>

        <div className='inputContainer'>
          <label htmlFor="is_novelty">Es novedad?</label>
          <label htmlFor="active">Esta activo?</label>

          <input name='is_novelty' type="checkbox" onChange={inputChangeHandler} value={product.is_novelty ?? ''}/>
          <input name='active' type="checkbox" onChange={inputChangeHandler} value={product.active ?? ''}/>
        </div>

        <button type='submit' className='button'>Guardar</button>
      </form>
    </div>
  )
}
