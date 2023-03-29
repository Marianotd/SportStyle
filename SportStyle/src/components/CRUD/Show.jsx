import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Productos'

export default function Show() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [products.length])

    async function getProducts () {
        const res = await axios.get(URI)
        setProducts(res.data)
    }

    async function deleteProduct (id) {
        axios.delete(`${URI}/${id}`)
        getProducts()
    }

  return (
    <>
        <Link to={'/create'}>Crear</Link>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                    {
                        products.map(product => {
                            return(
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`}>Editar</Link>
                                        <button onClick={() => deleteProduct(product.id)}>Borrar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    </>
  )
}
