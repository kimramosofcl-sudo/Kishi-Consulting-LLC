const express = require('express');
const { db } = require('../config/firebase');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'service', 'message']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Create contact submission object
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      service,
      message: message.trim(),
      timestamp: new Date(),
      status: 'new',
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    };

    // Save to Firestore
    const docRef = await db.collection('contact-submissions').add(contactData);
    
    console.log('Contact form submission saved with ID:', docRef.id);

    // Send email notification
    try {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Contact Form Submission - ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${contactData.service}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
          <hr>
          <p><strong>Submitted:</strong> ${contactData.timestamp}</p>
          <p><strong>Submission ID:</strong> ${docRef.id}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Don't fail the request if email fails
    }

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: docRef.id
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// GET /api/contact - Get contact submissions (admin only)
router.get('/', async (req, res) => {
  try {
    // In a real application, you would verify admin authentication here
    const { status = 'all', limit = 50 } = req.query;
    
    let query = db.collection('contact-submissions');
    
    if (status !== 'all') {
      query = query.where('status', '==', status);
    }
    
    const snapshot = await query
      .orderBy('timestamp', 'desc')
      .limit(parseInt(limit))
      .get();
    
    const submissions = [];
    snapshot.forEach(doc => {
      submissions.push({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate?.() || doc.data().timestamp
      });
    });

    res.status(200).json({
      success: true,
      data: submissions,
      count: submissions.length
    });

  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// PATCH /api/contact/:id - Update submission status (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['new', 'in-progress', 'completed', 'archived'].includes(status)) {
      return res.status(400).json({
        error: 'Invalid status. Must be one of: new, in-progress, completed, archived'
      });
    }

    await db.collection('contact-submissions').doc(id).update({
      status,
      updatedAt: new Date()
    });

    res.status(200).json({
      success: true,
      message: 'Submission status updated successfully'
    });

  } catch (error) {
    console.error('Error updating submission status:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

module.exports = router;
