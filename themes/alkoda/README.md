# Alkoda

Thème Hugo dérivé de [hugo-blog-awesome](https://github.com/hugo-sid/hugo-blog-awesome), adapté au **nouveau système de templates** (Hugo v0.146+).

## Changements par rapport à hugo-blog-awesome

- **Nouveaux noms de layouts** (Hugo v0.146+) :
  - `layouts/home.html` (au lieu de `index.html`)
  - `layouts/list.html`, `layouts/single.html`, `layouts/page.html` à la racine
  - `layouts/section.html`, `layouts/taxonomy.html`, `layouts/term.html`
  - `layouts/baseof.html` à la racine
  - `layouts/rss.xml` avec usage de `site.Params.author` pour éviter les erreurs en contexte multilingue
- **Partials** dans `layouts/_partials/` (nouveau nom Hugo v0.146+).
- **Compatibilité** : les anciens chemins (`_default/`, `index.html`) sont conservés pour la rétrocompatibilité.

## Utilisation

### Comme thème classique

Dans `hugo.toml` :

```toml
theme = "alkoda"
```

Avec une configuration multilingue (ex. `contentDir` par langue), Hugo peut ne pas trouver les layouts du thème et afficher des avertissements. Le site peut tout de même être généré.

### Comme module (recommandé pour Hugo 0.146+)

Pour que les layouts soient correctement trouvés :

1. Créer un `go.mod` à la racine du site :

```go
module github.com/votre-repo/votre-site

go 1.22

replace github.com/alkoda/hugo-theme-alkoda => ./themes/alkoda

require github.com/alkoda/hugo-theme-alkoda v0.0.0-00010101000000-000000000000
```

2. Dans `hugo.toml`, remplacer `theme = "alkoda"` par :

```toml
[module]
  [[module.imports]]
    path = "github.com/alkoda/hugo-theme-alkoda"
    disable = false
```

3. Le thème doit avoir un `go.mod` :

```go
module github.com/alkoda/hugo-theme-alkoda

go 1.22
```

## Auteur RSS

Le flux RSS utilise `site.Params.author` (email / name). Pour l’auteur du site, configurer par exemple :

```toml
[params.author]
  name = "Votre nom"
  email = "vous@example.com"
```

Ou au niveau d’une langue :

```toml
[Languages.en-gb.params.author]
  name = "Votre nom"
  email = "vous@example.com"
```

## Licence

MIT (comme hugo-blog-awesome).
