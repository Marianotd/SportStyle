import React from 'react'

export default function ProductsSortForm() {
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
    <form action="" method="post">
      <label>Marca</label>
      <select name="" id="">
        {marcas.map(marca => {
            return(
            <option key={marca.id} value={marca.name}>{marca.name}</option>
        )})
        }
      </select>
      <label>Talle</label>
      <label>Genero</label>
      <label>Color</label>
      <label>Precio</label>
      <button type="submit">Ordenar</button>
    </form>
  )
}
