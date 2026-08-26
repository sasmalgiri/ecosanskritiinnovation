Static files served at the site root.

WHAT IS ALREADY HERE
  patent-hrim-555489.pdf   Linked from the homepage "View full patent (PDF)" button.
  app-icons/               mailin, antya-yuga, 5s-contact-manager (512px webp).
  app-shots/mailin/        7 macOS screenshots + 5 iPhone screenshots.
  app-shots/antya-yuga/    3 iPhone screenshots + 1 iPad screenshot.
  app-shots/contact-manager/  The 10-step Google Sheets walkthrough.
  motor/                   12 HRIM workshop photos (homepage gallery).

ADDING A NEW APP
  1. Drop a square icon at  public/app-icons/<slug>.webp
  2. Drop screenshots at    public/app-shots/<slug>/
  3. Add the app to the APPS array in app/products/page.js
     (set icon: true, status, store URL and href)
  4. Create the landing page at app/products/<slug>/page.js
     — copy app/products/mailin/page.js as the template
  5. Add the route to app/sitemap.js

STILL TO DO
  - app/page.js still has a placeholder YouTube embed: replace VIDEO_ID
    with the real video id, or delete that section.
  - Kalsmritikosh and Photo AI have no screenshots yet; their pages use
    the animated flux-mandala instead.
