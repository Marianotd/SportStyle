import React from 'react'
import PageCover from './PageCover'
import ProductsFilterForm from './ProductsFilterForm'
import ProductsSortForm from './ProductsSortForm'

export default function ProductsMenu() {
  return (
    <>
        <PageCover/>
        <div>
            <button type='button'>Filtrar</button>
            <button type='button'>Ordenar</button>
        </div>
        <ProductsFilterForm/>
        <ProductsSortForm/>
    </>
  )
}
