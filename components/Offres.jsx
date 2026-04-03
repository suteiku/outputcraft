const FEATURES = {
  starter: ['1 à 3 pages sur mesure', 'Design responsive mobile', 'Rédaction du contenu incluse', 'SEO local de base', 'Livraison en 7 à 10 jours', '30 jours de corrections'],
  standard: ['5 à 8 pages complètes', 'Identité visuelle complète', 'SEO complet (Schema.org, méta)', 'Lighthouse mobile > 85', 'Formulaires de contact optimisés', 'Livraison en 2 à 3 semaines', '30 jours de corrections'],
  premium: ['15 à 25 pages', 'Pages par zone géographique', '8 à 10 articles de blog', 'Lighthouse mobile > 90', 'Pages de conversion dédiées', 'Formation à l\'utilisation', 'Livraison en 4 à 5 semaines'],
}

function FeatureList({ items }) {
  return (
    <ul className="offer-features">
      {items.map(f => <li key={f}>{f}</li>)}
    </ul>
  )
}

export default function Offres() {
  return (
    <section id="offres" className="section-light" aria-labelledby="offres-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Nos offres</span>
          <h2 id="offres-heading">Des tarifs clairs.<br />Des livrables précis.</h2>
          <p>Pas de surprise. Pas de devis à rallonge. Vous savez exactement ce que vous obtenez.</p>
        </div>

        <div className="offers-grid">
          <div className="offer-card reveal">
            <div className="offer-top">
              <p className="offer-name">Starter</p>
              <div className="offer-price"><sub>à partir de</sub>800<sup>€</sup></div>
              <p className="offer-tagline">Pour lancer votre présence en ligne rapidement.</p>
            </div>
            <div className="offer-divider" />
            <FeatureList items={FEATURES.starter} />
            <div className="offer-cta">
              <a href="#contact" className="btn">Commencer →</a>
            </div>
          </div>

          <div className="offer-card featured reveal reveal-delay-1">
            <div className="offer-badge">Le plus populaire</div>
            <div className="offer-top">
              <p className="offer-name">Standard</p>
              <div className="offer-price"><sub>à partir de</sub>1&nbsp;800<sup>€</sup></div>
              <p className="offer-tagline">Le meilleur rapport qualité/résultats pour la majorité des entreprises.</p>
            </div>
            <div className="offer-divider" />
            <FeatureList items={FEATURES.standard} />
            <div className="offer-cta">
              <a href="#contact" className="btn">Je veux ce pack →</a>
            </div>
          </div>

          <div className="offer-card reveal reveal-delay-2">
            <div className="offer-top">
              <p className="offer-name">Premium</p>
              <div className="offer-price"><sub>à partir de</sub>3&nbsp;500<sup>€</sup></div>
              <p className="offer-tagline">Pour dominer votre marché localement et nationalement.</p>
            </div>
            <div className="offer-divider" />
            <FeatureList items={FEATURES.premium} />
            <div className="offer-cta">
              <a href="#contact" className="btn">En savoir plus →</a>
            </div>
          </div>
        </div>

        <div className="maintenance-bar reveal">
          <div>
            <p className="maintenance-name">Option Maintenance</p>
            <h3>Suivi mensuel — 150 à 300€/mois</h3>
            <p>Mises à jour de contenu, suivi des performances, corrections techniques, support email.</p>
          </div>
          <a href="#contact" className="btn">Ajouter la maintenance</a>
        </div>
      </div>
    </section>
  )
}
