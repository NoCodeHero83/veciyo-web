import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import GuestCard, { type GuestCardProps } from '../components/GuestCard'

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

  return (
    <MainLayout header="app" bg="page">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          Bienvenido Carlos Balazo, a esta nueva experiencia
        </h1>
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
