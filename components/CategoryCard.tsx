import Link from 'next/link'
import { ReactNode } from 'react'

export default function CategoryCard({ title, href = '/products', icon }: { title: string, href?: string, icon: ReactNode }) {
  return (
    <Link href={`${href}${href.includes('?') ? '&' : '?'}category=${encodeURIComponent(title)}`} className="card p-5 flex items-center gap-4 hover:bg-white/5 transition-colors group">
      <div className="h-12 w-12 rounded-lg bg-kool-accent/10 border border-kool-accent/30 flex items-center justify-center text-kool-accent group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-kool-mut">Explore {title}</div>
      </div>
    </Link>
  )
}
