# Configuration du déploiement automatique

Pour activer le déploiement automatique sur votre serveur, vous devez configurer les secrets GitHub suivants :

## 1. Aller dans les paramètres de votre repository GitHub

Settings → Secrets and variables → Actions → New repository secret

## 2. Ajouter les secrets suivants :

### HOST
- Nom : `HOST`
- Valeur : `204.216.216.209`

### USERNAME
- Nom : `USERNAME`
- Valeur : `ubuntu`

### SSH_KEY
- Nom : `SSH_KEY`
- Valeur : Votre clé SSH privée pour accéder au serveur

Pour obtenir votre clé SSH privée :
```bash
cat ~/.ssh/id_rsa  # ou le chemin de votre clé privée
```

Copiez tout le contenu (incluant les lignes BEGIN et END).

## 3. S'assurer que votre serveur accepte la clé SSH

Sur votre serveur, vérifiez que votre clé publique est dans :
```bash
cat ~/.ssh/authorized_keys
```

## 4. Workflow automatique

Une fois les secrets configurés, chaque push sur la branche `main` déclenchera automatiquement :
- Build du projet
- Transfert des fichiers sur le serveur
- Redémarrage de l'application avec PM2
- Vérification que le déploiement s'est bien passé

## Commandes utiles sur le serveur

```bash
# Voir les logs
pm2 logs portfolio

# Voir le statut
pm2 status

# Redémarrer manuellement
pm2 restart portfolio

# Arrêter
pm2 stop portfolio

# Supprimer
pm2 delete portfolio
```

## Rollback en cas de problème

Des backups sont créés automatiquement avant chaque déploiement dans :
```
/home/ubuntu/Portfolio_backup_YYYYMMDD_HHMMSS
```

Pour restaurer un backup :
```bash
# Arrêter l'application
pm2 stop portfolio

# Restaurer le backup
rm -rf /home/ubuntu/Portfolio
cp -r /home/ubuntu/Portfolio_backup_XXXXXX /home/ubuntu/Portfolio

# Redémarrer
cd /home/ubuntu/Portfolio
pm2 start "serve -s . -l 3000" --name portfolio
```
