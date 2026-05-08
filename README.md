# BeeTeam Studios

The official site for **Bee Team Ltd.** — a film production studio based in Dhaka, Bangladesh — and the digital home of *The University of Chankharpul* (2026).

A cinematic, motion-driven Next.js site with full bilingual (English / বাংলা) support, designed to feel like a film print: letterbox framing, frame counters, gold-on-ink palette, marquee tickers, and grain overlays.

---

## Stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript |
| UI | React 19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme`) |
| Motion | [Framer Motion 12](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Bebas Neue (display) · Fraunces (serif italic) · Inter (body) · JetBrains Mono (technical) — via `next/font/google` |

---

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

---

## Project structure

```
app/
  layout.tsx          # Root layout — fonts, LanguageProvider, OpeningScene, Navbar, Footer
  page.tsx            # Home — composes Hero, LatestRelease, FilmInfoSection, SynopsisSection, FeaturedNews, HallOfFame
  globals.css         # Design tokens (@theme) + utilities (grain, marquee, sheen, film-strip…)
  works/page.tsx      # Reel index gallery with YouTube lightbox

components/
  OpeningScene.tsx    # Cinematic clapperboard intro (countdown → logo → wipe)
  Navbar.tsx          # Sticky glass navbar with timecode top-tape and scroll-progress hairline
  Hero.tsx            # Letterboxed hero + Director's Vision essay
  LatestRelease.tsx   # Trailer + theatrical poster with technical spec strip
  FilmInfoSection.tsx # Production file with stamp seal and clapper-stripe creator card
  SynopsisSection.tsx # Parallax synopsis with achievement card and gold marquees
  FeaturedNews.tsx    # Press wall + live archive feed (microlink screenshots)
  HallOfFame.tsx      # Awards gallery with lightbox
  Footer.tsx          # End-roll marquee, contact, embedded map, watermark

context/
  LanguageContext.tsx # 'en' | 'bn' — persists to localStorage

lib/
  newsData.ts         # Press coverage list

public/
  hero.jpg poster1.jpg poster2.jpg synopsis.jpg beeteam_full_logo.png
```

---

## Design system

All tokens live in [`app/globals.css`](app/globals.css) under a single `@theme` block — change them there and everything updates.

**Palette**

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#0a0a0a` | Primary dark / type |
| `--color-paper` | `#faf8f3` | Light backgrounds |
| `--color-bone` | `#f4f1ea` | Tint backgrounds |
| `--color-gold` | `#d4af37` | Brand primary |
| `--color-gold-bright` | `#ffd700` | Accent / hover |
| `--color-amber` | `#d97706` | Hover text accent |

**Type scale**

- `font-display` — Bebas Neue, used via the `.h-display` utility for poster-style headings
- `font-serif-d` — Fraunces, used for italic pull-quotes
- `font-sans` — Inter, default body
- `font-mono-d` — JetBrains Mono, used for timecodes, REF tags, eyebrows

**Custom utilities** (in `globals.css`)

`grain` · `paper-tex` · `vignette` · `film-strip` · `marquee-track` · `spin-slow` · `blink` · `letterbox` · `stripes-gold` · `sheen` · `dot-pulse` · `h-display` · `label-mono`

---

## Internationalization

Two languages are supported: **English** and **বাংলা (Bengali)**.

- Each component owns its own `translations: { en, bn }` object — there is no JSON dictionary.
- `useLanguage()` from [`context/LanguageContext`](context/LanguageContext.tsx) returns `{ language, changeLanguage }`. Selection persists via `localStorage`.
- The toggle lives on the right side of the navbar.

To add a new translated string: add the key to **both** `en` and `bn` blocks in the component's local `translations` object, then read it via `t.yourKey`.

---

## Adding content

**A new project to the reel** — append to `projects` in [`app/works/page.tsx`](app/works/page.tsx). The `id` is the YouTube video ID.

**A new press item** — append to `newsData` in [`lib/newsData.ts`](lib/newsData.ts). The first four outlets matching the `pinnedOutlets` list in `FeaturedNews` get featured cards; the rest fall into the live-archive list.

**A new award** — append to the `awards` array in [`components/HallOfFame.tsx`](components/HallOfFame.tsx).

**A new poster / hero image** — drop the file into [`public/`](public/) and reference by absolute path (e.g. `/poster3.jpg`).

---

## Notes

- News card thumbnails are fetched at runtime from the [microlink.io](https://microlink.io) public API, so they will render after a short delay on first paint.
- The opening clapperboard (`OpeningScene`) plays once per page load. To skip it during development, comment out `<OpeningScene />` in [`app/layout.tsx`](app/layout.tsx).
- The site is fully static — `next build` prerenders all routes.

---

## Credits

Directed by **M Haque** · Produced by **Bee Team Ltd.** · Dhaka, Bangladesh · 2026

© Beeteam Lab — all rights reserved.
