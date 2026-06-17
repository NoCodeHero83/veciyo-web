import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'cta' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  fullWidth?: boolean
}

const base =
  'inline-flex items-center justify-center font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  // Full-width blue action buttons (login, register, etc.)
  primary: 'bg-brand text-white hover:bg-brand-700 rounded-md px-6 py-3 text-sm',
  // Yellow CTA in the marketing header
  cta: 'bg-gold text-ink hover:bg-gold-hover rounded-md px-5 py-2.5 text-sm',
  // Text/nav button
  ghost: 'bg-transparent text-ink hover:text-brand rounded-md px-2 py-1 text-sm',
}

export default function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    />
  )
}
