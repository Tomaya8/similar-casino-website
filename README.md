# SimilarCasino.com

Expert online casino review and comparison website. Covers 182 casinos across 40+ global markets.

## Stack

- **Frontend**: React 18 + Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Hono + Bun + Prisma (SQLite) + Better Auth
- **Fonts**: Playfair Display (serif headings) + Source Sans 3 (body)
- **Theme**: Cream/ivory background, deep forest green (#0A1F1A), gold accent

## Site Structure

### Pages
- `/` — Homepage: Hero + Casino Comparison + Market Guides + Articles + How We Review
- `/casinos` — Full casino listing with filters
- `/casino/:slug` — Individual casino review
- `/guide/:market` — Market-specific guide (e.g. /guide/gb)
- `/bonuses` — Bonus comparison hub
- `/guides` — Article/guide listing
- `/article/:slug` — Article page

### Components
```
src/
  data/
    casinos.ts           — Casino + Article + Market data & types
  components/
    layout/
      Header.tsx         — Sticky nav with dropdowns, mobile menu, geo bar
      Footer.tsx         — SEO-rich footer with responsible gambling links
    casino/
      CasinoCard.tsx     — Expandable casino listing card with affiliate CTA
      FilterBar.tsx      — Market tabs + bonus/sort filters
      StarRating.tsx     — 5-star rating component
    home/
      HeroSection.tsx    — Hero with search, stats bar
      CasinoComparison.tsx — Filtered casino list section
      MarketGuides.tsx   — Geo-targeted market cards grid
      ArticlesSection.tsx — Featured article + article list
      HowWeReview.tsx    — Editorial methodology section
```

## SEO
- Full OpenGraph + Twitter Card meta tags
- JSON-LD WebSite structured data with SearchAction
- Canonical URLs
- Affiliate links use `rel="noopener noreferrer sponsored"`
- Responsible gambling links in header bar and footer

## Affiliate
- All casino cards link out via `affiliateUrl` with `sponsored` rel attribute
- Affiliate disclosure in footer
- Rankings are based on editorial scoring (rating, games, payout speed)
