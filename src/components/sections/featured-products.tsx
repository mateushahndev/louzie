"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/contexts/cart-context'
import { products } from '@/data/products'

export function FeaturedProducts() {
  const { dispatch } = useCart()
  const [addedProduct, setAddedProduct] = useState<string | null>(null)
  const featuredProducts = products.slice(0, 4)

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault() // Evita navegar ao clicar no botão de adicionar
    e.stopPropagation()
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.sizes[0],
        quantity: 1,
      },
    })
    setAddedProduct(product.id)
    setTimeout(() => setAddedProduct(null), 1500)
  }

  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
            Seleção especial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
            As Mais Desejadas
          </h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto">
            Peças que nossas clientes mais amam
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Image — agora é um Link */}
              <Link href={`/produtos/${product.id}`}>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-cream-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Sale badge */}
                  {product.originalPrice && (
                    <Badge variant="subtle" className="absolute top-3 left-3">
                      Special Price
                    </Badge>
                  )}

                  {/* Hover overlay sutil */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </Link>

              {/* Add to cart button */}
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className={`
                  absolute bottom-20 right-4 p-3 rounded-full shadow-lg z-10
                  transition-all duration-300
                  ${addedProduct === product.id
                    ? 'bg-primary text-primary-foreground scale-110 opacity-100'
                    : 'bg-background/90 backdrop-blur-sm text-foreground hover:bg-background opacity-0 group-hover:opacity-100'
                  }
                `}
                aria-label={`Adicionar ${product.name} ao carrinho`}
              >
                {addedProduct === product.id ? (
                  <ShoppingBag className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </button>

              {/* Product Info — agora é um Link */}
              <Link href={`/produtos/${product.id}`}>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium leading-tight hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="font-light">
            <Link href="/produtos">Ver todos os produtos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}