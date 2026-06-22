import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Button from '../components/Button'
import { CheckIcon } from '../components/icons'

export default function Invitation() {
  const navigate = useNavigate()

  return (
    <MainLayout header="default" bg="page" center>
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-[640px] px-6 py-10 text-center sm:px-12 sm:py-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
            <CheckIcon className="h-8 w-8 text-brand" />
          </div>

          <h1 className="mt-6 font-display text-3xl font-extrabold text-ink sm:text-[34px]">
            Has sido invitado
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base text-ink/70">
            El propietario te ha invitado a registrarte como huésped temporal en el edificio.
            Completa tu registro para poder acceder a las instalaciones.
          </p>

          <div className="mt-4 rounded-lg bg-surface-soft px-5 py-4 text-left">
            <p className="text-sm font-semibold text-ink/60">Edificio</p>
            <p className="mt-0.5 text-base font-bold text-ink">Los Pinos</p>
          </div>

          <Button
            type="button"
            className="mt-8 w-full max-w-sm py-3.5"
            onClick={() => navigate('/login')}
          >
            Continuar
          </Button>
        </Card>
      </div>
    </MainLayout>
  )
}
