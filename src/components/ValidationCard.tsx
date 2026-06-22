import Card from './Card'
import { CheckIcon, CrossMarkIcon, ClockIcon } from './icons'

export type ValidationStatus = 'approved' | 'reviewing' | 'rejected' | 'approved-manual'

export interface ValidationCardProps {
  status: ValidationStatus
  name: string
  identification: string
  isMain?: boolean
}

const STATUS_LABELS: Record<ValidationStatus, string> = {
  approved: 'Aprobado',
  reviewing: 'En revisión',
  rejected: 'Rechazado',
  'approved-manual': 'Aprobado manualmente',
}

const STATUS_COLORS: Record<ValidationStatus, { icon: string; bg: string }> = {
  approved: { icon: 'text-success', bg: 'bg-success/10' },
  reviewing: { icon: 'text-gold', bg: 'bg-gold/10' },
  rejected: { icon: 'text-danger', bg: 'bg-danger/10' },
  'approved-manual': { icon: 'text-brand', bg: 'bg-brand/10' },
}

function StatusIcon({ status }: { status: ValidationStatus }) {
  if (status === 'approved' || status === 'approved-manual') {
    return <CheckIcon className="h-8 w-8" />
  }
  if (status === 'rejected') {
    return <CrossMarkIcon className="h-8 w-8" />
  }
  return <ClockIcon className="h-8 w-8" />
}

export default function ValidationCard({
  status,
  name,
  identification,
  isMain = false,
}: ValidationCardProps) {
  const colors = STATUS_COLORS[status]

  return (
    <Card className="px-6 py-6 sm:px-8 sm:py-7">
      <div className="flex items-center gap-5">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${colors.bg} ${colors.icon}`}
        >
          <StatusIcon status={status} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-ink">{name}</h3>
            {isMain && (
              <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                Principal
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-ink/60">
            Identificación: {identification}
          </p>
        </div>

        <div
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-bold ${colors.bg} ${colors.icon}`}
        >
          {STATUS_LABELS[status]}
        </div>
      </div>
    </Card>
  )
}
