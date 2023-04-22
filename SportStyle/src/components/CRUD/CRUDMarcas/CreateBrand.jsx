import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';
import { generalContext } from '../../../context/GeneralContext';

export default function CreateBrand() {
  const { createRegister, readAllRegister } = useContext(generalContext)
  const navigate = useNavigate()
  const [brand, setBrand] = useState({
    name: ''
  })

  function inputChangeHandler(e){
    let inputName = e.target.name
    let value = e.target.value

    const newDataForm = {...brand}
    newDataForm[inputName] = value.toUpperCase()
    setBrand(newDataForm)
  }

  async function store(e){
    e.preventDefault()

    try {
      await createRegister('Marcas', brand)
    } catch (error) {
      console.error(error);
    }

    navigate('/Usuario/Marcas')
  }


  return (
    <div className='tableContainer'>
      <Link className='backButton' to={'/Usuario/Marcas'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>
    
      <form onSubmit={store} className='form' method='post'>

        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' value={brand.name ?? ''} onChange={inputChangeHandler} required/>

        <button type='submit' className='button'>Guardar</button>
      </form>
    </div>
  )
}
