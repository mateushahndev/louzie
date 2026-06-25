export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'Louziê',
    description: 'Moda feminina e alfaiataria moderna. Vestidos, blusas, malhas e kimonos exclusivos.',
    url: 'https://louzie.com.br',
    telephone: '+5568199999999',
    email: 'contato@louzie.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua das Palmeiras, 123',
      addressLocality: 'Maringá',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://instagram.com/louzie',
      'https://facebook.com/louzie',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}