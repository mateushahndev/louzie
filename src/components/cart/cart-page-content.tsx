"use client"

import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'

export function CartPageContent() {
  const { state, dispatch } = useCart()

  if (state.items.length === 0) {
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-12">
        <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/30" />
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-light">Seu carrinho está vazio</h2>
          <p className="text-muted-foreground">
            Que tal explorar nossa coleção e encontrar peças incríveis?
          </p>
        </div>
        <Button asChild size="lg" className="font-light">
          <Link href="/produtos">
            Ver Produtos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Items */}
        <div className="md:col-span-2 space-y-6">
          {state.items.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-4 pb-6 border-b border-border"
            >
              <Link href={`/produtos/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded-md hover:opacity-90 transition-opacity"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/produtos/${item.id}`}>
                  <h3 className="text-sm font-medium hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-xs text-muted-foreground mt-1">
                  Tamanho: {item.size}
                </p>
                <p className="text-sm font-medium mt-2">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          id: item.id,
                          size: item.size,
                          quantity: item.quantity - 1,
                        },
                      })
                    }
                    className="p-1 hover:text-primary transition-colors border border-border rounded"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          id: item.id,
                          size: item.size,
                          quantity: item.quantity + 1,
                        },
                      })
                    }
                    className="p-1 hover:text-primary transition-colors border border-border rounded"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_ITEM',
                        payload: { id: item.id, size: item.size },
                      })
                    }
                    className="p-1 hover:text-destructive transition-colors ml-4"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="space-y-6">
          <div className="bg-cream-50 rounded-lg p-6 border border-border/50 space-y-4">
            <h3 className="font-serif text-lg">Resumo</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>R$ {state.totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Frete</span>
                <span className="text-green-600">Grátis</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-medium text-base">
                <span>Total</span>
                <span>R$ {state.totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Finalizar compra
            </Button>
          </div>

          <Link
            href="/produtos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 justify-center"
          >
            Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  )
}