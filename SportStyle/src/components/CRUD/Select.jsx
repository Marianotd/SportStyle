import React, { useContext, useEffect, useState } from 'react'
import { generalContext } from '../../context/GeneralContext'
import { Link } from 'react-router-dom'
import { HiOutlineTrash } from 'react-icons/hi';
import { BiEdit } from 'react-icons/bi';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function Select({ route }) {
  const [data, setData] = useState([])
  const { readAllRegister, deleteRegister } = useContext(generalContext)

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    const res = await readAllRegister(route)

    setData(res)
  }

  async function deleteData(id){
    try {
      await deleteRegister(id, route)
    } catch (error) {
      console.error(error);
    }

    getData()
  }

  return (
    <div className='tableContainer'>
      <Link className='backButton' to={'/Usuario'}><MdKeyboardBackspace/> <span>Volver atrás</span></Link>

      <h2 className='sectionTitle'>{route}</h2>

      <div className='LinkContainer'>
        <Link className='button' to={`/Usuario/${route}/Nuevo`}>Nuevo registro</Link>
      </div>
      
      <table className='table'>
        <thead className='table__head'>
          <tr>
            <th className='table__head--id'>Id</th>
            <th className='table__head--name'>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody className='table__body'>
          {
            data.map(item => {
              return(
                <tr key={item.id }>
                  <td>{item.id}</td>
                  <td className='textTd'>{item.name}</td>
                  <td className='actionButtons'>
                    <Link to={`/Usuario/${route}/${item.id}`}><BiEdit/></Link>
                    <button onClick={() => deleteData(item.id, route)}><HiOutlineTrash/></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
