"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, ChevronLeft, Truck, RefreshCw, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/contexts/cart-context'
import { products, type Product } from '@/data/products'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { dispatch } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [added, setAdded] = useState(false)

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        quantity: 1,
      },
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Link
        href="/produtos"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar para produtos
      </Link>

      {/* Product Detail */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-cream-100">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
            loading="eager"
          />
          {product.originalPrice && (
            <Badge variant="subtle" className="absolute top-4 left-4 text-sm px-3 py-1">
              Special Price
            </Badge>
          )}
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-light">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
              {product.name}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-light">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selector */}
          <div className="space-y-3">
            <p className="text-sm font-medium">
              Tamanho: <span className="font-normal text-muted-foreground">{selectedSize}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    w-12 h-12 rounded-md border text-sm font-light transition-all
                    ${selectedSize === size
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border hover:border-foreground/50'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            onClick={handleAddToCart}
            size="xl"
            className="w-full sm:w-auto group font-light tracking-wide"
          >
            {added ? (
              <>
                <ShoppingBag className="mr-2 w-4 h-4" />
                Adicionado!
              </>
            ) : (
              <>
                <ShoppingBag className="mr-2 w-4 h-4" />
                Adicionar ao carrinho
              </>
            )}
          </Button>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Truck className="w-4 h-4 text-caramei-500" />
              Frete grátis acima de R$ 299
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RefreshCw className="w-4 h-4 text-caramei-500" />
              Troca facilitada em 7 dias
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-caramei-500" />
              Compra segura
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
              Você também pode gostar
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-light">
              Produtos Relacionados
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                href={`/produtos/${related.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-cream-100 mb-3">
                  <img
                    src={related.image}
                    alt={related.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-light">
                  {related.category}
                </p>
                <h3 className="text-sm font-medium leading-tight group-hover:text-primary transition-colors">
                  {related.name}
                </h3>
                <p className="text-sm font-medium mt-1">
                  R$ {related.price.toFixed(2).replace('.', ',')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}