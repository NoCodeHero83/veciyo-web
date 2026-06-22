import { useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Input from '../components/Input'
import Select from '../components/Select'
import FileUploader from '../components/FileUploader'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import { TrashIcon, PlusIcon } from '../components/icons'
import type { ValidationStatus } from '../components/ValidationCard'

const VISIT_REASONS = [
  { value: 'vacaciones', label: 'Vacaciones' },
  { value: 'trabajo', label: 'Trabajo' },
  { value: 'familia', label: 'Familia' },
  { value: 'negocios', label: 'Negocios' },
  { value: 'otro', label: 'Otro' },
]

interface CompanionForm {
  nombres: string
  apellidos: string
  identificacion: string
  correo: string
  motivo: string
  telefono: string
  direccionResidencia: string
  direccionVivienda: string
}

const EMPTY_FORM: CompanionForm = {
  nombres: '',
  apellidos: '',
  identificacion: '',
  correo: '',
  motivo: 'vacaciones',
  telefono: '',
  direccionResidencia: '',
  direccionVivienda: '',
}

const STATUSES: ValidationStatus[] = [
  'approved',
  'reviewing',
  'rejected',
  'approved-manual',
]

function randomStatus(): ValidationStatus {
  return STATUSES[Math.floor(Math.random() * STATUSES.length)]
}

export default function Companions() {
  const navigate = useNavigate()
  const location = useLocation()
  const mainGuest = location.state as {
    name?: string
    identification?: string
  } | null

  const [companions, setCompanions] = useState<
    { nombres: string; apellidos: string; identificacion: string }[]
  >([])
  const [form, setForm] = useState<CompanionForm>(EMPTY_FORM)
  const [showForm, setShowForm] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  if (!mainGuest?.name) {
    return <Navigate to="/pre-check-in" replace />
  }

  const updateField = (field: keyof CompanionForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const addCompanion = () => {
    if (
      !form.nombres.trim() ||
      !form.apellidos.trim() ||
      !form.identificacion.trim()
    ) {
      return
    }
    setCompanions((prev) => [
      ...prev,
      {
        nombres: form.nombres.trim(),
        apellidos: form.apellidos.trim(),
        identificacion: form.identificacion.trim(),
      },
    ])
    setForm(EMPTY_FORM)
    setShowForm(false)
  }

  const removeCompanion = (index: number) => {
    setCompanions((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    const guestList = [
      {
        name: mainGuest.name!,
        identification: mainGuest.identification || 'N/A',
        status: randomStatus() as ValidationStatus,
        isMain: true,
      },
      ...companions.map((c) => ({
        name: `${c.nombres} ${c.apellidos}`,
        identification: c.identificacion,
        status: randomStatus() as ValidationStatus,
        isMain: false,
      })),
    ]
    navigate('/validation', { state: { guests: guestList } })
  }

  return (
    <MainLayout header="default" bg="soft">
      <div className="mx-auto max-w-[820px] px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-[34px]">
          Registro de acompañantes
        </h1>

        <Card className="mt-6 px-6 py-5 sm:px-8 sm:py-6">
          <p className="text-sm font-semibold text-ink/60">Huésped principal</p>
          <p className="mt-0.5 text-lg font-bold text-ink">
            {mainGuest.name}
          </p>
          {mainGuest.identification && (
            <p className="text-sm text-ink/50">
              Identificación: {mainGuest.identification}
            </p>
          )}
        </Card>

        {companions.length > 0 && (
          <div className="mt-8 space-y-3">
            <h2 className="text-lg font-bold text-ink">
              Acompañantes ({companions.length})
            </h2>
            {companions.map((c, i) => (
              <Card key={i} className="flex items-center gap-4 px-6 py-4 sm:px-8">
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-ink">
                    {c.nombres} {c.apellidos}
                  </p>
                  <p className="text-sm text-ink/50">
                    Identificación: {c.identificacion}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Eliminar ${c.nombres}`}
                  onClick={() => removeCompanion(i)}
                  className="shrink-0 text-ink hover:text-danger"
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </Card>
            ))}
          </div>
        )}

        {showForm && (
          <Card className="mt-6 px-6 py-6 sm:px-8 sm:py-8">
            <h3 className="text-xl font-bold text-ink">
              Nuevo acompañante
            </h3>

            <form
              className="mt-5 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                tone="soft"
                strongLabel
                label="Nombres :"
                placeholder="Escriba su nombre"
                value={form.nombres}
                onChange={(e) => updateField('nombres', e.target.value)}
              />
              <Input
                tone="soft"
                strongLabel
                label="Apellidos :"
                placeholder="Apellido"
                value={form.apellidos}
                onChange={(e) => updateField('apellidos', e.target.value)}
              />
              <Input
                tone="soft"
                strongLabel
                label="Número de identificación :"
                placeholder="Entre su número de identificación"
                value={form.identificacion}
                onChange={(e) => updateField('identificacion', e.target.value)}
              />
              <Input
                tone="soft"
                strongLabel
                label="Correo de contacto"
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={form.correo}
                onChange={(e) => updateField('correo', e.target.value)}
              />
              <Select
                tone="soft"
                strongLabel
                label="Seleccione el motivo de su visita:"
                options={VISIT_REASONS}
                value={form.motivo}
                onChange={(e) => updateField('motivo', e.target.value)}
              />
              <Input
                tone="soft"
                strongLabel
                label="Número de teléfono"
                type="tel"
                placeholder="Ingrese su número de teléfono"
                value={form.telefono}
                onChange={(e) => updateField('telefono', e.target.value)}
              />
              <Input
                tone="soft"
                strongLabel
                label="Dirección de residencia"
                placeholder="Ingrese su dirección de residencia actual"
                value={form.direccionResidencia}
                onChange={(e) =>
                  updateField('direccionResidencia', e.target.value)
                }
              />
              <Input
                tone="soft"
                strongLabel
                label="Dirección de vivienda"
                placeholder="Ingrese su dirección de vivienda actual"
                value={form.direccionVivienda}
                onChange={(e) => updateField('direccionVivienda', e.target.value)}
              />

              <div className="space-y-7 pt-2">
                <FileUploader tone="soft" title="Subir el frente de la identificación" />
                <FileUploader tone="soft" title="Sube la parte posterior de la identificación" />
                <FileUploader tone="soft" title="Sube una foto de tu rostro" />
              </div>

              <Checkbox
                label="Acepto los términos y condiciones."
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />

              <div className="flex justify-center gap-4 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  className="px-6 py-3"
                  onClick={() => {
                    setShowForm(false)
                    setForm(EMPTY_FORM)
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  className="px-8 py-3"
                  onClick={addCompanion}
                  disabled={
                    !form.nombres.trim() ||
                    !form.apellidos.trim() ||
                    !form.identificacion.trim()
                  }
                >
                  Agregar acompañante
                </Button>
              </div>
            </form>
          </Card>
        )}

        {!showForm && (
          <div className="mt-6 flex justify-center">
            <Button
              type="button"
              variant="ghost"
              className="gap-2 px-6 py-3 text-base"
              onClick={() => setShowForm(true)}
            >
              <PlusIcon className="h-5 w-5" />
              Agregar acompañante
            </Button>
          </div>
        )}

        <div className="mt-10 flex justify-center border-t border-line pt-8">
          <Button
            type="button"
            className="w-full max-w-md py-3.5 text-base"
            onClick={handleSubmit}
          >
            Enviar información
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
