import type { Product } from '@/components/ProductCard'

export const CATEGORIES = [
  'AC Parts',
  'AC Gas',
  'AC Oil',
  'Compressors',
  'Refrigeration Parts',
  'Washing Machine Parts',
] as const

export type Category = typeof CATEGORIES[number]

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Copper AC Tubing Kit',
    image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1200&auto=format&fit=crop',
    category: 'AC Parts'
  },
  {
    id: 'p2',
    name: 'R-410A Refrigerant Cylinder',
    image: 'https://images.unsplash.com/photo-1593629718773-77a999c7fa33?q=80&w=1200&auto=format&fit=crop',
    category: 'AC Gas'
  },
  {
    id: 'p3',
    name: 'Synthetic AC Compressor Oil',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop',
    category: 'AC Oil'
  },
  {
    id: 'p4',
    name: 'Scroll Compressor 2.5 Ton',
    image: 'https://images.unsplash.com/photo-1581092580502-5c7b2b7381c6?q=80&w=1200&auto=format&fit=crop',
    category: 'Compressors'
  },
  {
    id: 'p5',
    name: 'Expansion Valve',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    category: 'Refrigeration Parts'
  },
  {
    id: 'p6',
    name: 'Evaporator Coil',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop',
    category: 'Refrigeration Parts'
  },
  {
    id: 'p7',
    name: 'Washing Machine Motor',
    image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1200&auto=format&fit=crop',
    category: 'Washing Machine Parts'
  },
  {
    id: 'p8',
    name: 'Filter Drier',
    image: 'https://images.unsplash.com/photo-1633433321370-792a9d7da497?q=80&w=1200&auto=format&fit=crop',
    category: 'AC Parts'
  },
  {
    id: 'p9',
    name: 'Capacitor 45/5 µF',
    image: 'https://images.unsplash.com/photo-1581093458791-9d09f90f1ea3?q=80&w=1200&auto=format&fit=crop',
    category: 'AC Parts'
  },
  {
    id: 'p10',
    name: 'Hermetic Compressor 1.5 HP',
    image: 'https://images.unsplash.com/photo-1581092790800-776e5a6fc8c8?q=80&w=1200&auto=format&fit=crop',
    category: 'Compressors'
  },
]
