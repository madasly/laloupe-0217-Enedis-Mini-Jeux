# laloupe-0217-Enedis-Mini-Jeux

[![Stories in Ready](https://badge.waffle.io/WildCodeSchool/laloupe-0217-Enedis-Mini-Jeux.png?label=ready&title=Ready)](http://waffle.io/WildCodeSchool/laloupe-0217-Enedis-Mini-Jeux)

![Lineman build](https://travis-ci.org/JbPasquier/mean-lineman.svg?branch=master)


## Angular

### Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](http://nodemon.io/)

### Execution

#### Installation

```bash
git clone git@github.com:JbPasquier/mean-lineman.git
cd mean-lineman
npm install
```

#### API installation

```bash
npm run createAdmin
curl -d "email=admin@mail.com&password=12345&isAdmin=true" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/
```

#### Development

```bash
npm start
```

#### Development API

```bash
nodemon --exec npm run server
```

#### Production

```bash
npm run production
```

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

# CSS

## les fonts

Pour utilisez les 6 polices différente ubuntu :

@import "font.less"; dans votre dossier CSS.

### Les classe custom

Dans votre fichier.html placer les classes suivantes pour modifier la police

+ .ubuntu pour la police Ubuntu.ttf
+ .ubuntu-bold pour la police Ubuntu-Bold.ttf
+ .ubuntu-italic pour la police Ubuntu-italic.ttf
+ .ubuntu-light pour la police Ubuntu-light.ttf
+ .ubuntu-li pour la police Ubuntu-LightItalic.ttf
+ .ubuntu-medium pour la police Ubuntu-medium.ttf
