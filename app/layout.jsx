import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import './globals.css'

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

export const metadata = {
  title: 'OUTPUTCRAFT — Création de sites web professionnels | Paris & Île-de-France',
  description:
    'OUTPUTCRAFT crée des sites web sur mesure, ultra-rapides et orientés conversion pour professionnels et entreprises en Île-de-France et partout en France. Livraison en 7 à 21 jours. Lighthouse >85.',
  metadataBase: new URL('https://outputcraft.com'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/logo-mark.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://outputcraft.com/',
    title: 'OUTPUTCRAFT — Sites web professionnels, livrés en 3 semaines',
    description:
      'Des sites web sur mesure, ultra-rapides et conçus pour convertir. Pour toute entreprise, en Île-de-France et partout en France.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    locale: 'fr_FR',
    siteName: 'OUTPUTCRAFT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OUTPUTCRAFT — Sites web professionnels',
    description: 'Livré en 7 à 21 jours. Zéro sous-traitant. Lighthouse >85.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OUTPUTCRAFT',
  description: "Agence de création de sites web professionnels sur mesure, orientés conversion, pour toute entreprise en Île-de-France et en France.",
  url: 'https://outputcraft.com',
  email: 'brunocadilhe3000@gmail.com',
  founder: { '@type': 'Person', name: 'Bruno Cadilhe' },
  address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressRegion: 'Île-de-France', addressCountry: 'FR' },
  areaServed: ['Paris', 'Île-de-France', 'France'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres de création web',
    itemListElement: [
      { '@type': 'Offer', name: 'Starter', description: '1 à 3 pages, design sur mesure, SEO local, livraison 7-10 jours', priceRange: '800€ – 1 200€' },
      { '@type': 'Offer', name: 'Standard', description: '5 à 8 pages, identité visuelle complète, SEO complet, Lighthouse >85', priceRange: '1 800€ – 2 500€' },
      { '@type': 'Offer', name: 'Premium', description: '15 à 25 pages, pages de zones géographiques, blog, Lighthouse >90', priceRange: '3 500€ – 5 500€' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
