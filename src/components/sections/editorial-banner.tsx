import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EditorialBanner() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=800&fit=crop"
          alt="Editorial Skoziê"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        {/* Overlay bem escuro + gradiente para uniformizar */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
            O que veste bem,
            <br />
            <span className="italic">transforma</span>
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed max-w-lg">
            A Skoziê nasceu da paixão por vestir mulheres com peças que contam 
            histórias. Cada detalhe é pensado para que você se sinta confiante 
            e autêntica em cada ocasião.
          </p>
          <Button
            asChild
            size="lg"
            className="group text-white border-2 border-white/60 hover:bg-white hover:text-foreground font-light bg-transparent"
          >
            <Link href="/sobre">
              Conheça nossa história
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}