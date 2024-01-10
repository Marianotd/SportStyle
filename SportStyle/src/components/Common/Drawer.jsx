import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Drawer({ active }) {
    const [heightDrawer, setHeightDrawer] = useState(window.innerHeight)
    const [widthDrawer, setWidthDrawer] = useState(window.innerWidth)
    const drawerClasses = active ? 'drawer drawer--visible' : 'drawer';

    const listItems = [
        { text: 'Productos', link: 'productos' },
        { text: 'Productos2', link: 'productos' },
        { text: 'Productos3', link: 'productos' },
        { text: 'Productos4', link: 'productos' },
        { text: 'Productos5', link: 'productos' },
        { text: 'Productos6', link: 'productos' }
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
        const width = window.innerWidth * 0.717
        setWidthDrawer(width)
    }, [ window.innerHeight, window.innerWidth, active ])    


  return (
    <div className={drawerClasses} style={active ? drawerStyleVisible : drawerStyleInvisible}>
        <div>
            { listItems.map(item => {
                return(
                    <div className={
                            item.text.length > 20 
                                ? 'listItem listItem--light' 
                                : 'listItem'
                        } 
                        
                        key={item.text} 
                        disablePadding
                    >
                        
                        <Link to={`/${item.link}`}>
                            <div primary={item.text}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
