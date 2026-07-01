import { useState } from 'react'
import FileUploader from './FileUploader'
import Checkbox from './Checkbox'
import Button from './Button'

interface IdentityValidationProps {
  onComplete: () => void
  onCancel: () => void
}

type Step = 'photos' | 'processing' | 'tc'

export default function IdentityValidation({
  onComplete,
  onCancel,
}: IdentityValidationProps) {
  const [step, setStep] = useState<Step>('photos')
  const [frontDone, setFrontDone] = useState(false)
  const [backDone, setBackDone] = useState(false)
  const [selfieDone, setSelfieDone] = useState(false)
  const [tcAccepted, setTcAccepted] = useState(false)
  const [tcModalOpen, setTcModalOpen] = useState(false)
  const [processing, setProcessing] = useState(false)

  const allPhotosDone = frontDone && backDone && selfieDone

  const handleContinue = () => {
    if (step === 'photos' && allPhotosDone) {
      setStep('processing')
      setProcessing(true)
      setTimeout(() => {
        setProcessing(false)
        setStep('tc')
      }, 2000)
    }
  }

  const handleConfirm = () => {
    if (tcAccepted) {
      onComplete()
    }
  }

  return (
    <div className="rounded-card border border-line bg-white px-6 py-8 shadow-card sm:px-10 sm:py-10">
      <h3 className="text-xl font-bold text-ink">Validación de identidad</h3>
      <p className="mt-1 text-sm text-ink/60">
        Por favor completa los pasos para verificar tu identidad.
      </p>

      {/* Step indicator */}
      <div className="mt-5 flex items-center gap-2 text-sm font-medium">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
            step === 'photos' ? 'bg-brand text-white' : 'bg-success/10 text-success'
          }`}
        >
          {step === 'photos' ? 1 : '✓'}
        </span>
        <span className={step === 'photos' ? 'text-ink' : 'text-success'}>Fotos</span>
        <span className="mx-1 text-ink/30">—</span>
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
            step === 'processing'
              ? 'bg-brand text-white'
              : step === 'tc'
                ? 'bg-success/10 text-success'
                : 'bg-muted/10 text-muted'
          }`}
        >
          {step === 'tc' ? '✓' : 2}
        </span>
        <span
          className={step === 'processing' || step === 'tc' ? 'text-ink' : 'text-muted'}
        >
          Validación
        </span>
        <span className="mx-1 text-ink/30">—</span>
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
            step === 'tc' ? 'bg-brand text-white' : 'bg-muted/10 text-muted'
          }`}
        >
          3
        </span>
        <span className={step === 'tc' ? 'text-ink' : 'text-muted'}>
          Términos
        </span>
      </div>

      {/* Photos step */}
      {step === 'photos' && (
        <div className="mt-6 space-y-5">
          <FileUploader
            tone="soft"
            title="Fotografía del anverso del documento"
            onFileSelected={() => setFrontDone(true)}
          />
          <FileUploader
            tone="soft"
            title="Fotografía del reverso del documento"
            onFileSelected={() => setBackDone(true)}
          />
          <FileUploader
            tone="soft"
            title="Selfie"
            hint="Toma una foto de tu rostro"
            onFileSelected={() => setSelfieDone(true)}
          />
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={handleContinue}
              disabled={!allPhotosDone}
            >
              Continuar
            </Button>
          </div>
        </div>
      )}

      {/* Processing step */}
      {step === 'processing' && (
        <div className="mt-10 flex flex-col items-center gap-4 py-10">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand border-t-transparent" />
          <p className="text-base font-semibold text-ink">
            {processing ? 'Validando tu identidad...' : ''}
          </p>
        </div>
      )}

      {/* T&C step */}
      {step === 'tc' && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl bg-success/5 px-5 py-4">
            <p className="text-sm font-semibold text-success">
              Identidad validada exitosamente
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Checkbox
              label=""
              checked={tcAccepted}
              onChange={(e) => setTcAccepted(e.target.checked)}
            />
            <span className="text-sm text-ink">Acepto los</span>
            <button
              type="button"
              onClick={() => setTcModalOpen(true)}
              className="text-sm font-semibold text-brand underline underline-offset-2 hover:text-brand-700"
            >
              Términos y Condiciones
            </button>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={handleConfirm}
              disabled={!tcAccepted}
            >
              Finalizar
            </Button>
          </div>
        </div>
      )}

      {/* T&C Modal */}
      {tcModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-card bg-white px-6 py-8 shadow-card sm:px-8">
            <h3 className="text-lg font-bold text-ink">Términos y Condiciones</h3>
            <div className="mt-4 max-h-64 space-y-3 overflow-y-auto text-sm leading-relaxed text-ink/70">
              <p>
                Al utilizar este servicio de validación de identidad, aceptas que los datos
                proporcionados sean procesados por el proveedor de verificación.
              </p>
              <p>
                Tus datos serán utilizados únicamente para fines de verificación de identidad
                y no serán compartidos con terceros sin tu consentimiento explícito.
              </p>
              <p>
                La fotografía y documentos proporcionados serán almacenados de forma segura
                durante el tiempo necesario para completar el proceso de registro.
              </p>
              <p>
                Puedes solicitar la eliminación de tus datos en cualquier momento contactando
                a nuestro equipo de soporte.
              </p>
            </div>
            <div className="mt-5 flex justify-end">
              <Button type="button" onClick={() => setTcModalOpen(false)}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
