import Card from './Card'
import { CheckIcon, CrossMarkIcon, ClockIcon, TrashIcon } from './icons'

export interface GuestCardProps {
  status: 'ok' | 'error'
  name: string
  identification: string
  dateRange?: { from: string; to: string }
  message?: string
  deletable?: boolean
  onDelete?: () => void
}

export default function GuestCard({
  status,
  name,
  identification,
  dateRange,
  message,
  deletable = false,
  onDelete,
}: GuestCardProps) {
  return (
    <Card className="px-6 py-7 sm:px-10 sm:py-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        {/* Status icon */}
        <div className="shrink-0">
          {status === 'ok' ? (
            <CheckIcon className="h-12 w-12 text-brand" />
          ) : (
            <CrossMarkIcon className="h-11 w-11 text-danger" />
          )}
        </div>

        {/* Name + identification */}
        <div className="min-w-0 sm:w-56">
          <h3 className="text-lg font-bold text-ink">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-ink/70">
            Identificacion: <span className="text-ink">{identification}</span>
          </p>
        </div>

        {/* Right content: date range or message */}
        <div className="flex flex-1 items-center sm:justify-start">
          {dateRange && (
            <div className="flex items-center gap-3">
              <ClockIcon className="h-9 w-9 shrink-0 text-ink" />
              <p className="text-sm leading-snug text-ink/80">
                {dateRange.from} al
                <br />
                {dateRange.to}
              </p>
            </div>
          )}
          {message && (
            <p className="max-w-xs text-lg font-bold leading-snug text-ink">{message}</p>
          )}
        </div>

        {/* Delete */}
        {deletable && (
          <button
            type="button"
            aria-label={`Eliminar ${name}`}
            onClick={onDelete}
            className="shrink-0 self-start text-ink hover:text-danger sm:self-center"
          >
            <TrashIcon className="h-9 w-9" />
          </button>
        )}
      </div>
    </Card>
  )
}
