import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ id, name, img, price }) {
  return (
    <div className='item'>
        <h5>{name}</h5>
        <img src={img} alt={name} />
        <p>${price}</p>
        <Link className='button' to={`/Productos/${id}`}>Ver más</Link>
    </div>
  )
}