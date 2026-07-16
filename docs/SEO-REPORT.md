# SEO Report — Alkoda On Air
Date : 2026-07-16

---

## Pages analysées

| Fichier | Statut |
|--------|--------|
| `index.html` | ✅ Optimisé |
| `realisations.html` | ✅ Optimisé |
| `page_valise/valise.html` | ✅ Optimisé |
| `visio/alkoda_visio.html` | ✅ Optimisé |
| `legal.html` | ✅ Optimisé |
| `RGPD.html` | ✅ noindex ajouté |
| `feneu-18ans.html` | ⛔ Non modifié (page privée, hors périmètre) |
| `OPV.html` | ⛔ Non modifié (document interne, hors périmètre) |
| `terms-of-service-wires.html` | ⚠️ Non modifié (produit tiers Wires, hors périmètre Alkoda OnAir) |
| `refund-policy-wires.html` | ⚠️ Non modifié (produit tiers Wires, hors périmètre Alkoda OnAir) |

---

## Pages incluses dans le sitemap

| URL | Priorité | Fréquence |
|-----|----------|-----------|
| `https://alkoda-onair.com/` | 1.0 | monthly |
| `https://alkoda-onair.com/realisations.html` | 0.9 | monthly |
| `https://alkoda-onair.com/page_valise/valise.html` | 0.9 | monthly |
| `https://alkoda-onair.com/visio/alkoda_visio.html` | 0.7 | monthly |
| `https://alkoda-onair.com/legal.html` | 0.3 | yearly |

---

## Métadonnées ajoutées ou modifiées par page

### index.html
- `<meta name="description">` : enrichie avec les expressions SEO cibles
- `<link rel="canonical">` : ajouté (`https://alkoda-onair.com/`)
- `<meta name="robots">` : ajouté (`index, follow`)
- `<meta property="og:locale">` : ajouté (`fr_FR`)
- `<meta name="twitter:title">` : ajouté
- `<meta name="twitter:description">` : ajouté
- og:description : reformulée avec expressions SEO

### realisations.html
- `<title>` : amélioré (ajout "Captation vidéo événement")
- `<meta name="description">` : enrichie (captation vidéo événement, concerts, conférences, postproduction)
- `<link rel="canonical">` : ajouté
- `<meta name="robots">` : ajouté (`index, follow`)
- `<meta property="og:locale">` : ajouté
- `<meta name="twitter:title">` : ajouté
- `<meta name="twitter:description">` : ajouté

### page_valise/valise.html
- `<title>` : amélioré (régie mobile broadcast, captation multicaméra & livestreaming)
- `<meta name="description">` : enrichie (régie mobile broadcast, live streaming événement)
- `<link rel="canonical">` : ajouté
- `<meta name="robots">` : ajouté (`index, follow`)
- `<meta property="og:locale">` : ajouté
- `<meta name="twitter:title">` : ajouté
- `<meta name="twitter:description">` : ajouté

### visio/alkoda_visio.html
- `<title>` : remplacé (était "[VIEWER]", devient "Schéma interactif broadcast — Signal Flow · Alkoda On Air")
- `<meta name="description">` : créée
- `<link rel="canonical">` : créé
- `<meta name="robots">` : créé (`index, follow`)
- Bloc complet og:type / og:locale / og:title / og:description / og:image / og:url : créé
- Bloc twitter:card / twitter:title / twitter:description / twitter:image : créé
- Favicons `<link rel="icon">` : ajoutés (manquants)

### legal.html
- `<meta name="description">` : créée
- `<link rel="canonical">` : créé
- `<meta name="robots">` : créé (`index, follow`)
- Bloc og:type / og:locale / og:title / og:description / og:url : créé
- twitter:card / twitter:title : créés
- Favicons : ajoutés

### RGPD.html
- `<link rel="canonical">` : créé
- `<meta name="robots">` : créé (`noindex, follow`) — convention standard pour les pages de politique de confidentialité
- `<meta name="description">` : créée
- Favicons : ajoutés

---

## Données structurées ajoutées

### index.html — JSON-LD `ProfessionalService`

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Alkoda On Air",
  "url": "https://alkoda-onair.com",
  "logo": "https://alkoda-onair.com/alkoda-32x32.png",
  "image": "https://alkoda-onair.com/og-preview.jpg",
  "description": "Production audiovisuelle broadcast à Paris...",
  "telephone": "+33607861211",
  "email": "contact@alkoda-onair.com",
  "address": { "addressLocality": "Paris", "addressCountry": "FR" },
  "areaServed": { "@type": "Country", "name": "France" },
  "sameAs": [ YouTube, LinkedIn, Facebook ]
}
```

Toutes les informations proviennent du contenu existant du site (section contact, réseaux sociaux). Aucune donnée inventée.

---

## Limite du référencement multilingue avec une URL unique

Le site propose le français et l'anglais via un système i18n JavaScript côté client. Les deux langues partagent la même URL (ex. `https://alkoda-onair.com/`).

**Conséquences SEO :**
- Google indexe la page dans une seule langue (celle du HTML initial, ici le français).
- Les balises `hreflang` ne peuvent pas être utilisées efficacement avec une URL unique — elles n'ont pas été ajoutées.
- Les métadonnées og:title, og:description, twitter:title et twitter:description sont en français (langue par défaut du HTML).
- La version anglaise du contenu n'est pas indexable séparément par Google.

**Pour améliorer le SEO anglophone à l'avenir :** envisager des URLs distinctes par langue (`/en/`, `/fr/`) ou des sous-domaines.

---

## Pages exclues du sitemap

| Page | Raison |
|------|--------|
| `RGPD.html` | Politique de confidentialité — convention noindex, pas une cible SEO |
| `feneu-18ans.html` | Page privée personnelle, sans rapport avec l'activité d'Alkoda On Air |
| `OPV.html` | Export de planning interne — document non destiné au public |
| `terms-of-service-wires.html` | CGU d'un produit tiers (Wires) — hors périmètre Alkoda On Air |
| `refund-policy-wires.html` | Politique de remboursement Wires — hors périmètre Alkoda On Air |

---

## Fichiers créés

- `docs/sitemap.xml` — sitemap XML valide avec 5 URLs publiques indexables
- `docs/robots.txt` — `Allow: /` + pointeur vers le sitemap
- `docs/SEO-REPORT.md` — ce rapport
