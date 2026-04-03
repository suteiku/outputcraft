'use client'
import { useState } from 'react'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.92h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4A16 16 0 0 0 13.6 16.1l.94-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left reveal">
            <span className="label">Contact</span>
            <h2 id="contact-heading">Parlons de<br />votre projet.</h2>
            <p>
              Dites-moi ce que vous faites, où vous êtes et ce que vous voulez accomplir.
              Je vous réponds sous 24h avec une première analyse et une estimation.
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon"><PhoneIcon /></div>
                <a href="tel:+33600000000">+33 6 00 00 00 00</a>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><MailIcon /></div>
                <a href="mailto:brunocadilhe3000@gmail.com">brunocadilhe3000@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><PinIcon /></div>
                <span>Paris &amp; Île-de-France · France entière</span>
              </div>
            </div>
          </div>

          <div className="contact-form reveal reveal-delay-2">
            <p className="form-title">Demande de devis gratuit</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Votre nom *</label>
                <input type="text" id="name" name="name" placeholder="Jean Dupont" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="jean@entreprise.fr" required autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="activity">Votre activité *</label>
                <input type="text" id="activity" name="activity" placeholder="Ex : Restaurant, plombier, coach..." required />
              </div>
              <div className="form-group">
                <label htmlFor="budget">Offre souhaitée</label>
                <select id="budget" name="budget">
                  <option value="">-- Choisir une offre --</option>
                  <option value="starter">Starter — 800€ à 1 200€</option>
                  <option value="standard">Standard — 1 800€ à 2 500€ ★</option>
                  <option value="premium">Premium — 3 500€ à 5 500€</option>
                  <option value="unknown">Je ne sais pas encore</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Parlez-nous de votre projet</label>
                <textarea id="message" name="message" placeholder="Décrivez votre projet en quelques mots..." />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                style={sent ? { background: '#00C851' } : {}}
                disabled={sent}
              >
                {sent ? 'Envoyé ✓' : (
                  <>
                    Envoyer ma demande
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
              <p className="form-note">Réponse garantie sous 24h · Devis gratuit et sans engagement</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
