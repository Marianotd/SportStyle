import React, { useContext, useEffect, useState } from 'react'
import { generalContext } from '../../context/GeneralContext'
import { Link } from 'react-router-dom'

export default function Products() {
  const [products, setProducts] = useState([])
  const { readRegister, deleteRegister } = useContext(generalContext)
  const route = 'Productos'

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts(){
    const res = await readRegister(route)

    setProducts(res)
  }

  async function deleteProduct(id){
    await deleteRegister(id, route)

    getProducts()
  }

  return (
    <table className='table'>
      <thead>
          <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
          </tr>
      </thead>
      <tbody>
              {
                products.map(product => {
                    return(
                        <tr key={product.id }>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/Usuario/Productos/${product.id}`}>Editar</Link>
                                <button onClick={() => deleteProduct(product.id, route)}>Borrar</button>
                            </td>
                        </tr>
                    )
                })
              }
      </tbody>
    </table>
  )
}
