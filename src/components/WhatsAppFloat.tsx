import { useEffect, useState } from 'react';
import { whatsappLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './Icons';

/**
 * Botão flutuante. Some quando um elemento marcado com [data-float-avoid]
 * (mapa e rodapé, que já têm botão de WhatsApp) passa pela faixa inferior da tela,
 * para não cobrir controles nem links.
 */
export function WhatsAppFloat() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll('[data-float-avoid]');
    if (!targets.length || !('IntersectionObserver' in window)) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setHidden(visible.size > 0);
      },
      { rootMargin: '-82% 0px 0px 0px' },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <a
      className={`wa-float${hidden ? ' is-hidden' : ''}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Conversar no WhatsApp"
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
    >
      <WhatsAppIcon width={30} height={30} />
    </a>
  );
}
