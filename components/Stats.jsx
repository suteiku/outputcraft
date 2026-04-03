'use client'
import { useEffect, useRef } from 'react'

function animateCounter(el, target, duration = 1200) {
  let start = null
  function step(ts) {
    if (!start) start = ts
    const progress = Math.min((ts - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * target).toString()
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = String(target)
  }
  requestAnimationFrame(step)
}

const STATS = [
  { target: 100, accent: '%', label: 'Code écrit à la main,\nsans framework lourd' },
  { target: 30, accent: 'j', label: 'De corrections incluses\naprès livraison' },
  { target: 50, accent: '%', label: 'Acompte seulement à\nla commande' },
  { target: 1, accent: '', label: 'Seul interlocuteur,\ndu brief à la mise en ligne' },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const counterRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          counterRefs.current.forEach((el, i) => {
            if (el) animateCounter(el, STATS[i].target)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div id="stats" className="stats-bar" role="region" aria-label="Chiffres clés" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map(({ target, accent, label }, i) => (
            <div key={i} className={`stat-item reveal reveal-delay-${i}`}>
              <div className="stat-number">
                <span ref={el => { counterRefs.current[i] = el }}>0</span>
                <span className="accent">{accent}</span>
              </div>
              <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
