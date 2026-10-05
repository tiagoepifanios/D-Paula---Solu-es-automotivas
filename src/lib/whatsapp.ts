import { business, defaultMessage } from '../data/site';

/** Link do WhatsApp com DDI e mensagem codificada. */
export function whatsappLink(message: string = defaultMessage): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(quote: string): string {
  return `Olá! Vim pelo site da D'Paula e gostaria de solicitar um orçamento para ${quote}.`;
}
