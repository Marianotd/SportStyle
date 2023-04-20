import React from 'react'
import { Link } from 'react-router-dom'

export default function UserMenu() {
  return (
    <div className='UserMenu'>
        <Link to={'/Usuario/Productos'}>Productos</Link>
        <Link>Categorias</Link>
        <Link>SubCategorias</Link>
        <Link>Marcas</Link>
        <Link to={'/'}>Volver al inicio</Link>
    </div>
  )
}
