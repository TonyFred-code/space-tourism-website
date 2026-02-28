# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-28

### Added

- Included screenshot of v1 project build

### Changed

- Updated `README.md` with project relevant content
- Improve CHANGELOG based on choice format

### Removed

- Removed starter/template files

--

--

## [0.4.1] - 2026-02-27

### Changed

- Enhanced `aria-label` for `Technology` slideshow tab buttons
- Switch `Technology` slideshow tab buttons to a more unique react key prop value

--

## [0.4.0] - 2026-02-27

### Added

- Added `/technology` route to the router
- Added Technology page with tech auto/manual slideshow using FramerMotion

### Changed

- Refactor Crew page slideshow content and tab buttons animation

--

## [0.3.1] - 2026-02-27

### Changed

- Added accessibility attributes to crew tab change buttons
- Removed call to `startInterval` on manual slideshow change handler

### Fixed

- Add missing FramerMotion AnimatePresence wrapper where needed

--

## [0.3.0] - 2026-02-27

### Added

- Added `/crew` route to the router
- Added Crew page content with CrewMembers auto/manual slideshow using FramerMotion

---

## [0.2.1] - 2026-02-25

### Changed

- Update and increase custom page loader duration calculation
- Refactor slideshow pause/play logic using synced ref
- Refactor slideshow tabs rendering logic
- Improve data properties check for fetched data
- Add accessibility labels to tab images and loader component

---

## [0.2.0] - 2026-02-25

### Added

- Created data fetching and caching via custom hooks and useContext
- Created loading screen component with space theme animation
- Created `/destination` page content.
- Enhanced `*.md` files formatting by creating a `.markdownlint.json` file

### Changed

- Refactor custom `desktop-text-preset-*`, `tablet-text-preset-*`,
  and `mobile-text-preset-*` utility classes.
- Add custom typography theme rules (`font-family`) to tailwindcss @theme layer.
- Moved `data.json` file to public dir for ease of access when fetching

---

## [0.1.1] - 2026-02-23

### Changed

- Enforced explicit file extensions for all local imports via ESlint configuration
- Enhanced accessibility with proper aria-label
  and aria-hidden attributes on navigation components
- Removed redundant path declaration on index route
- Improved PropTypes validation by marking required props as .isRequired
- Enhance mobile UX by auto closing mobile menu on mobile nav menu link click

---

## [0.1.0] — 2026-02-23

### Added

- **Home page** — Responsive layout with navigation link to the destination page,
  adaptive background images per breakpoint (mobile, tablet, desktop).
- **404 Not Found page** — Animated error page with floating astronaut SVG,
  glitchy 404 typography, twinkling star field, and staggered entrance animations
  using Framer Motion.
- **General Error page** — Dynamic error boundary page powered by `useRouteError()`,
  displaying status code and error message with consistent space theme
  and animated warning graphic.
- **React Router** — Client-side routing via `createBrowserRouter`
  with a pathless parent route acting as a global error boundary,
  and a wildcard `*` route for unmatched URLs.
- **Framer Motion** — For star field animation background, and svgs animation
  (`AstronautSVG` and `WarningSVG`).
- **Tailwind CSS v4** — Custom configuration with `@theme` color tokens
  (`blue-900`, `blue-300`, `white`) and a full responsive typography system using
  `@utility` for flat, variant-compatible text presets across mobile, tablet,
  and desktop breakpoints.
- **Custom typography system** — Scoped text utilities
  (`mobile-text-preset-*`, `tablet-text-preset-*`, `desktop-text-preset-*`)
  using Bellefair, Barlow Condensed, and Barlow font families loaded
  via Google Fonts.
- **ESLint** — Flat config setup (`eslint.config.js`) with `eslint-plugin-react`,
  `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `eslint-config-prettier`.
- **Prettier** — Code formatting with Prettier as the final ESLint config layer
  to avoid rule conflicts.
- **Husky + lint-staged** — Pre-commit hooks running ESLint and Prettier on
  staged `.js`/`.jsx` and `.json`/`.css`/`.md`/`.html` files.
