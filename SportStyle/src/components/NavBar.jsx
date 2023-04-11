import React, { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { CgMenu } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [open, setOpen] = useState('collapsed');
  let location = useLocation();

  useEffect(() => {
    setOpen('collapsed')
  }, [location.pathname])

  function handleMenu(){
    if(open === 'collapsed'){
      setOpen('')
    } else {
      setOpen('collapsed')
    }
  }

  return (
    <header>
      <button onClick={handleMenu} className='navButton'>
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
        <Link to={'/'} className="navLink">Inicio</Link>
        <Link to={'/Productos/Hombre'} className="navLink">Hombre</Link>
        <Link to={'/Productos/Mujer'} className="navLink">Mujer</Link>
        <Link to={'/Productos/Niños'} className="navLink">Niños</Link>
        <Link to={'/Contacto'} className="navLink">Contacto</Link>
      </div>
    </header>
  )
}
