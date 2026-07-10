import type { Product } from '@/components/ProductCard'

export const CATEGORIES = [
  'Compressor',
  'AC Gas',
  'Oil',
  'Motors',
  // 'Other Products',
] as const

export type Category = typeof CATEGORIES[number]

export const CATEGORY_SLUGS: Record<Category, string> = {
  'Compressor': 'compressor',
  'AC Gas': 'ac-gas',
  'Oil': 'oil',
  'Motors': 'motors',
  // 'Other Products': 'other-products',
}

export const products: Product[] = [
  // {
  //   id: 'p1',
  //   name: 'Copper AC Tubing Kit',
  //   image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1200&auto=format&fit=crop',
  //   category: 'Other Products'
  // },
  {
    id: 'p2',
    name: 'R-410A Refrigerant Cylinder',
    image: '/images/products/ac-gas/r410a.jpg',
    category: 'AC Gas'
  },
  {
    id: 'p3',
    name: 'Synthetic AC Compressor Oil',
    image: '/images/products/oil/img_0305.png',
    category: 'Oil'
  },
  {
    id: 'p4',
    name: 'Scroll Compressor 2.5 Ton',
    image: '/images/products/compressor/img_0230.png',
    category: 'Compressor'
  },
  // {
  //   id: 'p5',
  //   name: 'Expansion Valve',
  //   image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  //   category: 'Other Products'
  // },
  // {
  //   id: 'p6',
  //   name: 'Evaporator Coil',
  //   image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop',
  //   category: 'Other Products'
  // },
  {
    id: 'p7',
    name: 'Washing Machine Motor',
    image: '/images/products/motors/img_0279.png',
    category: 'Motors'
  },
  // {
  //   id: 'p8',
  //   name: 'Filter Drier',
  //   image: 'https://images.unsplash.com/photo-1633433321370-792a9d7da497?q=80&w=1200&auto=format&fit=crop',
  //   category: 'Other Products'
  // },
  // {
  //   id: 'p9',
  //   name: 'Capacitor 45/5 µF',
  //   image: 'https://images.unsplash.com/photo-1581093458791-9d09f90f1ea3?q=80&w=1200&auto=format&fit=crop',
  //   category: 'Other Products'
  // },
  {
    id: 'p10',
    name: 'Hermetic Compressor 1.5 HP',
    image: '/images/products/compressor/img_0269.png',
    category: 'Compressor'
  },
  {
    id: 'p11',
    name: 'Refrigeration Compressor Oil',
    image: '/images/products/oil/img_0311.png',
    category: 'Oil'
  },
  {
    id: 'p12',
    name: 'AC Fan Motor',
    image: '/images/products/motors/img_0281.png',
    category: 'Motors'
  },
  {
    id: 'p13',
    name: 'Blower Motor',
    image: '/images/products/motors/img_0288.png',
    category: 'Motors'
  },
  {
    id: 'p14',
    name: 'R-134a Refrigerant Cylinder',
    image: '/images/products/ac-gas/r134.jpg',
    category: 'AC Gas'
  },
  {
    id: 'p15',
    name: 'R-22 Refrigerant Cylinder',
    image: '/images/products/ac-gas/r22.jpg',
    category: 'AC Gas'
  },
  {
    id: 'p16',
    name: 'R-32 Refrigerant Cylinder',
    image: '/images/products/ac-gas/r32a.jpg',
    category: 'AC Gas'
  },
  {
    id: 'p17',
    name: 'R-600a Refrigerant Cylinder',
    image: '/images/products/ac-gas/r600.jpg',
    category: 'AC Gas'
  },
]
