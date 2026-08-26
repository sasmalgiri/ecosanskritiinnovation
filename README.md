# EcoSanskriti Innovations — website

A fast, modern rebuild of **ecosanskritiinnovations.co.in**, moved off WordPress/Bluehost and ready to deploy on **Vercel**. Built with Next.js (App Router). No database, no PHP — just static pages plus one serverless function for the contact form.

---

## 1. Run it locally (optional, to preview)

You need [Node.js 18.17+](https://nodejs.org).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Edit any file under `app/` and the page reloads instantly.

---

## 2. Put it on GitHub

You already use GitHub (`sasmalgiri`). From this folder:

```bash
git init
git add .
git commit -m "Initial commit: EcoSanskriti site (Next.js, Vercel-ready)"
git branch -M main
git remote add origin https://github.com/sasmalgiri/ecosanskriti-web.git   # create this empty repo first
git push -u origin main
```

*(Create the empty repo on github.com first — don't add a README there, this project already has one.)*

---

## 3. Deploy to Vercel

1. Go to <https://vercel.com>, sign in with GitHub.
2. **Add New… → Project**, and import the repo you just pushed.
3. Vercel auto-detects Next.js — leave every build setting at its default.
4. Click **Deploy**. In ~1 minute you get a live URL like `ecosanskriti-web.vercel.app`.

From now on, **every `git push` to `main` redeploys automatically.** That's the whole workflow.

---

## 4. Point your domain at Vercel

Your domain registration can stay wherever it is — you're only repointing where the *website* is served.

1. In your Vercel project: **Settings → Domains → Add** → enter `ecosanskritiinnovations.co.in` (and `www.` too).
2. Vercel shows you the DNS records to set. Usually:
   - `A` record for the root `@` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
3. Add those records in your **domain's DNS settings** (Bluehost, or wherever your DNS is managed). Vercel verifies and issues an HTTPS certificate automatically.

DNS changes can take anywhere from a few minutes to a few hours to propagate.

### ⚠️ Don't break your email

Your mailbox `contact@ecosanskritiinnovations.co.in` is almost certainly hosted on **Bluehost**, separate from the website. Moving the site does **not** move email.

- **Only change the records Vercel asks for** (usually the `A`/`CNAME` above).
- **Leave your `MX` records — and any mail-related `TXT`/SPF/DKIM records — exactly as they are.**
- If you ever switch nameservers entirely to Vercel, you must re-create those MX records there, or email will stop arriving. Safer option: keep DNS where it is and just add the two records above.

---

## 5. Wire up the contact form (recommended)

The form at `/contact` posts to `app/api/contact/route.js`, which emails you via [Resend](https://resend.com) (free tier is plenty).

1. Create a free Resend account and an **API key**.
2. In Vercel: **Settings → Environment Variables**, add:

   | Name | Value |
   |------|-------|
   | `RESEND_API_KEY` | your key (starts with `re_`) |
   | `CONTACT_TO_EMAIL` | `contact@ecosanskritiinnovations.co.in` |
   | `CONTACT_FROM_EMAIL` | `onboarding@resend.dev` (or a verified domain sender) |

3. Redeploy. Until you verify your own domain in Resend, keep `onboarding@resend.dev` as the sender — messages will still land in your inbox.

**No-code alternative:** if you'd rather not use Resend, sign up at [Formspree](https://formspree.io), and change the `fetch('/api/contact', …)` call in `components/ContactForm.js` to POST to your Formspree endpoint instead. Until email is configured, the form shows a friendly "email us directly" message rather than failing silently.

---

## 6. Before you launch — edit these

Search the project for **"Editor's note"** to find every placeholder. Specifically:

- **Patent PDF** — download your patent from the old site and drop it into `public/` as `patent-hrim-555489.pdf` (see `public/README.txt`).
- **Founder page** (`app/founder/page.js`) — paste your full bio, swap the `SS` monogram for a photo, add any team members.
- **5S Contact Manager** (`app/products/5s-contact-manager/page.js`) — real description, screenshots, App Store link, pricing.
- **Legal pages** (`app/legal/*`) — replace the templates with your reviewed Terms, Privacy, and EULA text.
- **YouTube** (`app/page.js`) — to embed a specific video, follow the comment in the YouTube section.

---

## 7. What carried over from the old site

- All content: hero, mission, the four "What We Do" areas, the HRIM Motor patent (No. 555489), YouTube channel, and contact details.
- **Old URLs still work.** `next.config.mjs` permanently redirects the WordPress paths so search results and shared links don't break:

  | Old | New |
  |-----|-----|
  | `/360-2` | `/founder` |
  | `/5s-contact-manager` | `/products/5s-contact-manager` |
  | `/contact-me` | `/contact` |
  | `/terms-and-conditions` | `/legal/terms` |
  | `/privacy-policy` | `/legal/privacy` |
  | `/my-account` | `/legal/eula` |

- Your **Google Search Console** verification tag is preserved in `app/layout.js`, so the property stays verified.

---

## Project structure

```
app/
  layout.js            Fonts, metadata, nav + footer, SEO
  page.js              Home
  globals.css          The whole design system
  icon.svg             Flux-mandala favicon
  not-found.js         Custom 404
  robots.js / sitemap.js
  products/            Products + 5S Contact Manager
  founder/             Founder & Team
  contact/             Contact page
  legal/               Terms · Privacy · EULA
  api/contact/route.js Serverless contact handler (Resend)
components/
  Nav, Footer, FluxMandala, Reveal, ContactForm, Icons
public/                Static files (add your patent PDF here)
```

---

## Design notes

The visual identity is built on the **flux-mandala**: the dharma wheel of regeneration drawn as a motor rotor — 24 stator ticks (also the Ashoka Chakra's 24 spokes), 6 magnetic poles as lotus petals, and magnetic field-lines as the rosette. It nods to your HRIM Motor and the "ancient wisdom × modern tech" thesis, and slowly rotates in the hero. Palette: deep botanical pine, turmeric/haldi gold, warm paper, ink. Type: Fraunces (display) with IBM Plex Sans/Mono (body + data).
