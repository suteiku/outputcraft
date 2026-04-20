'use client'
import { useEffect } from 'react'

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
  useEffect(() => {
    // Avoid double-init on hot reload
    if (window.Cal && window.Cal.loaded) {
      window.Cal('inline', {
        elementOrSelector: '#cal-embed',
        calLink: 'bruno.crp/30min',
        layout: 'month_view',
      })
      window.Cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#111111' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
      return
    }

    ;(function (C, A, L) {
      const p = (a, ar) => { a.q.push(ar) }
      const d = C.document
      C.Cal = C.Cal || function (...args) {
        const cal = C.Cal
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (args[0] === L) {
          const api = (...a) => p(api, a)
          const ns = args[1]
          api.q = api.q || []
          if (typeof ns === 'string') {
            cal.ns[ns] = cal.ns[ns] || api
            p(cal.ns[ns], args)
            p(cal, ['-', ns, args])
          } else { p(cal, args) }
          return
        }
        p(cal, args)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', { origin: 'https://cal.com' })
    window.Cal('inline', {
      elementOrSelector: '#cal-embed',
      calLink: 'bruno.crp/30min',
      layout: 'month_view',
    })
    window.Cal('ui', {
      theme: 'light',
      styles: { branding: { brandColor: '#FF4F0D' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-header reveal">
          <span className="label">Contact</span>
          <h2 id="contact-heading">Réservez un appel de 30 min.</h2>
          <p>
            On fait le point sur votre projet, votre site actuel et vos objectifs.
            Appel gratuit, sans engagement — et on arrive préparés.
          </p>
        </div>

        <div className="cal-embed-wrap reveal reveal-delay-2">
          <div id="cal-embed" />
        </div>

        <div className="contact-info-row reveal reveal-delay-3">
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
    </section>
  )
}
