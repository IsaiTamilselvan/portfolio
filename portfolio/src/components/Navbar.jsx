import React, { useState, useEffect } from 'react'
import './Navbar.css'

// Nav links list — easy to add/remove items here
const NAV_LINKS = [
  { label: 'About',    href: '#about'     },
  { label: 'Skills',   href: '#skills'    },
  { label: 'Projects', href: '#projects'  },
  { label: 'Journey',  href: '#journey'   },
  { label: 'Contact',  href: '#contact'   },
]

function Navbar() {
  // scrolled state: adds a shadow when user scrolls down
  const [scrolled, setScrolled] = useState(false)
  // menuOpen state: for mobile hamburger toggle
  const [menuOpen, setMenuOpen] = useState(false)

  // Listen for scroll and update state
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    // cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a href="#" className="navbar__logo">isai.dev</a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
