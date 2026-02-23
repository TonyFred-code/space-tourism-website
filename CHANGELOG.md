# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] — 2026-02-23

### Added

- **Home page** — Responsive layout with navigation link to the destination page, adaptive background images per breakpoint (mobile, tablet, desktop).
- **404 Not Found page** — Animated error page with floating astronaut SVG, glitchy 404 typography, twinkling star field, and staggered entrance animations using Framer Motion.
- **General Error page** — Dynamic error boundary page powered by `useRouteError()`, displaying status code and error message with consistent space theme and animated warning graphic.
- **React Router** — Client-side routing via `createBrowserRouter` with a pathless parent route acting as a global error boundary, and a wildcard `*` route for unmatched URLs.
- **Framer Motion** — For star field animation background, and svgs animation (`AstronautSVG` and `WarningSVG`).
- **Tailwind CSS v4** — Custom configuration with `@theme` color tokens (`blue-900`, `blue-300`, `white`) and a full responsive typography system using `@utility` for flat, variant-compatible text presets across mobile, tablet, and desktop breakpoints.
- **Custom typography system** — Scoped text utilities (`mobile-text-preset-*`, `tablet-text-preset-*`, `desktop-text-preset-*`) using Bellefair, Barlow Condensed, and Barlow font families loaded via Google Fonts.
- **ESLint** — Flat config setup (`eslint.config.js`) with `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `eslint-config-prettier`.
- **Prettier** — Code formatting with Prettier as the final ESLint config layer to avoid rule conflicts.
- **Husky + lint-staged** — Pre-commit hooks running ESLint and Prettier on staged `.js`/`.jsx` and `.json`/`.css`/`.md`/`.html` files.
