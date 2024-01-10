import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ id, name, img, price }) {
  let itemPrice = price ? (price).toFixed(2) : 0

  return (
    <div className='item'>
        <div>
          <img src={img} alt={name} />
        </div>

        <h5>{name}</h5>
        <p>${itemPrice}</p>
        
        <Link className='button' to={`/Productos/${id}`}>Ver más</Link>
    </div>
  )
}