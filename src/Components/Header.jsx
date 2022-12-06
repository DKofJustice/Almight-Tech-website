import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <h3>Almight <span>Tech</span></h3>

        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
  )
}
