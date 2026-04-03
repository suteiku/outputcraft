'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: "Combien coûte un site web ?",
    a: "Nos forfaits commencent à 800€ (Starter, 1-3 pages) et vont jusqu'à 5 500€ (Premium, 15-25 pages). Le devis est gratuit et sans engagement. Vous payez 50% à la commande, 50% à la livraison.",
  },
  {
    q: "Dans quel délai mon site sera-t-il livré ?",
    a: "Starter : 7 à 10 jours. Standard : 2 à 3 semaines. Premium : 4 à 5 semaines. Si le délai n'est pas respecté, un remboursement partiel est appliqué.",
  },
  {
    q: "Pourquoi ne pas utiliser WordPress ou Wix ?",
    a: "Les CMS comme WordPress chargent des dizaines de fichiers inutiles. Un site codé à la main charge 3 à 10x plus vite, ce qui impacte directement votre classement Google et votre taux de conversion. Sur mobile, chaque seconde de chargement perdue = -7% de conversions en moyenne.",
  },
  {
    q: "Est-ce que vous gérez l'hébergement ?",
    a: "Nous livrons le site complet, hébergé ou en fichiers prêts à déployer. Pour l'hébergement, nous pouvons vous conseiller et configurer une solution (OVH, Vercel, Netlify) ou prendre en charge la mise en ligne directement.",
  },
  {
    q: "Je n'ai pas de contenu ni de photos. Ce n'est pas un problème ?",
    a: "Aucun problème. La rédaction du contenu est incluse dans toutes nos offres. Nous rédigeons les textes, sélectionnons des visuels libres de droits et structurons le tout pour maximiser votre référencement naturel.",
  },
  {
    q: "Que se passe-t-il si je veux modifier mon site après livraison ?",
    a: "Vous avez 30 jours de corrections gratuites après livraison. Ensuite, vous recevez les fichiers sources et les identifiants de gestion pour être totalement autonome. Une maintenance mensuelle (150-300€/mois) est disponible pour les mises à jour régulières.",
  },
]

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(prev => prev === i ? null : i)

  return (
    <section id="faq" className="section-light" aria-labelledby="faq-heading">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header reveal" style={{ textAlign: 'center', alignItems: 'center' }}>
          <span className="label">FAQ</span>
          <h2 id="faq-heading">Questions fréquentes.</h2>
          <p>Tout ce que vous devez savoir avant de nous contacter.</p>
        </div>

        <div className="faq-list reveal">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span className="faq-q-text">{q}</span>
                <div className="faq-icon"><PlusIcon /></div>
              </button>
              <div className="faq-a"><p>{a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
