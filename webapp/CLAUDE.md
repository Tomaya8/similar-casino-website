<stack>
  React 18 with Vite
  React Router v6 for routing.
  React Query for server/async state.
  Tailwind v3 + shadcn/ui for styling and components.
  Framer Motion for animations.
  lucide-react for icons.
  Pre-installed shadcn/ui components.
  Deployed on Vercel (vercel.json handles SPA rewrites).
</stack>

<structure>
  src/pages/        — Page components (manually routed in App.tsx)
  src/components/
    layout/         — Header.tsx, Footer.tsx (shared across all pages)
    casino/         — CasinoCard.tsx, FilterBar.tsx, StarRating.tsx
    home/           — HeroSection, CasinoComparison, MarketGuides, ArticlesSection, HowWeReview
    ui/             — shadcn/ui components (pre-built)
    ScrollToTop.tsx — Scrolls to top on route change
  src/data/
    casinos.ts      — All casino, market, and article data + helper functions
  src/hooks/        — Custom React hooks
  src/lib/          — Utilities: utils.ts (cn helper), api.ts (backend API helper)

  Create small, focused components instead of monolithic files.
  Extract components into separate files.
  Organize components in a logical folder structure.
</structure>

<typescript>
  Explicit type annotations for useState: `useState<Type[]>([])` not `useState([])`
  Null/undefined handling: use optional chaining `?.` and nullish coalescing `??`
  Include ALL required properties when creating objects — TypeScript is enabled.
  Make sure to use ternary operators instead of && for conditional rendering inside JSX.
</typescript>

<environment>
  The system manages git and the dev server.
  DO NOT: manage git, touch the dev server, or check its state.
  The user views the app through their browser at similarcasino.com.
  Communicate in an easy to understand manner for non-technical users.
  Do everything for the user — they cannot see code or terminal.
  For images, use URLs from unsplash.com.
</environment>

<routing>
  React Router v6 for routing. Routes are manually registered in `src/App.tsx`.
  ScrollToTop component ensures pages scroll to top on navigation.

  <adding_routes>
    1. Create a new page component in `src/pages/`
    2. Import it in `src/App.tsx`
    3. Add a Route inside the Routes component
    4. Add new routes ABOVE the catch-all "*" route.
  </adding_routes>

  <navigation>
    Use `<Link to="/path">` for navigation links.
    Use `useNavigate()` hook for programmatic navigation.
    Use `useParams()` for URL params (e.g., /casino/:slug).
    Use `useSearchParams()` for query strings (e.g., /casinos?filter=new).
  </navigation>

  <current_routes>
    /                  — Homepage (Index.tsx)
    /casinos           — Casino listing with filters (Casinos.tsx)
    /bonuses           — Bonus comparison (Bonuses.tsx)
    /markets           — All markets overview (Markets.tsx)
    /guides            — Articles listing (Guides.tsx)
    /reviews           — Reviews hub (Reviews.tsx)
    /guide/:market     — Market guide (MarketGuide.tsx)
    /casino/:slug      — Casino review (CasinoReview.tsx)
    /about             — About page (About.tsx)
    /privacy           — Privacy Policy (Privacy.tsx)
    /terms             — Terms & Conditions (Terms.tsx)
    /contact           — Contact Us (Contact.tsx)
    /disclosure        — Affiliate Disclosure (Disclosure.tsx)
    /methodology       — How We Review (Methodology.tsx)
    /sitemap           — HTML Sitemap (SitemapPage.tsx)
    /cookies           — Cookie Policy (Cookies.tsx)
    *                  — 404 Not Found (NotFound.tsx)
  </current_routes>
</routing>

<state>
  Always use React Query for server/async state.
  Always use object API: `useQuery({ queryKey, queryFn })`.
  React Query provider is already set up in App.tsx.
  Use `useMutation` for async operations.
  For local state, use React hooks (useState, useReducer).
</state>

<data>
  Casino, market, and article data lives in src/data/casinos.ts.
  Helper functions: getCasinosByMarket(), getCasinoBySlug(), getMarketByCode().
  9 markets: GB, CA, AU, DE, SE, NZ, IT, FI, IE.
  29+ casino reviews with full data (rating, bonus, games, pros/cons, review text).
</data>

<index_html>
  Keep index.html meta tags, og:title, og:description, og:image up to date.
  Current: SimilarCasino — Expert Online Casino Reviews & Comparisons 2026.
</index_html>

<design>
  Casino comparison site aesthetic — professional, trustworthy, editorial.
  Fonts: Playfair Display (serif headings), Source Sans 3 (body).
  Theme: Cream/ivory background, deep forest green primary (#0A1F1A), gold accent.
  Use shadcn/ui components as building blocks.
  Mobile-first responsive design with Tailwind breakpoints.
</design>

<styling>
  Use Tailwind for styling. Use cn() helper from src/lib/utils.ts for conditional classNames.
  All shadcn/ui components support className prop.
  Use responsive classes: sm:, md:, lg:, xl: for different breakpoints.

  <forms>
    Use react-hook-form for complex forms, not manual state management.
    Always validate with zod schemas.
    Use shadcn/ui form components for consistent styling.
  </forms>
</styling>

<backend>
  This app has a backend server at ../backend/.
  API requests use relative URLs by default (/api/...) so the app works on any domain in production.
  VITE_BACKEND_URL is only needed in development for cross-origin requests.
  DO NOT hardcode localhost URLs.

  To call backend APIs, use the api helper from src/lib/api.ts:
  ```typescript
  import { api } from "@/lib/api";
  const data = await api.get<MyType>("/api/your-endpoint");
  ```
</backend>

<seo>
  All pages should include proper meta tags and structured data.
  Casino reviews use JSON-LD Review schema.
  Market guides use JSON-LD WebPage + BreadcrumbList schema.
  Use 2026 for all year references.
  Affiliate links use rel="noopener noreferrer sponsored".
</seo>
