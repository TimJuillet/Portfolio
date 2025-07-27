# Portfolio - Timothée Juillet

Portfolio professionnel d'ingénieur Full-Stack / ML développé avec React, Vite et Tailwind CSS.

## 🚀 Fonctionnalités

- ✨ Design moderne et professionnel avec animations subtiles
- 🌓 Mode sombre/clair
- 📱 Entièrement responsive (desktop et mobile)
- 🎨 Animations Framer Motion
- 📧 Formulaire de contact fonctionnel
- 🔄 Déploiement automatique avec GitHub Actions

## 🛠️ Technologies

- **Frontend**: React 19, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Déploiement**: PM2, GitHub Actions
- **Serveur**: Ubuntu VPS avec Nginx (optionnel)

## 📂 Structure du projet

```
portfolio/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── pages/         # Pages de l'application
│   ├── contexts/      # Context API (theme)
│   ├── hooks/         # Custom hooks
│   ├── assets/        # Images, CV, etc.
│   └── App.jsx        # Composant principal
├── .github/
│   └── workflows/     # GitHub Actions
├── public/           # Fichiers statiques
└── dist/            # Build de production
```

## 🚀 Installation et développement

### Prérequis

- Node.js 16+
- NPM ou Yarn

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/TimJuillet/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 🌐 Déploiement

### Option 1: Déploiement automatique (Recommandé)

Le déploiement est automatisé via GitHub Actions. Chaque push sur la branche `main` déclenche :

1. Build automatique
2. Transfert sur le serveur
3. Redémarrage avec PM2

**Configuration requise** (voir [DEPLOYMENT_AUTO.md](DEPLOYMENT_AUTO.md)) :

1. Configurer les secrets GitHub :
   - `HOST`: IP du serveur
   - `USERNAME`: Utilisateur SSH
   - `SSH_KEY`: Clé SSH privée

2. Push sur main :
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

### Option 2: Déploiement manuel

```bash
# Première fois seulement
./initial-deploy.sh

# Déploiements suivants
npm run deploy:manual
```

### Option 3: Déploiement manuel détaillé

```bash
# Build
npm run build

# Transférer les fichiers
rsync -avP dist/ ubuntu@204.216.216.209:/home/ubuntu/Portfolio/

# Sur le serveur
ssh ubuntu@204.216.216.209
cd /home/ubuntu/Portfolio
pm2 restart portfolio
```

## 🔧 Configuration du serveur

### PM2 Commands

```bash
# Voir les logs
pm2 logs portfolio

# Status
pm2 status

# Restart
pm2 restart portfolio

# Stop
pm2 stop portfolio
```

### Nginx (Optionnel)

Pour utiliser Nginx comme reverse proxy :

```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📱 Responsive Design

Le portfolio est optimisé pour :
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎨 Personnalisation

### Modifier les couleurs

Éditer `tailwind.config.js` pour changer le thème :

```javascript
colors: {
  primary: {
    // Vos couleurs
  }
}
```

### Ajouter des projets

Éditer `src/components/Projects.jsx` et ajouter dans le tableau `projects`.

### Mettre à jour le CV

Remplacer `src/assets/cv-llt-full_compressed.pdf` par votre CV.

## 🐛 Troubleshooting

### Le site ne se charge pas

```bash
# Vérifier les logs PM2
pm2 logs portfolio

# Redémarrer
pm2 restart portfolio
```

### Erreur de build

```bash
# Nettoyer le cache
rm -rf node_modules dist
npm install
npm run build
```

### Port déjà utilisé

```bash
# Trouver le processus
sudo lsof -i :3000

# Tuer le processus
kill -9 <PID>
```

## 📄 Licence

MIT License - Libre d'utilisation et de modification

## 👤 Contact

- **Email**: timotheejuillet@gmail.com
- **LinkedIn**: [Timothée Juillet](https://linkedin.com/in/timothée-juillet)
- **GitHub**: [TimJuillet](https://github.com/TimJuillet)

---

Développé avec ❤️ par Timothée Juillet
