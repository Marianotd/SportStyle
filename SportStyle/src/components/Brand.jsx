import React from 'react'
import { Link } from 'react-router-dom'

export default function Brand({ url, name }) {
  return (
    <Link to={`/Productos/Marcas/${name}`}>
        <img src={url} alt={name} />
    </Link>
  )
}
