import type { Metadata } from 'next'
import { CartProvider } from '@/contexts/cart-context'
import { Navbar } from '@/components/layout/navbar'
import { CartSheet } from '@/components/cart/cart-sheet'
import { Footer } from '@/components/layout/footer'
import './globals.css'
import { StructuredData } from '@/components/seo/structured-data'


export const metadata: Metadata = {
  title: 'Skoziê | Moda Feminina e Alfaiataria Moderna',
  description: 'Skoziê Closet de Moda — Vestidos, blusas, malhas e kimonos em alfaiataria moderna. Coleções elegantes para mulheres que valorizam estilo e autenticidade.',
  keywords: 'moda feminina, alfaiataria, vestidos, blusas, malhas, kimonos, Skoziê, Maringá',
  authors: [{ name: 'Skoziê' }],
  openGraph: {
    title: 'Skoziê | Moda Feminina e Alfaiataria Moderna',
    description: 'Peças exclusivas em alfaiataria moderna para mulheres que vestem sua personalidade.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <StructuredData />
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartSheet />
        </CartProvider>
      </body>
    </html>
  )
}