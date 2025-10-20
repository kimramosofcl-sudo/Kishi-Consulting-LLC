<<<<<<< HEAD
# Kishi Consulting - Professional Financial Advisory Website

A modern, responsive website built with React, Next.js, Tailwind CSS, and Firebase integration for professional financial consulting services.

## 🚀 Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Deployment**: Vercel (Frontend), Railway/Heroku (Backend)

## 📋 Features

- ✅ Responsive design optimized for all devices
- ✅ Modern UI with smooth animations and transitions
- ✅ Contact form with Firebase integration
- ✅ Newsletter subscription system
- ✅ SEO optimized with Next.js
- ✅ TypeScript for type safety
- ✅ Express.js backend API
- ✅ Email notifications for contact form submissions
- ✅ Firebase Firestore for data storage
- ✅ Rate limiting and security middleware
- ✅ Admin dashboard for managing submissions

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project
- Gmail account (for email notifications)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd kishi-consulting
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies (if running backend separately)
cd server
npm install
cd ..
```

### 3. Firebase Setup

#### Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard
4. Enable Firestore Database
5. Enable Authentication (optional)

#### Get Firebase Configuration

1. In Firebase Console, go to Project Settings
2. Scroll down to "Your apps" section
3. Click "Add app" and select Web
4. Copy the configuration object

#### Set up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration (Frontend)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin SDK (Backend)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_CLIENT_ID=your_client_id

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=contact@kishi.com

# Server Configuration
PORT=3001
NODE_ENV=development
```

#### Generate Firebase Service Account Key

1. In Firebase Console, go to Project Settings
2. Click on "Service accounts" tab
3. Click "Generate new private key"
4. Download the JSON file
5. Extract the values for the environment variables

#### Set up Gmail App Password

1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings
3. Security → 2-Step Verification → App passwords
4. Generate an app password for "Mail"
5. Use this password in `EMAIL_PASS`

### 4. Firestore Database Setup

#### Create Collections

In Firebase Console, go to Firestore Database and create these collections:

1. **contact-submissions**
   - Fields: name (string), email (string), phone (string), service (string), message (string), timestamp (timestamp), status (string)

2. **newsletter-subscribers**
   - Fields: email (string), subscribedAt (timestamp), status (string), source (string)

#### Set up Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contact submissions - allow read/write for authenticated users
    match /contact-submissions/{document} {
      allow read, write: if request.auth != null;
      allow create: if true; // Allow form submissions
    }
    
    // Newsletter subscribers - allow read/write for authenticated users
    match /newsletter-subscribers/{document} {
      allow read, write: if request.auth != null;
      allow create: if true; // Allow newsletter signups
    }
  }
}
```

### 5. Run the Application

#### Development Mode

```bash
# Start the frontend development server
npm run dev

# In another terminal, start the backend server (optional)
npm run server
```

The frontend will be available at `http://localhost:3000`
The backend API will be available at `http://localhost:3001`

#### Production Build

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
kishi-consulting/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services section
│   ├── About.tsx          # About section
│   ├── Testimonials.tsx   # Testimonials section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── BackToTop.tsx      # Back to top button
├── lib/                   # Utility libraries
│   └── firebase.ts        # Firebase configuration
├── server/                # Express.js backend
│   ├── config/            # Configuration files
│   │   └── firebase.js    # Firebase Admin SDK
│   ├── routes/            # API routes
│   │   ├── contact.js     # Contact form routes
│   │   └── newsletter.js  # Newsletter routes
│   └── index.js           # Server entry point
├── public/                # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Documentation
```

## 🔧 Configuration

### Tailwind CSS Customization

The project uses a custom Tailwind configuration with brand colors and components. You can modify `tailwind.config.js` to customize:

- Color palette
- Font families
- Spacing
- Animations
- Custom components

### Next.js Configuration

Key configurations in `next.config.js`:

- Environment variables
- Image domains
- Experimental features

### Firebase Configuration

The Firebase configuration supports both client-side and server-side usage:

- **Client-side**: Used in components for real-time features
- **Server-side**: Used in API routes for secure operations

## 📧 Contact Form Integration

### Frontend Form

The contact form in `components/Contact.tsx` includes:

- Form validation
- Error handling
- Loading states
- Success/error messages

### Backend API

The contact form API (`/api/contact`) handles:

- Form validation
- Data sanitization
- Firebase storage
- Email notifications

### Email Notifications

When a contact form is submitted:

1. Data is saved to Firestore
2. Email notification is sent to admin
3. Confirmation is sent to user (optional)

## 📰 Newsletter Integration

### Subscription Process

1. User enters email in footer
2. Email is validated and stored in Firestore
3. Duplicate prevention
4. Success confirmation

### Management

Newsletter subscribers can be managed through:

- Firebase Console
- Admin API endpoints
- Custom admin dashboard (to be implemented)

## 🚀 Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)

1. Create a new project on Railway/Heroku
2. Connect your GitHub repository
3. Set environment variables
4. Deploy the server

### Environment Variables for Production

Make sure to set these in your deployment platform:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Backend Configuration
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=

# Email Configuration
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

## 🔒 Security Features

- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Helmet.js for security headers
- Environment variable protection
- Firebase security rules

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors

The brand colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1a3a52',    // Main brand color
    light: '#2c5f7f',      // Lighter variant
  },
  secondary: {
    DEFAULT: '#d4af37',    // Accent color
    light: '#c09e30',      // Lighter variant
  },
  // ... other colors
}
```

### Content

Update the content in respective component files:

- Services: `components/Services.tsx`
- About: `components/About.tsx`
- Testimonials: `components/Testimonials.tsx`
- Contact info: `components/Contact.tsx`

## 🐛 Troubleshooting

### Common Issues

1. **Firebase connection errors**
   - Check environment variables
   - Verify Firebase project configuration
   - Ensure Firestore is enabled

2. **Email not sending**
   - Verify Gmail app password
   - Check email configuration
   - Ensure 2FA is enabled on Gmail

3. **Build errors**
   - Check TypeScript errors
   - Verify all dependencies are installed
   - Clear Next.js cache: `rm -rf .next`

### Debug Mode

Enable debug mode by setting:

```env
NODE_ENV=development
```

This will show detailed error messages in the console.

## 📞 Support

For support or questions:

- Email: contact@kishi.com
- Phone: (555) 123-4567

## 📄 License

This project is proprietary software for Kishi Consulting. All rights reserved.

## 🔄 Updates

To update the application:

1. Pull latest changes: `git pull origin main`
2. Install new dependencies: `npm install`
3. Update environment variables if needed
4. Restart the application

---

**Built with ❤️ for Kishi Consulting**
=======

>>>>>>> 28eefbc950bd8816756a6f27c88931b3e991f654
