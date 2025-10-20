# 🚀 Quick Start Guide - Kishi Consulting Website

This guide will walk you through setting up and running your Kishi Consulting website step by step.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)
- **A Gmail account** (for email notifications)
- **A Firebase account** (free) - [Sign up here](https://firebase.google.com/)

## 🎯 Step-by-Step Setup

### Step 1: Install Dependencies

Open your terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all the required packages for your React/Next.js application.

### Step 2: Set Up Firebase Project

#### 2.1 Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter project name: `kishi-consulting` (or any name you prefer)
4. Disable Google Analytics (optional)
5. Click **"Create project"**

#### 2.2 Enable Firestore Database

1. In your Firebase project, click **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Choose **"Start in test mode"** (we'll secure it later)
4. Select a location close to you
5. Click **"Done"**

#### 2.3 Get Firebase Configuration

1. Click the **gear icon** (⚙️) next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click **"Add app"** and select the **Web icon** (</>)
5. Register your app with nickname: `kishi-website`
6. **Copy the configuration object** - you'll need this for Step 3

### Step 3: Configure Environment Variables

#### 3.1 Create Environment File

1. In your project folder, create a new file called `.env.local`
2. Copy the content from `env.example` into `.env.local`

#### 3.2 Add Firebase Configuration

Replace the placeholder values in `.env.local` with your actual Firebase config:

```env
# Firebase Configuration (Frontend)
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id

# Email Configuration (Optional - for contact form emails)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=contact@kishi.com

# Server Configuration
PORT=3001
NODE_ENV=development
```

**Important**: Replace `your_actual_*` with the values from your Firebase configuration.

### Step 4: Set Up Email Notifications (Optional)

If you want to receive email notifications when someone submits the contact form:

#### 4.1 Enable 2-Factor Authentication

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Click **"Security"** in the left sidebar
3. Under **"Signing in to Google"**, click **"2-Step Verification"**
4. Follow the setup process

#### 4.2 Generate App Password

1. In Google Account settings, go to **"Security"**
2. Under **"Signing in to Google"**, click **"App passwords"**
3. Select **"Mail"** and **"Other (custom name)"**
4. Enter name: `Kishi Website`
5. Click **"Generate"**
6. **Copy the 16-character password** and use it in your `.env.local` file

### Step 5: Run the Application

#### 5.1 Start the Development Server

In your terminal, run:

```bash
npm run dev
```

You should see output like:
```
> kishi-consulting@1.0.0 dev
> next dev

   ▲ Next.js 14.0.0
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.100:3000

 ✓ Ready in 2.3s
```

#### 5.2 Open Your Website

1. Open your web browser
2. Go to `http://localhost:3000`
3. You should see your Kishi Consulting website!

### Step 6: Test the Contact Form

1. Scroll down to the **"Get In Touch"** section
2. Fill out the contact form with test data:
   - Name: `Test User`
   - Email: `test@example.com`
   - Service: `SOX Consulting & Compliance`
   - Message: `This is a test message`
3. Click **"Send Message"**
4. You should see a success message
5. Check your Firebase Console → Firestore Database to see the submission

## 🎉 Congratulations!

Your website is now running! Here's what you can do:

### ✅ What's Working

- ✅ **Responsive website** with all sections
- ✅ **Contact form** that saves to Firebase
- ✅ **Newsletter subscription** (footer)
- ✅ **Smooth animations** and modern design
- ✅ **Mobile-friendly** navigation

### 🔧 Next Steps (Optional)

#### Set Up Backend Server (for email notifications)

If you want email notifications when someone submits the contact form:

1. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   cd ..
   ```

2. **Create server environment file**:
   - Copy `server/env.example` to `server/.env`
   - Add your Firebase Admin SDK configuration (see README.md for details)

3. **Start the backend server**:
   ```bash
   npm run server
   ```

#### Customize Your Content

Edit these files to customize your website:

- **Services**: `components/Services.tsx`
- **About section**: `components/About.tsx`
- **Testimonials**: `components/Testimonials.tsx`
- **Contact info**: `components/Contact.tsx`
- **Colors**: `tailwind.config.js`

## 🚨 Troubleshooting

### Common Issues

#### 1. "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

#### 2. Firebase connection errors
- Double-check your `.env.local` file
- Make sure you copied the correct Firebase configuration
- Verify your Firebase project has Firestore enabled

#### 3. Contact form not working
- Check browser console for errors (F12 → Console)
- Verify Firebase configuration
- Make sure Firestore is in "test mode"

#### 4. Website not loading
- Make sure you're running `npm run dev`
- Check that port 3000 is not being used by another application
- Try `http://localhost:3000` in a different browser

### Getting Help

If you encounter issues:

1. **Check the console**: Press F12 in your browser and look for error messages
2. **Check the terminal**: Look for error messages in your terminal where you ran `npm run dev`
3. **Verify environment variables**: Make sure your `.env.local` file is correct
4. **Check Firebase**: Ensure your Firebase project is set up correctly

## 📚 Additional Resources

- **Full Documentation**: See `README.md` for complete setup instructions
- **Deployment Guide**: See `DEPLOYMENT.md` for production deployment
- **Firebase Help**: [Firebase Documentation](https://firebase.google.com/docs)
- **Next.js Help**: [Next.js Documentation](https://nextjs.org/docs)

## 🎯 Quick Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Start backend server (optional)
npm run server

# Check for linting errors
npm run lint
```

---

**🎉 You're all set! Your Kishi Consulting website is now running locally.**

**Next**: Check out the `README.md` for advanced configuration and deployment options.
