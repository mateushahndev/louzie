import type { Metadata } from 'next'
import { CartPageContent } from '@/components/cart/cart-page-content'

export const metadata: Metadata = {
  title: 'Carrinho | Louziê',
  description: 'Finalize sua compra na Louziê. Confira os produtos no seu carrinho.',
}

export default function CartPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
            Finalizar compra
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
            Seu Carrinho
          </h1>
        </div>

        <CartPageContent />
      </div>
    </div>
  )
}