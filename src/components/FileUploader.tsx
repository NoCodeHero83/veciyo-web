import { useRef, useState } from 'react'

interface FileUploaderProps {
  title: string
  hint?: string
  /** light-blue (soft) or white (default) surface */
  tone?: 'default' | 'soft'
  /** smaller padding + lighter divider, used on the admin screen */
  compact?: boolean
  accept?: string
  onFileSelected?: (file: File) => void
}

/**
 * Functional drag-and-drop / click file uploader that visually matches the
 * dashed "Haz clic o arrastra y suelta para subir" boxes in the designs.
 */
export default function FileUploader({
  title,
  hint = 'Haz clic o arrastra y suelta para subir',
  tone = 'soft',
  compact = false,
  accept = 'image/*',
  onFileSelected,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  function handleFile(f: File | undefined) {
    if (!f) return
    setFile(f)
    if (f.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(f))
    } else {
      setPreview(null)
    }
    onFileSelected?.(f)
  }

  const surface = tone === 'soft' ? 'bg-surface-soft' : 'bg-white'

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragging(false)
        handleFile(e.dataTransfer.files?.[0])
      }}
      className={`flex w-full flex-col items-center justify-center rounded-xl border-dashed px-6 text-center transition ${
        compact ? 'border py-7' : 'border-2 py-10'
      } ${surface} ${
        dragging ? 'border-brand bg-brand-50' : 'border-muted/40 hover:border-brand/60'
      }`}
    >
      {preview ? (
        <img
          src={preview}
          alt={file?.name}
          className="mb-3 max-h-40 w-auto rounded-lg object-contain"
        />
      ) : null}
      <span className={`font-bold text-ink ${compact ? 'text-sm' : 'text-base'}`}>{title}</span>
      <span className={`mt-1 text-ink/70 ${compact ? 'text-xs' : 'text-sm'}`}>
        {file ? file.name : hint}
      </span>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </button>
  )
}
