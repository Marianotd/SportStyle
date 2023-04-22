import React from 'react'
import { Link } from 'react-router-dom'

export default function UserMenu() {
  return (
    <div className='UserMenu'>
        <Link to={'/Usuario/Productos'}>Productos</Link>
        <Link to={'/Usuario/Categorias'}>Categorias</Link>
        <Link to={'/Usuario/Subcategorias'}>SubCategorias</Link>
        <Link to={'/Usuario/Marcas'}>Marcas</Link>
        <Link to={'/'}>Volver al inicio</Link>
    </div>
  )
}
