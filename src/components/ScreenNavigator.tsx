import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon, GridIcon, CloseIcon } from './icons'

/** Temporary dev/review navigation — lets stakeholders jump between screens. */
export const SCREENS = [
  { path: '/login', label: 'Login' },
  { path: '/password-reset', label: 'Password Reset' },
  { path: '/visit-details', label: 'Visit Details' },
  { path: '/pre-check-in', label: 'Pre Check-In' },
  { path: '/temporary-guest-pre-check-in', label: 'Temporary Guest Pre Check-In' },
  { path: '/admin-registration', label: 'Admin Registration' },
]

export default function ScreenNavigator() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const currentIndex = Math.max(
    0,
    SCREENS.findIndex((s) => s.path === location.pathname),
  )

  const go = (delta: number) => {
    const next = (currentIndex + delta + SCREENS.length) % SCREENS.length
    navigate(SCREENS[next].path)
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      {/* Screen selector menu */}
      {open && (
        <div className="absolute bottom-16 left-1/2 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-white shadow-card">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Screens
            </span>
            <button onClick={() => setOpen(false)} aria-label="Cerrar">
              <CloseIcon className="h-4 w-4 text-muted" />
            </button>
          </div>
          <ul className="max-h-72 overflow-y-auto py-1">
            {SCREENS.map((s, i) => (
              <li key={s.path}>
                <button
                  onClick={() => {
                    navigate(s.path)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-surface-soft ${
                    i === currentIndex ? 'font-semibold text-brand' : 'text-ink'
                  }`}
                >
                  <span className="w-5 text-xs text-muted">{i + 1}</span>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pill control */}
      <div className="flex items-center gap-1 rounded-full border border-line bg-white/95 px-2 py-1.5 shadow-card backdrop-blur">
        <button
          onClick={() => go(-1)}
          aria-label="Pantalla anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-surface-soft"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-ink hover:bg-surface-soft"
        >
          <GridIcon className="h-4 w-4 text-brand" />
          <span className="hidden sm:inline">{SCREENS[currentIndex].label}</span>
          <span className="text-xs text-muted">
            {currentIndex + 1}/{SCREENS.length}
          </span>
        </button>

        <button
          onClick={() => go(1)}
          aria-label="Pantalla siguiente"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-surface-soft"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
