/**
 * Footer social icon row — colored circular badges matching the designs
 * (Facebook blue, X black, Instagram gradient, TikTok black).
 */

function Badge({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return (
    <span
      className="flex h-7 w-7 items-center justify-center rounded-full"
      style={bg ? { background: bg } : undefined}
    >
      {children}
    </span>
  )
}

export default function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Facebook */}
      <Badge bg="#1877F2">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#fff" aria-hidden>
          <path d="M13.5 21v-7h2.4l.4-2.9h-2.8V9.2c0-.8.3-1.4 1.5-1.4h1.4V5.2c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.9v2.2H8v2.9h2.3V21h3.2Z" />
        </svg>
      </Badge>
      {/* X */}
      <Badge bg="#000000">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#fff" aria-hidden>
          <path d="M17.5 3h2.8l-6.1 7 7.2 11h-5.6l-4.4-6.4L6 21H3.2l6.6-7.5L2.9 3h5.7l4 5.9L17.5 3Zm-1 16.2h1.6L8.1 4.7H6.4l10.1 14.5Z" />
        </svg>
      </Badge>
      {/* Instagram */}
      <Badge bg="linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="#fff" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.6" stroke="#fff" strokeWidth="1.8" />
          <circle cx="16.6" cy="7.4" r="1.1" fill="#fff" />
        </svg>
      </Badge>
      {/* TikTok */}
      <Badge bg="#010101">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#fff" aria-hidden>
          <path d="M16.5 3c.3 2 1.5 3.4 3.5 3.6v2.5c-1.2.1-2.3-.2-3.5-.8v5.7c0 3.2-2.4 5.5-5.4 5.3-2.8-.2-4.8-2.6-4.5-5.5.2-2.4 2.2-4.2 4.6-4.2.3 0 .5 0 .8.1v2.7c-.3-.1-.6-.2-.9-.2-1.2 0-2.1 1-2 2.2.1 1.1 1 1.9 2.1 1.8 1.1-.1 1.8-1 1.8-2.1V3h3Z" />
        </svg>
      </Badge>
    </div>
  )
}
