import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'

type Tone = 'default' | 'soft'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  tone?: Tone
  /** Render the label in bold near-black (pre-checkin/temp guest style) */
  strongLabel?: boolean
}

const fieldBase =
  'w-full rounded-field px-4 py-3 text-sm text-ink placeholder:text-muted/80 outline-none transition focus:ring-2 focus:ring-brand/30'

const tones: Record<Tone, string> = {
  default: 'bg-white border border-line shadow-[0_1px_2px_rgba(16,42,67,0.04)] focus:border-brand',
  soft: 'bg-surface-soft border border-brand-100 focus:border-brand',
}

export default function Input({
  label,
  tone = 'default',
  strongLabel = false,
  className = '',
  id,
  ...props
}: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={`mb-2 block text-sm ${
            strongLabel ? 'font-semibold text-ink' : 'font-medium text-ink'
          }`}
        >
          {label}
        </label>
      )}
      <input id={inputId} className={`${fieldBase} ${tones[tone]} ${className}`} {...props} />
    </div>
  )
}
