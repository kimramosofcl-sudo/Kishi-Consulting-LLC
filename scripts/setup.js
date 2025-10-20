#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Kishi Consulting project...\n');

// Check if .env.local exists
const envLocalPath = path.join(__dirname, '..', '.env.local');
const envExamplePath = path.join(__dirname, '..', 'env.example');

if (!fs.existsSync(envLocalPath)) {
  if (fs.existsSync(envExamplePath)) {
    console.log('📝 Creating .env.local from template...');
    fs.copyFileSync(envExamplePath, envLocalPath);
    console.log('✅ .env.local created! Please update it with your Firebase configuration.\n');
  } else {
    console.log('⚠️  env.example not found. Please create .env.local manually.\n');
  }
} else {
  console.log('✅ .env.local already exists.\n');
}

// Check if server/.env exists
const serverEnvPath = path.join(__dirname, '..', 'server', '.env');
const serverEnvExamplePath = path.join(__dirname, '..', 'server', 'env.example');

if (!fs.existsSync(serverEnvPath)) {
  if (fs.existsSync(serverEnvExamplePath)) {
    console.log('📝 Creating server/.env from template...');
    fs.copyFileSync(serverEnvExamplePath, serverEnvPath);
    console.log('✅ server/.env created! Please update it with your Firebase Admin SDK configuration.\n');
  } else {
    console.log('⚠️  server/env.example not found. Please create server/.env manually.\n');
  }
} else {
  console.log('✅ server/.env already exists.\n');
}

console.log('🎉 Setup complete! Next steps:');
console.log('1. Update .env.local with your Firebase configuration');
console.log('2. Update server/.env with your Firebase Admin SDK configuration');
console.log('3. Run "npm install" to install dependencies');
console.log('4. Run "npm run dev" to start the development server');
console.log('\n📖 See README.md for detailed setup instructions.\n');
