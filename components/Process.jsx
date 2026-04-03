const STEPS = [
  { n: '01', title: 'Appel découverte', desc: '15-30 min pour comprendre votre activité, vos objectifs et votre cible.' },
  { n: '02', title: 'Mini-audit offert', desc: 'Analyse de votre présence en ligne actuelle et opportunités identifiées.' },
  { n: '03', title: 'Proposition', desc: 'Devis précis, maquette rapide, planning de livraison. Pas de surprise.' },
  { n: '04', title: 'Création & livraison', desc: '50% à la commande, 50% à la livraison. Code livré avec les fichiers sources.' },
  { n: '05', title: 'Formation & suivi', desc: 'Guide d\'utilisation, formation et 30 jours de corrections inclus.' },
]

export default function Process() {
  return (
    <section id="process" className="section-dark" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', alignItems: 'center' }}>
          <span className="label">Comment ça marche</span>
          <h2 id="process-heading">De zéro à en ligne<br />en 5 étapes simples.</h2>
        </div>

        <div className="process-grid">
          {STEPS.map(({ n, title, desc }, i) => (
            <div key={n} className={`process-step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className="step-number">{n}</div>
              <div className="step-content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
