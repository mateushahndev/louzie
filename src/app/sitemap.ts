import { MetadataRoute } from 'next'
import { products, categories } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skozie.com.br'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/produtos`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/sobre`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contato`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/carrinho`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.5 },
    { url: `${baseUrl}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/termos-de-uso`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categorias/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const productPages = products.map((product) => ({
    url: `${baseUrl}/produtos/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}