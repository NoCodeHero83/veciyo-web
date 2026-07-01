import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import BackgroundCarousel from '../components/BackgroundCarousel'

const TRAVEL_IMAGES = [
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
  'https://images.unsplash.com/photo-1568144622757-7c5e6e5c4a8b?w=1920&q=80',
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
  'https://images.unsplash.com/photo-1494500764479-0c8f07f2d12c?w=1920&q=80',
]

export default function Invitation() {
  const navigate = useNavigate()

  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundCarousel images={TRAVEL_IMAGES} />

      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-[640px] rounded-2xl border border-white/20 bg-white/60 px-8 py-12 shadow-2xl shadow-black/10 backdrop-blur-2xl sm:px-14 sm:py-14">
          <h1 className="text-center font-display text-3xl font-extrabold text-ink sm:text-[34px]">
            Has sido invitado
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-base leading-relaxed text-ink/70">
            El anfitrión te ha invitado a registrarte como huésped temporal en el edificio.
            Completa tu registro para poder acceder a las instalaciones.
          </p>

          <div className="mt-8 rounded-xl border border-white/30 bg-white/40 px-6 py-5 shadow-lg backdrop-blur-md">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">País</p>
                <p className="text-sm font-bold text-ink">Colombia</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Ciudad</p>
                <p className="text-sm font-bold text-ink">Bogotá</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Nombre de la publicación</p>
                <p className="text-sm font-bold text-ink">Apartamento acogedor en el centro histórico</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Fechas de la reserva</p>
                <p className="text-sm font-bold text-ink">Vie 03/07/2025 — Jue 21/08/2025</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Cantidad de huéspedes</p>
                <p className="text-sm font-bold text-ink">3</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Con o sin vehículo</p>
                <p className="text-sm font-bold text-ink">Sin vehículo</p>
              </div>
            </div>
          </div>

          <Button
            type="button"
            className="mt-10 w-full py-3.5"
            onClick={() => navigate('/login')}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  )
}
