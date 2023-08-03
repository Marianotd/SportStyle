import React, { useEffect, useState } from 'react'
import Logo from '../Logo.jsx'
import { CgMenu } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import LinkList from '../LinkList.jsx'

export default function NavBar() {
  const [open, setOpen] = useState('collapsed');
  let location = useLocation();
  let links = [{id: 1, name: "Inicio", url: '/', class: 'navLink'},
              {id: 2, name: "Hombre", url: '/Productos/Hombre', class: 'navLink'},
              {id: 3, name: "Mujer", url: '/Productos/Mujer', class: 'navLink'},
              {id: 4, name: "Niños", url: '/Productos/Niños', class: 'navLink'},
              {id: 5, name: "Contacto", url: '/Contacto', class: 'navLink'}
  ]

  useEffect(() => {
    setOpen('collapsed')
  }, [location.pathname])

  function handleClick(){
    if(open === 'collapsed'){
      setOpen('')
    } else {
      setOpen('collapsed')
    }
  }

  return (
    <header>
      <button onClick={handleClick} className='navButton'>
        <CgMenu className='navIcon'/>
      </button>

      <Logo />

      <div className='navIconContainer'>
          <Link to={'/Usuario'}>
            <BiUser className='navIcon'/>
          </Link>
          <Link to={'/Carrito'}>
            <RiShoppingCart2Line className='navIcon'/>
          </Link>
      </div>

      <div className={`navMenu navMenu--${open} `}>
        <LinkList links={links}/>
      </div>
    </header>
  )
}
