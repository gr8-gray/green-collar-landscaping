# Green Collar Landscaping — Architecture

Single-page React 18 + Vite + Tailwind marketing site for Green Collar Landscaping LLC
(Tacoma, WA hardscaping), live at https://gcl-wa.com. There is no router — `App.jsx`
stacks every section component in page order and the navbar scroll-links to section
`id`s. The one customer path that matters: a visitor lands, finds services, and either
calls (253) 212-6752 or submits the contact form (posted to Web3Forms —
serverless, no backend in this repo).

## Map

| Path | What lives there |
|---|---|
| `index.html` | SEO/meta/OG tags, Google Fonts, LocalBusiness JSON-LD. Title and structured data live HERE, not in React. |
| `src/lib/contact.js` | **Single source of truth for business identity**: phone (display + `tel:` href), Instagram, business hours. Every render site imports from here. |
| `src/App.jsx` | Section order, footer (renders contact info from `src/lib/contact.js` and the services list from `ServicesGrid`'s exported `SERVICES`), privacy-modal state. |
| `src/components/Hero.jsx` | `#home` — h1 "Hardscaping Solutions Engineered for the Pacific Northwest", CTA buttons. |
| `src/components/Calculator.jsx` | `#calculator` — quote estimator; pricing constants are hardcoded here. |
| `src/components/ServicesGrid.jsx` | `#services` — the 8 service cards. |
| `src/components/ProjectGallery.jsx` | `#gallery` — before/after photos from `public/photos/`. |
| `src/components/Contact.jsx` | `#contact` — THE lead form: client-side validation, Web3Forms POST, honeypot (`botcheck`), submit throttle. |
| `src/components/CookieConsent.jsx` | First-visit banner gated on `localStorage.cookieConsent`; accepting loads GA. |
| `src/components/ServiceAreaMap.jsx`, `AboutUs.jsx`, `CustomerReviews.jsx`, `SafetyBadge.jsx`, `PrivacyPolicy.jsx`, `Navbar.jsx` | Remaining sections `#reviews`, `#process`, the map, and chrome. |
| `public/photos/` | Raw project photos — filenames contain spaces; always URL-encode when referencing. |
| `netlify.toml` | **The only deploy config**: build, SPA redirect, security headers/CSP, gcl-wa.com HTTPS redirects. A `vercel.json` from an earlier platform evaluation was deleted deliberately — a second deploy config is drift risk; do not reintroduce one. |
| `e2e/` + `playwright.config.ts` | Prod-safe Playwright specs against the live site (see policy below). |
| `.github/workflows/e2e.yml` | Weekly + manual E2E run in CI. |

## Cross-cutting rules

- **Feature colocation**: each section is one self-contained component — content,
  markup, and animation together. Add sections as new components wired into `App.jsx`.
- **Single-source duplicated values**: phone, Instagram, and business hours live in
  `src/lib/contact.js`; all `tel:` links in `src/` render from its `PHONE_TEL`
  (E.164). Never hardcode the number in a component. Intentional duplicates that
  CANNOT import JS and must be updated by hand if the number changes:
  `index.html` (LocalBusiness JSON-LD `telephone`) and `README.md`.
- **Known remaining duplication (deliberate)**: `Calculator.jsx` keeps its own
  `PROJECT_TYPES` (4 service ids/names/colors overlapping `ServicesGrid`'s
  `SERVICES`) because it couples names to pricing math — merging them would tie
  marketing copy to quote calculations. If you rename a service, check both.
- **Comments narrate why, not what** — traps, rationale, and platform quirks; the JSX
  already says what.
- **Secrets**: `VITE_WEB3FORMS_KEY` and `VITE_GA_MEASUREMENT_ID` come from the deploy
  platform env, never the repo. `.env` is gitignored; `.env.example` is the template.
- **CSP trap**: `netlify.toml` allowlists `connect-src` (Web3Forms, GA) and
  `frame-src` (Google Maps). Any new third-party call silently fails in prod until
  the CSP is updated — check there first when a fetch works locally but not live.

## Deploy path

Push to `main` → Netlify auto-builds (`npm run build` → `dist/`) → https://gcl-wa.com.
DNS/SSL are Netlify-managed; the `http→https` and `www` redirects are in `netlify.toml`.
There is no build-gating CI — the weekly E2E workflow verifies prod after the fact.

## E2E policy (STOP 19)

Every customer-facing repo ships Playwright coverage of its critical customer path.
Here that is `e2e/`: home renders, services present, contact form renders + validates,
phone links correct. Specs run against **production** and therefore must never create
a real lead — tests block `api.web3forms.com` at the network layer and only exercise
client-side validation. Run locally with
`npx playwright test` (override target via `E2E_BASE_URL`). CI: weekly cron + manual
dispatch in `.github/workflows/e2e.yml`.
