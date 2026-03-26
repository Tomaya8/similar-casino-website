# SimilarCasino Workspace

Online casino comparison and review website at similarcasino.com.

<projects>
  webapp/    — React app (Vite, port 8000). Deployed on Vercel.
  backend/   — Hono API server (port 3000). Currently minimal — frontend uses static data.

  In production, the webapp uses relative URLs (/api/...) so it works on any domain.
  VITE_BACKEND_URL is only needed in development for cross-origin requests.
</projects>

<coordination>
  When a feature needs both frontend and backend:
  1. Define Zod schemas for request/response in backend/src/types.ts (shared contracts)
  2. Implement backend route using the schemas
  3. Test backend with cURL (use $BACKEND_URL, never localhost)
  4. Implement frontend, importing schemas from backend/src/types.ts to parse responses
  5. Test the integration

  <shared_types>
    All API contracts live in backend/src/types.ts as Zod schemas.
    Both backend and frontend can import from this file — single source of truth.
  </shared_types>
</coordination>

<deployment>
  Frontend hosted on Vercel (auto-deploys from main branch on GitHub).
  Domain: similarcasino.com
  Repo: github.com/Tomaya8/similar-casino-website
  Root directory on Vercel: webapp
  SPA routing handled via webapp/vercel.json rewrites.
</deployment>

<environment>
  System manages git and dev servers. DO NOT manage these.
  The user cannot see code or terminal. Do everything for them.
  Communicate in an easy to understand manner for non-technical users.
  Be concise and don't talk too much.
</environment>
