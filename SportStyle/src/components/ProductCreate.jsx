import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import Logo from './Logo'

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
        is_novelty: 0,
        color: '',
        type: '',
        img: '',
        active: 0
    })

    function inputChangeHandler(e){
        let inputName = e.target.name
        let value = e.target.value

        if(e.target.type === 'checkbox'){
            value = e.target.checked ? 1 : 0 
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
        formData.append('description', dataForm.description)
        formData.append('price', dataForm.price)
        formData.append('brand', dataForm.brand)
        formData.append('stock', dataForm.stock)
        formData.append('category', dataForm.category)
        formData.append('sub_category', dataForm.sub_category)
        formData.append('gender', dataForm.gender)
        formData.append('is_novelty', dataForm.is_novelty)
        formData.append('color', dataForm.color)
        formData.append('type', dataForm.type)
        formData.append('img', dataForm.img)
        formData.append('active', dataForm.active)  

        try {
            await axios.post(URI, formData)
        } catch (error) {
            console.error(error);   
        }
        navigate('/Productos')
    }

  return (
    <section className='ProductCreate'>
        <form className='form' onSubmit={store} method='post' encType="multipart/form-data">
            <SectionTitle text={'Nuevo producto'}/>

            <div className='formSection'>
                <label htmlFor="name">Nombre</label>
                <input className='formInput' onChange={inputChangeHandler} type="text" name='name' value={dataForm.name} required/>
            </div>

            <div className='formSection'>
                <label htmlFor="description">Descripción</label>
                <textarea className='formInput' onChange={inputChangeHandler} name="description" rows={5} value={dataForm.description} required/>
            </div>

            <div className='formSection formSection--small'>
                <label htmlFor="price">Precio</label>
                <input className='formInput' onChange={inputChangeHandler} type="number" name='price' value={dataForm.price} required/>
            </div>

            <div className='formSection formSection--small'>
                <label htmlFor="stock">Stock</label>
                <input className='formInput' onChange={inputChangeHandler} type="number" name='stock' value={dataForm.stock} required/>
            </div>

            <div className='formSection'>
                <label htmlFor="brand">Marca</label>
                <input className='formInput' onChange={inputChangeHandler} type="text" name='brand' value={dataForm.brand} required/>
            </div>

            <div className='formSection'>
                <label htmlFor="category">Categoria</label>
                <input className='formInput' onChange={inputChangeHandler} type="text" name='category' value={dataForm.category} required/>
            </div>

            <div className='formSection'>
                <label htmlFor="sub_category">Subcategoria</label>
                <input className='formInput' onChange={inputChangeHandler} type="text" name='sub_category' value={dataForm.sub_category}/>
            </div>

            <div className='formSection'>
                <label htmlFor="gender">Genero</label>

                <select className='formInput' name='gender' onChange={inputChangeHandler} value={dataForm.gender} required>
                    <option value='' disabled>Seleccione un genero</option>
                    <option value="male">Hombre</option>
                    <option value="women">Mujer</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div className='formSection'>
                <label htmlFor="color">Color</label>
                <input className='formInput' onChange={inputChangeHandler} type="text" name='color' value={dataForm.color} required/>
            </div>

            <div className='formSection'>
                <label htmlFor="type">Tipo</label>
                <input className='formInput' onChange={inputChangeHandler} type="text" name='type' value={dataForm.type} required/>
            </div>

            <div className='formSection'>
                <label htmlFor="name">Imagen</label>
                <input className='formInput' onChange={inputChangeHandler} type="file" name='img' required/>
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
        <aside className='asideForm'>
            <img src='/assets/Aside.png' alt="SportStyle" />
        </aside>
    </section>
  )
}
