import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/Input'
import Button from '../components/Button'
import IdentityValidation from '../components/IdentityValidation'

type DocType = 'dni' | 'pasaporte' | 'cedula' | null

const DOC_TYPE_LABELS: Record<string, string> = {
  dni: 'DNI',
  pasaporte: 'Pasaporte',
  cedula: 'Cédula',
}

export default function PreCheckIn() {
  const navigate = useNavigate()
  const [docType, setDocType] = useState<DocType>(null)
  const [docNumber, setDocNumber] = useState('')
  const [validating, setValidating] = useState(false)

  const handleValidate = () => {
    if (docType && docNumber.trim()) {
      setValidating(true)
    }
  }

  const handleValidationComplete = () => {
    navigate('/confirm-data', {
      state: {
        docType: docType,
        docNumber: docNumber,
        docTypeLabel: docType ? DOC_TYPE_LABELS[docType] : '',
      },
    })
  }

  return (
    <MainLayout header="default" bg="soft">
      <div className="mx-auto max-w-[640px] px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-2xl font-extrabold leading-snug text-ink sm:text-[40px] sm:leading-tight">
          Bienvenido Carlos Balazo, este es el prechecking del edificio Los pinos
        </h1>
        <h2 className="mt-4 font-display text-xl font-bold text-ink sm:mt-6 sm:text-[28px]">
          Registro del responsable de la reservación
        </h2>

        {!validating ? (
          <div className="mt-8 space-y-6">
            {/* Document type selector */}
            <div>
              <p className="mb-2 text-sm font-semibold text-ink">Tipo de documento</p>
              <div className="flex gap-6">
                {(['dni', 'pasaporte', 'cedula'] as const).map((type) => (
                  <label
                    key={type}
                    className="inline-flex cursor-pointer items-center gap-2.5 select-none"
                  >
                    <input
                      type="radio"
                      name="docType"
                      checked={docType === type}
                      onChange={() => setDocType(type)}
                      className="h-5 w-5 accent-brand"
                    />
                    <span className="text-sm text-ink">
                      {DOC_TYPE_LABELS[type]}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Document number */}
            <Input
              tone="soft"
              label="Número de documento"
              placeholder="Ingrese su número de documento"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value)}
            />

            <div className="flex justify-center pt-2">
              <Button
                type="button"
                className="w-full max-w-md py-3.5"
                onClick={handleValidate}
                disabled={!docType || !docNumber.trim()}
              >
                Validar identidad
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <IdentityValidation
              onCancel={() => setValidating(false)}
              onComplete={handleValidationComplete}
            />
          </div>
        )}
      </div>
    </MainLayout>
  )
}
