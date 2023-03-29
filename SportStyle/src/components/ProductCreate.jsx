import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/Productos'

export default function ProductCreate() {
    const [product, setProduct] = useState({ 
        name: '', 
        description: '',
        price: 0,
        brand: '',
        stock: 0,
        category: '',
        sub_category: '',
        gender: '',
        novelty: '',
        color: '',
        type: '',
        img_url: '',
        active: ''
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
        navigate('/Productos')
    }

  return (
    <form onSubmit={store}>
        <div>
            <label htmlFor="name">Nombre</label>
            <input onChange={inputChangeHandler} type="text" name='name'/>
        </div>

        <div>
            <label htmlFor="description">Descripción</label>
            <input onChange={inputChangeHandler} type="text" name='description'/>
        </div>

        <div>
            <label htmlFor="price">Precio</label>
            <input onChange={inputChangeHandler} type="number" name='price'/>
        </div>

        <div>
            <label htmlFor="brand">Marca</label>
            <input onChange={inputChangeHandler} type="text" name='brand'/>
        </div>

        <div>
            <label htmlFor="stock">Stock</label>
            <input onChange={inputChangeHandler} type="number" name='stock'/>
        </div>

        <div>
            <label htmlFor="category">Categoria</label>
            <input onChange={inputChangeHandler} type="text" name='category'/>
        </div>

        <div>
            <label htmlFor="sub_category">Subcategoria</label>
            <input onChange={inputChangeHandler} type="text" name='sub_category'/>
        </div>

        <div>
            <label htmlFor="gender">Genero</label>
            <select name="gender">
                <option value='' disabled>Seleccione un genero</option>
                <option value="male">Hombre</option>
                <option value="women">Mujer</option>
                <option value="unisex">Unisex</option>
            </select>
        </div>

        <div>
            <label htmlFor="novelty">Es novedad?</label>
            <input onChange={inputChangeHandler} type="checkbox" name='novelty'/>
        </div>

        <div>
            <label htmlFor="color">Color</label>
            <input onChange={inputChangeHandler} type="text" name='color'/>
        </div>

        <div>
            <label htmlFor="type">Tipo</label>
            <input onChange={inputChangeHandler} type="text" name='type'/>
        </div>

        <div>
            <label htmlFor="img_url">Imagen</label>
            <input onChange={inputChangeHandler} type="file" name='img_url'/>
        </div>

        <div>
            <label htmlFor="active">Esta activo?</label>
            <input onChange={inputChangeHandler} type="checkbox" name='active'/>
        </div>

        <button type='submit'>Crear</button>
    </form>
  )
}
