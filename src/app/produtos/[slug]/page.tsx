import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductDetail } from '@/components/products/product-detail'
import { products } from '@/data/products'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.slug)
  
  if (!product) {
    return {
      title: 'Produto não encontrado | Louziê',
    }
  }

  return {
    title: `${product.name} | Louziê`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Louziê`,
      description: product.description,
      images: [product.image],
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }))
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20">
      <ProductDetail product={product} />
    </div>
  )
}