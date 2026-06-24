import { Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
            Elas Amam
          </h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto">
            Quem veste Skoziê, recomenda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-lg p-6 md:p-8 border border-border/50 relative"
            >
              <Quote className="w-8 h-8 text-caramei-500/20 absolute top-4 right-4" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}