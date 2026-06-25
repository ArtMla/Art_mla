# CLAUDE.md — Arthur Mlambo Portfolio

## Project overview
Personal portfolio and case-study website for Arthur Mlambo, Data Scientist & Mechatronics Engineer based in Berlin, Germany. Built with React + Vite + Tailwind CSS. Deployed as a static site via GitHub Pages (HashRouter).

## Owner
- **Name:** Arthur Mlambo
- **Role:** Data Scientist & Mechatronics Engineer
- **Location:** Berlin, Germany (eligible to work in Germany)
- **Email:** arthurmlambo@gmail.com
- **LinkedIn:** linkedin.com/in/art-mla
- **GitHub:** github.com/artmla

## Key credentials (from CV — keep accurate)
- M.Sc. Data Science with **Distinction** — Arden University Berlin, Feb 2026
  - Thesis: Hybrid ML frameworks for predictive maintenance
- B.Eng. (Hons) Mechatronics — Chinhoyi University of Technology, 2015
- Member, **Verein Deutscher Ingenieure (VDI)** — Berlin Chapter
- PrTech — SA Institute of Engineers
- Languages: English (Fluent), German (Basic)

## Work history (actual — do not invent roles)
| Period | Role | Employer |
|---|---|---|
| 2024–Present | M.Sc. Data Science (studying) | Arden University, Berlin |
| Jan 2023–Jun 2024 | Solar Installations Engineer | Go Solar (Pvt) Ltd., Cape Town |
| Oct 2018–Dec 2020 | Fiber Optic Technician (FTTH) | Frogfoot Networks, Cape Town |
| Jan 2014–Dec 2014 | Electrical/Mechanical Engineering Intern | Steel Makers (Pvt) Ltd. |

## Architecture
```
src/
  App.jsx               # All page components + bilingual content object (EN/DE)
  config/
    personalInfo.js     # Name, email, social handles, asset paths
    projects.js         # Case study data (title, challenge, action, result, metrics, phases, gallery, stack)
    techStack.js        # Tech stack cards shown on Home page
  components/
    SharedComponents.jsx  # PageWrap, SectionHeader, ResponsiveImage, ContactLink
    Icon.jsx
    ErrorBoundary.jsx
  index.css             # Tailwind + custom CSS (liquid-nav, liquid-shell classes)
```

## Content rules
- The `content` object in `App.jsx` holds all copy in `en` and `de` keys.
- **Never use CTA copy that sells portfolio services to other companies.** All CTAs must say Arthur is available for hire as a data scientist.
- Hero metrics must match CV reality: 5+ years industry, 3+ ML projects, 1 M.Sc. Distinction.
- `quickSummaryItems` = Arthur's professional credentials, NOT meta-commentary about the website code.
- `experienceSteps` must reflect real jobs from the CV above — no invented roles.
- `ctaVariants` are page-specific hire-me messages, keyed by route path.

## Bilingual requirements
- Every user-facing string must exist in both `en` and `de` keys.
- Legal pages (Privacy Policy, Cookie Policy) must stay GDPR-compliant.
- **Impressum page is still missing** — needs to be added (required by German law for professional websites).

## German market signals already in place
- EN/DE language toggle in nav
- GDPR cookie banner + Privacy Policy page
- `basedIn: 'Berlin, Germany'` in content
- VDI membership listed in highlights and quickSummaryItems
- Industrial IT skills (OPC UA, MES/SAP, PLC) shown in tech stack — key for Industrie 4.0 employers

## Assets
| File | Purpose |
|---|---|
| `public/assets/dumi.jpg` | Profile photo (hero) |
| `public/assets/Arthur Mlambo CV.pdf` | CV download (linked from Contact page and CTA) |
| `public/assets/hero-bg.png` | Hero section background |
| `public/assets/og.png` | Open Graph social preview image |

## Known gaps (to address)
1. **Impressum page missing** — add `/impressum` route, Impressum link in footer
2. **No GitHub links on project cards** — engineers expect to see repos
3. **Gallery uses picsum.photos placeholders** — replace with real screenshots or remove
4. **"Send Message" button has no action** — wire up mailto or a form service
5. **No certifications section** — add AWS, TensorFlow, or other certs when available

## Dev commands
```bash
npm install       # install dependencies
npm run dev       # local dev server (Vite)
npm run build     # production build → dist/
npm run preview   # preview production build locally
```
