import Image from 'next/image'

export type Product = {
  id: string
  name: string
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group card overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="text-white font-medium">{product.name}</div>
        <div className="text-xs text-kool-mut mt-1">{product.category}</div>
      </div>
    </div>
  )
}
