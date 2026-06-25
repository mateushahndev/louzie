import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Louziê',
  description: 'Política de Privacidade da Louziê — saiba como tratamos seus dados pessoais.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-12">
            <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
              Política de Privacidade
            </h1>
            <p className="text-sm text-muted-foreground font-light">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none font-light space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">1. Introdução</h2>
              <p>
                A Louziê leva a sério a privacidade dos seus dados. Esta política 
                explica como coletamos, usamos, armazenamos e protegemos suas 
                informações pessoais quando você utiliza nosso site.
              </p>
              <p>
                Ao utilizar nosso site, você concorda com os termos desta política. 
                Recomendamos a leitura completa deste documento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">2. Dados que coletamos</h2>
              <p>Durante sua navegação e compras em nosso site, podemos coletar:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Dados de cadastro:</strong> nome completo, e-mail, telefone, 
                  CPF (para emissão de nota fiscal) e endereço de entrega.
                </li>
                <li>
                  <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, 
                  páginas visitadas, tempo de permanência e origem do tráfego.
                </li>
                <li>
                  <strong>Dados de pagamento:</strong> informações de cartão de crédito 
                  são processadas diretamente pela plataforma de pagamento parceira, 
                  sem armazenamento em nossos servidores.
                </li>
                <li>
                  <strong>Cookies:</strong> utilizamos cookies essenciais para o 
                  funcionamento do carrinho de compras e cookies de análise para 
                  melhorar sua experiência.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">3. Finalidade do tratamento</h2>
              <p>Utilizamos seus dados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processar e entregar seus pedidos</li>
                <li>Enviar confirmações de compra e atualizações sobre o pedido</li>
                <li>Emitir notas fiscais</li>
                <li>Prestar suporte e atendimento ao cliente</li>
                <li>
                  Enviar comunicações de marketing (apenas mediante seu consentimento)
                </li>
                <li>Melhorar a experiência de navegação no site</li>
                <li>Prevenir fraudes e garantir a segurança das transações</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">4. Compartilhamento de dados</h2>
              <p>
                Seus dados pessoais não são vendidos, alugados ou compartilhados com 
                terceiros para fins comerciais sem sua autorização. Podemos compartilhar 
                dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Com transportadoras e Correios para entrega dos produtos</li>
                <li>Com plataformas de pagamento para processamento de transações</li>
                <li>Por obrigação legal ou determinação judicial</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">5. Armazenamento e segurança</h2>
              <p>
                Seus dados são armazenados em servidores seguros, com criptografia e 
                medidas técnicas para proteção contra acessos não autorizados, perda 
                ou alteração indevida.
              </p>
              <p>
                Mantemos seus dados apenas pelo tempo necessário para cumprir as 
                finalidades descritas nesta política ou conforme exigido por lei.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">6. Seus direitos (LGPD)</h2>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), 
                você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de dados desnecessários</li>
                <li>Revogar consentimento a qualquer momento</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato pelo e-mail{' '}
                <a
                  href="mailto:privacidade@louzie.com.br"
                  className="text-primary hover:underline"
                >
                  privacidade@louzie.com.br
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">7. Cookies</h2>
              <p>
                Nosso site utiliza cookies essenciais para o funcionamento do carrinho 
                de compras e cookies de análise (Google Analytics) para entendermos 
                como os visitantes interagem com o site. Você pode desabilitar cookies 
                nas configurações do seu navegador, mas isso pode afetar a experiência 
                de compra.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-light">8. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus 
                dados, entre em contato:
              </p>
              <ul className="list-none space-y-2 pl-0">
                <li>E-mail: privacidade@louzie.com.br</li>
                <li>WhatsApp: (68) 19999-9999</li>
                <li>Endereço: Rua das Palmeiras, 123 — Feijó, AC</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}