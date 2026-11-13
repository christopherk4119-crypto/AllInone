# All In One Contracting & Design: Website

Single-page marketing site for an Airdrie, AB renovation and general contracting company.
Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS 3**, and ready to deploy on **Vercel**.

---

## ⚠️ Before launch: confirm with the client

Search the code for `CONFIRM WITH CLIENT`. Most of these live in **`lib/site.ts`**:

| Item | Where | Status now |
| --- | --- | --- |
| Owner's name | `site.ownerName` | Shows "Talk Directly to the Owner" |
| Email | `site.email` | Placeholder text shown, no mailto link |
| Hours | `site.hours` | Placeholder text shown |
| Years in business | `site.foundedYear` | Not shown anywhere |
| Exact business-name styling | `site.name` | "All In One Contracting & Design" |
| Are estimates free? | `site.estimateLabel` / `estimateShort` | Says "Free Estimate" (from the brief) |
| Insurance / WCB | none | Not claimed anywhere |
| Permits & inspections | `components/BasementFeature.tsx` | Not claimed anywhere |
| Electrical scope | `lib/site.ts` services | Low-voltage only |
| Warranty | none | Not claimed anywhere |
| Pricing / financing | none | Not shown |
| Real reviews | `components/Testimonials.tsx` | 3 placeholder cards |
| Google Business Profile | `site.links.google` | Not linked |
| Facebook page | `site.links.facebook` | Not linked (on purpose) |
| Real project photos | `/public/images` | All stock (see `CREDITS.md`) |
| Real logo | `components/Logo.tsx` | SVG badge mark |
| Form endpoint | `.env` (see below) | Not connected: the form tells visitors to call |

---

## Local setup

Requires Node 18.18+ (Node 20 or 22 recommended).

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Production build check:

```bash
npm run build && npm start
```

Fonts (Barlow Condensed + Inter) are self-hosted in `app/fonts` and loaded with `next/font/local`, so builds never need to reach Google Fonts.

---

## Connecting the estimate form

The form posts straight from the browser to a form service. **Formspree** is the simplest option:

1. Create a free account at formspree.io and add a new form. Set its notification email to the client's inbox.
2. Copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Set it as `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local` locally, and in **Vercel → Project → Settings → Environment Variables** for production. Then redeploy.

Until this is set, submitting the form shows: *"Our online form isn't connected yet. Please call 403-714-9409."* No leads are silently lost.

**Photo uploads:** Formspree file uploads need a **paid plan**. The "Add photos of the space (optional)" field stays hidden unless you also set `NEXT_PUBLIC_FORM_ALLOWS_FILES=true`. Only do that if your endpoint accepts files.

Spam protection: a hidden `_gotcha` honeypot field (Formspree recognizes it).

---

## Updating business details

Everything lives in **`lib/site.ts`**: name, phone, email, hours, service areas, services, links. Change it once and it updates the header, footer, form, JSON-LD schema and Open Graph image.

The phone number is always shown as `403-714-9409` and always links to `tel:+14037149409`.

---

## Swapping the logo

1. Save the client's logo as **`/public/logo.png`** (transparent background, fits a 200×80 slot).
2. In `components/Logo.tsx`, find `// REPLACE WITH LOGO PNG — transparent background` and replace the SVG + wordmark with the `<Image>` line in the comment there.
3. Optional: replace `app/icon.svg` (the favicon) with the new mark.

---

## Swapping photos

All photos are stock placeholders in `/public/images` (sources in `public/images/CREDITS.md`).

- **Easiest:** replace a file but keep its name (e.g. a real basement photo → `hero-finished-basement.jpg`). Landscape, about 1600px wide, JPG.
- Update the matching `alt` text (in `components/Gallery.tsx`, `Hero.tsx` and `BasementFeature.tsx`).
- Keep the hero under ~250 KB. Next.js serves resized AVIF/WebP automatically.
- Once **every** photo is real, set `photosAreStock: false` in `lib/site.ts` to remove the "Representative photos" note under the gallery.
- The Featured Project card ("Custom Staircase") should get the real photo from the client's Facebook post.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project →** import the repo. The framework is detected as Next.js, so no build settings need changing.
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: the final domain, e.g. `https://www.allinonecontracting.ca`. Used for canonical URL, sitemap, robots and OG tags.
   - `NEXT_PUBLIC_FORM_ENDPOINT`: from Formspree.
   - `NEXT_PUBLIC_FORM_ALLOWS_FILES`: only if your form plan supports uploads.
4. Deploy, then add the custom domain under **Settings → Domains**.
5. After launch, submit `https://<domain>/sitemap.xml` in Google Search Console, and test a real form submission.

---

## Project structure

```
app/
  layout.tsx            fonts, metadata (title/description/OG/Twitter)
  page.tsx              section order
  globals.css           theme, tape-measure divider, reveal animations
  opengraph-image.tsx   1200x630 OG image (hero photo + logo), built at build time
  twitter-image.tsx     same image for Twitter/X
  icon.svg              favicon (badge mark)
  sitemap.ts, robots.ts
components/
  Header, Hero, OneCrewStrip, BasementFeature, Services, Comparison,
  Gallery (filters + lightbox), WhyUs, Testimonials, ServiceArea (SVG map),
  ContactForm, Footer, MobileCallBar, JsonLd, Logo, Icons, …
lib/
  site.ts               ← all client details
public/images/          stock photos + CREDITS.md
```

### Notes

- **Accessibility:** copper buttons use charcoal text, because white on `#D9822B` fails WCAG AA. Copper text on light backgrounds uses the darker `copper-ink` (`#9A5514`). Includes a skip link, visible focus rings, a keyboard-operable menu and lightbox (Esc / arrow keys / focus trap) and inline form errors tied to fields with `aria-describedby`.
- **Motion:** fade-ups, sequenced timeline steps and draw-in dividers use a single IntersectionObserver. All of it is disabled under `prefers-reduced-motion`, and content stays visible if JS doesn't run.
- **Service-card CTAs** scroll to the form and pre-select that service in the Project Type dropdown.
