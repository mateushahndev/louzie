import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Sobre | Skoziê',
  description: 'Conheça a história da Skoziê — moda feminina e alfaiataria moderna que veste sua presença.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
              Sobre a <span className="italic">Skoziê</span>
            </h1>
          </div>

          <div className="prose prose-lg font-light max-w-none space-y-6">
            <p>
              A Skoziê nasceu da paixão por vestir mulheres com peças que contam 
              histórias. Fundada em Maringá, Paraná, nossa loja se tornou referência 
              em moda feminina com foco em alfaiataria moderna e peças exclusivas.
            </p>
            <p>
              Cada coleção é pensada para mulheres que valorizam elegância sem perder 
              o conforto. Nossos vestidos, blusas, malhas e kimonos são criados com 
              tecidos premium e acabamento impecável, resultado de uma curadoria 
              cuidadosa que une tendências atemporais ao estilo contemporâneo.
            </p>
            <p>
              Acreditamos que a moda é uma forma de expressão. Por isso, nossas peças 
              são versáteis — funcionam tanto para o ambiente corporativo quanto para 
              ocasiões especiais, sempre com aquele toque de sofisticação que só a 
              Skoziê oferece.
            </p>
          </div>

          <Button asChild variant="elegant" size="lg" className="font-light">
            <Link href="/produtos">Conheça nossa coleção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}