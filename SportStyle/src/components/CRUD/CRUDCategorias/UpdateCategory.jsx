import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md';
import { generalContext } from '../../../context/GeneralContext';

export default function UpdateCategory() {
  const { readRegister, updateRegister } = useContext(generalContext)
  const navigate = useNavigate()
  const { id } = useParams()
  const [category, setCategory] = useState({
    name: ''
  })

  useEffect(() => {
    getRegister()
  }, [])

  async function getRegister(){
    const res = await readRegister(id, 'Categorias')
    setCategory(res)
  }

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
      await updateRegister(id, 'Categorias', category)
    } catch (error) {
      console.error(error);   
    }

    navigate('/Usuario/Categorias')
  }


  return (
    <div className='tableContainer'>
      <Link className='backButton' to={'/Usuario/Categorias'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>
      
      <form onSubmit={store} className='form' method='post'>

        <input type="hidden" value={category.id ?? ''}/>

        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' value={category.name ?? ''} onChange={inputChangeHandler} required/>

        <button type='submit' className='button'>Guardar</button>
      </form>
    </div>
  )
}
