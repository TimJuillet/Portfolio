#!/bin/bash

# Portfolio Deployment Script

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Instructions for manual deployment
echo ""
echo "📋 Deployment Instructions:"
echo "=========================="
echo ""
echo "1. Copy the 'dist' folder to your remote server:"
echo "   scp -r dist/* user@your-server:/path/to/portfolio"
echo ""
echo "2. SSH into your server:"
echo "   ssh user@your-server"
echo ""
echo "3. Install dependencies (if not already done):"
echo "   cd /path/to/portfolio"
echo "   npm install --production"
echo ""
echo "4. Start the application with PM2:"
echo "   pm2 start ecosystem.config.json"
echo ""
echo "5. Save PM2 configuration:"
echo "   pm2 save"
echo "   pm2 startup"
echo ""
echo "6. Your portfolio should now be running on port 3000!"
echo ""
echo "Alternative: Using Vite preview (for testing):"
echo "   npm run preview -- --host 0.0.0.0 --port 3000"
