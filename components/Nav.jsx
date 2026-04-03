'use client'
import { useState, useEffect } from 'react'
import CubeMark from './CubeMark'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navigation principale">
        <div className="container">
          <a href="#hero" className="nav-logo">
            <CubeMark height={28} />
            <span className="nav-logo-name">OUTPUT<span className="logo-accent">CRAFT</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="#differentiateurs">Pourquoi nous</a></li>
            <li><a href="#offres">Offres</a></li>
            <li><a href="#pour-qui">Pour qui</a></li>
            <li><a href="#process">Comment ça marche</a></li>
            <li><a href="#about">À propos</a></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:+33600000000" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.92h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4A16 16 0 0 0 13.6 16.1l.94-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Appeler
            </a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>Devis gratuit</a>
          </div>
          <button className="burger" onClick={toggleMenu} aria-label="Menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <a href="#differentiateurs" onClick={closeMenu}>Pourquoi nous</a>
        <a href="#offres" onClick={closeMenu}>Offres</a>
        <a href="#pour-qui" onClick={closeMenu}>Pour qui</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#about" onClick={closeMenu}>À propos</a>
        <a href="#contact" onClick={closeMenu} style={{ color: 'var(--orange)' }}>Devis gratuit →</a>
      </div>
    </>
  )
}
