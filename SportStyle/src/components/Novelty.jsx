import React from 'react'
import ItemListContainer from './ItemListContainer'
import SectionTitle from './SectionTitle'

export default function Novelty() {
  return (
    <article className='noveltiesContainer'>
        <SectionTitle text={'Novedades'}/>
        <ItemListContainer/>
    </article>
  )
}
