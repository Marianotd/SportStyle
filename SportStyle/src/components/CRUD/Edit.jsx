import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/Productos'

export default function Edit() {
  const [product, setProduct] = useState({ 
    name: '', 
    description: ''
  })

  const navigate = useNavigate()
  const { id } = useParams()

  function inputChangeHandler(e){
      let inputName = e.target.name
      let value = e.target.value

      const newDataForm = {...product}
      newDataForm[inputName] = value
      setProduct(newDataForm)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${URI}/${id}`, product)

    navigate('/')
  }

  useEffect(() => {
    getBlockById()
  }, [])

  const getBlockById = async () => {
    const res = await axios.get(`${URI}/${id}`)
    setProduct(res.data)
  }

  return (
    <div>
      <h1>Editar producto</h1>
      <form onSubmit={update} method="post">
          <label htmlFor="name">Nombre</label>
          <input value={product.name} onChange={inputChangeHandler} name='name' type='text'/>

          <label htmlFor="description">Descripción</label>
          <input value={product.description} onChange={inputChangeHandler} name='description' type='text'/>
      
          <button type='submit'>Crear</button>
      </form>
    </div>
  )
}
