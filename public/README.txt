Drop static files you want served at the site root into this /public folder.

Two things to add before launch:

1) patent-hrim-555489.pdf
   The homepage "View full patent (PDF)" button links to /patent-hrim-555489.pdf.
   Download your existing patent PDF from the current WordPress site:
     https://ecosanskritiinnovations.co.in/wp-content/uploads/2025/04/patent-complete-spf.pdf
   Rename it to  patent-hrim-555489.pdf  and place it here.

2) (Optional) Replace the favicon
   A generated flux-mandala favicon is already set via app/icon.svg.
   To use your own logo instead, delete app/icon.svg and drop a
   favicon.ico (or icon.png) into the app/ folder.

Anything in /public is available at the root URL, e.g.
   public/brochure.pdf  ->  https://your-site/brochure.pdf

3) (Optional) App icons and screenshots for the Apps page
   - App icons:  public/app-icons/<slug>.png  (square, e.g. 512x512)
       slugs: mailin, kalsmritikosh, antya-yuga, photo-ai
       then set  icon: true  for that app in app/products/page.js
   - Featured screenshot:  public/app-shots/mailin.png
       then swap the placeholder block in app/products/page.js as noted there.
   - Paste each app's real App Store link into the APPS list in
     app/products/page.js, and set status to 'live' once released.
