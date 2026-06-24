"use client"

import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'

export function CartSheet() {
  const { state, dispatch } = useCart()

  return (
    <Sheet open={state.isOpen} onOpenChange={() => dispatch({ type: 'TOGGLE_CART' })}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl">
            Seu Carrinho
            {state.totalItems > 0 && (
              <span className="text-sm font-sans font-normal text-muted-foreground ml-2">
                ({state.totalItems} {state.totalItems === 1 ? 'item' : 'itens'})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">Seu carrinho está vazio</p>
            <Button
              variant="outline"
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
            >
              Continuar comprando
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {state.items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 py-2 border-b border-border/50 last:border-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-md"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Tamanho: {item.size}</p>
                    <p className="text-sm font-medium mt-1">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
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
                        className="p-1 hover:text-primary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
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
                        className="p-1 hover:text-primary transition-colors"
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
                        className="p-1 hover:text-destructive transition-colors ml-auto"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SheetFooter className="border-t border-border pt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="text-lg font-medium">
                    R$ {state.totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <Button className="w-full" size="lg">
                  Finalizar compra
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}