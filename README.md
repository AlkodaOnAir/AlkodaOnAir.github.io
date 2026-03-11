# Site web Alkoda On Air

Ce document explique comment préparer votre ordinateur, récupérer le projet, ajouter ou modifier des articles, prévisualiser le site et publier vos changements sur Internet. Les explications sont rédigées pour être accessibles même si vous n’êtes pas à l’aise avec l’informatique.

---

## 1. Installer les outils sur votre ordinateur

Pour travailler sur ce site, il faut deux choses : **Git** (pour récupérer et envoyer le code) et **Hugo** (pour générer et prévisualiser le site). Choisissez les instructions selon votre système (Windows ou Mac).

### 1.1 Installer Git

**Sans logiciel de développement (éditeur de code) :**

- **Sur Windows**  
  1. Allez sur [https://git-scm.com/download/win](https://git-scm.com/download/win).  
  2. Téléchargez « 64-bit Git for Windows Setup » (ou 32-bit si votre PC est ancien).  
  3. Lancez le fichier téléchargé et validez les options par défaut en cliquant sur « Suivant » jusqu’à la fin.  
  4. À la fin, fermez l’assistant. Git est installé. Vous pourrez l’utiliser dans **Invite de commandes** (cherchez « cmd » dans le menu Démarrer).

- **Sur Mac**  
  1. Ouvrez l’application **Terminal** (cherchez « Terminal » avec Spotlight ou dans le dossier Utilitaires).  
  2. Tapez : `xcode-select --install` puis Entrée.  
  3. Une fenêtre proposera d’installer les « Outils de ligne de commande ». Cliquez sur **Installer** et attendez la fin.  
  Vous pouvez aussi installer Git via le site [https://git-scm.com/download/mac](https://git-scm.com/download/mac).

**Avec Visual Studio Code (éditeur recommandé) :**

- **Sur Windows ou Mac**  
  1. Allez sur [https://code.visualstudio.com/](https://code.visualstudio.com/).  
  2. Téléchargez la version pour votre système (Windows ou macOS).  
  3. Installez le logiciel en suivant les étapes à l’écran.  
  4. Ouvrez **Visual Studio Code**.  
  5. Ouvrez le terminal intégré : menu **Terminal** → **Nouveau terminal** (ou raccourci **Ctrl+ù** sur Windows, **Cmd+ù** sur Mac).  
  Dans ce terminal, vous pourrez taper les commandes `git` et `hugo` une fois qu’elles sont installées.

> **Astuce :** Avec VS Code, vous éditez les fichiers du projet dans une fenêtre et vous lancez les commandes dans le terminal en bas. C’est plus simple que d’utiliser uniquement l’Invite de commandes.

### 1.2 Installer Hugo

Hugo est le programme qui transforme les fichiers du projet (textes, images) en site web et qui permet de le prévisualiser sur votre ordinateur.

- **Sur Windows**  
  1. Allez sur [https://gohugo.io/installation/windows/](https://gohugo.io/installation/windows/).  
  2. Téléchargez le fichier **hugo_extended** (version « extended ») pour Windows, par exemple depuis GitHub.  
  3. Décompressez le fichier ZIP et placez le fichier `hugo.exe` dans un dossier simple, par exemple `C:\Hugo\bin`.  
  4. Ajoutez ce dossier au **PATH** de Windows :  
     - Cherchez « variables d’environnement » dans le menu Démarrer.  
     - Cliquez sur « Modifier les variables d’environnement système ».  
     - Cliquez sur « Variables d’environnement ».  
     - Dans « Variables utilisateur », sélectionnez **Path** puis **Modifier** → **Nouveau** et ajoutez `C:\Hugo\bin` (ou le chemin où vous avez mis `hugo.exe`).  
     - Validez par OK partout.  
  5. Fermez puis rouvrez l’Invite de commandes (ou VS Code). Tapez `hugo version` : si la version s’affiche, Hugo est bien installé.

- **Sur Mac**  
  1. Ouvrez **Terminal**.  
  2. Si vous avez **Homebrew** (gestionnaire de logiciels en ligne de commande), tapez :  
     `brew install hugo`  
     puis Entrée. Sinon, installez Homebrew depuis [https://brew.sh](https://brew.sh), puis refaites cette commande.  
  3. Vérifiez avec : `hugo version`.

---

## 2. Récupérer le projet sur votre ordinateur

« Récupérer le projet » signifie copier tous les fichiers du site depuis GitHub vers un dossier sur votre disque, pour pouvoir les modifier.

1. Ouvrez **Invite de commandes** (Windows) ou **Terminal** (Mac), ou le terminal dans **Visual Studio Code**.
2. Allez dans le dossier où vous voulez mettre le projet, par exemple le Bureau ou un dossier « Projets » :  
   - Windows : `cd Bureau`  
   - Mac : `cd ~/Desktop`
3. Clonez le dépôt (remplacez l’URL par celle de votre dépôt GitHub si besoin) :  
   `git clone https://github.com/AlkodaOnAir/AlkodaOnAir.github.io.git`
4. Entrez dans le dossier du projet :  
   `cd AlkodaOnAir.github.io`

À partir de là, tous les fichiers du site sont dans le dossier `AlkodaOnAir.github.io`. Vous travaillerez toujours dans ce dossier quand vous lancez les commandes `hugo` ou `git`.

> **Note :** `git clone` sert à récupérer le projet pour la première fois.

---

## 3. Ajouter ou modifier des articles

Les articles du site sont des fichiers en **Markdown** (texte avec des balises simples). Chaque article a un **en-tête** (appelé *frontmatter*) entre deux lignes `---`, puis le contenu en dessous.

### 3.1 Créer un nouvel article (vidéo)

**Méthode 1 : avec une commande Hugo**

Dans le terminal, placez-vous dans le dossier du projet (`cd AlkodaOnAir.github.io` si besoin), puis tapez par exemple :

```bash
hugo new fr/videos/2025-03-11-ma-nouvelle-video/index.md
```

- `fr` = contenu en français.  
- `videos` = type de contenu (vidéo).  
- `2025-03-11-ma-nouvelle-video` = date du jour + un court libellé en minuscules, sans espaces (remplacez par votre date et votre titre).  
- Le fichier créé sera : `content/fr/videos/2025-03-11-ma-nouvelle-video/index.md`.

**Méthode 2 : à la main**

1. Dans le dossier `content/fr/videos/`, créez un nouveau dossier dont le nom respecte le format : **année-mois-jour-titre-en-minuscules**, par exemple `2025-03-11-concert-faure`.
2. Dans ce dossier, créez un fichier nommé exactement `index.md`.
3. Ouvrez `index.md` et collez un en-tête comme ci-dessous, puis modifiez les valeurs et ajoutez votre texte sous les `---` :

```yaml
---
title: "Titre affiché sur le site"
date: '2025-03-11'
description: "Courte description pour les moteurs de recherche et les aperçus"
draft: true
youtube: "ID_VIDEO_YOUTUBE"
themes: Concert
---

Votre texte ou description de la vidéo ici.
```

Enregistrez le fichier.

### 3.2 Les balises du frontmatter (en-tête)

Le **frontmatter** est la partie entre les deux `---` au début du fichier. Chaque ligne est une « balise » qui donne des informations à Hugo.

| Balise        | Rôle |
|---------------|------|
| **title**     | Titre de l’article tel qu’il apparaît sur le site (page, listes, moteurs de recherche). |
| **date**      | Date de l’article au format année-mois-jour (`'2025-03-11'`). Utilisée pour le tri et l’affichage. |
| **description** | Courte description de la page. Utile pour les résultats de recherche et les aperçus (réseaux sociaux, SEO). Peut rester vide `""`. |
| **draft**     | `true` = l’article n’est pas publié (visible seulement en prévisualisation locale). `false` = l’article est publié sur le site. Mettez `true` tant que l’article n’est pas prêt. |
| **youtube**   | **Vidéos uniquement.** Identifiant de la vidéo YouTube (la partie après `watch?v=` dans l’URL). Ex. pour `https://www.youtube.com/watch?v=SVk4WXX0Qcg`, mettez `SVk4WXX0Qcg`. |
| **themes**    | **Vidéos uniquement.** Thème ou catégorie (ex. « Concert », « Corporate »). Permet de grouper les vidéos par thème sur le site. |
| **cover**     | *(Optionnel)* Nom du fichier image utilisé comme image de couverture pour l’article (si le thème l’affiche). |
| **covercaption** | *(Optionnel)* Légende affichée sous l’image de couverture. |

Pour **modifier** ces balises : ouvrez le fichier `index.md` de l’article, changez les valeurs entre les deux-points, enregistrez le fichier. La prévisualisation se mettra à jour après un rafraîchissement (voir section 4).

---

## 4. Prévisualiser le site sur votre ordinateur

Avant de publier, vous pouvez voir le site tel qu’il sera en ligne, dans votre navigateur.

1. Dans le terminal, placez-vous dans le dossier du projet :  
   `cd AlkodaOnAir.github.io`
2. Lancez le serveur de prévisualisation :  
   `hugo server -D`
3. Ouvrez votre navigateur et allez à l’adresse affichée dans le terminal, en général :  
   [http://localhost:1313](http://localhost:1313)
4. Le site se met à jour automatiquement quand vous modifiez et enregistrez un fichier. Les articles en `draft: true` sont visibles en prévisualisation ; ils ne seront pas publiés tant que vous ne générez pas le site sans l’option brouillon (voir ci-dessous).

Pour arrêter le serveur : dans le terminal, appuyez sur **Ctrl+C**.

> **Astuce :** L’option `-D` signifie « inclure les brouillons ». Pour voir le site comme après publication (sans les brouillons), vous pouvez lancer `hugo server` sans `-D`.

---

## 5. Publier les changements sur GitHub

Quand vos modifications vous conviennent (après prévisualisation), vous les « commitez » puis vous les « poussez » vers GitHub. Ensuite, si le site est hébergé via GitHub (Pages ou autre), la nouvelle version du site sera générée à partir de ce que vous avez poussé.

Vous pouvez le faire **en ligne de commande** (terminal) ou **depuis VS Code** avec des boutons et des menus — c’est souvent plus simple.

### 5.1 Avec Visual Studio Code (recommandé si vous utilisez déjà l’IDE)

1. **Ouvrez le projet dans VS Code** : menu **Fichier** → **Ouvrir un dossier**, puis sélectionnez le dossier du projet (`AlkodaOnAir.github.io`).
2. **Ouvrez le panneau Git** : cliquez sur l’icône de branche dans la barre latérale gauche (ou **Affichage** → **Contrôle de code source**). Vous verrez la liste des fichiers modifiés.
3. **Préparer les fichiers à publier (staging)** :  
   - À côté de chaque fichier modifié, cliquez sur le **+** pour l’ajouter au prochain envoi (équivalent de `git add`).  
   - Ou cliquez sur le **+** à côté de « Modifications » pour tout ajouter d’un coup.
4. **Enregistrer un commit** : en haut du panneau, dans la zone de texte « Message », tapez un court message (ex. « Ajout de l’article Ma nouvelle vidéo »), puis cliquez sur le bouton **✓ Valider** (ou **Commit**).
5. **Envoyer sur GitHub** : cliquez sur le bouton **⋯** (trois points) en haut du panneau Git, puis choisissez **Push** (ou **Envoyer**). Vos changements sont envoyés sur GitHub.

Si c’est la première fois, VS Code peut vous demander de vous connecter à GitHub (fenêtre de connexion ou jeton). Suivez les instructions à l’écran.

> **Astuce :** Vous pouvez aussi faire un clic droit sur un fichier dans la liste pour l’ajouter au commit ou l’ignorer. Le bouton de synchronisation (flèches circulaires) en bas à gauche permet de faire un **Pull** puis un **Push** en un clic.

### 5.2 En ligne de commande (terminal)

1. Ouvrez le terminal dans le dossier du projet (`AlkodaOnAir.github.io`).
2. Vérifiez quels fichiers ont été modifiés :  
   `git status`
3. Ajoutez les fichiers que vous voulez publier :  
   - Tout ajouter : `git add .`  
   - Ou un seul fichier : `git add content/fr/videos/2025-03-11-ma-video/index.md`
4. Enregistrez ces changements avec un message explicite :  
   `git commit -m "Ajout de l'article Ma nouvelle vidéo"`
5. Envoyez les changements sur GitHub :  
   `git push`

Si c’est la première fois que vous faites `git push`, Git pourra vous demander de vous connecter à GitHub (identifiant / mot de passe ou jeton d’accès). Suivez les instructions affichées.

Après un envoi réussi (que ce soit depuis VS Code ou le terminal), les modifications sont sur GitHub. Si votre hébergeur (ex. GitHub Pages) est branché sur ce dépôt, le site en ligne sera mis à jour après la prochaine génération (souvent automatique).

---

## Récapitulatif des commandes utiles

| Action | Commande |
|--------|----------|
| Récupérer le projet (1ère fois) | `git clone https://github.com/AlkodaOnAir/AlkodaOnAir.github.io.git` puis `cd AlkodaOnAir.github.io` |
| Créer un nouvel article vidéo | `hugo new fr/videos/AAAA-MM-JJ-titre-en-minuscules/index.md` |
| Prévisualiser le site | `hugo server -D` puis ouvrir http://localhost:1313 |
| Publier sur GitHub (VS Code) | Panneau **Contrôle de code source** → + pour ajouter → Message → **Valider** → **⋯** → **Push** |
| Publier sur GitHub (terminal) | `git add .` → `git commit -m "Votre message"` → `git push` |

Si vous bloquez sur une étape, vérifiez que Git et Hugo sont bien installés en tapant `git --version` et `hugo version` dans le terminal.
