import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkList({ links }) {
  return (
    links.map(link => {
        return(
            <Link key={link.id} to={link.url} className={link.class}>{link.name}</Link>
        )
    })
  )
}
