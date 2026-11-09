# withnco.studio

The website for withnco, a small studio for AI workflow automation, launch pages, 3D product renders,
white-label work and custom software. Built with Next.js 14 (app router), TypeScript, Tailwind CSS and
framer-motion, and hosted on Vercel.

## Where copy and prices live

Pages read their content from three files instead of hard-coding it. Change copy there, not in the pages.

| File | What it holds |
|---|---|
| `lib/offers.ts` | The offers, add-ons, custom engineering services, tech stack and contact form options. **Prices live only here.** |
| `lib/content.ts` | Page copy: home, approach, about, work, contact and the definition of done. |
| `lib/site.ts` | Site facts: name, tagline, description, email, WhatsApp, booking link, socials, location and the legal line. |

The footer, metadata, structured data (`components/StructuredData.tsx`) and sitemap are built from these files
too, so a new offer or price change shows up everywhere at once.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Studio offers, add-ons and custom engineering |
| `/services/ai-workflows` | AI workflow build + care plan |
| `/services/launch-sprint` | Launch sprint |
| `/services/3d-renders` | 3D product renders |
| `/white-label` | White-label work and archviz |
| `/definition-of-done` | Delivery checklists per discipline |
| `/work` | Case studies |
| `/approach` | How we work |
| `/about` | The studio and its lead |
| `/contact` | Contact form (`/contact?offer=<slug>` preselects an offer) |
| `/privacy` | Privacy policy |

The contact form posts to `/api/contact`, which emails the inquiry.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `GMAIL_USER` | Yes | Gmail address that sends and receives contact form emails. |
| `GMAIL_APP_PASSWORD` | Yes | Gmail app password for that account. Without both, the contact form returns an error. |
| `NEXT_PUBLIC_BOOKING_URL` | No | An `https://` scheduling link (Cal.com, Calendly...). Leave it empty to hide every "Book a call" link. |

Set them in the Vercel project settings, or in `.env.local` for local development.

## Before going live

- **Analytics:** the site uses Vercel Analytics (cookieless). Enable Analytics in the Vercel project settings,
  or the `<Analytics />` component in `app/layout.tsx` collects nothing.
- **Privacy policy:** `/privacy` is a working draft. Have it reviewed by a lawyer (the review is already
  budgeted in the studio plan) before relying on it.

## Commands

```bash
yarn install   # install dependencies
yarn dev       # start the dev server on http://localhost:3000
yarn build     # production build
yarn lint      # run ESLint
```
