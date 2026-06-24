import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Invitation() {
  const navigate = useNavigate()

  return (
    <MainLayout header="default" bg="page" center>
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-[640px] px-8 py-12 text-center sm:px-14 sm:py-14">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand/10">
            <img
              src="/assets/owl-walk.png"
              alt="VeciYo"
              className="h-14 w-14 object-contain"
              draggable={false}
            />
          </div>

          <h1 className="mt-8 font-display text-3xl font-extrabold text-ink sm:text-[34px]">
            Has sido invitado
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/70">
            El propietario te ha invitado a registrarte como huésped temporal en el edificio.
            Completa tu registro para poder acceder a las instalaciones.
          </p>

          <div className="mt-8 rounded-card border border-line bg-surface-soft px-7 py-5 text-center shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">Edificio</p>
            <p className="mt-1.5 text-lg font-bold text-ink">Los Pinos</p>
          </div>

          <Button
            type="button"
            className="mt-10 w-full max-w-sm py-3.5"
            onClick={() => navigate('/login')}
          >
            Continuar
          </Button>
        </Card>
      </div>
    </MainLayout>
  )
}
