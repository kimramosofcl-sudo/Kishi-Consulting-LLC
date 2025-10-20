# Deployment Guide - Kishi Consulting Website

This guide covers deploying the Kishi Consulting website to production environments.

## 🚀 Frontend Deployment (Vercel)

### 1. Prepare for Deployment

1. Ensure all environment variables are set up correctly
2. Test the build locally:
   ```bash
   npm run build
   npm start
   ```

### 2. Deploy to Vercel

#### Option A: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

#### Option B: GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 3. Environment Variables

Set these in Vercel Dashboard → Project Settings → Environment Variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Custom Domain (Optional)

1. In Vercel Dashboard, go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## 🖥️ Backend Deployment (Railway)

### 1. Prepare for Deployment

1. Ensure server dependencies are installed:
   ```bash
   cd server
   npm install
   ```

2. Test the server locally:
   ```bash
   npm start
   ```

### 2. Deploy to Railway

#### Option A: Railway CLI

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize project:
   ```bash
   railway init
   ```

4. Deploy:
   ```bash
   railway up
   ```

#### Option B: GitHub Integration

1. Push your code to GitHub
2. Go to [Railway Dashboard](https://railway.app/dashboard)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Set root directory to `server/`

### 3. Environment Variables

Set these in Railway Dashboard → Variables:

```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key\n-----END PRIVATE KEY-----\n
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_CLIENT_ID=your_client_id
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=contact@kishi.com
PORT=3001
NODE_ENV=production
```

### 4. Custom Domain (Optional)

1. In Railway Dashboard, go to Settings → Domains
2. Add your custom domain
3. Configure DNS records

## 🔄 Alternative Backend Deployment (Heroku)

### 1. Prepare for Heroku

Create a `Procfile` in the server directory:
```
web: node index.js
```

### 2. Deploy to Heroku

1. Install Heroku CLI
2. Login to Heroku:
   ```bash
   heroku login
   ```

3. Create Heroku app:
   ```bash
   heroku create your-app-name
   ```

4. Set environment variables:
   ```bash
   heroku config:set FIREBASE_PROJECT_ID=your_project_id
   heroku config:set FIREBASE_PRIVATE_KEY_ID=your_private_key_id
   heroku config:set FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key\n-----END PRIVATE KEY-----\n"
   heroku config:set FIREBASE_CLIENT_EMAIL=your_service_account_email
   heroku config:set FIREBASE_CLIENT_ID=your_client_id
   heroku config:set EMAIL_USER=your_email@gmail.com
   heroku config:set EMAIL_PASS=your_app_password
   heroku config:set EMAIL_TO=contact@kishi.com
   heroku config:set NODE_ENV=production
   ```

5. Deploy:
   ```bash
   git subtree push --prefix server heroku main
   ```

## 🔧 Firebase Configuration

### 1. Update Firebase Settings

1. Go to Firebase Console → Project Settings
2. Add your production domain to authorized domains
3. Update CORS settings if needed

### 2. Security Rules

Update Firestore security rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contact submissions
    match /contact-submissions/{document} {
      allow read, write: if request.auth != null;
      allow create: if true;
    }
    
    // Newsletter subscribers
    match /newsletter-subscribers/{document} {
      allow read, write: if request.auth != null;
      allow create: if true;
    }
  }
}
```

## 📊 Monitoring & Analytics

### 1. Vercel Analytics

Enable Vercel Analytics in your dashboard for performance monitoring.

### 2. Firebase Analytics

Add Firebase Analytics to track user interactions:

1. Enable Analytics in Firebase Console
2. Add tracking code to your app

### 3. Error Monitoring

Consider adding error monitoring services:
- Sentry
- LogRocket
- Bugsnag

## 🔒 Security Checklist

- [ ] Environment variables are secure
- [ ] Firebase security rules are configured
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] HTTPS is enforced
- [ ] Security headers are set
- [ ] Input validation is in place

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check environment variables
   - Verify dependencies
   - Check TypeScript errors

2. **Firebase Connection Issues**
   - Verify API keys
   - Check domain authorization
   - Verify security rules

3. **Email Not Sending**
   - Check Gmail app password
   - Verify SMTP settings
   - Check rate limits

### Debug Mode

Enable debug mode by setting:
```env
NODE_ENV=development
```

## 📈 Performance Optimization

### 1. Frontend

- Enable Vercel Analytics
- Optimize images
- Use Next.js Image component
- Enable compression

### 2. Backend

- Enable gzip compression
- Use connection pooling
- Implement caching
- Monitor performance

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Railway
        run: |
          npm install -g @railway/cli
          railway login --token ${{ secrets.RAILWAY_TOKEN }}
          railway up
```

## 📞 Support

For deployment issues:
- Check the logs in your deployment platform
- Verify environment variables
- Test locally first
- Contact support if needed

---

**Happy Deploying! 🚀**
