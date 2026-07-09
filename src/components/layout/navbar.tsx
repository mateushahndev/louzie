"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state, dispatch } = useCart()

  // Trava scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-serif italic font-medium tracking-wide hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skoziê
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-light tracking-wide hover:text-primary transition-colors"
            >
              Início
            </Link>
            <Link
              href="/produtos"
              className="text-sm font-light tracking-wide hover:text-primary transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="/categorias/vestidos"
              className="text-sm font-light tracking-wide hover:text-primary transition-colors"
            >
              Vestidos
            </Link>
            <Link
              href="/categorias/alfaiataria"
              className="text-sm font-light tracking-wide hover:text-primary transition-colors"
            >
              Alfaiataria
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-light tracking-wide hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-sm font-light tracking-wide hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative hover:opacity-80 transition-opacity"
              aria-label="Carrinho de compras"
            >
              <ShoppingBag className="w-5 h-5" />
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs bg-primary text-primary-foreground rounded-full">
                  {state.totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:opacity-80 transition-opacity"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-6 space-y-1 bg-background">
            <Link
              href="/"
              className="block text-sm font-light py-3 px-2 hover:text-primary hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/produtos"
              className="block text-sm font-light py-3 px-2 hover:text-primary hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="/categorias/vestidos"
              className="block text-sm font-light py-3 px-2 hover:text-primary hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vestidos
            </Link>
            <Link
              href="/categorias/alfaiataria"
              className="block text-sm font-light py-3 px-2 hover:text-primary hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Alfaiataria
            </Link>
            <Link
              href="/sobre"
              className="block text-sm font-light py-3 px-2 hover:text-primary hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="block text-sm font-light py-3 px-2 hover:text-primary hover:bg-cream-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}