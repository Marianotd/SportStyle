import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function Footer() {
  return (
    <footer className='footer'>
        <Logo />
        
        <div className='footerMenu'>
            <div className='footerSubMenu'>
                <h3>Seguinos en las redes</h3>
                <a href="">Prueba</a>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Twitter</a>
                <a href="">Whatsapp</a>
            </div>

            <div className='footerSubMenu'>
                <h3>Secciones</h3>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/Productos/Hombre'}>Hombre</Link>
                <Link to={'/Productos/Mujer'}>Mujer</Link>
                <Link to={'/Productos/Niños'}>Niños</Link>
                <Link to={'/Contacto'}>Contacto</Link>
            </div>
        </div>
        
        <p>@ 2022 SportStyle Argentina</p>
    </footer>
  )
}
