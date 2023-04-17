import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx'
import { Link, useLocation } from "react-router-dom";
import ItemSwiper from './ItemSwiper.jsx';
// import axios from 'axios'

// const URI = 'http://localhost:8000/Productos'

export default function ItemListContainer() {
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     getProducts()
    // }, [products.length])

    // async function getProducts() {
    //     const res = await axios.get(URI)
    //     setProducts(res.data)
    // }

    // async function deleteProduct(id) {
    //     axios.delete(`${URI}/${id}`)
    //     getProducts()
    // }

    // let location = useLocation();

    return (
        <div className='itemListContainer'>
            <Link className='button' to={'/Productos/Nuevo'}>Crear nuevo producto</Link>

            {/* { location.pathname === '/'
                ? <ItemSwiper data={products}/>
                : <ItemList data={products} />
            } */}
        </div>
    )
}
