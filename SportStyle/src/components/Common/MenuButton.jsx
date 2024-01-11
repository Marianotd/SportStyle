import React from 'react'

export default function MenuButton({ handleMenu, menu }) {
  return (
    <div className="menu-activador">
        <input type="checkbox" id="lanzador" onChange={handleMenu} checked={menu ? true : false}/>

        <label htmlFor="lanzador">
            <span className="menu-activador-linea"></span>
            <span className="menu-activador-linea"></span>
            <span className="menu-activador-linea"></span>
        </label>
    </div>
  )
}
