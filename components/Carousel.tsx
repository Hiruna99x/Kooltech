"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop',
    title: 'Reliable HVAC & Appliance Spares',
    subtitle: 'Quality Parts. Trusted Brands.'
  },
  {
    src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop',
    title: 'AC Units, Compressors & Refrigerants',
    subtitle: 'Industrial-grade components for performance.'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092787760-7a4f43a506e1?q=80&w=1600&auto=format&fit=crop',
    title: 'Tools and Spare Parts',
    subtitle: 'Precision, durability, reliability.'
  }
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={slide.src} alt={slide.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-kool-bg/90" />
          <div className="absolute inset-0 section flex items-center">
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {slide.title.split(' ').slice(0,2).join(' ')} <span className="text-kool-accent">{slide.title.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="mt-4 text-lg text-kool-mut">{slide.subtitle}</p>
              <div className="mt-8 flex gap-4">
                <a href="/products" className="btn-primary">View Products</a>
                <a href="/contact" className="btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i+1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition-all ${i === index ? 'bg-kool-accent w-10' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  )
}
