import React, { useEffect, useState } from 'react'
import Logo from '../Logo.jsx'
import { BiUser } from 'react-icons/bi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import Drawer from './Drawer.jsx';
import MenuButton from './MenuButton.jsx';
import LinkList from './LinkList'

export default function NavBar() {
  const [menu, setMenu] = useState(false)
  const { pathname } = useLocation() 

  useEffect(() => {
    setMenu(false)
  }, [ pathname ])

  function handleMenu(){
    const newMenu = !menu
    setMenu(newMenu)
  }

  const listItems = [
    { name: 'Productos', url: 'productos', class: 'navLink' },
    { name: 'Hombre', url: 'hombre', class: 'navLink' },
    { name: 'Mujer', url: 'mujer', class: 'navLink' },
    { name: 'Niños', url: 'niños', class: 'navLink' },
    { name: 'Nosotros', url: 'nosotros', class: 'navLink' },
    { name: 'Contacto', url: 'contacto', class: 'navLink' },
    { name: 'Iniciar Sesión', url: 'login', class: 'navLink navLink--esp', size: 'small' },
    { name: 'Registrarse', url: 'register', class: 'navLink navLink--esp', size: 'small' }
  ]

  return (
    <header>
      <MenuButton handleMenu={handleMenu} menu={menu} />

      <Logo />

      <div className='navIconContainer'>
          <Link to={'/Usuario'}>
            <BiUser className='navIcon'/>
          </Link>
          <Link to={'/Carrito'}>
            <RiShoppingCart2Line className='navIcon'/>
          </Link>
      </div>

      <Drawer active={menu} links={listItems}/>

      <div className={`navMenu`}>
        <LinkList links={listItems}/>
      </div>
    </header>
  )
}
