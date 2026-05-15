# HERMES_FOUNDATION — Outputcraft site

Dernière mise à jour : 2026-05-15

Ce document définit les fondations de travail pour Hermes/Codex/OpenCode sur ce projet. Il ne contient aucun secret et doit rester versionné.

## Mission

Site vitrine Outputcraft : acquisition, preuve, positionnement, pages d'offre, SEO et conversion pour l'agence.

## Routage Hermes

- Profil Hermes : `agence`
- Repo GitHub : `suteiku/outputcraft`
- Chemin VPS de référence : `/root/bruno-projects/outputcraft/site`
- Chemin Mac Bruno : `/Users/brunocrespo/Documents/Site_Outputcraft`
- Branche handoff Bruno : `bruno/outputcraft-site-handoff`
- Branche fondations Hermes : `hermes/outputcraft-site-foundations-2026-05-15`

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

## Git / handoff

- Source de vérité : GitHub `suteiku/*`.
- Branches Bruno depuis Mac : `bruno/<projet>-handoff`.
- Branches Hermes côté VPS : `hermes/<projet>-...`.
- Ne pas faire de `git reset --hard`, `git clean`, rebase destructif ou suppression de branche sans raison claire et validation si risque de perte.
- Pour les projets avec changements locaux VPS, utiliser un worktree séparé avant toute comparaison.
- Les PR doivent rester reviewables : un sujet cohérent par PR, résumé clair, checklist de tests.

## Spécifique Outputcraft site

- Profil Hermes : `agence`.
- Objectif : site clair, premium, orienté conversion et crédibilité commerciale.
- Ne pas confondre avec la plateforme applicative Outputcraft.
- Avant toute modification copy/design : préserver le positionnement agence et vérifier mobile.
- Ne jamais publier en production, modifier DNS, tracking ou formulaire réel sans validation Bruno.

## Commandes de validation

À adapter selon les changements. Ne pas lancer d'action live/production sans validation.

- `npm ci`
- `npm run lint`
- `npm run build`

## Checklist avant de dire "c'est terminé"

- `git status --short --branch` vérifié.
- Les fichiers modifiés sont cohérents avec la demande.
- Aucun secret ou fichier local sensible n'est ajouté.
- Les validations utiles ont été lancées ou l'impossibilité est expliquée.
- Les limites et actions restantes sont listées simplement.
- Aucune action sensible n'a été faite sans validation Bruno.

## Handoff final attendu

Réponse courte à Bruno :

- Ce qui a été modifié.
- Branche/commit si push.
- Tests ou checks lancés.
- Risques/restes à faire.
- Validation nécessaire avant merge/prod/action sensible.
