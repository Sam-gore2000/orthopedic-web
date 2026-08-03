# Dr. A. Saini — Orthopedic & Sports Surgeon Website

A clean, static informational website for a single-doctor orthopedic sports medicine practice (Dr. A. Saini, MS Ortho, FNB Sports Medicine). No login, no dashboard, no database — just a fast, premium marketing site. "Book Appointment" buttons link out to the official government appointment portal.

## What's included

- **React 19 + Vite + Tailwind CSS**, exact color palette & fonts (Inter / Manrope / Plus Jakarta Sans)
- **Pages**: Home, About, Specialty (Orthopedics & Sports Medicine detail), Services, Contact
- **Dark / light mode**, persisted across sessions
- **"Book Appointment"** everywhere (navbar, hero, doctor card, footer, CTAs) opens **https://ors.gov.in/orsportal/** in a new tab — there is no in-app booking flow
- All doctor/specialty content lives in `frontend/src/data/siteData.js` as plain JS — no backend, no API calls, nothing to configure
- Contact page has a working form UI (currently a front-end-only success message — see note below)

## Getting started

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

That's it — no `.env`, no database, no server to run. This is a fully static site that can be deployed to Vercel, Netlify, or any static host by running `npm run build` and uploading the `dist/` folder.

## ⚠️ Placeholder content that still needs your real details

I could not pull your Google Business listing automatically — Google Maps blocks automated access, and a search for "Dr. A. Saini orthopedic" returned several different real doctors in different cities, so I couldn't safely guess which one is yours. The following are still **placeholder values** and should be replaced with your real information:

| Where | Placeholder | File |
|---|---|---|
| Clinic/brand name | "MediCare Plus" | `Navbar.jsx`, `Footer.jsx`, `index.html`, `siteData.js` |
| Address | "Mumbai, Maharashtra" | `Footer.jsx`, `Contact.jsx` |
| Phone | "+91 22 4000 1234" / "+91 22 4000 1201" | `Footer.jsx`, `Contact.jsx`, `siteData.js` |
| Email | "care@medicareplus.example" | `Footer.jsx`, `Contact.jsx` |
| Hospital/branch name | "MediCare Plus, Mumbai" | `siteData.js` |
| Testimonials | Written to match the practice, not real reviews | `Home.jsx` |
| Star rating | 4.8 (placeholder) | `siteData.js` |

**Send me the exact clinic name, full address, phone number, and (if you want real reviews shown) 2–3 short review snippets copied from your Google listing**, and I'll wire all of this in directly — including a proper embedded Google Maps location on the Contact page.

## What else we could pull from your Google Business listing

Once I have the details above, here's what else is worth adding:

- **Embedded Google Map** on the Contact page (just needs your address — no API key required for a basic embed)
- **"View on Google Maps" / "Leave a Review" buttons** linking directly to your listing
- **Star rating badge** in the navbar or hero ("4.8 ★ on Google, 200+ reviews")
- **Business hours** pulled from your listing, shown on Contact and in the footer
- **Photos** from your listing (clinic exterior/interior) if you're comfortable using them on the site

## Notes from this build

- Removed: all authentication (login/register/OTP), the Patient/Doctor/Admin dashboards, and the entire backend (Express/MongoDB) — none of it is needed anymore since appointments are booked externally.
- The frontend was rebuilt and passed a full production build (`npm run build`) with zero errors after all these changes. Bundle size dropped from ~980KB to ~411KB after removing the now-unused React Query, Axios, and Recharts dependencies.
- The Contact form is UI-only right now (shows a success toast but doesn't send anywhere) since there's no backend. If you want real submissions (e.g. emailed to you), that's a small addition — say the word and I'll wire up a lightweight serverless function or form service (e.g. Formspree) instead of standing a whole backend back up just for one form.
