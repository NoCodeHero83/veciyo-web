import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section'
}

/** White rounded surface with the soft elevation used across the designs. */
export default function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-card bg-white shadow-card ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
