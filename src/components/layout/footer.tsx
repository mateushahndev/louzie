import Link from 'next/link'
import { Camera, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-serif italic font-light tracking-wide"
            >
              Louziê
            </Link>
            <p className="text-sm text-background/60 font-light leading-relaxed max-w-xs">
              Alfaiataria moderna para mulheres que vestem sua personalidade com elegância.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide uppercase">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-background/60 hover:text-background transition-colors font-light"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-sm text-background/60 hover:text-background transition-colors font-light"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/vestidos"
                  className="text-sm text-background/60 hover:text-background transition-colors font-light"
                >
                  Vestidos
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/alfaiataria"
                  className="text-sm text-background/60 hover:text-background transition-colors font-light"
                >
                  Alfaiataria
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-background/60 hover:text-background transition-colors font-light"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-background/60 hover:text-background transition-colors font-light"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium tracking-wide uppercase">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/5568199999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors font-light"
                  >
                    <Phone className="w-4 h-4" />
                    (68) 19999-9999
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@louzie.com.br"
                    className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors font-light"
                  >
                    <Mail className="w-4 h-4" />
                    contato@louzie.com.br
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-2 text-sm text-background/60 font-light">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    Rua das Palmeiras, 123
                    <br />
                    Feijó, AC
                  </span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/louzie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/louzie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="pt-4 border-t border-background/10">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/politica-de-privacidade"
                    className="text-xs text-background/40 hover:text-background/70 transition-colors font-light"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos-de-uso"
                    className="text-xs text-background/40 hover:text-background/70 transition-colors font-light"
                  >
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40 font-light">
              Louziê © {new Date().getFullYear()}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-background/40 font-light">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}