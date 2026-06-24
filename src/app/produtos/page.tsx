import type { Metadata } from 'next'
import { ProductGrid } from '@/components/products/product-grid'

export const metadata: Metadata = {
  title: 'Produtos | Skoziê',
  description: 'Confira nossa coleção completa de vestidos, blusas, malhas, kimonos e alfaiataria moderna feminina.',
}

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
            Coleção Completa
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
            Nossos Produtos
          </h1>
          <p className="text-muted-foreground font-light max-w-md mx-auto">
            Peças pensadas para cada momento da sua vida
          </p>
        </div>

        <ProductGrid />
      </div>
    </div>
  )
}