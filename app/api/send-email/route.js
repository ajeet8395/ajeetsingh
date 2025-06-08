import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Debug log to check if environment variable is loaded
console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
  console.error('ERROR: RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'ajeetsi8395@gmail.com',
      reply_to: email,
      subject: `New message from ${name} - Portfolio Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 1.5rem; border-radius: 0.5rem; margin-top: 1rem;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 1rem; border-radius: 0.25rem; margin-top: 0.5rem;">
              <p style="white-space: pre-line;">${message}</p>
            </div>
          </div>
          <p style="margin-top: 1.5rem; color: #6b7280; font-size: 0.875rem;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `New message from ${name} (${email}):\n\n${message}`
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        data
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined 
      },
      { status: 500 }
    );
  }
}