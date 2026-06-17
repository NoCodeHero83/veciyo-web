import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Login() {
  return (
    <MainLayout header="default" bg="page" center>
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-[1040px] px-6 py-10 sm:px-12 sm:py-12">
          <h1 className="text-2xl font-bold text-ink sm:text-[28px]">Iniciar sesion</h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            {/* Form */}
            <form
              className="max-w-xl space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input label="Correo:" type="email" placeholder="Ingrese su correo electrónico" />
              <Input
                label="Contraseña"
                type="password"
                placeholder="Ingrese su correo contraseña"
              />
            </form>

            {/* Mascot */}
            <div className="order-first flex justify-center lg:order-none lg:pt-1">
              <img
                src="/assets/owl-walk.png"
                alt="VeciYo"
                className="w-44 rounded-xl sm:w-52"
                draggable={false}
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <Button type="submit" className="w-full max-w-md">
              Iniciar Sesión
            </Button>
            <Link
              to="/password-reset"
              className="text-sm font-medium text-ink underline underline-offset-2 hover:text-brand"
            >
              Recuperar la contraseña
            </Link>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}
