# Parfymguiden

Svensk parfymrecensionssajt byggd med [Astro](https://astro.build) — statisk HTML, ingen CMS, inga plugins.

## Utveckla lokalt

```bash
npm install
npm run dev
```

Sajten byggs som statiska HTML-sidor (`npm run build`) för snabb inladdning och bra SEO.

## Lägg till en recension

Skapa en ny fil i `src/content/recensioner/`, t.ex. `mitsouko.md`:

```markdown
---
house: "Guerlain"
name: "Mitsouko"
score: 8.8
concentration: "EDP"
price: "€€€"
family: "Chypre"
notesTop: "bergamott, persika"
notesHeart: "ros, jasmin"
notesBase: "ekmossa, kryddor"
longevity: 8
sillage: 6
verdict: "En kort sammanfattning som visas i listor."
publishDate: 2026-09-01
description: "Metabeskrivning för sökmotorer, 1-2 meningar."
---

Recensionstexten skrivs här som vanlig Markdown.
```

Sidan `/recensioner/mitsouko` genereras automatiskt, liksom kortet på startsidan och listsidan.

## Lägg till en guide

Skapa en fil i `src/content/guider/`, t.ex. `hur-man-lagrar-parfym.md`:

```markdown
---
title: "Så lagrar du parfym rätt"
excerpt: "Kort ingress som visas i listor."
publishDate: 2026-09-01
description: "Metabeskrivning för sökmotorer."
---

Artikeltexten skrivs här.
```

## Lägg till bilder

Lägg bildfiler i `src/assets/` och importera dem i sidan/komponenten, eller lägg statiska filer (t.ex. og-bilder) direkt i `public/`. Astro optimerar och komprimerar bilder som importeras via `astro:assets` automatiskt.

## SEO

- Varje sida sätter egen `<title>`, meta description, canonical-URL och Open Graph-taggar (se `src/layouts/BaseLayout.astro`).
- `src/pages/sitemap.xml.ts` genererar sitemap automatiskt från allt innehåll.
- `public/robots.txt` pekar sökmotorer till sitemapen.
- Byt `site` i `astro.config.mjs` om domänen ändras.

## Publicera

`npm run build` skapar en helt statisk `dist/`-mapp som kan hostas var som helst (GitHub Pages, Netlify, Cloudflare Pages, etc.) utan serverkrav.
