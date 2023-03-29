import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx'
import { Link, useLocation } from "react-router-dom";
import ItemSwiper from './ItemSwiper.jsx';
import axios from 'axios'

const URI = 'http://localhost:8000/Productos'

export default function ItemListContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [products.length])

    async function getProducts() {
        const res = await axios.get(URI)
        setProducts(res.data)
    }

    async function deleteProduct(id) {
        axios.delete(`${URI}/${id}`)
        getProducts()
    }

    let location = useLocation();

    return (
        <div className='itemListContainer'>
            { location.pathname == '/'
                ? <ItemSwiper data={products}/>
                : <ItemList data={products} />
            }

            <Link to={'/Productos/Nuevo'}>Crear nuevo producto</Link>
        </div>
    )
}

    // let data = [
    //     {
    //         "id": 1,
    //         "name": "Camiseta Titular Selección Argentina Messi 10", 
    //         "price": 17499, 
    //         "img": '/assets/productos/AntiparraJetSpeedo.jpg'
    //     },
    
    //     { 
    //         "id": 2, 
    //         "name": "Zapatillas Elastica New Flame 21 Atomik", 
    //         "price": 6639, 
    //         "img": '/assets/productos/BolsoTotePromoBenitoTopper.jpg'
    //     },
    
    //     {
    //         "id": 3, 
    //         "name": "Pelota Campo Lider XXI Penalty", 
    //         "price": 4599, 
    //         "img": '/assets/productos/CamperaConSeleccionArgentinaAdidas.jpg'
    //     }
    // ]
