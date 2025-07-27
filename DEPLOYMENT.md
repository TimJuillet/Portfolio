# Portfolio - Timothée Juillet

Portfolio professionnel d'ingénieur IA/Ops développé avec React et Vite.

## 🚀 Déploiement

### Prérequis sur le serveur distant

- Node.js (v16 ou plus récent)
- NPM ou Yarn
- PM2 (optionnel mais recommandé) : `npm install -g pm2`

### Étapes de déploiement

#### 1. Build en local

```bash
npm run build
```

#### 2. Transférer les fichiers

Copier le dossier `dist` sur votre serveur :

```bash
scp -r dist/* user@votre-serveur:/chemin/vers/portfolio
```

Copier aussi les fichiers nécessaires :
```bash
scp package.json user@votre-serveur:/chemin/vers/portfolio
scp ecosystem.config.json user@votre-serveur:/chemin/vers/portfolio
```

#### 3. Sur le serveur

Se connecter au serveur :
```bash
ssh user@votre-serveur
cd /chemin/vers/portfolio
```

Installer les dépendances :
```bash
npm install --production
```

#### 4. Lancer l'application

**Option A : Avec PM2 (Recommandé)**

```bash
pm2 start ecosystem.config.json
pm2 save
pm2 startup
```

**Option B : Avec un serveur statique**

Installer un serveur statique :
```bash
npm install -g serve
```

Lancer le serveur :
```bash
serve -s dist -l 3000
```

**Option C : Avec Nginx (Production)**

Configuration Nginx exemple :
```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    
    root /chemin/vers/portfolio/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### 🔧 Configuration du port

Le port par défaut est 3000. Pour le changer :

1. Modifier `ecosystem.config.json`
2. Ou utiliser la variable d'environnement : `PORT=3001 npm run preview`

### 📱 Accès

Une fois déployé, accédez à votre portfolio via :
- `http://votre-serveur:3000` (si exposition directe du port)
- `http://votre-domaine.com` (si configuration avec reverse proxy)

### 🔄 Mise à jour

Pour mettre à jour le portfolio :

1. Faire un nouveau build en local
2. Transférer les nouveaux fichiers
3. Redémarrer l'application :
   ```bash
   pm2 restart portfolio
   ```

### 🐛 Débogage

Vérifier les logs :
```bash
pm2 logs portfolio
```

Vérifier le statut :
```bash
pm2 status
```

### 🔒 Sécurité

Pour la production, pensez à :
- Configurer HTTPS avec Let's Encrypt
- Utiliser un reverse proxy (Nginx)
- Configurer un firewall
- Limiter l'accès SSH

## 💻 Développement local

```bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Preview du build
npm run preview
```

## 📝 Notes

- Le portfolio utilise React Router pour la navigation
- Le design est responsive et supporte le mode sombre
- Les assets (images, CV) sont dans le dossier `src/assets`
