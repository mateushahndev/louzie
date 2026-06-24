import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductGrid } from '@/components/products/product-grid'
import { categories } from '@/data/products'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug)
  
  if (!category) {
    return {
      title: 'Categoria não encontrada | Skoziê',
    }
  }

  return {
    title: `${category.name} | Skoziê`,
    description: `Confira nossa coleção de ${category.name.toLowerCase()} em alfaiataria moderna. Peças exclusivas e elegantes para você.`,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
            Categoria
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
            {category.name}
          </h1>
          <p className="text-muted-foreground font-light max-w-md mx-auto">
            Nossa seleção de {category.name.toLowerCase()} em alfaiataria moderna
          </p>
        </div>

        <ProductGrid category={params.slug} />
      </div>
    </div>
  )
}