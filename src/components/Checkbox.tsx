import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  const autoId = useId()
  const cbId = id ?? autoId
  return (
    <label htmlFor={cbId} className="inline-flex cursor-pointer items-center gap-2.5 select-none">
      <input
        id={cbId}
        type="checkbox"
        className={`h-5 w-5 rounded-[5px] border border-muted/50 text-brand accent-brand ${className}`}
        {...props}
      />
      <span className="text-sm text-ink">{label}</span>
    </label>
  )
}
