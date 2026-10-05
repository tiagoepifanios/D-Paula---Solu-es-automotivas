/**
 * Dados comerciais e conteúdo do site — edite aqui.
 *
 * Fontes (consultadas em 04/10/2026):
 * - Instagram oficial @dpaula.sautomotivas (bio, destaques, publicações fixadas e reels)
 * - Perfil da empresa no Google Maps ("D'Paula Soluções Automotivas")
 * Não inclua informações que não estejam confirmadas nos canais oficiais.
 */

export const business = {
  name: "D'Paula Soluções Automotivas",
  shortName: "D'Paula",
  /** Número do WhatsApp com DDI + DDD, apenas dígitos. Confirmado no Instagram e no Google. */
  whatsapp: '5511932805761',
  phoneDisplay: '(11) 93280-5761',
  phoneHref: '+5511932805761',
  address: {
    street: 'R. João Paes, 517',
    district: 'Centro',
    city: 'São Lourenço da Serra',
    state: 'SP',
    postalCode: '06890-000',
    full: "R. João Paes, 517 - Centro, São Lourenço da Serra - SP, 06890-000",
  },
  geo: { lat: -23.8575978, lng: -46.9444713 },
  /** Horários conforme o perfil no Google. */
  hours: [
    { days: 'Segunda a sexta', time: '8h às 18h', schema: 'Mo-Fr 08:00-18:00' },
    { days: 'Sábado', time: '8h às 13h', schema: 'Sa 08:00-13:00' },
    { days: 'Domingo', time: 'Fechado', schema: null },
  ],
  instagram: {
    handle: '@dpaula.sautomotivas',
    url: 'https://www.instagram.com/dpaula.sautomotivas/',
  },
  googleMapsUrl: 'https://maps.google.com/?cid=3384917669940139809',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent("D'Paula Soluções Automotivas, R. João Paes, 517 - Centro, São Lourenço da Serra - SP"),
  mapEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent("D'Paula Soluções Automotivas, R. João Paes, 517, São Lourenço da Serra - SP") +
    '&z=16&output=embed',
  /** Informação divulgada na bio, na fachada e no material oficial. */
  insurers: 'Atendemos todas as companhias de seguro',
  /** Preencha quando o domínio estiver definido (usado em SEO e compartilhamento). */
  siteUrl: '',
};

export const defaultMessage =
  "Olá! Vim pelo site da D'Paula e gostaria de solicitar um orçamento.";

export type IconName =
  | 'tire'
  | 'alignment'
  | 'balance'
  | 'paint'
  | 'polish'
  | 'wheel'
  | 'truck'
  | 'weld';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  /** Trecho usado na mensagem do WhatsApp: "...orçamento para {quote}." */
  quote: string;
};

/** Serviços confirmados na bio, nos destaques, no material fixado e na fachada. */
export const services: Service[] = [
  {
    id: 'pneus',
    title: 'Venda de pneus',
    description: 'Pneus novos para carros e motos. Consulte medidas e disponibilidade.',
    icon: 'tire',
    quote: 'pneus',
  },
  {
    id: 'alinhamento',
    title: 'Alinhamento e cambagem',
    description: 'Ajuste da geometria das rodas para o carro rodar reto e gastar os pneus por igual.',
    icon: 'alignment',
    quote: 'alinhamento e cambagem',
  },
  {
    id: 'balanceamento',
    title: 'Balanceamento',
    description: 'Correção de vibrações no volante e na carroceria causadas por rodas desbalanceadas.',
    icon: 'balance',
    quote: 'balanceamento',
  },
  {
    id: 'funilaria',
    title: 'Funilaria e pintura',
    description: 'Reparos de lataria e pintura em geral, para particulares e seguradoras.',
    icon: 'paint',
    quote: 'funilaria e pintura',
  },
  {
    id: 'polimento',
    title: 'Polimento e cristalização',
    description: 'Polimento, espelhamento e cristalização para recuperar o brilho da pintura.',
    icon: 'polish',
    quote: 'polimento e cristalização',
  },
  {
    id: 'rodas',
    title: 'Rodas de liga',
    description: 'Venda e reforma de rodas de liga leve.',
    icon: 'wheel',
    quote: 'rodas de liga',
  },
  {
    id: 'borracharia',
    title: 'Borracharia leve e pesada',
    description: 'Consertos de pneus para veículos de passeio e pesados.',
    icon: 'truck',
    quote: 'borracharia',
  },
  {
    id: 'soldas',
    title: 'Soldas em geral',
    description: 'Serviços de solda para reparos na estrutura e em peças.',
    icon: 'weld',
    quote: 'serviço de solda',
  },
];

/** Outros itens listados no material oficial da empresa. */
export const otherServices = ['Recapagem de pneus', 'Consertos', 'Calotas', 'Emblemas'];

export type GalleryItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  /** Alternativa WebM para navegadores sem H.264 (opcional). */
  srcWebm?: string;
  thumb: string;
  /** Para vídeos: imagem de capa. */
  poster?: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const g = (p: string) => `media/galeria/${p}`;

/** Fotos e vídeo publicados no Instagram oficial da empresa. */
export const gallery: GalleryItem[] = [
  { id: 'letreiro', type: 'image', src: g('fachada-letreiro.webp'), thumb: g('fachada-letreiro-sm.webp'), width: 640, height: 1136, alt: "Letreiro da D'Paula Soluções Automotivas na fachada azul da loja", caption: 'Fachada' },
  { id: 'entrada', type: 'image', src: g('entrada-oficina.webp'), thumb: g('entrada-oficina-sm.webp'), width: 720, height: 900, alt: 'Entrada da oficina com o letreiro da empresa e a área de serviço ao fundo', caption: 'Entrada da oficina' },
  { id: 'video-pneus', type: 'video', src: g('video-pneus.mp4'), srcWebm: g('video-pneus.webm'), thumb: g('video-pneus-capa-sm.webp'), poster: g('video-pneus-capa.webp'), width: 540, height: 960, alt: 'Vídeo da equipe apresentando pneus na loja', caption: 'Vídeo: pneus na loja' },
  { id: 'rodas', type: 'image', src: g('rodas-de-liga.webp'), thumb: g('rodas-de-liga-sm.webp'), width: 576, height: 1024, alt: 'Rodas de liga leve com pneus montados', caption: 'Rodas de liga' },
  { id: 'estoque', type: 'image', src: g('estoque-pneus.webp'), thumb: g('estoque-pneus-sm.webp'), width: 720, height: 1280, alt: 'Pilha de pneus novos com etiqueta na loja', caption: 'Pneus novos' },
  { id: 'area', type: 'image', src: g('area-de-servico.webp'), thumb: g('area-de-servico-sm.webp'), width: 720, height: 900, alt: 'Área de serviço coberta com veículos e prateleiras de pneus', caption: 'Área de serviço' },
  { id: 'moto', type: 'image', src: g('pneus-de-moto.webp'), thumb: g('pneus-de-moto-sm.webp'), width: 720, height: 1280, alt: 'Pneus de moto novos em estoque', caption: 'Pneus de moto' },
  { id: 'oficina', type: 'image', src: g('oficina-interna.webp'), thumb: g('oficina-interna-sm.webp'), width: 640, height: 1136, alt: 'Interior da oficina com veículos em atendimento', caption: 'Oficina' },
  { id: 'roda-honda', type: 'image', src: g('roda-honda.webp'), thumb: g('roda-honda-sm.webp'), width: 576, height: 1024, alt: 'Roda de liga diamantada com pneu', caption: 'Rodas' },
  { id: 'roda-aro', type: 'image', src: g('roda-aro.webp'), thumb: g('roda-aro-sm.webp'), width: 576, height: 1024, alt: 'Roda de liga grafite sobre pneus', caption: 'Rodas' },
];

export type Review = { author: string; text: string; when: string };

/**
 * Avaliações públicas do perfil no Google (consultadas em 04/10/2026).
 * Textos reproduzidos sem alterar palavras; apenas espaçamento e emojis foram ajustados.
 * Deixe a lista vazia para ocultar a seção.
 */
export const reviews = {
  source: 'Google',
  rating: '4,7',
  count: 34,
  checkedAt: 'outubro de 2026',
  items: [
    { author: 'Karolaine V.', when: 'Google', text: 'Passando pra agradecer pelo atendimento excelente e resultado perfeito. Muito obrigada por tudo! Vcs são demais, super recomendo.' },
    { author: 'Alexsandra K.', when: 'Google', text: 'Ótimo trabalho, bom atendimento e agilidade. As rodas perfeitas, adorei. Vcs estão de parabéns.' },
    { author: 'Adenilson S.', when: 'Google', text: "D'Paula presta serviço de qualidade. Oficina atende pessoas física ou empresas, seguradoras etc. Fiz o parachoque do meu Toyota Corolla com eles, serviço nota 10." },
  ] as Review[],
};

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'trabalho', label: 'Nosso trabalho' },
  { id: 'localizacao', label: 'Localização' },
];
