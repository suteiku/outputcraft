const ITEMS = [
  'Responsive mobile sur tous les appareils',
  'Délai respecté ou remboursement partiel',
  '30 jours de corrections post-livraison',
  'Lighthouse mobile > 85 sur chaque projet',
]

export default function Garanties() {
  return (
    <div className="garanties" role="region" aria-label="Garanties">
      <div className="container">
        <div className="garanties-inner">
          <div className="garanties-left">
            <h2>Nos engagements,<br />écrits noir sur blanc.</h2>
            <p>Pas de bla-bla. Des garanties concrètes.</p>
          </div>
          <div className="garanties-list">
            {ITEMS.map(item => (
              <div key={item} className="garantie-item">{item}</div>
            ))}
          </div>
          <a href="#contact" className="btn" style={{ background: 'white', color: 'var(--orange)', fontSize: '0.9rem', flexShrink: 0, padding: '16px 28px' }}>
            Démarrer maintenant →
          </a>
        </div>
      </div>
    </div>
  )
}
