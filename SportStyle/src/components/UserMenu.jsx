import React from 'react'
import LinkList from './LinkList'

export default function UserMenu() {
  let links = [{id: 1, name: "Productos", url: '/Usuario/Productos'},
              {id: 2, name: "Categorias", url: '/Usuario/Categorias'},
              {id: 3, name: "SubCategorias", url: '/Usuario/Subcategorias'},
              {id: 4, name: "Marcas", url: '/Usuario/Marcas'},
              {id: 5, name: "Volver al inicio", url: '/'}
  ]
  
  return (
    <div className='userMenu'>
        <LinkList links={links}/>
    </div>
  )
}
