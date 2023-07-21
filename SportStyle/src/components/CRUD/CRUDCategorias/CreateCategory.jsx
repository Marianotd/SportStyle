import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';
import { crudContext } from '../../../context/CrudContext';

export default function CreateCategory() {
  const { createRegister } = useContext(crudContext)
  const navigate = useNavigate()
  const [category, setCategory] = useState({
    name: ''
  })

  function inputChangeHandler(e){
    let inputName = e.target.name
    let value = e.target.value

    const newDataForm = {...category}
    newDataForm[inputName] = value.toUpperCase()
    setCategory(newDataForm)
  }

  async function store(e){
    e.preventDefault()

    try {
      await createRegister('Categorias', category)
    } catch (error) {
      console.error(error);
    }

    navigate('/Usuario/Categorias')
  }


  return (
    <div className='tableContainer'>
      <Link className='backButton' to={'/Usuario/Categorias'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>
    
      <form onSubmit={store} className='form' method='post'>
        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' value={category.name ?? ''} onChange={inputChangeHandler} required/>

        <button type='submit' className='button'>Guardar</button>
      </form>
    </div>
  )
}
