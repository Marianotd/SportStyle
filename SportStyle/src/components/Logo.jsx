import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to={'/'}>
      <picture>
        <source srcSet='/assets/LogoCompletoSinFondo.png' media='(min-width: 1200px)'/>
        <img className='logo' src='/assets/Logo.ico' alt="SportStyle" />
      </picture>
    </Link>
  )
}
