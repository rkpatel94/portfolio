# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server with HMR at http://localhost:5173
- `npm run build` — production build (emits `build/client/` static assets and `build/server/` SSR bundle)
- `npm run start` — serve the production build via `react-router-serve ./build/server/index.js`
- `npm run typecheck` — runs `react-router typegen && tsc`. **Run typegen first whenever routes change**, otherwise the generated `./+types/*` modules in `.react-router/types/` will be stale and `tsc` will fail.

There is no test runner and no lint script configured.

Docker: `docker build -t my-app . && docker run -p 3000:3000 my-app` (multi-stage `node:20-alpine`).

## Architecture

This is a **React Router v7 framework-mode** app (not the library-only `react-router-dom` model). SSR is enabled (`react-router.config.ts` → `ssr: true`). Vite is the build tool; the `reactRouter()` Vite plugin owns the build pipeline, so config like aliasing route files goes through `app/routes.ts`, not Vite.

**Active source lives in [app/](app/).** The repo also contains a legacy CRA-style [src/](src/) tree (`App.js`, `Components/`, `Modules/`, `Data/data.js`) that is **not wired into the current build** — Vite/React Router only reads `app/`. Treat `src/` as dead code unless explicitly asked to revive or migrate it.

### Routing

Routes are declared explicitly in [app/routes.ts](app/routes.ts) (not file-based discovery):
- `/` → [app/routes/home.tsx](app/routes/home.tsx) — single-page portfolio composed of section components from [app/components/](app/components/)
- `/projects` → [app/routes/ProjectsPage.tsx](app/routes/ProjectsPage.tsx)
- `/project/:id` → [app/routes/ProjectDetail.tsx](app/routes/ProjectDetail.tsx)

[app/root.tsx](app/root.tsx) is the document shell: it owns the `<html>`, injects the Google Fonts + Material Symbols stylesheets via `links`, and wraps `<Outlet />` with `<Navbar />` / `<Footer />`. The whole document is forced into dark mode (`<html className="dark">`).

Each route imports its generated types from `./+types/<RouteName>` — those files come from `react-router typegen` and live under `.react-router/types/` (gitignored). If type imports fail, run `npm run typecheck` (which runs typegen) before debugging further.

### Styling

- **Tailwind CSS v4** via [@tailwindcss/vite](https://tailwindcss.com/docs/v4) — no PostCSS step.
- The design tokens (the "Midnight Syntax" palette, custom fonts, animations) are defined as CSS variables inside `@theme { ... }` in [app/app.css](app/app.css). That file is the source of truth for colors like `bg-surface`, `text-on-surface`, `text-primary`, etc.
- **[tailwind.config.js](tailwind.config.js) is stale CRA leftover** (its `content` glob points at `./src/**`, which is not built). Do not edit it expecting changes — edit `@theme` in `app/app.css` instead.

### Path aliases

`~/*` resolves to `./app/*` (see [tsconfig.json](tsconfig.json) `paths`). Vite picks this up via `tsconfigPaths: true` in [vite.config.ts](vite.config.ts).

### Other directories

- [stitch/](stitch/) — static HTML/CSS design mockups (`midnight_syntax`, `portfolio_home`, `project_detail_nebula_dashboard`). Reference material, not part of the build.
- [public/](public/) — static assets served as-is.
- [.firebaserc](.firebaserc) + [firebase.json](firebase.json) configure Firebase Hosting, but `public: "app"` is set up for a pre-build SPA, not the current SSR build output in `build/client`. Treat Firebase config as out-of-date unless updating it is the task.
