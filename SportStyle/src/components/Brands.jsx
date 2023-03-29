import React from 'react'
import Brand from './Brand'
import SectionTitle from './SectionTitle'

export default function Brands() {
    const marcas = [
        {id: 1, name: 'Adidas' ,url: '/assets/marcas/Adidas.png'},
        {id: 2, name: 'Asics' ,url: '/assets/marcas/Asics.png'},
        {id: 3, name: 'Garmin' ,url: '/assets/marcas/Garmin.png'},
        {id: 4, name: 'Puma' ,url: '/assets/marcas/Puma.png'},
        {id: 5, name: 'Rebook' ,url: '/assets/marcas/Rebook.png'},
        {id: 6, name: 'Salomon' ,url: '/assets/marcas/Salomon.png'},
        {id: 7, name: 'Topper' ,url: '/assets/marcas/Topper.png'}
    ]

  return (
    <article className='brandsContainer'>
        <SectionTitle text={'Nuestras marcas'}/>
        { marcas.map(marca => {
            return(
                <Brand
                    key={marca.id}
                    name={marca.name}
                    url={marca.url}
                />
            )
        })}
    </article>
  )
}
