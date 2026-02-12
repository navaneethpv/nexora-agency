import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const subjectMap: Record<string, string> = {
            project: '🚀 New Project Inquiry',
            hiring: '💼 Job Application / Hiring',
            general: '💬 General Inquiry',
        };

        const displaySubject = subjectMap[subject] || '📬 New Contact Form Submission';

        const { data, error } = await resend.emails.send({
            from: `${name} (${email}) <agency@nexoraweb.tech>`,
            to: ['agency@nexoraweb.tech'],
            subject: `${displaySubject} from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Topic:</strong> ${displaySubject.replace(/[^\w\s]/gi, '').trim()}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
