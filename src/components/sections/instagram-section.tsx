import Link from 'next/link'
import { Camera } from 'lucide-react'
import { instagramPosts } from '@/data/products'

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <span className="text-sm tracking-[0.2em] text-caramei-500 uppercase font-light">
            Acompanhe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
            @louzie
          </h2>
          <p className="text-muted-foreground font-light">
            Inspire-se com looks e novidades no Instagram
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com/louzie"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-lg overflow-hidden group relative"
            >
              <img
                src={post}
                alt={`Louziê Instagram post ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/louzie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors font-light"
          >
            <Camera className="w-4 h-4" />
            Siga @louzie no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}