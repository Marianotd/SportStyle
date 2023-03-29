import React from 'react'
import { Link } from 'react-router-dom'

export default function News() {
    let textPromo = 'Aprovecha un 10% de descuento en tu primer compra'

  return (
    <Link to={'/Productos'}>
      <div className='newsContainer'>
          <p>{textPromo}</p>
      </div>
    </Link>
  )
}
