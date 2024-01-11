import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Drawer({ active }) {
    const [heightDrawer, setHeightDrawer] = useState(window.innerHeight)
    const [widthDrawer, setWidthDrawer] = useState(window.innerWidth)

    const listItems = [
        { text: 'Productos', link: 'productos' },
        { text: 'Hombre', link: 'hombre' },
        { text: 'Mujer', link: 'mujer' },
        { text: 'Niños', link: 'niños' },
        { text: 'Nosotros', link: 'nosotros' },
        { text: 'Contacto', link: 'contacto' },
        { text: 'Iniciar Sesión', link: 'login', size: 'small' },
        { text: 'Registrarse', link: 'register', size: 'small' }
    ]

    const drawerStyleVisible = {
        left: 0,
        height: heightDrawer,
        width: widthDrawer
    }

    const drawerStyleInvisible = {
        left: -widthDrawer,
        height: heightDrawer,
        width: widthDrawer
    }

    useEffect(() => {
        setHeightDrawer(window.innerHeight)
        const width = window.innerWidth * 0.6
        setWidthDrawer(width)
    }, [ window.innerHeight, window.innerWidth, active ])    

  return (
    <div className={'drawer'} style={active ? drawerStyleVisible : drawerStyleInvisible}>
        { listItems.map(item => {
            return(
                <Link to={`/${item.link}`} className={item.size != 'small' ? 'listItem' : 'listItem listItem--small'} key={item.text}>
                    {item.text}
                </Link>
            )
        })}
    </div>
  )
}
