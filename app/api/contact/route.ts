import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to Firebase Firestore
    const docRef = await addDoc(collection(db, 'contact-submissions'), {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      service,
      message: message.trim(),
      timestamp: serverTimestamp(),
      status: 'new',
      createdAt: new Date().toISOString(),
    });

    console.log('Contact form submission saved with ID:', docRef.id);

    // Send email notification (you can implement this with your preferred email service)
    // await sendEmailNotification({ name, email, phone, service, message });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: docRef.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
