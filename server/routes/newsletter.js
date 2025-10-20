const express = require('express');
const { db } = require('../config/firebase');
const router = express.Router();

// POST /api/newsletter - Subscribe to newsletter
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        error: 'Email is required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if email already exists
    const existingSubscriber = await db.collection('newsletter-subscribers')
      .where('email', '==', normalizedEmail)
      .get();

    if (!existingSubscriber.empty) {
      return res.status(409).json({
        error: 'Email is already subscribed to our newsletter'
      });
    }

    // Add new subscriber
    const subscriberData = {
      email: normalizedEmail,
      subscribedAt: new Date(),
      status: 'active',
      source: 'website',
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    };

    const docRef = await db.collection('newsletter-subscribers').add(subscriberData);
    
    console.log('Newsletter subscription saved with ID:', docRef.id);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      id: docRef.id
    });

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// GET /api/newsletter - Get newsletter subscribers (admin only)
router.get('/', async (req, res) => {
  try {
    const { status = 'active', limit = 100 } = req.query;
    
    let query = db.collection('newsletter-subscribers');
    
    if (status !== 'all') {
      query = query.where('status', '==', status);
    }
    
    const snapshot = await query
      .orderBy('subscribedAt', 'desc')
      .limit(parseInt(limit))
      .get();
    
    const subscribers = [];
    snapshot.forEach(doc => {
      subscribers.push({
        id: doc.id,
        ...doc.data(),
        subscribedAt: doc.data().subscribedAt?.toDate?.() || doc.data().subscribedAt
      });
    });

    res.status(200).json({
      success: true,
      data: subscribers,
      count: subscribers.length
    });

  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// DELETE /api/newsletter/:id - Unsubscribe from newsletter
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: 'Email is required for unsubscription'
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find subscriber by email
    const subscriberQuery = await db.collection('newsletter-subscribers')
      .where('email', '==', normalizedEmail)
      .get();

    if (subscriberQuery.empty) {
      return res.status(404).json({
        error: 'Email not found in newsletter subscribers'
      });
    }

    // Update status to unsubscribed
    const subscriberDoc = subscriberQuery.docs[0];
    await subscriberDoc.ref.update({
      status: 'unsubscribed',
      unsubscribedAt: new Date()
    });

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error) {
    console.error('Error processing newsletter unsubscription:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

module.exports = router;
