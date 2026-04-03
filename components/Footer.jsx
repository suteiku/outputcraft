import CubeMark from './CubeMark'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo-text">
              <CubeMark height={24} />
              <span>OUTPUT<span className="logo-accent">CRAFT</span></span>
            </a>
            <p>Création de sites web professionnels sur mesure. Performance, conversion et SEO — livrés en 3 semaines maximum.</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#differentiateurs">Pourquoi nous</a></li>
              <li><a href="#offres">Nos offres</a></li>
              <li><a href="#pour-qui">Pour qui</a></li>
              <li><a href="#process">Comment ça marche</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:brunocadilhe3000@gmail.com">brunocadilhe3000@gmail.com</a></li>
              <li><a href="tel:+33600000000">+33 6 00 00 00 00</a></li>
              <li><a href="#contact">Devis gratuit</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 OUTPUTCRAFT — Bruno Cadilhe. Tous droits réservés.</span>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
