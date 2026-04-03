const SECTORS = [
  { icon: '🏪', title: 'Commerce & Retail', desc: 'Boutiques physiques, e-commerce, épiceries, concept stores.' },
  { icon: '🍽️', title: 'Restauration', desc: 'Restaurants, traiteurs, food trucks, dark kitchens.' },
  { icon: '🔧', title: 'Artisanat & BTP', desc: 'Plombiers, électriciens, peintres, menuisiers, CVC.' },
  { icon: '💼', title: 'Professions libérales', desc: 'Avocats, comptables, consultants, coaches, thérapeutes.' },
  { icon: '🏥', title: 'Santé & Bien-être', desc: 'Médecins, kinés, ostéos, salons de beauté, studios yoga.' },
  { icon: '🚀', title: 'Startups & PME', desc: 'Landing pages, sites institutionnels, vitrines produit.' },
]

export default function PourQui() {
  return (
    <section id="pour-qui" aria-labelledby="pour-qui-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Pour qui</span>
          <h2 id="pour-qui-heading">Un site efficace pour<br />chaque type d&rsquo;activité.</h2>
          <p>Que vous soyez indépendant, TPE ou PME, on construit un site taillé pour votre secteur et vos objectifs.</p>
        </div>

        <div className="sectors-grid">
          {SECTORS.map(({ icon, title, desc }, i) => (
            <div key={title} className={`sector-item reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ''}`}>
              <div className="sector-icon">{icon}</div>
              <div className="sector-text">
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
