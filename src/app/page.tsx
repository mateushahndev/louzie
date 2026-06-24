import { HeroSection } from '@/components/sections/hero-section'
import { CategoriesSection } from '@/components/sections/categories-section'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { EditorialBanner } from '@/components/sections/editorial-banner'
import { DifferentialsSection } from '@/components/sections/differentials-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { InstagramSection } from '@/components/sections/instagram-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <EditorialBanner />
      <DifferentialsSection />
      <TestimonialsSection />
      <InstagramSection />
      <NewsletterSection />
    </>
  )
}