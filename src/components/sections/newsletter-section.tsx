"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Check } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light">
            Novidades no seu e-mail
          </h2>
          <p className="text-muted-foreground font-light">
            Receba lançamentos e coleções exclusivas antes de todo mundo. 
            Sem spam, apenas o que importa.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <Check className="w-5 h-5" />
              <span className="text-sm">E-mail cadastrado com sucesso!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 h-10 rounded-md border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <Button type="submit" size="default" className="font-light">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}