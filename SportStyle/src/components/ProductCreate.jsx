import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SectionTitle from './SectionTitle'

const URI = 'http://localhost:8000/Productos'

export default function ProductCreate() {
    const navigate = useNavigate()
    const [dataForm, setDataForm] = useState({ 
        name: '', 
        description: '',
        price: 0,
        brand: '',
        stock: 1,
        category: '',
        sub_category: '',
        gender: '',
        is_novelty: true,
        color: '',
        type: '',
        img_url: '',
        active: true
    })

    function inputChangeHandler(e){
        let inputName = e.target.name
        let value = e.target.value

        if(e.target.type === 'checkbox'){
            value = e.target.checked ? true : false 
        }

        if(e.target.type === 'file'){
            value = e.target.files[0]
        }

        const newDataForm = {...dataForm}
        newDataForm[inputName] = value
        setDataForm(newDataForm)
    }

    async function store (e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', dataForm.name)
        formData.append('img_url', dataForm.img_url)

        try {
            await axios.post(URI, formData)
        } catch (error) {
            console.log(error)   
        }
        navigate('/Productos')
    }

  return (
    <form className='form' onSubmit={store} method='post' encType="multipart/form-data">
        <SectionTitle text={'Nuevo producto'}/>

        <div className='formSection'>
            <label htmlFor="name">Nombre</label>
            <input className='formInput' onChange={inputChangeHandler} type="text" name='name' value={dataForm.name}/>
        </div>

        <div className='formSection'>
            <label htmlFor="description">Descripción</label>
            <textarea className='formInput' onChange={inputChangeHandler} name="description" rows={5} value={dataForm.description}/>
        </div>

        <div className='formSection'>
            <label htmlFor="price">Precio</label>
            <input className='formInput' onChange={inputChangeHandler} type="number" name='price' value={dataForm.price}/>
        </div>

        <div className='formSection'>
            <label htmlFor="brand">Marca</label>
            <input className='formInput' onChange={inputChangeHandler} type="text" name='brand' value={dataForm.brand}/>
        </div>

        <div className='formSection'>
            <label htmlFor="stock">Stock</label>
            <input className='formInput' onChange={inputChangeHandler} type="number" name='stock' value={dataForm.stock}/>
        </div>

        <div className='formSection'>
            <label htmlFor="category">Categoria</label>
            <input className='formInput' onChange={inputChangeHandler} type="text" name='category' value={dataForm.category}/>
        </div>

        <div className='formSection'>
            <label htmlFor="sub_category">Subcategoria</label>
            <input className='formInput' onChange={inputChangeHandler} type="text" name='sub_category' value={dataForm.sub_category}/>
        </div>

        <div className='formSection'>
            <label htmlFor="gender">Genero</label>

            <select className='formInput' name='gender' onChange={inputChangeHandler} value={dataForm.gender}>
                <option value='' disabled>Seleccione un genero</option>
                <option value="male">Hombre</option>
                <option value="women">Mujer</option>
                <option value="otro">Otro</option>
            </select>
        </div>

        <div className='formSection'>
            <label htmlFor="color">Color</label>
            <input className='formInput' onChange={inputChangeHandler} type="text" name='color' value={dataForm.color}/>
        </div>

        <div className='formSection'>
            <label htmlFor="type">Tipo</label>
            <input className='formInput' onChange={inputChangeHandler} type="text" name='type' value={dataForm.type}/>
        </div>

        <div className='formSection'>
            <label htmlFor="name">Imagen</label>
            <input className='formInput' onChange={inputChangeHandler} type="file" name='img_url'/>
        </div>

        <div className='formSection formSection--small'>
            <label htmlFor="novelty">Es novedad?</label>
            <input className='formInput' onChange={inputChangeHandler} type="checkbox" name='is_novelty' value={dataForm.novelty}/>
        </div>

        <div className='formSection formSection--small'>
            <label htmlFor="active">Esta activo?</label>
            <input className='formInput' onChange={inputChangeHandler} type="checkbox" name='active' value={dataForm.active}/>
        </div>

        <button type='submit' className='button'>Crear</button>
    </form>
  )
}
