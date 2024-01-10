import React, { useEffect, useState } from 'react'
import Logo from '../Logo.jsx'
import { CgMenu } from 'react-icons/cg';
import { BiUser } from 'react-icons/bi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { VscClose } from "react-icons/vsc";
import { Link, useLocation } from 'react-router-dom';
import Drawer from './Drawer.jsx';

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

  return (
    <header>
      <button onClick={handleMenu} className='navButton'>
        <CgMenu className='navIcon'/>
        <VscClose className='navIcon' />
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

      <Drawer active={menu}/>
    </header>
  )
}
