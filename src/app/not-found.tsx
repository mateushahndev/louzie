import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-light">404</h1>
        <p className="text-muted-foreground text-lg font-light max-w-sm mx-auto">
          A página que você procura não foi encontrada ou não existe mais.
        </p>
        <Button asChild variant="elegant" size="lg" className="font-light">
          <Link href="/">Voltar para Home</Link>
        </Button>
      </div>
    </div>
  )
}