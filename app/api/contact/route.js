import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = (data.name || '').toString().trim();
  const email = (data.email || '').toString().trim();
  const subject = (data.subject || '').toString().trim();
  const message = (data.message || '').toString().trim();
  // Both optional, and both capped — an unbounded string from a public form
  // has no business being interpolated into an outgoing email.
  const service = (data.service || '').toString().trim().slice(0, 120);
  const budget = (data.budget || '').toString().trim().slice(0, 60);

  if (data.company) {
    // honeypot tripped — pretend success, send nothing
    return NextResponse.json({ message: 'Thanks — your message has been received.' });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'That email address doesn’t look right.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'sasmalgiri@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  // Email isn't configured yet — tell the user plainly instead of failing silently.
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          'The contact form isn’t connected to email yet. Please write to sasmalgiri@gmail.com for now.',
      },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `EcoSanskriti Website <${from}>`,
      to,
      replyTo: email,
      // The service tag in the subject line makes the inbox sortable at a
      // glance, which matters more than the prettier phrasing without it.
      subject: subject
        ? `[Website] ${subject}`
        : service
          ? `[Website] ${service.split('—')[0].trim()} — ${name}`
          : `[Website] New message from ${name}`,
      text: `From: ${name} <${email}>\nSubject: ${subject || '(none)'}\nService: ${service || '(not specified)'}\nBudget: ${budget || '(not specified)'}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#16241d">
          <h2 style="margin:0 0 12px">New enquiry via ecosanskritiinnovations.co.in</h2>
          <p style="margin:0 0 6px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 6px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin:0 0 6px"><strong>Subject:</strong> ${escapeHtml(subject) || '(none)'}</p>
          <p style="margin:0 0 6px"><strong>Service:</strong> ${escapeHtml(service) || '(not specified)'}</p>
          <p style="margin:0 0 12px"><strong>Budget:</strong> ${escapeHtml(budget) || '(not specified)'}</p>
          <div style="padding:12px 16px;background:#f6f2e9;border-left:3px solid #d8a521;border-radius:4px;white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>`,
    });

    if (error) {
      return NextResponse.json({ error: 'We couldn’t send that just now. Please email us directly.' }, { status: 502 });
    }

    return NextResponse.json({ message: 'Thanks — your message is on its way. We’ll be in touch soon.' });
  } catch {
    return NextResponse.json({ error: 'We couldn’t send that just now. Please email us directly.' }, { status: 500 });
  }
}
