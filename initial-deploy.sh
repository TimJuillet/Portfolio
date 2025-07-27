#!/bin/bash

# Initial deployment script
# Run this once to setup the server

echo "🚀 Initial server setup for portfolio deployment"

# Server details
SERVER="ubuntu@204.216.216.209"
REMOTE_DIR="/home/ubuntu/Portfolio"

# Build locally
echo "📦 Building project..."
npm run build

# Create remote directory and copy files
echo "📤 Copying files to server..."
ssh $SERVER "mkdir -p $REMOTE_DIR"
rsync -avP dist/ $SERVER:$REMOTE_DIR/

# Setup on server
echo "🔧 Setting up server..."
ssh $SERVER << 'EOF'
cd /home/ubuntu/Portfolio

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install PM2 globally if not present
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
fi

# Install serve globally if not present
if ! command -v serve &> /dev/null; then
    echo "Installing serve..."
    sudo npm install -g serve
fi

# Stop existing process if any
pm2 delete portfolio 2>/dev/null || true

# Start the application
pm2 start "serve -s . -l 3000" --name portfolio

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

echo "✅ Portfolio deployed successfully!"
echo "🌐 Access your portfolio at: http://204.216.216.209:3000"
EOF
