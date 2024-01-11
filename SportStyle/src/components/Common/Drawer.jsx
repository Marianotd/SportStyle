import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Drawer({ active, links }) {
    const [heightDrawer, setHeightDrawer] = useState(window.innerHeight)
    const [widthDrawer, setWidthDrawer] = useState(window.innerWidth)

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
        { links.map(item => {
            return(
                <Link to={`/${item.url}`} className={item.size != 'small' ? 'listItem' : 'listItem listItem--small'} key={item.name}>
                    {item.name}
                </Link>
            )
        })}
    </div>
  )
}
