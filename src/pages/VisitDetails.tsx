import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import GuestCard, { type GuestCardProps } from '../components/GuestCard'

type ReservationStatus = 'reviewing' | 'approved' | 'action_required'

const STATUS_LABELS: Record<ReservationStatus, string> = {
  reviewing: 'En revisión',
  approved: 'Aprobada',
  action_required: 'Requiere acción',
}

const STATUS_COLORS: Record<ReservationStatus, string> = {
  reviewing: 'bg-gold/10 text-gold',
  approved: 'bg-success/10 text-success',
  action_required: 'bg-danger/10 text-danger',
}

const INITIAL_GUESTS: (GuestCardProps & { id: number })[] = [
  {
    id: 1,
    status: 'ok',
    name: 'Carlos Balazo',
    identification: '1616516',
    dateRange: { from: 'Viernes 03/07/2025', to: 'Jueves  21/08/2025' },
    deletable: false,
  },
  {
    id: 2,
    status: 'ok',
    name: 'Maria Delcaño',
    identification: '1616516',
    dateRange: { from: 'Viernes 03/07/2025', to: 'Jueves  21/08/2025' },
    deletable: true,
  },
  {
    id: 3,
    status: 'error',
    name: 'Mario Delcaño',
    identification: '16165516',
    message: 'Verificación del rostro INCORRECTA, eliminar y reintentar',
    deletable: true,
  },
]

export default function VisitDetails() {
  const navigate = useNavigate()
  const [guests, setGuests] = useState(INITIAL_GUESTS)
  const [reservationStatus] = useState<ReservationStatus>('approved')

  return (
    <MainLayout header="app" bg="page">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <h1 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
            Bienvenido Carlos Balazo, a esta nueva experiencia
          </h1>
          <span
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold ${STATUS_COLORS[reservationStatus]}`}
          >
            {STATUS_LABELS[reservationStatus]}
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-ink/80">
          Completa los datos solicitados para poder aprobar su visita y ofrecerle una experiencia
          personalizada.
        </p>

        <div className="mt-10 space-y-6">
          {guests.map((g) => (
            <GuestCard
              key={g.id}
              {...g}
              onDelete={() => setGuests((list) => list.filter((x) => x.id !== g.id))}
            />
          ))}
        </div>

        <Button
          fullWidth
          className="mt-6 py-4 text-base"
          onClick={() => navigate('/pre-check-in')}
        >
          Registrar otro huesped
        </Button>
      </div>
    </MainLayout>
  )
}
