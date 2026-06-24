import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

export function CategoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
            Navegue por estilo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
            Categorias
          </h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto">
            Encontre a peça perfeita para cada momento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categorias/${category.slug}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-serif font-light">
                  {category.name}
                </h3>
                <span className="text-white/70 text-sm flex items-center gap-1 mt-1 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explorar <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}