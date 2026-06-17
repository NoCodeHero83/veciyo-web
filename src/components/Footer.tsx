import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'

const FOOTER_LINKS = [
  { label: 'Servicios', to: '/login' },
  { label: 'Soporte', to: '/login' },
  { label: 'Términos y condiciones', to: '/login' },
]

export default function Footer() {
  return (
    <footer className="bg-brand text-ink">
      <div className="mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm font-medium">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="hover:opacity-80">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <SocialIcons className="mt-6" />

        <p className="mt-6 text-center text-[11px] text-ink/80">
          © 2025 Veciyo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
