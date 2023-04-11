import React from 'react'

export default function ItemDetail({ item }) {
  let price = item.price ? (item.price).toFixed(2) : 0
  
  return (
    <div id={item.id} className='itemDetail'>
      <div className='itemDetail__header'>
        <h2>{item.name}</h2>
        <h3>$ {price}</h3>
      </div>

      <div className='itemDetail__imgContainer'>
        {
          item.price > 15000
          ? <p className='freeShipping'>ENVÍO GRATIS</p>
          : <></>
        }
        {
          item.img_name
          ? <img className='itemDetail__img' src={`http://127.0.0.1:8000/storage/dbimages/${item.img_name}`} alt={item.name} />
          : <></>
        }
      </div>

      {
        item.stock < 10
        ? 
          <div className='itemDetail__stock'>
            <p>Unidades disponibles: <span>{item.stock}</span></p>
          </div>
        : <></>
      }


      <button className='button button--itemDetail'>Añadir al carrito</button>

      <p className='itemDetail__description'>{item.description}</p>
    </div>
  )
}
