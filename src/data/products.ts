export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: string
  image: string
  sizes: string[]
  description: string
}

export const products: Product[] = [
  // VESTIDOS
  {
    id: 'vestido-linho-creme',
    name: 'Vestido Linho Creme',
    price: 389.00,
    category: 'vestidos',
    image: '/products/vestido-linho-creme.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Vestido midi em linho com modelagem fluida. Perfeito para ocasiões que pedem elegância sem esforço.',
  },
  {
    id: 'vestido-midi-preto',
    name: 'Vestido Midi Preto',
    price: 419.00,
    category: 'vestidos',
    image: '/products/vestido-midi-preto.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Vestido midi preto em crepe. Essencial no guarda-roupa feminino.',
  },
  {
    id: 'vestido-floral-longo',
    name: 'Vestido Floral Longo',
    price: 449.00,
    originalPrice: 529.00,
    category: 'vestidos',
    image: '/products/vestido-floral-longo.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Vestido longo com estampa floral exclusiva. Fluido, romântico e perfeito para eventos especiais.',
  },
  {
    id: 'vestido-cetim-verde',
    name: 'Vestido Cetim Verde',
    price: 459.00,
    category: 'vestidos',
    image: '/products/vestido-cetim-verde.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Vestido em cetim com caimento impecável. Elegância pura para noites especiais.',
  },
  {
    id: 'vestido-tricot-off-white',
    name: 'Vestido Tricot Off-White',
    price: 369.00,
    category: 'vestidos',
    image: '/products/vestido-tricot-off-white.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Vestido em tricot macio na cor off-white. Conforto e sofisticação para o dia a dia.',
  },

  // ALFAIATARIA
  {
    id: 'blazer-alfaiataria-caramelo',
    name: 'Blazer Alfaiataria Caramelo',
    price: 459.00,
    category: 'alfaiataria',
    image: '/products/blazer-alfaiataria-caramelo.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Blazer estruturado em tecido premium. Corte impecável que valoriza a silhueta.',
  },
  {
    id: 'calca-alfaiataria-wide-leg',
    name: 'Calça Alfaiataria Wide Leg',
    price: 359.00,
    category: 'alfaiataria',
    image: '/products/calca-alfaiataria-wide-leg.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Calça de alfaiataria com modelagem ampla. Elegância moderna para qualquer ocasião.',
  },
  {
    id: 'conjunto-linho-areia',
    name: 'Conjunto Linho Areia',
    price: 529.00,
    category: 'alfaiataria',
    image: '/products/conjunto-linho-areia.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Conjunto blazer + calça em linho premium. Look completo para momentos especiais.',
  },
  {
    id: 'colete-alfaiataria-off-white',
    name: 'Colete Alfaiataria Off-White',
    price: 329.00,
    category: 'alfaiataria',
    image: '/products/colete-afaiataria-off-white.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Colete estruturado em tecido premium. Versátil, combina com tudo.',
  },
  {
    id: 'calca-pantalona-preta',
    name: 'Calça Pantalona Preta',
    price: 379.00,
    originalPrice: 429.00,
    category: 'alfaiataria',
    image: '/products/calca-pantalona-preta.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Calça pantalona em crepe premium. Caimento perfeito e elegância atemporal.',
  },

  // BLUSAS
  {
    id: 'blusa-seda-manga-longa',
    name: 'Blusa Seda Manga Longa',
    price: 279.00,
    originalPrice: 349.00,
    category: 'blusas',
    image: '/products/blusa-seda-manga-longa.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Blusa em seda pura com mangas longas e acabamento impecável.',
  },
  {
    id: 'blusa-cetim-marrom',
    name: 'Blusa Cetim Marrom',
    price: 249.00,
    category: 'blusas',
    image: '/products/blusa-cetim-marrom.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Blusa em cetim com gola clássica. Toque suave e brilho discreto.',
  },
  {
    id: 'blusa-linho-branca',
    name: 'Blusa Linho Branca',
    price: 289.00,
    category: 'blusas',
    image: '/products/blusa-linho-branca.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Blusa em linho puro na cor branca. Fresca, elegante e atemporal.',
  },
  {
    id: 'body-gola-alta-preto',
    name: 'Body Gola Alta Preto',
    price: 199.00,
    category: 'blusas',
    image: '/products/body-gola-alta-preto.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Body em malha premium com gola alta. Peça coringa para qualquer look.',
  },

  // MALHAS
  {
    id: 'malha-tricot-nude',
    name: 'Malha Tricot Nude',
    price: 299.00,
    category: 'malhas',
    image: '/products/malha-tricot-nude.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Malha em tricot macio com caimento perfeito. Conforto e estilo para o dia a dia.',
  },
  {
    id: 'cardigan-tricot-caramelo',
    name: 'Cardigan Tricot Caramelo',
    price: 349.00,
    category: 'malhas',
    image: '/products/cardigan-tricot-caramelo.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Cardigan longo em tricot pesado. Aconchegante e sofisticado.',
  },
  {
    id: 'sueter-gola-rolada-creme',
    name: 'Suéter Gola Rolada Creme',
    price: 319.00,
    category: 'malhas',
    image: '/products/sueter-gola-rolada-creme.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Suéter em tricot macio com gola rolada. Minimalista e elegante.',
  },
  {
    id: 'conjunto-malha-cinza',
    name: 'Conjunto Malha Cinza',
    price: 449.00,
    originalPrice: 529.00,
    category: 'malhas',
    image: '/products/conjunto-malha-cinza.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Conjunto moletom premium em cinza mescla. Look completo para dias frios.',
  },

  // KIMONOS
  {
    id: 'kimono-estampa-floral',
    name: 'Kimono Estampa Floral',
    price: 259.00,
    originalPrice: 329.00,
    category: 'kimonos',
    image: '/products/kimono-estampa-floral.webp',
    sizes: ['Único'],
    description: 'Kimono leve em viscose com estampa floral exclusiva. Versátil e sofisticado.',
  },
  {
    id: 'kimono-linho-cru',
    name: 'Kimono Linho Cru',
    price: 289.00,
    category: 'kimonos',
    image: '/products/kimono-linho-cru.webp',
    sizes: ['Único'],
    description: 'Kimono em linho natural com franjas. Peça statement para looks de verão.',
  },
  {
    id: 'kimono-renda-preta',
    name: 'Kimono Renda Preta',
    price: 329.00,
    category: 'kimonos',
    image: '/products/kimono-renda-preta.webp',
    sizes: ['Único'],
    description: 'Kimono em renda preta com forro. Sensual e elegante para a noite.',
  },
  {
    id: 'kimono-seda-estampa-etnica',
    name: 'Kimono Seda Estampa Étnica',
    price: 359.00,
    category: 'kimonos',
    image: '/products/kimono-seda-estampa-etnica.webp',
    sizes: ['Único'],
    description: 'Kimono em seda com estampa étnica exclusiva. Luxo e personalidade.',
  },

  // SAIAS
  {
    id: 'saia-midi-plissada-caramelo',
    name: 'Saia Midi Plissada Caramelo',
    price: 269.00,
    category: 'saias',
    image: '/products/saia-midi-plissada-caramelo.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Saia midi plissada em tom caramelo. Movimento fluido e elegância pura.',
  },
  {
    id: 'saia-lapis-preta',
    name: 'Saia Lápis Preta',
    price: 239.00,
    category: 'saias',
    image: '/products/saia-lapis-preta.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Saia lápis em crepe premium. Clássica, versátil e indispensável.',
  },
  {
    id: 'saia-longa-com-fenda',
    name: 'Saia Longa com Fenda',
    price: 319.00,
    originalPrice: 389.00,
    category: 'saias',
    image: '/products/saia-longa-com-fenda.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Saia longa em viscose fluida com fenda lateral. Sofisticação para eventos.',
  },

  // CASACOS
  {
    id: 'trench-coat-areia',
    name: 'Trench Coat Areia',
    price: 599.00,
    category: 'casacos',
    image: '/products/trench-coat-areia.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Trench coat clássico na cor areia. Atemporal e indispensável no guarda-roupa.',
  },
  {
    id: 'sobretudo-la-caramelo',
    name: 'Sobretudo Lã Caramelo',
    price: 689.00,
    category: 'casacos',
    image: '/products/sobretudo-la-caramelo.webp',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Sobretudo em lã premium na cor caramelo. Elegância e aquecimento na medida certa.',
  },
  {
    id: 'jaqueta-couro-preta',
    name: 'Jaqueta Couro Preta',
    price: 479.00,
    category: 'casacos',
    image: '/products/jaqueta-couro-preta.webp',
    sizes: ['P', 'M', 'G'],
    description: 'Jaqueta em couro legítimo preto. Peça statement que dura a vida toda.',
  },
]

export const categories = [
  { name: 'Ver Tudo', slug: 'tudo', image: '/home/vertudo.webp' },
  { name: 'Vestidos', slug: 'vestidos', image: '/home/vestidos.webp' },
  { name: 'Alfaiataria', slug: 'alfaiataria', image: '/home/alfaiataria.webp' },
  { name: 'Blusas', slug: 'blusas', image: '/home/blusas.webp' },
  { name: 'Malhas', slug: 'malhas', image: '/home/malhas.webp' },
  { name: 'Kimonos', slug: 'kimonos', image: '/home/kimonos.webp' },
  { name: 'Saias', slug: 'saias', image: '/home/saias.webp' },
  { name: 'Casacos', slug: 'casacos', image: '/home/casacos.webp' },
]

export const testimonials = [
  {
    name: 'Ana Luiza',
    city: 'Maringá, PR',
    text: 'A qualidade das peças superou minhas expectativas. O caimento é perfeito, parece feito sob medida.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  {
    name: 'Camila',
    city: 'Londrina, PR',
    text: 'Comprei o blazer caramelo e recebo elogios toda vez que uso. Entrega rápida e embalagem impecável.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
  },
  {
    name: 'Juliana',
    city: 'Curitiba, PR',
    text: 'Finalmente encontrei uma loja que entende de moda feminina sem ser básica demais. Skoziê virou minha favorita.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop',
  },
]

export const instagramPosts = [
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=400&h=400&fit=crop',
]