'use client'
import { useEffect, useRef } from 'react'

function animateCounter(el, target, duration = 1600) {
  let start = null
  const isDecimal = target < 2 && target > 0
  function step(ts) {
    if (!start) start = ts
    const progress = Math.min((ts - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = isDecimal
      ? (eased * target).toFixed(1)
      : Math.floor(eased * target).toString()
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = isDecimal ? target.toFixed(1) : String(target)
  }
  requestAnimationFrame(step)
}

export default function Hero() {
  const countersRef = useRef([])

  useEffect(() => {
    const timers = countersRef.current.map((el, i) =>
      setTimeout(() => el && animateCounter(el, parseFloat(el.dataset.target)), 900 + i * 80)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section id="hero" className="hero" aria-label="Accueil">
      <div className="hero-bg">
        <div className="hero-grid" />
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-tag">Paris &amp; Île-de-France · France entière</div>

          <h1 className="hero-title">
            Votre site web.<br />
            <em style={{ whiteSpace: 'nowrap' }}>Livré en 3 semaines.</em><br />
            Zéro compromis.
          </h1>

          <p className="hero-sub">
            Des sites sur mesure, codés à la main, pensés pour convertir vos visiteurs en clients.
            Un seul interlocuteur. Des résultats mesurables.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Obtenir un devis gratuit
              <ArrowIcon />
            </a>
            <a href="#offres" className="btn btn-outline btn-lg">Voir les offres</a>
          </div>

          <div className="hero-proof">
            {[
              { target: 85, prefix: '', suffix: '+', label: 'Score Lighthouse mobile' },
              { target: 1, prefix: '< ', suffix: 's', label: 'Temps de chargement' },
              { target: 21, prefix: '', suffix: ' jours', label: 'Délai max de livraison' },
              { target: 0, prefix: '', suffix: '', label: 'Sous-traitant' },
            ].map(({ target, prefix, suffix, label }, i) => (
              <div key={label} style={{ display: 'contents' }}>
                {i > 0 && <div className="hero-proof-divider" />}
                <div className="hero-proof-item">
                  <strong>
                    {prefix}
                    <span ref={el => { countersRef.current[i] = el }} data-target={target}>0</span>
                    {suffix}
                  </strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
