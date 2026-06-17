import Card from '../components/Card'
import Input from '../components/Input'
import FileUploader from '../components/FileUploader'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import { CheckIcon, TrashIcon } from '../components/icons'

const REGISTERED_ADMINS = [
  {
    id: 1,
    name: 'Carlos Balazo',
    identification: '61616516',
    images: ['/assets/sample-id-front.png', '/assets/sample-id-back.png', '/assets/sample-face.png'],
  },
]

export default function AdminRegistration() {
  return (
    <div className="min-h-screen bg-surface-soft px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[900px] space-y-8">
        {/* Registration form card */}
        <Card className="border border-line px-6 py-10 sm:px-12 sm:py-12">
          <h1 className="text-2xl font-bold text-ink sm:text-[26px]">Registra Administrador</h1>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <form className="max-w-xl space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input label="Correo:" type="email" placeholder="Ingrese su correo electrónico" />
              <Input
                label="Contraseña"
                type="password"
                placeholder="Ingrese su correo contraseña"
              />
            </form>

            <div className="order-first flex justify-center lg:order-none">
              <img
                src="/assets/owl-sit.png"
                alt="VeciYo"
                className="w-44 rounded-xl sm:w-52"
                draggable={false}
              />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <FileUploader compact tone="default" title="Subir el frente de la identificación" />
            <FileUploader
              compact
              tone="default"
              title="Sube la parte posterior de la identificación"
            />
            <FileUploader compact tone="default" title="Sube una foto de tu rostro" />
          </div>

          <div className="mt-6">
            <Checkbox label="Acepto los términos y condiciones." />
          </div>

          <div className="mt-7 flex justify-center">
            <Button type="submit" className="w-full max-w-md">
              Registrar Administrador
            </Button>
          </div>
        </Card>

        {/* Registered admins list */}
        {REGISTERED_ADMINS.map((admin) => (
          <Card key={admin.id} className="px-6 py-8 sm:px-10">
            <div className="flex items-start gap-5">
              <CheckIcon className="mt-1 h-11 w-11 shrink-0 text-brand" />
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-ink">{admin.name}</h3>
                <p className="mt-1 text-sm font-semibold text-ink/70">
                  Identificacion: <span className="text-ink">{admin.identification}</span>
                </p>
              </div>
              <button
                type="button"
                aria-label={`Eliminar ${admin.name}`}
                className="shrink-0 text-ink hover:text-danger"
              >
                <TrashIcon className="h-7 w-7" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 pl-0 sm:pl-16">
              {admin.images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Documento"
                  className="h-24 w-36 rounded-lg border border-line object-cover"
                  draggable={false}
                />
              ))}
            </div>
          </Card>
        ))}

        <Button fullWidth className="py-4 text-base">
          Agregar Administrador
        </Button>
      </div>
    </div>
  )
}
