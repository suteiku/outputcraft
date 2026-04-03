const TAGS = ['HTML / CSS / JS', 'SEO technique', 'UX conversion', 'EEMI Paris', 'Île-de-France']

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-inner">
          <div className="about-photo-wrap reveal">
            <div className="about-photo-placeholder">
              <div className="about-initials">BC</div>
              <div className="about-badge">
                <div className="about-badge-dot" />
                <div className="about-badge-text">
                  <strong>Disponible pour de nouveaux projets</strong>
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </div>
            <div className="about-deco" />
          </div>

          <div className="about-content reveal reveal-delay-2">
            <span className="label">À propos</span>
            <h2 id="about-heading">Bruno Cadilhe,<br />fondateur d&rsquo;OUTPUTCRAFT.</h2>
            <p>
              Étudiant en management de projet digital à l&rsquo;EEMI Paris, j&rsquo;ai créé OUTPUTCRAFT pour offrir
              à chaque entreprise un site à la hauteur de son ambition — sans passer par des agences en silo
              qui sous-traitent à tour de rôle.
            </p>
            <p>
              Chez moi, c&rsquo;est moi qui code. Moi qui rédige. Moi qui optimise le SEO. Et moi qui répond au
              téléphone. Du premier brief à la mise en ligne, vous avez un seul interlocuteur qui connaît
              votre dossier de bout en bout.
            </p>
            <div className="about-tags">
              {TAGS.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>
              Parlons de votre projet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
