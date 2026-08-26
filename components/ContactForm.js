'use client';

import { useState } from 'react';
import { IconArrow } from './Icons';

export default function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.company) return; // honeypot: silently drop bots

    if (!data.name || !data.email || !data.message) {
      setStatus({ state: 'error', message: 'Add your name, email, and a message so we can reply.' });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending…' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (res.ok) {
        setStatus({ state: 'ok', message: body.message || 'Thanks — your message is on its way. We’ll be in touch soon.' });
        form.reset();
      } else {
        setStatus({ state: 'error', message: body.error || 'Something went wrong. Please email us directly instead.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please email us directly at sasmalgiri@gmail.com.' });
    }
  }

  const sending = status.state === 'sending';

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Shirshendu Sasmal" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="Partnership, product, or press" />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us what you’re working on…" />
      </div>

      {/* honeypot — hidden from people, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      {status.state !== 'idle' && status.state !== 'sending' && (
        <div className={`form__status ${status.state === 'ok' ? 'form__status--ok' : 'form__status--err'}`}>
          {status.message}
        </div>
      )}

      <button type="submit" className="btn btn--ink" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
        {!sending && <IconArrow className="btn__arrow" width="16" height="16" />}
      </button>

      <p className="form__note">
        Prefer email? Write to <a href="mailto:sasmalgiri@gmail.com" style={{ color: 'var(--pine)' }}>sasmalgiri@gmail.com</a>.
      </p>
    </form>
  );
}
