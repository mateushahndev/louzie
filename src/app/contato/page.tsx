import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Contato | Louziê',
  description: 'Entre em contato com a Louziê — atendimento pessoal via WhatsApp, e-mail ou visite nossa loja em Maringá.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
              Contato
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-serif font-light">Canais de atendimento</h2>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/5568199999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-caramei-500" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">(68) 19999-9999</p>
                  </div>
                </a>

                <a
                  href="mailto:contato@louzie.com.br"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-caramei-500" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-muted-foreground">contato@louzie.com.br</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-caramei-500" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(68) 3030-3030</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-serif font-light">Visite nossa loja</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-caramei-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua das Palmeiras, 123
                      <br />
                      Centro — Feijó, AC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-caramei-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Horário de funcionamento</p>
                    <p className="text-muted-foreground">
                      Seg a Sex: 9h às 19h
                      <br />
                      Sáb: 9h às 14h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            asChild
            variant="elegant"
            size="lg"
            className="font-light"
          >
            <a
              href="https://wa.me/5568199999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}