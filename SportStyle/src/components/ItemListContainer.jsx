import React, { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import { Link, useLocation } from 'react-router-dom';
import ItemSwiper from './ItemSwiper.jsx';
import axios from 'axios';

const URI = 'http://localhost:8000/Productos';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts();
    }, []);

    async function getProducts() {
        try {
          const res = await axios.get(URI);
          setProducts(res.data);
        } catch (error) {
          console.error('Error al obtener los productos:', error);
        }
    }

    async function deleteProduct(id) {
        try {
          await axios.delete(`${URI}/${id}`);
          getProducts();
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
        }
    }

    let location = useLocation();

    return (
        <div className="itemListContainer">
          {location.pathname === '/' ? (
            <ItemSwiper data={products} />
          ) : (
            <ItemList data={products} />
          )}
        </div>
    );
}
