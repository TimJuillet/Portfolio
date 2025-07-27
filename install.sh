#!/bin/bash

# Script to install and run the React Portfolio with Vite

echo "🚀 Installing Timothée Juillet's React Portfolio"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ NPM version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation completed successfully!"
    echo ""
    echo "🎯 To start the development server:"
    echo "   npm run dev"
    echo ""
    echo "📦 To create a production build:"
    echo "   npm run build"
    echo ""
    echo "👁️  To preview the production build:"
    echo "   npm run preview"
    echo ""
    
    # Ask if user wants to start the server now
    read -p "Do you want to start the development server now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        echo "🚀 Starting the server..."
        npm run dev
    fi
else
    echo "❌ Error during dependency installation"
    exit 1
fi
