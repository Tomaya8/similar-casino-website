# SimilarCasino.com

Expert online casino review and comparison website. Covers 182+ casinos across 9 markets.

**Live site:** [similarcasino.com](https://www.similarcasino.com)
**Repo:** [github.com/Tomaya8/similar-casino-website](https://github.com/Tomaya8/similar-casino-website)

## Stack

- **Frontend**: React 18 + Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Hono API server (currently static data, backend ready for future CMS/database)
- **Hosting**: Vercel (free tier)
- **Domain**: similarcasino.com
- **Fonts**: Playfair Display (serif headings) + Source Sans 3 (body)
- **Theme**: Cream/ivory background, deep forest green (#0A1F1A), gold accent

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Casino Comparison, Market Guides, Articles, How We Review |
| `/casinos` | Full casino listing with filters (rating, new, no deposit, fast payout, etc.) |
| `/casino/:slug` | Individual casino review (29+ casinos) |
| `/bonuses` | Bonus comparison with type filters |
| `/markets` | All markets overview |
| `/guide/:market` | Market-specific guide with unique SEO content (GB, CA, AU, DE, SE, NZ, IT, FI, IE) |
| `/guides` | Articles and guides listing |
| `/reviews` | Expert reviews hub |
| `/about` | About SimilarCasino |
| `/methodology` | How We Review — rating criteria and process |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/contact` | Contact Us |
| `/disclosure` | Affiliate Disclosure |
| `/cookies` | Cookie Policy |
| `/sitemap` | HTML Sitemap |

## Markets

9 markets with unique gambling guide content (300+ words each):
- United Kingdom (GB), Canada (CA), Australia (AU), Germany (DE)
- Sweden (SE), New Zealand (NZ), Italy (IT), Finland (FI), Ireland (IE)

## SEO

- Full OpenGraph + Twitter Card meta tags
- JSON-LD structured data (WebSite, Review, BreadcrumbList schemas)
- Per-page meta descriptions and canonical URLs
- Affiliate links use `rel="noopener noreferrer sponsored"`
- Responsible gambling links throughout
- robots.txt configured

## Development

```bash
# Frontend (webapp/)
cd webapp
bun install
bun dev        # runs on port 8000

# Backend (backend/)
cd backend
bun install
bun dev        # runs on port 3000
```

## Deployment

Hosted on Vercel with auto-deploy from the `main` branch.
- Root directory: `webapp`
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing handled via `vercel.json` rewrites
