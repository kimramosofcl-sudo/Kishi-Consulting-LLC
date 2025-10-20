#!/bin/bash

echo "🚀 Setting up Kishi Consulting Website..."
echo

echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error installing dependencies. Please check your Node.js installation."
    exit 1
fi

echo
echo "✅ Dependencies installed successfully!"
echo

echo "📝 Setting up environment files..."

if [ ! -f ".env.local" ]; then
    if [ -f "env.example" ]; then
        cp "env.example" ".env.local"
        echo "✅ Created .env.local from template"
    else
        echo "⚠️  env.example not found. Please create .env.local manually."
    fi
else
    echo "✅ .env.local already exists"
fi

if [ ! -f "server/.env" ]; then
    if [ -f "server/env.example" ]; then
        cp "server/env.example" "server/.env"
        echo "✅ Created server/.env from template"
    else
        echo "⚠️  server/env.example not found. Please create server/.env manually."
    fi
else
    echo "✅ server/.env already exists"
fi

echo
echo "🎉 Setup complete!"
echo
echo "📋 Next steps:"
echo "1. Update .env.local with your Firebase configuration"
echo "2. (Optional) Update server/.env with Firebase Admin SDK configuration"
echo "3. Run: npm run dev"
echo
echo "📖 See QUICK_START.md for detailed instructions"
echo
