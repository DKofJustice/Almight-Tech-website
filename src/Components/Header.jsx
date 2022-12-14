import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Header() {

  const [headerIsScrolled, setHeaderIsScrolled] = useState('header-initial');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setHeaderIsScrolled('header-scrolled');
    } else {
      setHeaderIsScrolled('header-initial');
    }
  });

  return (
    <header className={`${headerIsScrolled}`}>
        <Link to="/">
          <h3>Almight <span>Tech</span></h3>
        </Link>

        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/services">Service</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
  )
}
