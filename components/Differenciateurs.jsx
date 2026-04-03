export default function Differenciateurs() {
  return (
    <section id="differentiateurs" aria-labelledby="diff-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Pourquoi OUTPUTCRAFT</span>
          <h2 id="diff-heading">On ne fait pas &ldquo;un site&rdquo;.<br />On construit un outil de vente.</h2>
          <p>Chaque décision de design est prise pour maximiser vos conversions. Pas pour faire joli dans un portfolio.</p>
        </div>

        <div className="diff-grid">
          <div className="diff-item reveal">
            <span className="diff-num">01</span>
            <div className="diff-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3>Performance extrême</h3>
            <p>HTML, CSS et JS écrits à la main. Aucun framework inutile. Vos pages se chargent en moins d&rsquo;une seconde, même sur mobile 4G.</p>
          </div>

          <div className="diff-item reveal reveal-delay-1">
            <span className="diff-num">02</span>
            <div className="diff-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <h3>SEO local &amp; national</h3>
            <p>Structure sémantique, Schema.org, meta balises optimisées, contenus ciblés par zone. Vos clients vous trouvent sur Google avant vos concurrents.</p>
          </div>

          <div className="diff-item reveal reveal-delay-2">
            <span className="diff-num">03</span>
            <div className="diff-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3>Conversion par design</h3>
            <p>Un seul bouton d&rsquo;action par section. Formulaires à 3 champs max. Numéro de téléphone toujours visible. Chaque élément est placé pour déclencher le passage à l&rsquo;acte.</p>
          </div>

          <div className="diff-item reveal reveal-delay-3">
            <span className="diff-num">04</span>
            <div className="diff-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Un seul interlocuteur</h3>
            <p>Vous parlez directement à la personne qui code. Pas d&rsquo;intermédiaire, pas de chef de projet qui transmet des briefs tronqués. Votre vision arrive intacte.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
