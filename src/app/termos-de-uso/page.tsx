import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | Louziê',
  description: 'Termos de Uso da Louziê — condições para utilização do site e compra de produtos.',
}

export default function TermsOfUsePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-12">
            <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
              Termos de Uso
            </h1>
            <p className="text-sm text-muted-foreground font-light">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none font-light space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">1. Aceitação dos termos</h2>
              <p>
                Ao acessar e utilizar o site da Louziê, você concorda com estes 
                Termos de Uso. Caso não concorde com algum dos termos, recomendamos 
                que não utilize nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">2. Uso do site</h2>
              <p>
                O site da Louziê é destinado a maiores de 18 anos ou menores 
                acompanhados de responsáveis legais. Você se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações verdadeiras e atualizadas ao se cadastrar</li>
                <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                <li>
                  Não reproduzir, duplicar ou copiar conteúdo do site sem autorização
                </li>
                <li>Manter a confidencialidade dos seus dados de acesso</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">3. Produtos e preços</h2>
              <p>
                As imagens dos produtos são meramente ilustrativas. As cores podem 
                variar de acordo com a calibração do monitor do usuário. Os preços 
                e disponibilidade dos produtos podem ser alterados sem aviso prévio.
              </p>
              <p>
                Em caso de erro no preço anunciado, a Louziê se reserva o direito 
                de corrigir o valor e informar o cliente antes da confirmação do pedido.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">4. Compras e pagamentos</h2>
              <p>Ao realizar uma compra, você declara que:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>É o titular do cartão de crédito ou conta utilizada</li>
                <li>Autoriza a cobrança do valor total da compra</li>
                <li>Está ciente das condições de frete e prazo de entrega</li>
              </ul>
              <p>
                A Louziê se reserva o direito de cancelar pedidos em caso de 
                inconsistência nos dados fornecidos ou suspeita de fraude.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">5. Trocas e devoluções</h2>
              <p>
                Conforme o Código de Defesa do Consumidor (CDC), você tem o direito 
                de se arrepender da compra em até 7 dias corridos após o recebimento 
                do produto. Para trocas ou devoluções:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>O produto deve estar em perfeito estado, sem uso ou lavagem</li>
                <li>Deve conter etiqueta original e embalagem</li>
                <li>Entre em contato pelo WhatsApp ou e-mail para iniciar o processo</li>
                <li>A primeira troca tem frete grátis</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">6. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo do site — incluindo textos, imagens, logotipos, 
                fotografias, design e código-fonte — é de propriedade exclusiva da 
                Louziê ou licenciado por terceiros. É proibida a reprodução total 
                ou parcial sem autorização prévia por escrito.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">7. Limitação de responsabilidade</h2>
              <p>
                A Louziê não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Danos indiretos decorrentes do uso do site ou dos produtos
                </li>
                <li>
                  Atrasos na entrega causados por casos fortuitos, força maior ou 
                  greve dos Correios
                </li>
                <li>
                  Conteúdo de sites de terceiros eventualmente linkados em nosso site
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">8. Alterações nos termos</h2>
              <p>
                A Louziê se reserva o direito de alterar estes Termos de Uso a 
                qualquer momento. As alterações entram em vigor imediatamente após 
                a publicação no site. Recomendamos a consulta periódica desta página.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">9. Legislação aplicável</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa 
                do Brasil. Fica eleito o foro da comarca de Maringá, Paraná, para 
                dirimir quaisquer questões decorrentes destes termos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">10. Contato</h2>
              <p>
                Para esclarecimentos sobre estes Termos de Uso, entre em contato 
                pelo e-mail{' '}
                <a
                  href="mailto:contato@louzie.com.br"
                  className="text-primary hover:underline"
                >
                  contato@louzie.com.br
                </a>{' '}
                ou WhatsApp (68) 19999-9999.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}