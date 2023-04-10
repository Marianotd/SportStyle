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
                img={`http://127.0.0.1:8000/storage/dbimages/${item.img_name}`}
                price={item.price}
                category={item.category}
            />
        )
    })
  )
}
