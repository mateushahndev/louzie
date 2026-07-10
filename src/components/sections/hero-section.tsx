"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative bg-cream-50 overflow-hidden pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-background to-cream-100" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
                Coleção Outono-Inverno
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-[1.1] tracking-tight">
                Alfaiataria que
                <br />
                <span className="italic text-caramei-500">veste sua presença</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-light max-w-md leading-relaxed">
                Peças que transcendem a moda passageira. Cada criação Louziê é pensada 
                para mulheres que valorizam elegância, conforto e autenticidade.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="xl"
                className="group font-light tracking-wide"
              >
                <Link href="/produtos">
                  Ver Coleção
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="font-light tracking-wide"
              >
                <Link href="/sobre">
                  Nossa História
                </Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-serif">+500</p>
                <p className="text-xs text-muted-foreground">Peças exclusivas</p>
              </div>
              <div>
                <p className="text-2xl font-serif">98%</p>
                <p className="text-xs text-muted-foreground">Clientes satisfeitas</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/home/hero.webp"
                alt="Modelo vestindo peça Louziê"
                className="object-cover w-full h-full"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background rounded-lg shadow-xl p-4 border border-border/50">
              <p className="text-xs text-muted-foreground">Novidade</p>
              <p className="text-sm font-medium">Coleção Premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}