"use client"
import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { CATEGORIES, products } from '@/data/products'

const ALL = 'All'

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageContent />
    </Suspense>
  )
}

function ProductsPageContent() {
  const [active, setActive] = useState<string>(ALL)
  const search = useSearchParams()
  const router = useRouter()

  // Initialize from query param and keep URL in sync when changing tabs
  useEffect(() => {
    const q = search.get('category')
    const valid = q && ([...CATEGORIES] as readonly string[]).includes(q) ? q : ALL
    setActive(valid)
  // we only want to run when the query changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search?.toString()])

  useEffect(() => {
    const current = search.get('category') || ALL
    if (active !== current) {
      const next = active === ALL ? '' : `?category=${encodeURIComponent(active)}`
      router.replace(`/products${next}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const filtered = useMemo(() => {
    if (active === ALL) return products
    return products.filter(p => p.category === active)
  }, [active])

  const tabs = [ALL, ...CATEGORIES]

  return (
    <div className="section py-10">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${active === tab ? 'bg-kool-accent text-black border-kool-accent' : 'border-white/10 text-kool-mut hover:text-white hover:bg-white/5'}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
