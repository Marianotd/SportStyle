import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
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

    console.log(product)

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail data={product}/>
    </div>
  )
}
