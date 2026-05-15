# AGENTS.md — Outputcraft site

Dernière mise à jour : 2026-05-15

Ce fichier est la règle locale prioritaire pour les agents qui travaillent dans ce repo.

## Démarrage obligatoire

1. Lire `docs/HERMES_FOUNDATION.md`.
2. Vérifier `git status --short --branch`.
3. Confirmer que le profil projet attendu est `agence`.
4. Ne jamais afficher ni manipuler de secrets en clair.
5. Travailler uniquement sur branche dédiée, jamais directement sur `main` pour un changement.

## Spécifique Outputcraft site

- Profil Hermes : `agence`.
- Objectif : site clair, premium, orienté conversion et crédibilité commerciale.
- Ne pas confondre avec la plateforme applicative Outputcraft.
- Avant toute modification copy/design : préserver le positionnement agence et vérifier mobile.
- Ne jamais publier en production, modifier DNS, tracking ou formulaire réel sans validation Bruno.

## Commandes utiles

- `npm ci`
- `npm run lint`
- `npm run build`

## Règles absolues Bruno / Hermes

- Ne jamais afficher, copier, commiter ou demander des valeurs de `.env`, `.env.local`, tokens, cookies, headers, clés API, credentials ou fichiers OAuth.
- Ne jamais pousser `node_modules`, `.next`, `dist`, `build`, `coverage`, logs, caches, `.DS_Store`, fichiers locaux d'IDE ou fichiers secrets.
- GitHub est le seul pont fichiers : Mac Bruno -> GitHub -> VPS Hermes -> GitHub -> Mac Bruno.
- Toujours travailler sur une branche dédiée. Ne jamais merger `main` sans validation explicite de Bruno.
- Avant tout push, vérifier l'auteur Git : il doit être l'identité GitHub autorisée de Bruno/Suteiku, pas `hermes-agent`.
- Validation Bruno obligatoire avant : déploiement production, DNS, secrets/rotation, Shopify live theme, prix, commandes, paiements, remboursements, Ads budgets/campagnes, envoi réel d'email, suppression de données, action officielle ou irréversible.
- Pour Gmail : brouillons uniquement, jamais d'envoi direct sans validation.
- Pour Stripe/Shopify/Ads : lecture/audit par défaut, aucune action financière ou live sans validation.

## Workflow obligatoire de l'agent

1. Lire `AGENTS.md`, puis `docs/HERMES_FOUNDATION.md`, puis le `README` et les specs utiles.
2. Vérifier `git status --short --branch` et le remote avant toute modification.
3. Identifier le type de tâche : produit, code, design, SEO, ads, analytics, contenu, QA, bug, ops.
4. Charger les skills pertinents avant d'agir : debugging, frontend-design, SEO, analytics, copywriting, pricing, etc.
5. Faire un plan court si la tâche touche plusieurs fichiers ou plusieurs domaines.
6. Modifier uniquement ce qui est nécessaire. Ne jamais masquer un doute par une supposition.
7. Vérifier : lint/typecheck/tests/build/smoke selon le projet.
8. Scanner les changements pour éviter secrets et fichiers lourds.
9. Résumer à Bruno : ce qui est fait, ce qui est vérifié, ce qui reste, et ce qui demande validation.
