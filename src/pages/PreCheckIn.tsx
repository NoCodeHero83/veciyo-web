import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/Input'
import Select from '../components/Select'
import FileUploader from '../components/FileUploader'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

const ID_TYPES = [
  { value: 'cc', label: 'Cédula de ciudadanía' },
  { value: 'ce', label: 'Cédula de extranjería' },
  { value: 'passport', label: 'Pasaporte' },
  { value: 'nit', label: 'NIT' },
]

export default function PreCheckIn() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/companions', {
      state: { name: 'Carlos Balazo', identification: '1616516' },
    })
  }

  return (
    <MainLayout header="default" bg="soft">
      <div className="mx-auto max-w-[960px] px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl font-extrabold leading-snug text-ink sm:text-[40px] sm:leading-tight">
          Bienvenido Carlos Balazo, este es el prechecking del edificio Los pinos
        </h1>
        <h2 className="mt-4 font-display text-xl font-bold text-ink sm:mt-6 sm:text-[28px]">
          Registro del responsable de la reservación
        </h2>

        <form className="mt-7 space-y-6" onSubmit={handleSubmit}>
          <Input tone="soft" label="Nombres :" placeholder="Escriba su nombre" />
          <Input tone="soft" label="Apellidos :" placeholder="Apellido" />

          <div className="grid gap-6 sm:grid-cols-2">
            <Select
              tone="soft"
              label="Tipo de identificación :"
              placeholder="Seleccione el tipo de identificacion"
              options={ID_TYPES}
            />
            <Input
              tone="soft"
              label="Numero de identificación del propietario:"
              placeholder="Entre su numero de identificación"
            />
          </div>

          <Input
            tone="soft"
            label="Correo de contacto"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
          <Input
            tone="soft"
            label="Numero de telefono"
            type="tel"
            placeholder="Ingrese su número de teléfono"
          />
          <Input
            tone="soft"
            label="Dirección de vivienda"
            placeholder="Ingrese su dirección de vivienda"
          />
          <Input
            tone="soft"
            label="Dirección de residencia"
            placeholder="Ingrese su direccion de residencia"
          />

          <div className="space-y-7 pt-2">
            <FileUploader tone="soft" title="Subir el frente de la identificación" />
            <FileUploader tone="soft" title="Sube la parte posterior de la identificación" />
            <FileUploader tone="soft" title="Sube una foto de tu rostro" />
          </div>

          <Checkbox label="Acepto los términos y condiciones." />

          <div className="flex justify-center pt-2">
            <Button type="submit" className="w-full max-w-md py-3.5">
              Registrar
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  )
}
