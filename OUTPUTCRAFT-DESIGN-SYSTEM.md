# OUTPUTCRAFT — Design System Complet
### Référence unique pour générer toute page (audits, propositions, landing pages)

> **Comment utiliser ce fichier :** Donne-le tel quel à ton workflow ou à un LLM avec les variables client remplies.
> Le CSS est copié mot-pour-mot depuis le site. Les composants HTML fonctionnent seuls sans framework.

---

## TABLE DES MATIÈRES
1. [Identité de marque](#1-identité-de-marque)
2. [Couleurs](#2-couleurs)
3. [Typographie](#3-typographie)
4. [Layout & Espacement](#4-layout--espacement)
5. [Animations](#5-animations)
6. [Composants — Boutons](#6-boutons)
7. [Composants — Navigation](#7-navigation)
8. [Composants — Hero](#8-hero)
9. [Composants — Stats Bar](#9-stats-bar)
10. [Composants — Section Header](#10-section-header)
11. [Composants — Cards / Grilles](#11-cards--grilles)
12. [Composants — FAQ Accordéon](#12-faq-accordéon)
13. [Composants — Formulaire Contact](#13-formulaire-contact)
14. [Composants — Footer](#14-footer)
15. [Logo SVG inline](#15-logo-svg-inline)
16. [CSS complet à copier-coller](#16-css-complet)
17. [Template page d'audit](#17-template-page-daudit)
18. [Variables de personnalisation](#18-variables-de-personnalisation)

---

## 1. IDENTITÉ DE MARQUE

| Attribut | Valeur |
|---|---|
| **Nom** | OUTPUTCRAFT |
| **Domaine** | outputcraft.com |
| **Fondateur** | Bruno Cadilhe |
| **Email** | brunocadilhe3000@gmail.com |
| **Téléphone** | +33 6 00 00 00 00 |
| **Localisation** | Paris, Île-de-France (France entière) |
| **Positionnement** | Sites web sur mesure, ultra-rapides, livrés en 3 semaines max |
| **Cible** | Toute entreprise, tout secteur, Île-de-France + France |
| **Ton** | Direct, expert, chiffres concrets, zéro jargon creux |

**Promesses clés :**
- Lighthouse mobile > 85 garanti
- Temps de chargement < 1 seconde
- Livraison en 7 à 21 jours selon l'offre
- Zéro sous-traitant — Bruno code, rédige, optimise et répond

---

## 2. COULEURS

### Variables CSS (à injecter dans `:root`)

```css
:root {
  /* Fonds */
  --black:        #0C0C0F;               /* fond principal du site */
  --black-2:      #131318;               /* sections alternées, footer */
  --black-3:      #1A1A22;               /* cards, surfaces élevées */

  /* Accent */
  --orange:       #FF4F0D;               /* couleur de marque — CTAs, labels, highlights */
  --orange-dim:   rgba(255, 79, 13, 0.12);  /* fond teinté (badges, icônes) */
  --orange-glow:  rgba(255, 79, 13, 0.35);  /* ombre portée des boutons */

  /* Texte */
  --cream:        #F4F0E8;               /* texte principal sur fond sombre */
  --cream-dim:    rgba(244, 240, 232, 0.6); /* texte secondaire */
  --cream-faint:  rgba(244, 240, 232, 0.08);/* surfaces très subtiles */
  --white:        #FFFFFF;

  /* Neutres */
  --gray:         #4A4A58;
  --gray-light:   #2E2E3A;
  --border:       rgba(244, 240, 232, 0.1); /* bordures fines universelles */

  /* UI */
  --radius:       4px;
  --radius-lg:    12px;
  --transition:   0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Référence rapide

| Token | Hex / valeur | Utilisation |
|---|---|---|
| `--black` | `#0C0C0F` | Fond corps de page |
| `--black-2` | `#131318` | Stats bar, footer, sections dark |
| `--black-3` | `#1A1A22` | Cards, formulaire |
| `--orange` | `#FF4F0D` | CTAs, labels, accents, soulignements |
| `--cream` | `#F4F0E8` | Texte principal (fond sombre) |
| `--cream-dim` | `rgba(244,240,232,0.6)` | Texte secondaire |
| Section claire | `var(--cream)` bg + `var(--black)` texte | Classes `.section-light` |

---

## 3. TYPOGRAPHIE

### Polices

| Rôle | Famille | Poids disponibles |
|---|---|---|
| **Display** (titres, nav, boutons, labels) | Bricolage Grotesque | 400, 600, 700, 800 |
| **Body** (paragraphes, inputs) | DM Sans | 300, 400, 500 |

### Import HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### CSS de base

```css
html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--black);
  color: var(--cream);
  font-family: 'DM Sans', system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: 'Bricolage Grotesque', system-ui, sans-serif;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h1 { font-size: clamp(2.8rem, 6.5vw, 6.5rem); }
h2 { font-size: clamp(2rem, 3.5vw, 3rem); letter-spacing: -0.025em; }
h3 { font-size: 1.25rem; letter-spacing: -0.02em; }

p  { font-size: 1rem; line-height: 1.7; color: var(--cream-dim); font-weight: 300; }
```

### Chip label (placé au-dessus des H2)

```html
<span class="label">AUDIT SEO</span>
```

```css
.label {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
}
```

---

## 4. LAYOUT & ESPACEMENT

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

section { padding: 100px 0; }

/* Section fond alterné sombre */
.section-dark {
  background: var(--black-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* Section fond clair (texte noir) */
.section-light { background: var(--cream); }
.section-light h2 { color: var(--black); }
.section-light p  { color: var(--gray); }
.section-light .label { color: var(--orange); }
```

---

## 5. ANIMATIONS

### CSS keyframes

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.4); }
}
@keyframes scrollDrop {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
```

### Reveal au scroll

```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible        { opacity: 1; transform: translateY(0); }
.reveal-delay-1        { transition-delay: 0.1s; }
.reveal-delay-2        { transition-delay: 0.2s; }
.reveal-delay-3        { transition-delay: 0.3s; }
.reveal-delay-4        { transition-delay: 0.4s; }
```

```js
// Coller juste avant </body>
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
)
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
```

---

## 6. BOUTONS

```html
<!-- CTA principal orange -->
<a href="#contact" class="btn btn-primary">Obtenir mon audit gratuit →</a>

<!-- CTA secondaire contour -->
<a href="#details" class="btn btn-outline">Voir le détail</a>

<!-- Versions large (hero) -->
<a href="#contact" class="btn btn-primary btn-lg">Démarrer →</a>
<a href="#offres"  class="btn btn-outline btn-lg">Voir les offres</a>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius);
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  text-decoration: none;
}
.btn-primary       { background: var(--orange); color: #fff; }
.btn-primary:hover { background: #e84400; transform: translateY(-2px); box-shadow: 0 8px 32px var(--orange-glow); }
.btn-outline       { background: transparent; color: var(--cream); border: 1px solid var(--border); }
.btn-outline:hover { background: var(--cream-faint); border-color: var(--cream-dim); }
.btn-lg            { padding: 18px 36px; font-size: 1rem; }
```

---

## 7. NAVIGATION

```html
<nav class="nav" role="navigation">
  <div class="container">
    <a href="#hero" class="nav-logo">
      <!-- Logo SVG (voir section 15) -->
      <span class="nav-logo-name">OUTPUT<span class="logo-accent">CRAFT</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="#analyse">Analyse</a></li>
      <li><a href="#problemes">Problèmes</a></li>
      <li><a href="#offres">Notre offre</a></li>
      <li><a href="#process">Comment ça marche</a></li>
    </ul>
    <div class="nav-cta">
      <a href="tel:+33600000000" class="btn btn-outline" style="padding:10px 20px;font-size:0.82rem">Appeler</a>
      <a href="#contact" class="btn btn-primary" style="padding:10px 20px;font-size:0.82rem">Devis gratuit</a>
    </div>
  </div>
</nav>
```

```css
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 20px 0;
  transition: background 0.4s ease, padding 0.4s ease;
}
.nav.scrolled {
  background: rgba(12,12,15,0.88);
  backdrop-filter: blur(20px);
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}
.nav .container  { display: flex; align-items: center; justify-content: space-between; }
.nav-logo        { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.nav-logo-name   { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--cream); letter-spacing: -0.03em; }
.logo-accent     { color: var(--orange); }
.nav-links       { display: flex; align-items: center; gap: 36px; list-style: none; }
.nav-links a     { font-size: 0.88rem; color: var(--cream-dim); text-decoration: none; transition: color var(--transition); }
.nav-links a:hover { color: var(--cream); }
.nav-cta         { display: flex; align-items: center; gap: 12px; }
```

```js
// Sticky nav
window.addEventListener('scroll', () => {
  document.querySelector('.nav').classList.toggle('scrolled', window.scrollY > 50)
}, { passive: true })
```

---

## 8. HERO

```html
<section id="hero" class="hero">
  <div class="hero-bg"><div class="hero-grid"></div></div>
  <div class="container">
    <div class="hero-inner">

      <div class="hero-tag">Audit gratuit — [CLIENT_URL]</div>

      <h1 class="hero-title">
        Votre site perd<br />
        <em style="white-space:nowrap">des clients chaque jour.</em><br />
        Voici pourquoi.
      </h1>

      <p class="hero-sub">
        Analyse complète de [CLIENT_URL] réalisée le [DATE_AUDIT].
        Score global : [SCORE_GLOBAL]/100. Voici ce qu'on a trouvé — et comment le corriger.
      </p>

      <div class="hero-actions">
        <a href="#contact" class="btn btn-primary btn-lg">
          Corriger mon site
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#analyse" class="btn btn-outline btn-lg">Voir l'analyse</a>
      </div>

      <div class="hero-proof">
        <div class="hero-proof-item">
          <strong><span data-counter>[SCORE_LIGHTHOUSE]</span></strong>
          <span>Score Lighthouse</span>
        </div>
        <div class="hero-proof-divider"></div>
        <div class="hero-proof-item">
          <strong><span data-counter>[TEMPS_CHARGEMENT]</span>s</strong>
          <span>Temps de chargement</span>
        </div>
        <div class="hero-proof-divider"></div>
        <div class="hero-proof-item">
          <strong><span data-counter>[NB_PROBLEMES]</span></strong>
          <span>Problèmes identifiés</span>
        </div>
        <div class="hero-proof-divider"></div>
        <div class="hero-proof-item">
          <strong><span data-counter>[SCORE_MOBILE]</span></strong>
          <span>Score mobile</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
.hero {
  min-height: 100vh; display: flex; align-items: center;
  position: relative; overflow: hidden; padding: 120px 0 80px;
}
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.hero-bg::after {
  content: '';
  position: absolute; top: -20%; right: -10%; width: 70%; height: 100%;
  background: radial-gradient(ellipse at 70% 30%, rgba(255,79,13,0.18) 0%, transparent 65%);
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(244,240,232,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244,240,232,0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
}
.hero-inner    { position: relative; z-index: 1; }
.hero-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--orange-dim); border: 1px solid rgba(255,79,13,0.25);
  border-radius: 100px; padding: 6px 16px; margin-bottom: 32px;
  font-size: 0.78rem; font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--orange);
  animation: fadeUp 0.8s 0.2s ease both;
}
.hero-tag::before {
  content: ''; width: 6px; height: 6px;
  background: var(--orange); border-radius: 50%; animation: pulse 2s infinite;
}
.hero-title {
  font-size: clamp(2.8rem, 6.5vw, 6.5rem); font-weight: 800;
  line-height: 1.0; letter-spacing: -0.03em; max-width: 900px;
  animation: fadeUp 0.9s 0.35s ease both;
}
.hero-title em {
  font-style: normal; color: var(--orange); position: relative;
}
.hero-title em::after {
  content: ''; position: absolute; bottom: 4px; left: 0; right: 0;
  height: 3px; background: var(--orange); opacity: 0.4; border-radius: 2px;
}
.hero-sub {
  margin-top: 28px; font-size: clamp(1rem, 1.4vw, 1.2rem); color: var(--cream-dim);
  max-width: 560px; line-height: 1.7; font-weight: 300;
  animation: fadeUp 0.9s 0.5s ease both;
}
.hero-actions { margin-top: 44px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; animation: fadeUp 0.9s 0.65s ease both; }
.hero-proof   { margin-top: 80px; display: flex; align-items: center; gap: 32px; flex-wrap: wrap; animation: fadeUp 0.9s 0.8s ease both; }
.hero-proof-divider { width: 1px; height: 36px; background: var(--border); }
.hero-proof-item { display: flex; flex-direction: column; gap: 2px; }
.hero-proof-item strong { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--cream); letter-spacing: -0.03em; }
.hero-proof-item span  { font-size: 0.78rem; color: var(--cream-dim); }
```

---

## 9. STATS BAR

Barre 4 chiffres animés sur fond `--black-2`.

```html
<div class="stats-bar">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number"><span class="counter" data-target="85">&gt;</span><span class="accent">85</span></div>
        <div class="stat-label">Score Lighthouse mobile garanti</div>
      </div>
      <div class="stat-item">
        <div class="stat-number"><span class="accent">&lt; 1</span>s</div>
        <div class="stat-label">Temps de chargement</div>
      </div>
      <div class="stat-item">
        <div class="stat-number"><span class="accent">21</span> jours</div>
        <div class="stat-label">Délai max de livraison</div>
      </div>
      <div class="stat-item">
        <div class="stat-number"><span class="accent">0</span></div>
        <div class="stat-label">Sous-traitant</div>
      </div>
    </div>
  </div>
</div>
```

```css
.stats-bar    { padding: 40px 0; background: var(--black-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.stats-grid   { display: grid; grid-template-columns: repeat(4, 1fr); }
.stat-item    { padding: 24px 32px; border-right: 1px solid var(--border); display: flex; flex-direction: column; gap: 4px; }
.stat-item:last-child { border-right: none; }
.stat-number  { font-family: 'Bricolage Grotesque', sans-serif; font-size: 2.6rem; font-weight: 800; color: var(--cream); letter-spacing: -0.04em; line-height: 1; }
.stat-number .accent { color: var(--orange); }
.stat-label   { font-size: 0.82rem; color: var(--cream-dim); line-height: 1.4; }
```

---

## 10. SECTION HEADER

Pattern exact répété avant chaque section.

```html
<div class="section-header reveal">
  <span class="label">ANALYSE TECHNIQUE</span>
  <h2>Ce qu'on a trouvé<br />sur votre site.</h2>
  <p>Audit réalisé le [DATE_AUDIT] sur [CLIENT_URL]. Voici les problèmes prioritaires.</p>
</div>
```

```css
.section-header       { display: flex; flex-direction: column; gap: 16px; margin-bottom: 64px; }
.section-header h2    { font-size: clamp(2rem, 3.5vw, 3rem); letter-spacing: -0.025em; }
.section-header p     { font-size: 1.05rem; color: var(--cream-dim); max-width: 520px; line-height: 1.7; font-weight: 300; }

/* Version centrée */
.section-header.center { text-align: center; align-items: center; }
```

---

## 11. CARDS & GRILLES

### Grille de problèmes (2 colonnes avec séparation 2px)

```html
<div class="diff-grid reveal">
  <div class="diff-item">
    <div class="diff-icon">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    </div>
    <div class="diff-num">01</div>
    <h3>Titre du problème</h3>
    <p>Description de l'impact : pourquoi c'est un problème, quelle perte concrète.</p>
  </div>
  <!-- Répéter pour chaque problème -->
</div>
```

```css
.diff-grid       { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.diff-item       { background: var(--black); padding: 48px; display: flex; flex-direction: column; gap: 20px; transition: background var(--transition); }
.diff-item:hover { background: var(--black-3); }
.diff-icon       { width: 52px; height: 52px; background: var(--orange-dim); border: 1px solid rgba(255,79,13,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; }
.diff-icon svg   { width: 24px; height: 24px; color: var(--orange); }
.diff-num        { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; color: rgba(255,79,13,0.5); }
.diff-item h3    { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.02em; color: var(--cream); }
.diff-item p     { font-size: 0.9rem; color: var(--cream-dim); line-height: 1.7; }
```

### Grille de secteurs / solutions (3 colonnes)

```html
<div class="sectors-grid reveal">
  <div class="sector-item">
    <div class="sector-icon">⚡</div>
    <div class="sector-text">
      <h3>Performance</h3>
      <p>Optimisation images, cache, minification CSS/JS.</p>
    </div>
  </div>
</div>
```

```css
.sectors-grid        { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.sector-item         { background: var(--black-2); padding: 36px 32px; display: flex; align-items: flex-start; gap: 20px; transition: background var(--transition); }
.sector-item:hover   { background: var(--black-3); }
.sector-icon         { width: 44px; height: 44px; background: var(--orange-dim); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.2rem; }
.sector-text h3      { font-size: 1rem; font-weight: 700; color: var(--cream); margin-bottom: 4px; }
.sector-text p       { font-size: 0.82rem; color: var(--cream-dim); line-height: 1.5; }
```

### Cards offres (3 colonnes, section claire)

```html
<section class="section-light">
  <div class="container">
    <div class="section-header reveal center">
      <span class="label">NOTRE PROPOSITION</span>
      <h2>Ce qu'on ferait<br />pour vous.</h2>
    </div>
    <div class="offers-grid">

      <!-- Card standard -->
      <div class="offer-card reveal">
        <div>
          <div class="offer-name">Starter</div>
          <div class="offer-price"><sub>à partir de</sub>800<sup>€</sup></div>
          <div class="offer-tagline">1 à 3 pages — idéal pour lancer.</div>
        </div>
        <hr class="offer-divider">
        <ul class="offer-features">
          <li>Design sur mesure</li>
          <li>SEO local optimisé</li>
          <li>Formulaire de contact</li>
          <li>Livraison en 7-10 jours</li>
        </ul>
        <div class="offer-cta">
          <a href="#contact" class="btn">Choisir ce forfait</a>
        </div>
      </div>

      <!-- Card featured (recommandée) -->
      <div class="offer-card featured reveal reveal-delay-1">
        <div class="offer-badge">Recommandé</div>
        <div>
          <div class="offer-name">Standard</div>
          <div class="offer-price"><sub>à partir de</sub>1 800<sup>€</sup></div>
          <div class="offer-tagline">5 à 8 pages — idéal pour votre profil.</div>
        </div>
        <hr class="offer-divider">
        <ul class="offer-features">
          <li>Identité visuelle complète</li>
          <li>SEO complet + Schema.org</li>
          <li>Lighthouse &gt; 85 garanti</li>
          <li>Livraison en 2-3 semaines</li>
          <li>30 jours de corrections inclus</li>
        </ul>
        <div class="offer-cta">
          <a href="#contact" class="btn">Choisir ce forfait</a>
        </div>
      </div>

      <!-- Card premium -->
      <div class="offer-card reveal reveal-delay-2">
        <div>
          <div class="offer-name">Premium</div>
          <div class="offer-price"><sub>à partir de</sub>3 500<sup>€</sup></div>
          <div class="offer-tagline">15 à 25 pages — site complet.</div>
        </div>
        <hr class="offer-divider">
        <ul class="offer-features">
          <li>Blog + pages zones géo</li>
          <li>Lighthouse &gt; 90</li>
          <li>Stratégie SEO long terme</li>
          <li>Livraison en 4-5 semaines</li>
        </ul>
        <div class="offer-cta">
          <a href="#contact" class="btn">Choisir ce forfait</a>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
.offers-grid               { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch; }
.offer-card                { background: var(--white); border: 1px solid rgba(0,0,0,0.08); border-radius: var(--radius-lg); padding: 40px 36px; display: flex; flex-direction: column; gap: 28px; position: relative; transition: transform var(--transition), box-shadow var(--transition); }
.offer-card:hover          { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(0,0,0,0.12); }
.offer-card.featured       { background: var(--black); color: var(--cream); border-color: transparent; box-shadow: 0 0 0 2px var(--orange), 0 24px 64px rgba(255,79,13,0.2); }
.offer-card.featured:hover { transform: translateY(-8px); box-shadow: 0 0 0 2px var(--orange), 0 32px 80px rgba(255,79,13,0.3); }
.offer-badge               { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: var(--orange); color: white; font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 16px; border-radius: 100px; white-space: nowrap; }
.offer-name                { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--orange); margin-bottom: 8px; }
.offer-price               { font-family: 'Bricolage Grotesque', sans-serif; font-size: 2.6rem; font-weight: 800; letter-spacing: -0.04em; line-height: 1; color: var(--black); }
.offer-card.featured .offer-price { color: var(--cream); }
.offer-price sub           { font-size: 1rem; font-weight: 400; vertical-align: middle; margin-right: 4px; }
.offer-price sup           { font-size: 0.8rem; font-weight: 500; color: var(--gray); }
.offer-tagline             { font-size: 0.88rem; color: var(--gray); margin-top: 8px; line-height: 1.5; }
.offer-card.featured .offer-tagline { color: var(--cream-dim); }
.offer-divider             { height: 1px; background: rgba(0,0,0,0.07); border: none; }
.offer-card.featured .offer-divider { background: var(--border); }
.offer-features            { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.offer-features li         { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: #333; line-height: 1.45; }
.offer-card.featured .offer-features li { color: var(--cream-dim); }
.offer-features li::before { content: ''; width: 16px; height: 16px; flex-shrink: 0; margin-top: 1px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Ccircle cx='8' cy='8' r='8' fill='%23FF4F0D' fill-opacity='0.12'/%3E%3Cpath d='M5 8l2 2 4-4' stroke='%23FF4F0D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-size: contain; }
.offer-cta                 { margin-top: auto; }
.offer-cta .btn            { width: 100%; justify-content: center; background: var(--black); color: var(--white); }
.offer-card.featured .offer-cta .btn { background: var(--orange); }
.offer-cta .btn:hover      { background: var(--orange); }
```

### Process timeline (5 étapes)

```html
<section class="section-dark">
  <div class="container">
    <div class="section-header reveal center">
      <span class="label">COMMENT ÇA MARCHE</span>
      <h2>De l'audit à la mise en ligne.</h2>
    </div>
    <div class="process-grid reveal">
      <div class="process-step">
        <div class="step-number">01</div>
        <div class="step-content">
          <h3>Brief & audit</h3>
          <p>On analyse votre site actuel, vos objectifs et votre secteur.</p>
        </div>
      </div>
      <!-- Répéter 02→05 -->
    </div>
  </div>
</section>
```

```css
.process-grid         { display: grid; grid-template-columns: repeat(5, 1fr); position: relative; }
.process-grid::before { content: ''; position: absolute; top: 28px; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, var(--orange), transparent); opacity: 0.3; }
.process-step         { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; padding: 0 16px; }
.step-number          { width: 56px; height: 56px; background: var(--black); border: 2px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Bricolage Grotesque', sans-serif; font-size: 1rem; font-weight: 800; color: var(--cream); position: relative; z-index: 1; transition: border-color var(--transition), background var(--transition); }
.process-step:hover .step-number { border-color: var(--orange); background: var(--orange-dim); color: var(--orange); }
.step-content h3      { font-size: 0.95rem; font-weight: 700; color: var(--cream); margin-bottom: 6px; }
.step-content p       { font-size: 0.8rem; color: var(--cream-dim); line-height: 1.55; }
```

### Bande de garanties (fond orange)

```html
<section class="garanties">
  <div class="container">
    <div class="garanties-inner">
      <div class="garanties-left">
        <h2>Nos garanties,<br />en noir et blanc.</h2>
        <p>Pas de promesses floues. Des engagements contractuels.</p>
      </div>
      <div class="garanties-list">
        <div class="garantie-item">Lighthouse mobile &gt; 85 ou remboursement partiel</div>
        <div class="garantie-item">Livraison dans les délais ou compensation</div>
        <div class="garantie-item">30 jours de corrections gratuites après livraison</div>
        <div class="garantie-item">Fichiers sources livrés — vous restez propriétaire</div>
      </div>
      <a href="#contact" class="btn" style="background:var(--black);color:white;flex-shrink:0">Démarrer →</a>
    </div>
  </div>
</section>
```

```css
.garanties             { background: var(--orange); padding: 64px 0; }
.garanties-inner       { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
.garanties-left h2     { font-size: clamp(1.6rem, 2.5vw, 2.2rem); color: white; letter-spacing: -0.02em; }
.garanties-left p      { font-size: 1rem; color: rgba(255,255,255,0.8); margin-top: 8px; }
.garanties-list        { display: flex; flex-direction: column; gap: 10px; flex: 1; }
.garantie-item         { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: white; }
.garantie-item::before { content: '✓'; width: 22px; height: 22px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; flex-shrink: 0; line-height: 22px; }
```

---

## 12. FAQ ACCORDÉON

```html
<section class="section-light">
  <div class="container" style="max-width:800px">
    <div class="section-header reveal center">
      <span class="label">FAQ</span>
      <h2>Questions fréquentes.</h2>
    </div>
    <div class="faq-list reveal">
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">Combien coûte un site web ?</span>
          <div class="faq-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </div>
        </button>
        <div class="faq-a"><p>Nos forfaits commencent à 800€ (Starter) et vont jusqu'à 5 500€ (Premium). Devis gratuit sans engagement.</p></div>
      </div>
    </div>
  </div>
</section>
```

```css
.faq-list         { display: flex; flex-direction: column; border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius-lg); overflow: hidden; }
.faq-item         { border-bottom: 1px solid rgba(0,0,0,0.08); background: white; }
.faq-item:last-child { border-bottom: none; }
.faq-q            { width: 100%; background: none; border: none; padding: 24px 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; cursor: pointer; text-align: left; transition: background var(--transition); }
.faq-q:hover      { background: rgba(0,0,0,0.02); }
.faq-q-text       { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1rem; font-weight: 700; color: var(--black); line-height: 1.4; }
.faq-icon         { width: 28px; height: 28px; background: var(--black); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background var(--transition); }
.faq-icon svg     { width: 12px; height: 12px; color: white; transition: transform var(--transition); }
.faq-item.open .faq-icon     { background: var(--orange); }
.faq-item.open .faq-icon svg { transform: rotate(45deg); }
.faq-a            { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1); }
.faq-item.open .faq-a { max-height: 300px; }
.faq-a p          { padding: 0 32px 24px; font-size: 0.9rem; color: var(--gray); line-height: 1.75; }
```

```js
function toggleFaq(btn) {
  const item = btn.closest('.faq-item')
  const isOpen = item.classList.contains('open')
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'))
  if (!isOpen) item.classList.add('open')
}
```

---

## 13. FORMULAIRE CONTACT

```html
<section id="contact" class="contact-section">
  <div class="container">
    <div class="contact-inner">

      <div class="contact-left reveal">
        <h2>Parlons de<br />votre projet.</h2>
        <p>Réponse sous 24h. Devis gratuit et sans engagement.</p>
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <a href="mailto:brunocadilhe3000@gmail.com">brunocadilhe3000@gmail.com</a>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.92h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4A16 16 0 0 0 13.6 16.1l.94-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <a href="tel:+33600000000">+33 6 00 00 00 00</a>
          </div>
        </div>
      </div>

      <div class="contact-form reveal reveal-delay-2">
        <div class="form-title">Obtenir un devis gratuit</div>
        <form>
          <div class="form-group">
            <label>Nom complet</label>
            <input type="text" placeholder="Jean Dupont">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="jean@entreprise.fr">
          </div>
          <div class="form-group">
            <label>Téléphone</label>
            <input type="tel" placeholder="+33 6 ...">
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea placeholder="Décrivez votre projet..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary form-submit">
            Envoyer ma demande
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <p class="form-note">Réponse sous 24h · Devis gratuit sans engagement</p>
        </form>
      </div>

    </div>
  </div>
</section>
```

```css
.contact-section         { position: relative; overflow: hidden; }
.contact-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,79,13,0.12) 0%, transparent 70%); pointer-events: none; }
.contact-inner           { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contact-left h2         { font-size: clamp(2rem, 3.5vw, 3rem); letter-spacing: -0.03em; margin-bottom: 20px; }
.contact-left p          { font-size: 1rem; color: var(--cream-dim); line-height: 1.75; margin-bottom: 36px; }
.contact-info            { display: flex; flex-direction: column; gap: 16px; }
.contact-info-item       { display: flex; align-items: center; gap: 14px; font-size: 0.9rem; color: var(--cream-dim); }
.contact-info-icon       { width: 40px; height: 40px; background: var(--orange-dim); border: 1px solid rgba(255,79,13,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.contact-info-icon svg   { width: 18px; height: 18px; color: var(--orange); }
.contact-info-item a     { color: var(--cream); text-decoration: none; font-weight: 500; transition: color var(--transition); }
.contact-info-item a:hover { color: var(--orange); }
.contact-form            { background: var(--black-2); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 44px; }
.form-title              { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.2rem; font-weight: 700; color: var(--cream); margin-bottom: 28px; }
.form-group              { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
.form-group label        { font-size: 0.8rem; font-weight: 500; color: var(--cream-dim); letter-spacing: 0.04em; }
.form-group input,
.form-group textarea     { background: var(--black); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 16px; color: var(--cream); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; transition: border-color var(--transition); outline: none; width: 100%; }
.form-group input:focus,
.form-group textarea:focus { border-color: var(--orange); }
.form-group textarea     { resize: none; height: 100px; }
.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(244,240,232,0.2); }
.form-submit             { width: 100%; justify-content: center; padding: 16px; font-size: 1rem; }
.form-note               { text-align: center; font-size: 0.76rem; color: rgba(244,240,232,0.3); margin-top: 12px; }
```

---

## 14. FOOTER

```html
<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="#hero" class="footer-logo-text">
          <!-- Logo SVG (voir section 15) -->
          <span>OUTPUT<span class="logo-accent">CRAFT</span></span>
        </a>
        <p>Création de sites web professionnels sur mesure. Performance, conversion et SEO — livrés en 3 semaines maximum.</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul class="footer-links">
          <li><a href="#differentiateurs">Pourquoi nous</a></li>
          <li><a href="#offres">Nos offres</a></li>
          <li><a href="#process">Comment ça marche</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul class="footer-links">
          <li><a href="mailto:brunocadilhe3000@gmail.com">brunocadilhe3000@gmail.com</a></li>
          <li><a href="tel:+33600000000">+33 6 00 00 00 00</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 OUTPUTCRAFT — Bruno Cadilhe. Tous droits réservés.</span>
      <div class="footer-legal">
        <a href="#">Mentions légales</a>
        <a href="#">Politique de confidentialité</a>
      </div>
    </div>
  </div>
</footer>
```

```css
.footer          { background: var(--black-2); border-top: 1px solid var(--border); padding: 48px 0 32px; }
.footer-inner    { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
.footer-logo-text { display: flex; align-items: center; gap: 8px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--cream); letter-spacing: -0.03em; margin-bottom: 14px; text-decoration: none; }
.footer-brand p  { font-size: 0.85rem; color: var(--cream-dim); line-height: 1.7; max-width: 280px; }
.footer-col h4   { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--cream); margin-bottom: 16px; }
.footer-links    { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-links a  { font-size: 0.85rem; color: var(--cream-dim); text-decoration: none; transition: color var(--transition); }
.footer-links a:hover { color: var(--orange); }
.footer-bottom   { display: flex; align-items: center; justify-content: space-between; padding-top: 28px; border-top: 1px solid var(--border); }
.footer-copy     { font-size: 0.78rem; color: rgba(244,240,232,0.3); }
.footer-legal    { display: flex; gap: 20px; }
.footer-legal a  { font-size: 0.78rem; color: rgba(244,240,232,0.3); text-decoration: none; }
.footer-legal a:hover { color: var(--cream-dim); }
```

---

## 15. LOGO SVG INLINE

### Mark seul (cube isométrique — coller dans `<nav>` et `<footer>`)

```html
<svg viewBox="11 5 78 90" height="28" aria-hidden="true" focusable="false" style="display:block;flex-shrink:0">
  <defs>
    <linearGradient id="cm-t" x1="88" y1="6" x2="12" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FF5C00"/><stop offset="100%" stop-color="#FF7A30"/>
    </linearGradient>
    <linearGradient id="cm-r" x1="0" y1="28" x2="0" y2="94" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#CC4A00"/><stop offset="100%" stop-color="#A33A00"/>
    </linearGradient>
    <linearGradient id="cm-l" x1="0" y1="28" x2="0" y2="94" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8A3000"/><stop offset="100%" stop-color="#6A2400"/>
    </linearGradient>
    <clipPath id="cm-c"><polygon points="50,6 88,28 50,50 12,28"/></clipPath>
  </defs>
  <polygon points="12,28 50,50 50,94 12,72" fill="url(#cm-l)"/>
  <polygon points="88,28 88,72 50,94 50,50" fill="url(#cm-r)"/>
  <polygon points="50,6 88,28 50,50 12,28" fill="url(#cm-t)"/>
  <g clip-path="url(#cm-c)" stroke="white" stroke-width="0.7" fill="none">
    <line x1="37" y1="13" x2="75" y2="35" opacity="0.20"/>
    <line x1="25" y1="21" x2="63" y2="43" opacity="0.12"/>
    <line x1="63" y1="13" x2="25" y2="35" opacity="0.20"/>
    <line x1="75" y1="21" x2="37" y2="43" opacity="0.12"/>
  </g>
  <line x1="50" y1="50" x2="50" y2="94" stroke="#3D1500" stroke-width="1" opacity="0.7"/>
  <line x1="50" y1="6" x2="88" y2="28" stroke="#FF9060" stroke-width="0.8" opacity="0.35"/>
  <line x1="50" y1="6" x2="12" y2="28" stroke="#FF9060" stroke-width="0.8" opacity="0.35"/>
  <circle cx="50" cy="6" r="2.2" fill="#FFB880" opacity="0.85"/>
</svg>
```

> **Note :** Changer `height="28"` selon le contexte (nav = 28, footer = 24, hero = 48, favicon = 100).
> Les IDs `cm-t`, `cm-r`, `cm-l`, `cm-c` doivent être uniques par page si le mark apparaît plusieurs fois — ajouter un suffixe : `cm-t-nav`, `cm-t-footer`.

---

## 16. CSS COMPLET

```css
/* ─── Reset ─────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ─── Tokens ─────────────────────────────────────── */
:root {
  --black: #0C0C0F; --black-2: #131318; --black-3: #1A1A22;
  --orange: #FF4F0D; --orange-dim: rgba(255,79,13,0.12); --orange-glow: rgba(255,79,13,0.35);
  --cream: #F4F0E8; --cream-dim: rgba(244,240,232,0.6); --cream-faint: rgba(244,240,232,0.08);
  --white: #fff; --gray: #4A4A58; --gray-light: #2E2E3A;
  --border: rgba(244,240,232,0.1);
  --radius: 4px; --radius-lg: 12px;
  --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
}

/* ─── Base ───────────────────────────────────────── */
html { scroll-behavior: smooth; font-size: 16px; }
body { background: var(--black); color: var(--cream); font-family: 'DM Sans', system-ui, sans-serif; font-weight: 400; line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--black-2); }
::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 3px; }
h1,h2,h3,h4 { font-family: 'Bricolage Grotesque', system-ui, sans-serif; font-weight: 800; line-height: 1.1; }

/* ─── Layout ─────────────────────────────────────── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
section { padding: 100px 0; }
.section-dark  { background: var(--black-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.section-light { background: var(--cream); }
.section-light h2 { color: var(--black); }
.section-light p  { color: var(--gray); }

/* ─── Typography ─────────────────────────────────── */
.label { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--orange); }

/* ─── Buttons ────────────────────────────────────── */
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: var(--radius); font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.9rem; font-weight: 600; letter-spacing: 0.03em; cursor: pointer; transition: var(--transition); border: none; text-decoration: none; }
.btn-primary { background: var(--orange); color: #fff; }
.btn-primary:hover { background: #e84400; transform: translateY(-2px); box-shadow: 0 8px 32px var(--orange-glow); }
.btn-outline { background: transparent; color: var(--cream); border: 1px solid var(--border); }
.btn-outline:hover { background: var(--cream-faint); border-color: var(--cream-dim); }
.btn-lg { padding: 18px 36px; font-size: 1rem; }

/* ─── Reveal ─────────────────────────────────────── */
.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ─── Section Header ─────────────────────────────── */
.section-header { display: flex; flex-direction: column; gap: 16px; margin-bottom: 64px; }
.section-header h2 { font-size: clamp(2rem,3.5vw,3rem); letter-spacing: -0.025em; }
.section-header p  { font-size: 1.05rem; color: var(--cream-dim); max-width: 520px; line-height: 1.7; font-weight: 300; }
.section-header.center { text-align: center; align-items: center; }

/* ─── Keyframes ──────────────────────────────────── */
@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulse  { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.5; transform:scale(1.4); } }

/* ─── Responsive ─────────────────────────────────── */
@media (max-width: 1024px) {
  .diff-grid     { grid-template-columns: 1fr; }
  .offers-grid   { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .sectors-grid  { grid-template-columns: repeat(2,1fr); }
  .process-grid  { grid-template-columns: 1fr; gap: 32px; }
  .process-grid::before { display: none; }
  .about-inner   { grid-template-columns: 1fr; gap: 48px; }
  .contact-inner { grid-template-columns: 1fr; gap: 48px; }
  .footer-inner  { grid-template-columns: 1fr 1fr; }
  .footer-brand  { grid-column: 1 / -1; }
}
@media (max-width: 768px) {
  section { padding: 72px 0; }
  .sectors-grid { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
  .contact-form  { padding: 28px 24px; }
}
```

---

## 17. TEMPLATE PAGE D'AUDIT

Structure complète d'une page HTML autonome prête à personnaliser :

```
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audit gratuit — [CLIENT_URL] | OUTPUTCRAFT</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    /* Coller ici le CSS de la section 16 */
    /* + les composants CSS de chaque section utilisée */
  </style>
</head>
<body>

  <!-- 1. NAV -->
  [Nav de la section 7]

  <!-- 2. HERO -->
  [Hero de la section 8 — avec les variables client]

  <!-- 3. STATS BAR (scores audit) -->
  [Stats bar de la section 9]

  <!-- 4. PROBLÈMES (diff-grid) -->
  <section id="problemes">
    <div class="container">
      [Section header + diff-grid]
    </div>
  </section>

  <!-- 5. CE QU'ON PROPOSE (section-light + offers-grid) -->
  [Section offres de la section 11]

  <!-- 6. PROCESS -->
  [Section process de la section 11]

  <!-- 7. GARANTIES -->
  [Bande orange de la section 11]

  <!-- 8. FAQ -->
  [FAQ de la section 12]

  <!-- 9. CONTACT -->
  [Formulaire de la section 13]

  <!-- 10. FOOTER -->
  [Footer de la section 14]

  <script>
    // Sticky nav
    window.addEventListener('scroll', () => {
      document.querySelector('.nav').classList.toggle('scrolled', window.scrollY > 50)
    }, { passive: true })

    // Reveal au scroll
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // FAQ
    function toggleFaq(btn) {
      const item = btn.closest('.faq-item')
      const isOpen = item.classList.contains('open')
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'))
      if (!isOpen) item.classList.add('open')
    }
  </script>

</body>
</html>
```

---

## 18. VARIABLES DE PERSONNALISATION

Remplacer ces placeholders pour chaque nouveau client :

```
[CLIENT_URL]           ex: dupont-plomberie.fr
[CLIENT_NOM]           ex: Dupont Plomberie
[CLIENT_SECTEUR]       ex: Plombier chauffagiste Paris 15e
[DATE_AUDIT]           ex: 3 avril 2026

[SCORE_LIGHTHOUSE]     ex: 42   (sur 100)
[SCORE_MOBILE]         ex: 38   (sur 100)
[SCORE_SEO]            ex: 61   (sur 100)
[SCORE_GLOBAL]         ex: 47   (sur 100)
[TEMPS_CHARGEMENT]     ex: 7.2  (en secondes)
[NB_PROBLEMES]         ex: 9    (nombre de problèmes trouvés)

[PROBLEME_1_TITRE]     ex: Temps de chargement de 7 secondes
[PROBLEME_1_DESC]      ex: Au-delà de 3s, vous perdez 40% de vos visiteurs mobile.
[PROBLEME_2_TITRE]     ex: Aucun balisage Schema.org
[PROBLEME_2_DESC]      ex: Google ne peut pas afficher vos avis, adresse ou horaires dans les résultats.
[PROBLEME_3_TITRE]     ex: Images non compressées (4,2 Mo)
[PROBLEME_3_DESC]      ex: Chaque image ralentit votre page. Aucune n'est au format WebP.
...jusqu'à [PROBLEME_6]

[OFFRE_RECOMMANDEE]    ex: Standard
[PRIX_OFFRE]           ex: 1 800€
[DELAI_OFFRE]          ex: 2 à 3 semaines
[FEATURES_INCLUSES]    ex: SEO complet, Lighthouse >85, 5 pages, formulaire, 30j corrections
```

---

*OUTPUTCRAFT — outputcraft.com · brunocadilhe3000@gmail.com · Mis à jour le 3 avril 2026*
