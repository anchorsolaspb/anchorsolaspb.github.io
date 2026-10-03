# Anchor Solas Pipe Band website

Project memory for Claude Code. Put this file at the root of the `anchorsolaspb.github.io` repository.

## What this is

- Website for **Anchor Solas Pipe Band (ASPB)**, the alumni pipe band of the 64th Boys' Brigade Singapore, founded 2026.
- Live at **https://www.anchorsolaspb.com** (HTTPS enforced). `https://anchorsolaspb.github.io` redirects there.
- Built and maintained by Crego (owner of the repo and the `anchorsolaspb` GitHub organisation).
- Must stay **free to run**. Do not add paid services.
- Latest built version is **v1.11.0** (see `CHANGELOG.md`). The `<meta name="version">` tag in `index.html` holds the current version.

## Hosting and services

| Service | Role | Notes |
|---|---|---|
| GitHub Pages | Hosting | Repo `anchorsolaspb.github.io` in the `anchorsolaspb` org. Must stay **public** (free plan does not serve Pages from private repos). Deploys on every push to `main`. A `CNAME` file holds the custom domain. Never delete it. |
| Squarespace Domains | Domain registrar and DNS for `anchorsolaspb.com` | DNSSEC is on. |
| Google Workspace | Band email `admin@anchorsolaspb.com` | MX `smtp.google.com`, SPF and DKIM TXT records live in Squarespace DNS. Never touch them. |
| Pages CMS (app.pagescms.org) | Non-technical editing of events, slideshow and Instagram cards | Config is `.pages.yml` in the repo root. Edits commit straight to `main`. |
| Web3Forms | Booking form delivery to `admin@anchorsolaspb.com` | Access key lives in `assets/js/form-config.js` (public by design). Without a key the form falls back to a `mailto:` link. |
| Google Search Console | Indexing | Domain property verified by DNS TXT. `robots.txt` and `sitemap.xml` (all four page URLs) are in the repo root. |

### DNS records (Squarespace)

| Type | Name | Data |
|---|---|---|
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| CNAME | www | anchorsolaspb.github.io |
| TXT | _github-pages-challenge-anchorsolaspb | GitHub org domain verification. Keep permanently. |
| MX / TXT | @, google._domainkey | Google Workspace email. Do not change. |

No wildcard records. Custom domain in GitHub Pages settings is `www.anchorsolaspb.com`.

## Repo layout

```
index.html                 Shell page for /. Loads scripts in order, holds meta, OG, version tags and JSON-LD (site name, logo)
about/index.html, events/index.html, book/index.html
                           Copies of the shell for /about/, /events/, /book/. Identical except title, description, canonical, og:title/description/url. Keep all four in sync
favicon.ico                Site icon 16/32/48 px (navy mark in a white circle). Also assets/images/favicon-48/96/144/192.png (listed first in <head> so Google uses a large, sharp one), icon-512.png (JSON-LD logo), apple-touch-icon.png. Make icons from the full-size mark in git history (commit ad89244, logo-mark-navy.png 428x545), not the 200 px site copy
404.html                   Standalone "page not found" page served by GitHub Pages. Plain HTML, absolute /assets paths, noindex
CNAME                      Custom domain (managed by GitHub)
CHANGELOG.md               Version history, newest first
.pages.yml                 Pages CMS config (CMS-managed, see below)
events.json                CMS data, events            { "events": [...] }
hero.json                  CMS data, home slideshow    { "slides": [...] }
instagram.json             CMS data, Instagram cards   { "posts": [...] }  max 3
robots.txt, sitemap.xml    Search engines
assets/css/styles.css      All site CSS (design tokens + responsive + feature CSS)
assets/fonts/              Montserrat + Newsreader woff2 (self-hosted)
assets/images/             Logos, photos, share-preview-2.jpg (OG image)
assets/images/events/      CMS uploads for event photos
assets/images/hero/        CMS uploads for slideshow photos
assets/images/instagram/   CMS uploads for Instagram card images
assets/js/vendor/          React 18.3.1 production UMD, react-dom, lucide.js (trimmed to the icons used, see below)
assets/js/design-system.js Prebuilt ASPB design system bundle (Button, Icon, Logo, Tabs, Dialog, Input, Radio, RangeSlider...)
assets/js/images.js        window.__RES map of image names to paths
assets/js/events-data.js   Loads events.json, hero.json, instagram.json. Exposes window.loadSiteData()
assets/js/form-config.js   Web3Forms key (CMS-free, edited on GitHub only)
assets/js/pages/*.js       layout (Header, Footer, Section, Photo), home, about, events, book
assets/js/app.js           App shell, hash routing, next-page button
```

## How the code works

- **No build step in the repo.** Page files in `assets/js/pages/` and `app.js` are plain JavaScript using `React.createElement` (they were compiled from JSX once, readable and unminified). Edit them directly. Do not introduce JSX, bundlers or npm unless asked.
- Scripts are classic `<script>` tags, not modules. Components share state through globals: `window.AnchorSolasDesignSystem_897ee1`, `window.EVENTS`, `window.HERO`, `window.IG_POSTS`, `window.__RES`, and each page file assigns its screen to `window` (e.g. `window.EventsScreen`).
- All paths in the shells and JS are root-absolute (`/assets/...`, `/events.json`) because the shells live in sub-folders. `events-data.js` turns CMS image paths into `/assets/...`.
- Load order in `index.html` matters: React, ReactDOM, lucide, design-system, images, events-data, form-config, pages/layout, home, events, about, book, app.
- **Routing** uses real paths: `/`, `/about/`, `/events/`, `/book/` (`pathOf()`, `fromPath()` in `app.js`). `go(page)` uses `history.pushState`; the page shell for that path is what search engines and direct visits load. Old `#about`-style links are rewritten to the path with `replaceState`. Tab title updates per page. Links in `layout.js` and `404.html` use the paths.
- **Page transitions**: `withTransition()` in `app.js` wraps every page change in `document.startViewTransition` (450 ms crossfade, set on `::view-transition-*(root)` in `styles.css`). Without View Transitions it falls back to the `.aspb-page` fade plus header colour transitions (`.aspb-header`). Skipped under reduced motion.
- **Events** become "past" once their last day has passed and only past events are shown. Tabs are **Past Events** (`type: Performance`) and **Past Competitions** (`type: Competition`).
- **Book Us packages**: `Packages` in `pages/book.js` renders cards from `PACKAGES` (line-up letters p/s/b/m, "Good for" text) above the unchanged form section. `PERFS` is the single list of Performance options; cards pick one via `choose()`, which ticks the radio, shows the "Picked from the card above" tag and scrolls to `.aspb-book-panel`. CSS is under `aspb-pk-` in `styles.css`.
- **Booking form** posts JSON to `https://api.web3forms.com/submit` with a hidden `botcheck` honeypot. States are idle, sending, sent, error (error shows a mailto fallback). Budget slider is S$200 to S$10,000+ (step 50); `RangeSlider` in `design-system.js` picks the thumb by drag direction when both share a value and hands the drag over when one passes the other. Its pointerdown calls `preventDefault()` (plus `userSelect: none` and `onDragStart` blocked) so the browser never starts a native drag image or text selection.
- **Home hero** is an auto-advancing slideshow (5 s, pauses on hover/focus, dots, swipe, still under reduced motion), framed by gold corner brackets.
- **Events heading** shows up to 3 Instagram post cards as a fanned "hand" placed absolutely in the empty space beside the heading and tabs (`bottom: -30px` above 760px, so the hover fan clears the sticky header). It must never add height to the page. Card photos are 3:4 with `object-fit: contain` (whole image shown, never cropped). Hidden when `instagram.json` has no posts.
- **Icons**: `assets/js/vendor/lucide.js` only holds the icons in use (arrow-right, check, clock, instagram, mail, map-pin, send, youtube). A new icon name renders blank until its entry is copied in from the full lucide v0.460.0 build.
- **Years**: "© year" in the footer and "Season year" on Events use the current year. "Founded in 2026" is fixed text.
- **Photos**: keep the file name when compressing a CMS photo (the JSON files point to it). Resize to 1600 px max, JPEG quality about 80.
- A **next-page button** slides in at the bottom of every page (Home, About, Events, Book Us, then back to Home).

## Design conventions

- Palette (CSS vars in `styles.css`): navy `--navy-800 #1C2D4A` (primary), `--navy-900 #0F2A48`, paper `--paper #F6F4EF`, beacon gold `--beacon-500 #E3A43A` / `--beacon-300 #EEC57E` (accent, use sparingly).
- Type: Montserrat (sans, labels, body UI) and Newsreader (serif display and long text).
- Spacing tokens: `--gutter` (24px, 20px on phones), `--sec-y` (section padding: 96 / 72 / 56px).
- Custom classes are prefixed `aspb-` (e.g. `aspb-link` animated underline, `aspb-frame` corner brackets, `aspb-stack` responsive two-column, `aspb-ig`, `aspb-hand`, `aspb-card`, `aspb-next`, `aspb-social`).
- Inline styles come from the original design. Responsive overrides live in `styles.css` media queries (breakpoints 900, 820, 760, 640, 520px).
- Respect `prefers-reduced-motion` for every animation. Hover effects go inside `@media (hover: hover)` where it matters.
- Socials: Instagram `https://www.instagram.com/anchorsolas_pb/`, YouTube `https://www.youtube.com/@anchorsolaspb`. Footer list is `SOCIALS` in `pages/layout.js`; Book Us lists them under the email.
- Things the band rejected: lighthouse beam in the hero, scroll anchor progress rail (both removed). Keep visual flair subtle.

## Pages CMS

`.pages.yml` defines three named media folders (`events`, `hero`, `instagram`) and three file entries:

| Entry | File | Fields |
|---|---|---|
| Events | `events.json` | title, date, end_date, time, venue, type (Show under: Past Events / Past Competitions), description, images (up to 12, media `events`), status (badge text), colour (success / accent / neutral) |
| Home slideshow | `hero.json` | slides: image (media `hero`), alt |
| Instagram posts | `instagram.json` | posts (max 3): image (media `instagram`), link, caption |

When changing a schema, keep stored values backward compatible (the loaders accept both a bare array and the wrapped object).

## Release workflow (follow every time)

1. Bump the version: patch `v1.7.x` for fixes, minor `v1.x.0` for features. Update `<meta name="version">` in all four shells (`index.html`, `about/`, `events/`, `book/`) and add a dated entry at the top of `CHANGELOG.md`.
2. **Never overwrite CMS-managed or secret files** in an update: `events.json`, `hero.json`, `instagram.json`, `.pages.yml` (unless the schema changes, then give the full new config to paste into Pages CMS Configuration), `assets/js/form-config.js`, `CNAME`.
3. Use `v<version>` as the commit message.
4. Test at 375px, 768px and 1024px+ widths: no horizontal scroll, no console errors.
5. After deploy, check with Ctrl + F5. When the OG image changes, give it a new file name (caches keep old images).

## Working with Crego

- Explain in plain language, concisely, using tables or columns where it helps. No em dashes.
- Label every update with its version number and give a step-by-step walkthrough of only the steps actually needed (skip steps already done).
- For new visual ideas, build a separate preview first and workshop it before adding it to the site.
- Ask before guessing on ambiguous design requests.

## Backlog (not built yet)

- Auto-compress photos uploaded through Pages CMS (they arrive at full size, e.g. 2560 px WhatsApp images)
- Visitor stats (GoatCounter or similar, free)
- FAQ on Book Us (needs answers from the band)
- Package "Good for" lines are suggestions; confirm with the band
- Gallery page built from event photos
- Automatic Instagram feed (needs IG Creator or Business account and a Meta app) instead of picking posts in Pages CMS
- Optional: transfer the domain from Squarespace to Cloudflare Registrar
