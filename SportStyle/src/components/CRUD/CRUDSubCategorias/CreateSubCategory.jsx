import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';
import { crudContext } from '../../../context/CrudContext';

export default function CreateSubCategory() {
  const { createRegister, readAllRegister } = useContext(crudContext)
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [subCategory, setSubCategory] = useState({
    name: '',
    id_category: ''
  })

  useEffect(() => {
    getRegister()
  }, [])

  async function getRegister(){
    const res_categories = await readAllRegister('Categorias')

    setCategories(res_categories)
  }

  function inputChangeHandler(e){
    let inputName = e.target.name
    let value = e.target.value

    const newDataForm = {...subCategory}
    newDataForm[inputName] = value.toUpperCase()
    setSubCategory(newDataForm)
  }

  async function store(e){
    e.preventDefault()

    try {
      await createRegister('SubCategorias', subCategory)
    } catch (error) {
      console.error(error);
    }

    navigate('/Usuario/SubCategorias')
  }


  return (
    <div className='tableContainer'>
      <Link className='backButton' to={'/Usuario/SubCategorias'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>
    
      <form onSubmit={store} className='form' method='post'>

        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' value={subCategory.name ?? ''} onChange={inputChangeHandler} required/>

        <label htmlFor="id_category">Categoria</label>
        <select name="id_category" onChange={inputChangeHandler} value={subCategory.id_category ?? ''} required>
          {
            categories.map(category => {
              return(
                <option key={category.id} value={category.id}>{category.name}</option>
              )
            })
          }
        </select>

        <button type='submit' className='button'>Guardar</button>
      </form>
    </div>
  )
}
