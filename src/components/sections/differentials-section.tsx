import { Truck, RefreshCw, Sparkles, Heart } from 'lucide-react'

const differentials = [
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Em compras acima de R$ 299 para todo o Brasil',
  },
  {
    icon: RefreshCw,
    title: 'Troca Facilitada',
    description: 'Primeira troca grátis em até 7 dias',
  },
  {
    icon: Sparkles,
    title: 'Peças Exclusivas',
    description: 'Coleções limitadas criadas com materiais premium',
  },
  {
    icon: Heart,
    title: 'Atendimento Pessoal',
    description: 'Suporte via WhatsApp para te ajudar na escolha',
  },
]

export function DifferentialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {differentials.map((diff) => (
            <div key={diff.title} className="text-center space-y-3">
              <diff.icon className="w-6 h-6 mx-auto text-caramei-500 stroke-[1.5]" />
              <h3 className="text-sm font-medium">{diff.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px] mx-auto">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}