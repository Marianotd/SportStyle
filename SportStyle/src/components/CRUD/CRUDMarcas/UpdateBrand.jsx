import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';
import { generalContext } from '../../../context/GeneralContext';

export default function UpdateBrand() {
  const { readRegister, updateRegister } = useContext(generalContext)
  const navigate = useNavigate()
  const { id } = useParams()
  const [brand, setBrand] = useState({
    name: ''
  })

  useEffect(() => {
    getRegister()
  }, [])

  async function getRegister(){
    const res = await readRegister(id, 'Marcas')

    setBrand(res)
  }

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
      await updateRegister(id, 'Marcas', brand)
    } catch (error) {
      console.error(error);   
    }

    navigate('/Usuario/Marcas')
  }


  return (
    <div className='tableContainer'>
      <Link className='backButton' to={'/Usuario/Marcas'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>
    
      <form onSubmit={store} className='form' method='post'>

        <input type="hidden" value={brand.id ?? ''} />

        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' value={brand.name ?? ''} onChange={inputChangeHandler} required/>

        <button type='submit' className='button'>Guardar</button>
      </form>
    </div>
  )
}
