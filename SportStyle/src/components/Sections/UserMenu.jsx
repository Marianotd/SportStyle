import React from 'react'
import LinkList from '../LinkList'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

export default function UserMenu() {
  let links = [{id: 1, name: "Productos", url: '/Usuario/Productos', class: 'userMenuLink'},
              {id: 2, name: "Categorias", url: '/Usuario/Categorias', class: 'userMenuLink'},
              {id: 3, name: "SubCategorias", url: '/Usuario/Subcategorias', class: 'userMenuLink'},
              {id: 4, name: "Marcas", url: '/Usuario/Marcas', class: 'userMenuLink'},
              {id: 5, name: "Volver al inicio", url: '/', class: 'userMenuLink'}
  ]

  let usuario = 'Mariano'
  
  return (
    <section className='userMenu'>

      <h2>Hola, {usuario}!</h2>
      <Link to={'/'} className='userNavIcon'><AiOutlineClose/></Link>
      
      <div className='userAdminLinks'>
        <LinkList links={links}/>
      </div>
    </section>

  )
}
