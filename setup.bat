@echo off
echo 🚀 Setting up Kishi Consulting Website...
echo.

echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error installing dependencies. Please check your Node.js installation.
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.

echo 📝 Setting up environment files...

if not exist ".env.local" (
    if exist "env.example" (
        copy "env.example" ".env.local" >nul
        echo ✅ Created .env.local from template
    ) else (
        echo ⚠️  env.example not found. Please create .env.local manually.
    )
) else (
    echo ✅ .env.local already exists
)

if not exist "server\.env" (
    if exist "server\env.example" (
        copy "server\env.example" "server\.env" >nul
        echo ✅ Created server/.env from template
    ) else (
        echo ⚠️  server/env.example not found. Please create server/.env manually.
    )
) else (
    echo ✅ server/.env already exists
)

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Update .env.local with your Firebase configuration
echo 2. (Optional) Update server/.env with Firebase Admin SDK configuration
echo 3. Run: npm run dev
echo.
echo 📖 See QUICK_START.md for detailed instructions
echo.
pause
