# Transport Training UK — Website

A fully standalone, production-ready static website for a UK specialist passenger transport accessibility and compliance training company. Built with React 18, TypeScript, Vite, React Router v6, and react-helmet-async.

---

## Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5.x | Type safety |
| Vite | 5.x | Build tool & dev server |
| React Router | 6.x | Client-side routing |
| react-helmet-async | latest | SEO meta tags per page |

No backend, no database, no external API dependencies. Pure static SPA.

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
transport-training-site/
├── public/
│   ├── assets/          ← Optimised images (hero, about, wheelchair, coach)
│   ├── favicon.svg      ← Site favicon
│   ├── robots.txt       ← Search engine directives
│   └── sitemap.xml      ← XML sitemap (update domain before deploying)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              ← Responsive navigation with dropdown
│   │   ├── Footer.tsx              ← Full footer with links and contact info
│   │   ├── SEOHead.tsx             ← Per-page SEO meta tags
│   │   └── CoursePageTemplate.tsx  ← Reusable course page layout
│   ├── data/
│   │   └── courses.ts              ← All course content data
│   ├── pages/
│   │   ├── Home.tsx            ← Homepage with stats, courses, testimonials
│   │   ├── About.tsx           ← About page with mission and values
│   │   ├── Courses.tsx         ← Course index with complementary training
│   │   ├── News.tsx            ← News articles and key resources
│   │   ├── Contact.tsx         ← Contact form and contact details
│   │   ├── NotFound.tsx        ← 404 page
│   │   └── courses/            ← Individual course pages (7 total)
│   │       ├── PSVARPage.tsx
│   │       ├── AccessibilityInspectionPage.tsx
│   │       ├── WheelchairSafetyPage.tsx
│   │       ├── DisabilityAwarenessPage.tsx
│   │       ├── SafeguardingPage.tsx
│   │       ├── EqualityActPage.tsx
│   │       └── CorporateTrainingPage.tsx
│   ├── App.tsx                 ← Routes with React.lazy code splitting
│   ├── main.tsx                ← React entry point
│   └── index.css               ← Global styles, design tokens, typography
├── vercel.json                 ← Vercel SPA routing + cache headers
├── index.html                  ← HTML entry with Google Fonts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, stats, course cards, why choose us, testimonials, CTA |
| `/about` | About | Mission, values, credentials |
| `/courses` | Courses | All courses grid + complementary training |
| `/courses/psvar-training` | PSVAR | PSVAR 2000 & PSVAIR 2023 training |
| `/courses/accessibility-inspection` | Inspection | DVSA inspection readiness |
| `/courses/wheelchair-passenger-safety` | Wheelchair | Safe loading, WTORS, ramps, lifts |
| `/courses/disability-awareness` | Disability | Visible/hidden disabilities, communication |
| `/courses/safeguarding` | Safeguarding | Children and vulnerable adults |
| `/courses/equality-act` | Equality Act | Section 165, reasonable adjustments |
| `/courses/corporate-training` | Corporate | Bespoke on-site programmes |
| `/news` | News | Articles + key legislation resources |
| `/contact` | Contact | Enquiry form + contact details |

---

## Customisation

### Company Details

Update the following in these files:

| Detail | File(s) |
|---|---|
| Phone number | `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/CoursePageTemplate.tsx`, `src/pages/Contact.tsx` |
| Email address | `src/components/Footer.tsx`, `src/pages/Contact.tsx` |
| Company name | `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `index.html` |
| Address | `src/components/Footer.tsx` |
| Social media links | `src/components/Footer.tsx` |

### Course Content

All course content is centralised in `src/data/courses.ts`. Each course is a `CourseData` object with:

- `title`, `subtitle`, `description` — page headings
- `seoDescription`, `canonical` — SEO metadata
- `duration`, `audience` — sidebar details
- `overview` — main course description
- `outcomes` — learning outcomes list
- `operatorBenefits`, `driverBenefits` — benefits panels
- `legalContext` — legal responsibilities callout
- `practicalContent` — practical elements list
- `faqs` — accordion FAQ items
- `relatedCourses` — sidebar related course links

### Colours & Typography

Design tokens are defined in `src/index.css`:

```css
:root {
  --navy: #0D2137;        /* Primary dark navy */
  --navy-light: #1a3a5c;  /* Lighter navy */
  --blue: #1565C0;        /* Primary blue */
  --blue-light: #42A5F5;  /* Accent blue */
  --blue-pale: #EFF6FF;   /* Light blue background */
  --accent: #E65100;      /* Orange CTA accent */
}
```

Fonts: **Barlow Condensed** (headings) + **Inter** (body) — loaded from Google Fonts in `index.html`.

### Images

Replace images in `public/assets/`:

| File | Used on |
|---|---|
| `hero-bus.jpg` | Homepage hero background |
| `wheelchair-training.jpg` | Homepage "Why Choose Us" section |
| `about-team.jpg` | About page |
| `coach-accessibility.jpg` | Available for additional use |

Recommended dimensions: hero 1600×900px, others 1200×800px. Optimise to <300KB per image.

---

## Deployment

### Vercel (Recommended)

1. Push to a GitHub repository
2. Import into Vercel — it will auto-detect Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. The included `vercel.json` handles SPA routing automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add a `_redirects` file to `public/`:
   ```
   /* /index.html 200
   ```

### GitHub Pages

Use the `gh-pages` package or GitHub Actions to deploy the `dist` folder.

---

## Before Going Live

- [ ] Update all placeholder phone numbers and email addresses
- [ ] Replace placeholder testimonials with real client quotes (with permission)
- [ ] Update `public/sitemap.xml` with your actual domain
- [ ] Update `index.html` OG meta tags with your actual domain and image URL
- [ ] Set up a real contact form backend (e.g., Formspree, EmailJS, or a serverless function)
- [ ] Add Google Analytics or equivalent
- [ ] Register the domain and configure DNS
- [ ] Test all routes on the deployed URL

---

## Licence

This codebase is provided for the exclusive use of the commissioning client. All content, copy and research is original and may be used commercially.
