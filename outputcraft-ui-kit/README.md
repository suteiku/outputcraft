# OUTPUTCRAFT UI Kit

Design system portable pour pages d'audit et projets satellites. Reprend **exactement** le style visuel du site outputcraft.com.

---

## Installation

1. Copier tout le dossier `outputcraft-ui-kit/` dans votre projet Next.js
2. Installer les fonts dans votre `layout.jsx` :

```jsx
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

3. Importer le CSS dans votre `layout.jsx` ou `globals.css` :

```jsx
import '../outputcraft-ui-kit/styles.css'
```

4. Ajouter `<RevealProvider>` dans le body pour activer les animations au scroll :

```jsx
import RevealProvider from '../outputcraft-ui-kit/components/RevealProvider'

<body>
  <RevealProvider>
    {children}
  </RevealProvider>
</body>
```

---

## Palette de couleurs

| Token           | Valeur                          | Usage                     |
|-----------------|---------------------------------|---------------------------|
| `--black`       | `#0C0C0F`                       | Fond principal            |
| `--black-2`     | `#131318`                       | Fond sections alternées   |
| `--black-3`     | `#1A1A22`                       | Fond hover / tertiaire    |
| `--orange`      | `#FF4F0D`                       | Accent principal          |
| `--orange-dim`  | `rgba(255, 79, 13, 0.12)`      | Fond icones, tags         |
| `--orange-glow` | `rgba(255, 79, 13, 0.35)`      | Lueur boutons hover       |
| `--cream`       | `#F4F0E8`                       | Texte principal           |
| `--cream-dim`   | `rgba(244, 240, 232, 0.6)`     | Texte secondaire          |
| `--cream-faint` | `rgba(244, 240, 232, 0.08)`    | Fond hover outline        |
| `--white`       | `#FFFFFF`                       | Texte sur orange / cards  |
| `--gray`        | `#4A4A58`                       | Texte sur fond clair      |
| `--border`      | `rgba(244, 240, 232, 0.1)`     | Bordures subtiles         |

---

## Typographie

| Role     | Font                | Weights        | Variable CSS     |
|----------|---------------------|----------------|------------------|
| Display  | Bricolage Grotesque | 400, 600, 700, 800 | `--font-display` |
| Body     | DM Sans             | 300, 400, 500  | `--font-body`    |

---

## Composants disponibles

### Logo — `<CubeMark />`

```jsx
import CubeMark from './outputcraft-ui-kit/components/CubeMark'

{/* Nav */}
<div className="oc-logo">
  <CubeMark height={28} />
  <span className="oc-logo-name">OUTPUT<span className="oc-accent">CRAFT</span></span>
</div>

{/* Grand format */}
<CubeMark height={80} id="hero-cube" />
```

Prop `id` pour éviter les conflits de gradients SVG si plusieurs instances.

---

### Backgrounds atmosphériques

Fond quadrillé + bruit + lueur orange. Toujours dans un parent `position: relative; overflow: hidden;`.

```html
<section style="position: relative; overflow: hidden;">
  <div class="oc-noise-bg"></div>
  <div class="oc-grid-bg"></div>
  <div class="oc-glow-tr"></div>

  <div class="oc-container" style="position: relative; z-index: 1;">
    <!-- contenu -->
  </div>
</section>
```

| Classe          | Effet                                              |
|-----------------|-----------------------------------------------------|
| `oc-grid-bg`    | Quadrillage 80px, masqué en ellipse au centre       |
| `oc-noise-bg`   | Texture bruit subtile                               |
| `oc-glow-tr`    | Lueur orange radiale haut-droite                    |
| `oc-glow-bc`    | Lueur orange radiale bas-centre                     |
| `oc-gradient-bottom` | Dégradé orange vers le haut (sobre)            |

---

### Boutons

```html
{/* Primaire — orange plein */}
<a href="#" class="oc-btn oc-btn-primary">Voir l'audit complet</a>

{/* Primaire large */}
<a href="#" class="oc-btn oc-btn-primary oc-btn-lg">Demander un devis</a>

{/* Outline — bordure subtile */}
<a href="#" class="oc-btn oc-btn-outline">En savoir plus</a>

{/* Dark — noir, hover orange */}
<a href="#" class="oc-btn oc-btn-dark oc-btn-full">Choisir ce pack</a>
```

---

### Label (indicateur de section)

```html
<span class="oc-label">Performance</span>
<h2>Score Lighthouse</h2>
```

---

### Tag (pilule orange avec dot animé)

```html
<span class="oc-tag">Audit gratuit</span>
```

---

### Chip (pilule neutre)

```html
<span class="oc-chip">SEO</span>
<span class="oc-chip">UX</span>
<span class="oc-chip">Mobile</span>
```

---

### Badge (pilule orange pleine)

```html
<span class="oc-badge">Recommandé</span>
```

---

### Cards

#### Card sombre (fond noir, sur section noire — bento grid)

```html
<div class="oc-bento oc-bento-2">
  <div class="oc-card-dark reveal">
    <div class="oc-icon-box">
      <svg><!-- icone --></svg>
    </div>
    <h3>Titre</h3>
    <p>Description du point.</p>
  </div>
  <div class="oc-card-dark reveal reveal-delay-1">
    <!-- ... -->
  </div>
</div>
```

#### Card claire (fond blanc, sur section cream)

```html
<div class="oc-card-light">
  <span class="oc-label">Starter</span>
  <h3 style="font-size: 2.6rem; color: var(--black);">800€</h3>
  <div class="oc-divider-light"></div>
  <ul class="oc-checklist oc-checklist-dark">
    <li>1 à 3 pages</li>
    <li>Design sur mesure</li>
  </ul>
  <a href="#" class="oc-btn oc-btn-dark oc-btn-full">Choisir</a>
</div>
```

#### Card featured (noire avec ring orange, sur fond cream)

```html
<div class="oc-card-light oc-card-featured">
  <span class="oc-badge" style="position: absolute; top: -13px; left: 50%; transform: translateX(-50%);">
    Populaire
  </span>
  <!-- contenu avec couleurs cream -->
</div>
```

---

### Panel (formulaire / embed)

```html
<div class="oc-panel">
  <h3 style="font-size: 1.2rem; margin-bottom: 28px;">Votre audit</h3>
  <div class="oc-form-group">
    <label>URL du site</label>
    <input type="url" placeholder="https://votre-site.fr" />
  </div>
  <div class="oc-form-group">
    <label>Secteur d'activité</label>
    <select>
      <option>Plomberie</option>
      <option>Électricité</option>
    </select>
  </div>
  <button class="oc-btn oc-btn-primary oc-btn-full">Lancer l'audit</button>
</div>
```

---

### Statistiques

```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr); background: var(--black-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 40px 0;">
  <div class="oc-stat">
    <span class="oc-stat-number">23<span class="oc-accent">/100</span></span>
    <span class="oc-stat-label">Score Lighthouse mobile</span>
  </div>
  <div class="oc-stat">
    <span class="oc-stat-number">8.2<span class="oc-accent">s</span></span>
    <span class="oc-stat-label">Temps de chargement</span>
  </div>
  <!-- ... -->
</div>
```

---

### Step number (process / timeline)

```html
<div class="oc-timeline" style="display: grid; grid-template-columns: repeat(5, 1fr);">
  <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px;">
    <div class="oc-step-number">1</div>
    <h3>Analyse</h3>
    <p>On scanne votre site de A à Z.</p>
  </div>
  <!-- ... -->
</div>
```

---

### Icon box

```html
{/* Grand (52px) */}
<div class="oc-icon-box">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
  </svg>
</div>

{/* Petit (44px, sans bordure) */}
<div class="oc-icon-box-sm">🔧</div>

{/* Contact (40px) */}
<div class="oc-icon-box-contact">
  <svg><!-- ... --></svg>
</div>
```

---

### Barre garanties (fond orange)

```html
<div class="oc-bar-orange">
  <div class="oc-container" style="display: flex; align-items: center; justify-content: space-between; gap: 32px;">
    <div>
      <h2 style="font-size: clamp(1.6rem, 2.5vw, 2.2rem);">Nos garanties</h2>
      <p style="margin-top: 8px;">Aucun risque pour vous.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div class="oc-check-item">Satisfait ou retravaillé</div>
      <div class="oc-check-item">Livraison dans les délais</div>
      <div class="oc-check-item">Support 30 jours inclus</div>
    </div>
  </div>
</div>
```

---

### FAQ Accordion

```jsx
import FAQAccordion from './outputcraft-ui-kit/components/FAQ'

const faqData = [
  { q: "Combien de temps dure un audit ?", a: "L'audit complet prend 24 à 48h..." },
  { q: "C'est vraiment gratuit ?", a: "Oui, l'audit initial est offert..." },
]

<FAQAccordion items={faqData} />
```

---

### Glass panel (effet blur)

```html
<div class="oc-glass" style="display: flex; align-items: center; gap: 14px;">
  <div class="oc-status-dot"></div>
  <div>
    <strong style="font-family: var(--font-display); font-size: 0.88rem; color: var(--cream);">
      Disponible
    </strong>
    <span style="font-size: 0.76rem; color: var(--cream-dim);">Réponse sous 24h</span>
  </div>
</div>
```

---

### Reveal animations

Ajouter `class="reveal"` sur tout element qui doit apparaitre au scroll. Ajouter des delays avec `reveal-delay-1` a `reveal-delay-4`.

```html
<div class="reveal">Apparait au scroll</div>
<div class="reveal reveal-delay-2">Apparait 0.2s apres</div>
```

Requiert `<RevealProvider>` dans le layout.

---

### Section Header

```html
<div class="oc-section-header reveal">
  <span class="oc-label">Performance</span>
  <h2>Votre site au microscope</h2>
  <p>On analyse chaque aspect de votre presence en ligne.</p>
</div>
```

---

### Sections (backgrounds)

```html
{/* Section fond noir (defaut) */}
<section class="oc-section">
  <div class="oc-container">...</div>
</section>

{/* Section fond noir-2 avec bordures */}
<section class="oc-section oc-section-dark">
  <div class="oc-container">...</div>
</section>

{/* Section fond cream (texte noir) */}
<section class="oc-section oc-section-light">
  <div class="oc-container">...</div>
</section>
```

---

### Dividers

```html
<div class="oc-divider"></div>      {/* Sur fond sombre */}
<div class="oc-divider-light"></div> {/* Sur fond clair */}
```

---

### Checklist

```html
{/* Sur fond sombre */}
<ul class="oc-checklist">
  <li>Site rapide (< 1s)</li>
  <li>SEO optimise</li>
</ul>

{/* Sur fond clair */}
<ul class="oc-checklist oc-checklist-dark">
  <li>Design responsive</li>
  <li>Formulaire de contact</li>
</ul>
```

---

## Structure des fichiers

```
outputcraft-ui-kit/
  styles.css              ← Tous les tokens + composants CSS
  README.md               ← Ce fichier
  components/
    CubeMark.jsx          ← Logo SVG isometrique
    RevealProvider.jsx     ← Wrapper animations scroll
    FAQ.jsx               ← Accordion FAQ reutilisable
  hooks/
    useReveal.js           ← IntersectionObserver hook
```

---

## Exemple : page d'audit complete

```jsx
import RevealProvider from '../outputcraft-ui-kit/components/RevealProvider'
import CubeMark from '../outputcraft-ui-kit/components/CubeMark'
import FAQAccordion from '../outputcraft-ui-kit/components/FAQ'

export default function AuditPage() {
  return (
    <RevealProvider>
      {/* Hero avec grille + glow */}
      <section className="oc-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="oc-noise-bg" />
        <div className="oc-grid-bg" />
        <div className="oc-glow-tr" />
        <div className="oc-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="oc-logo" style={{ marginBottom: 32 }}>
            <CubeMark height={32} />
            <span className="oc-logo-name">OUTPUT<span className="oc-accent">CRAFT</span></span>
          </div>
          <span className="oc-tag">Audit offert</span>
          <h1 style={{ marginTop: 24, maxWidth: 800 }}>
            Audit de performance<br /><span className="oc-accent">[NOM CLIENT]</span>
          </h1>
          <p style={{ marginTop: 20, maxWidth: 560 }}>
            Analyse complete de votre site web : vitesse, SEO, UX, mobile, securite.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--black-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '40px 0' }}>
        <div className="oc-stat">
          <span className="oc-stat-number">23<span className="oc-accent">/100</span></span>
          <span className="oc-stat-label">Lighthouse mobile</span>
        </div>
        <div className="oc-stat">
          <span className="oc-stat-number">8.2<span className="oc-accent">s</span></span>
          <span className="oc-stat-label">Chargement</span>
        </div>
        <div className="oc-stat">
          <span className="oc-stat-number">12</span>
          <span className="oc-stat-label">Erreurs SEO</span>
        </div>
        <div className="oc-stat">
          <span className="oc-stat-number">0<span className="oc-accent">/5</span></span>
          <span className="oc-stat-label">Score mobile</span>
        </div>
      </div>

      {/* Problemes detectes */}
      <section className="oc-section">
        <div className="oc-container">
          <div className="oc-section-header reveal">
            <span className="oc-label">Diagnostic</span>
            <h2>Problemes detectes</h2>
          </div>
          <div className="oc-bento oc-bento-2">
            <div className="oc-card-dark reveal">
              <div className="oc-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
                </svg>
              </div>
              <h3>Temps de chargement critique</h3>
              <p>Votre site met 8.2 secondes a charger. 53% des visiteurs quittent apres 3 secondes.</p>
            </div>
            <div className="oc-card-dark reveal reveal-delay-1">
              {/* autre probleme */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="oc-bar-orange">
        <div className="oc-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>On corrige tout ca ?</h2>
            <p style={{ marginTop: 8 }}>Reservez un appel de 30 min, gratuit et sans engagement.</p>
          </div>
          <a href="#" className="oc-btn" style={{ background: 'white', color: 'var(--orange)', fontWeight: 700 }}>
            Reserver un appel
          </a>
        </div>
      </div>
    </RevealProvider>
  )
}
```
