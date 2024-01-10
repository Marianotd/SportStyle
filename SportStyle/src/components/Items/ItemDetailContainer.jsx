import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const URI = 'http://localhost:8000/Productos'

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
      getProduct()
    }, [id])

    async function getProduct() {
        const res = await axios.get(`${URI}/${id}`)
        setProduct(res.data)
    }

    let gender = product.gender == 'male' ? 'Hombre' : 'Mujer'

  return (
    <div className='ItemDetailContainer'>
      <div className='linkContainer'>
        <Link to={'/'}>Inicio</Link> / <Link to={`/Productos/${gender}`}>{gender}</Link> / <Link to={`/Productos/${gender}/${product.category}`}>{product.category}</Link>
      </div>
        
      <ItemDetail item={product}/>
    </div>
  )
}
