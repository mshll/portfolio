import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API);

// Validation schema matching the frontend form
const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter a valid name.'),
  email: z.string().email('Please enter a valid email.'),
  message: z.string().min(10, 'Please enter a message.'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <form@meshal.me>',
      to: 'contact@meshal.me',
      subject: `New Contact Form Message from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission

        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Message: ${validatedData.message}
      `,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
