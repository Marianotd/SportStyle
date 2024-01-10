import React from 'react'
import Item from './Item.jsx'

export default function ItemList({ data }) {
  return (
    data.map( item => {
        return(
            <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                img={`http://localhost:8000/storage/${item.image}`}
                price={item.price}
                category={item.category}
            />
        )
    })
  )
}
