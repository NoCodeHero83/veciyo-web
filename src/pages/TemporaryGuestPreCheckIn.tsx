import Input from '../components/Input'
import Select from '../components/Select'
import FileUploader from '../components/FileUploader'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

const VISIT_REASONS = [
  { value: 'vacaciones', label: 'Vacaciones' },
  { value: 'trabajo', label: 'Trabajo' },
  { value: 'familia', label: 'Familia' },
  { value: 'negocios', label: 'Negocios' },
  { value: 'otro', label: 'Otro' },
]

export default function TemporaryGuestPreCheckIn() {
  return (
    <div className="min-h-screen bg-surface-soft px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[820px] rounded-card border border-line bg-white px-6 py-10 shadow-card sm:px-12 sm:py-12">
        <h1 className="text-center text-2xl font-bold text-ink sm:text-[30px]">
          Complete la información solicitada a continuacion:
        </h1>

        <h2 className="mt-9 text-2xl font-bold text-ink sm:text-[26px]">
          Registro de huésped temporal
        </h2>

        <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Input tone="soft" strongLabel label="Nombres :" placeholder="Escriba su nombre" />
          <Input tone="soft" strongLabel label="Apellidos :" placeholder="Apellido" />
          <Input
            tone="soft"
            strongLabel
            label="Numero de identificación del propietario:"
            placeholder="Entre su numero de identificación"
          />
          <Input
            tone="soft"
            strongLabel
            label="Correo de contacto"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
          <Select
            tone="soft"
            strongLabel
            label="selecciéne el motivo de su visita:"
            options={VISIT_REASONS}
            defaultValue="vacaciones"
          />
          <Input
            tone="soft"
            strongLabel
            label="Numero de telefono"
            type="tel"
            placeholder="Ingrese su número de teléfono"
          />
          <Input
            tone="soft"
            strongLabel
            label="Direecion de residencia"
            placeholder="Ingrese su dirección de residencia actual"
          />
          <Input
            tone="soft"
            strongLabel
            label="Dirección de vivienda"
            placeholder="Ingrese su dirección de vivienda actual"
          />

          <div className="space-y-7 pt-2">
            <FileUploader tone="soft" title="Subir el frente de la identificación" />
            <FileUploader tone="soft" title="Sube la parte posterior de la identificación" />
            <FileUploader tone="soft" title="Sube una foto de tu rostro" />
          </div>

          <Checkbox label="Acepto los términos y condiciones." />

          <div className="flex justify-center pt-2">
            <Button type="submit" className="w-full max-w-sm py-3.5">
              Registrar  huesped
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
