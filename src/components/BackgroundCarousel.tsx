import { useState, useEffect } from 'react'

interface BackgroundCarouselProps {
  images: string[]
  interval?: number
}

export default function BackgroundCarousel({
  images,
  interval = 5000,
}: BackgroundCarouselProps) {
  const [ready, setReady] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let loaded = 0
    for (const src of images) {
      const img = new Image()
      img.onload = img.onerror = () => {
        loaded++
        if (loaded === 1) setReady(true)
      }
      img.src = src
    }
  }, [images])

  useEffect(() => {
    if (!ready) return
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [ready, images.length, interval])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {ready &&
        images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === active ? 1 : 0,
            }}
          />
        ))}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
