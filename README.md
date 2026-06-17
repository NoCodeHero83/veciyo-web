# VeciYo · DCJ Web

Pixel-perfect React implementation of the VeciYo (DCJ) screen designs.

Built with **React + TypeScript + Vite + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Screens & routes

| Screen | Route |
| --- | --- |
| Login | `/login` |
| Password Reset | `/password-reset` |
| Visit Details | `/visit-details` |
| Pre Check-In | `/pre-check-in` |
| Temporary Guest Pre Check-In | `/temporary-guest-pre-check-in` |
| Admin Registration | `/admin-registration` |

A **floating ScreenNavigator** (bottom-center) is rendered on every route for
development/stakeholder review: previous / next arrows plus a screen-selector
menu. It is purely a review aid and not part of any final user flow.

Navigation wired to the designs:
- Login → "Recuperar la contraseña" → Password Reset
- Password Reset → "Volver al inicio de sesión" → Login

## Project structure

```
src/
  components/        Reusable UI
    Header.tsx       Marketing header (nav + CTA) and app header (hamburger menu)
    Footer.tsx       Links + social icons + copyright
    Button.tsx       primary / cta (yellow) / ghost variants
    Input.tsx        Labeled text field (default white / soft light-blue tones)
    Select.tsx       Labeled dropdown with chevron
    FileUploader.tsx Functional drag-and-drop / click uploader with preview
    Checkbox.tsx     Terms checkbox
    Card.tsx         White rounded surface with elevation
    GuestCard.tsx    Visit-details guest row (status, dates, delete)
    Logo.tsx         Brand lockup (dark / white variants)
    SocialIcons.tsx  Footer social badges
    ScreenNavigator.tsx  Temporary dev navigation control
    icons.tsx        Inline SVG icon set
  layouts/
    MainLayout.tsx   Header + content + footer shell (configurable)
  pages/             One file per screen
  styles/
    tokens.ts        Design tokens mirrored from tailwind.config.js
```

## Design tokens

Colors, typography, radius, and shadows were sampled directly from the source
designs and centralized in `tailwind.config.js` (Tailwind theme extension) and
`src/styles/tokens.ts`. Key values:

- Brand blue `#1273D4`, gold CTA `#F2BA0D`, ink text `#0D141C`
- Page backgrounds: gray `#F2F2F2`, soft light-blue `#F7FAFC`
- Fonts: **Inter** (body) and **Poppins** (display headings)

## Assets

Mascot and logo images live in `public/assets/` and were extracted from the
original design exports. Sample ID/face thumbnails on the Admin screen are the
same placeholders used in the design.

## Responsiveness

All screens adapt across desktop, laptop, tablet, and mobile using Tailwind
breakpoints with no horizontal scrolling (two-column auth layouts stack, guest
cards reflow, forms go full-width).
