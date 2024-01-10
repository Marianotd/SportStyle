import React from 'react'

export default function PageCover() {
    let title = 'Al rihla'
    let subtitle = 'Tu viaje comienza ahora. Nueva pelota oficial de la Copa Mundial de la FIFA Qatar 2022™.'

  return (
    <article className='pageCover'>
      <img src='/assets/Novedades.jpg' alt="En estos momentos no pudimos cargar el contenido" />
      
      <div className='textContainer'>
          <h2>{title.toUpperCase()}</h2>
          <h3>{subtitle}</h3>
      </div>
    </article>
  )
}
