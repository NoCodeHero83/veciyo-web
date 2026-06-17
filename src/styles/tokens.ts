/**
 * Centralized design tokens extracted from the VeciYo (DCJ) screen designs.
 * These mirror the values configured in tailwind.config.js so they can also be
 * consumed directly from TypeScript when needed (e.g. inline SVG fills).
 */

export const colors = {
  brand: '#1273D4',
  brandDark: '#0F62B4',
  brandSoft: '#2F84D9',
  gold: '#F2BA0D',
  ink: '#0D141C',
  muted: '#577C9F',
  pageGray: '#F2F2F2',
  pageSoft: '#F7FAFC',
  line: '#E3E8EF',
  danger: '#F11919',
  success: '#1273D4',
  white: '#FFFFFF',
} as const

export const radius = {
  field: '10px',
  card: '16px',
  pill: '9999px',
} as const

export const fonts = {
  sans: "'Inter', system-ui, sans-serif",
  display: "'Poppins', 'Inter', sans-serif",
} as const

export type ColorToken = keyof typeof colors
