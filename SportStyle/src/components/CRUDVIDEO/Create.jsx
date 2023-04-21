import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/Productos'

export default function Create() {
    const [product, setProduct] = useState({ 
        name: '', 
        description: ''
    })

    const navigate = useNavigate()

    function inputChangeHandler(e){
        let inputName = e.target.name
        let value = e.target.value

        const newDataForm = {...product}
        newDataForm[inputName] = value
        setProduct(newDataForm)
    }

    const store = async (e) => {
        e.preventDefault()
        axios.post(URI, product)
        navigate('/')
    }

  return (
    <div>
        <h1>Crear nuevo producto</h1>
        <form onSubmit={store} method="post">
            <label htmlFor="name">Nombre</label>
            <input value={product.name} onChange={inputChangeHandler} name='name' type='text'/>

            <label htmlFor="description">Descripción</label>
            <input value={product.description} onChange={inputChangeHandler} name='description' type='text'/>
        
            <button type='submit'>Crear</button>
        </form>
    </div>
  )
}
