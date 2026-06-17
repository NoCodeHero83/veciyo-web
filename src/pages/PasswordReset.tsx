import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'

export default function PasswordReset() {
  return (
    <MainLayout header="default" bg="page" center>
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-[1040px] px-6 py-10 sm:px-12 sm:py-12">
          <h1 className="text-2xl font-bold text-ink sm:text-[28px]">Cambio de contraseña</h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            {/* Form */}
            <form className="max-w-xl space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input
                label="Contraseña actual:"
                type="password"
                placeholder="Ingrese la contraseña recibida en el  correo electrónico"
              />
              <Input
                label="Contraseña"
                type="password"
                placeholder="Ingrese su correo contraseña nueva"
              />
              <Input
                label="Repita la Contraseña:"
                type="password"
                placeholder="Ingrese su contraseña nueva"
              />
            </form>

            {/* Mascot */}
            <div className="order-first flex justify-center lg:order-none lg:pt-1">
              <img
                src="/assets/owl-phone.png"
                alt="VeciYo"
                className="w-44 rounded-xl sm:w-52"
                draggable={false}
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-5">
            <Button type="submit" className="w-full max-w-md">
              Cambiar contraseña
            </Button>
            <Link
              to="/login"
              className="text-sm font-medium text-ink underline underline-offset-2 hover:text-brand"
            >
              Volver al inicio de sesión
            </Link>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}
