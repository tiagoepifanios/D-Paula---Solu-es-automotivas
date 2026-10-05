import { useEffect, useRef } from 'react';
import type { GalleryItem } from '../data/site';
import { ChevronIcon, CloseIcon } from './Icons';

type Props = {
  items: GalleryItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
};

export function Lightbox({ items, index, onIndex, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const item = items[index];
  const go = (d: number) => onIndex((index + d + items.length) % items.length);

  useEffect(() => {
    closeRef.current?.focus();
    document.documentElement.classList.add('lightbox-open');
    return () => document.documentElement.classList.remove('lightbox-open');
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab') {
        // mantém o foco dentro do diálogo
        const f = dialogRef.current?.querySelectorAll<HTMLElement>('button, video, a[href]');
        if (!f || !f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria: ${item.caption} (${index + 1} de ${items.length})`}
      ref={dialogRef}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
      onTouchEnd={(e) => {
        if (!touch.current) return;
        const dx = e.changedTouches[0].clientX - touch.current.x;
        const dy = e.changedTouches[0].clientY - touch.current.y;
        touch.current = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) go(dx < 0 ? 1 : -1);
        else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.5) onClose();
      }}
    >
      <div className="lightbox-bar">
        <span className="lightbox-count" aria-live="polite">
          {index + 1} / {items.length}
        </span>
        <button type="button" className="icon-btn lightbox-close" onClick={onClose} ref={closeRef} aria-label="Fechar galeria">
          <CloseIcon />
        </button>
      </div>

      <figure className="lightbox-stage" key={item.id}>
        {item.type === 'video' ? (
          <video
            className="lightbox-media"
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            width={item.width}
            height={item.height}
          >
            <source src={item.src} type="video/mp4" />
            {item.srcWebm && <source src={item.srcWebm} type="video/webm" />}
          </video>
        ) : (
          <img className="lightbox-media" src={item.src} alt={item.alt} width={item.width} height={item.height} decoding="async" />
        )}
        <figcaption>{item.caption}</figcaption>
      </figure>

      <button type="button" className="icon-btn lightbox-nav prev" onClick={() => go(-1)} aria-label="Item anterior">
        <ChevronIcon dir="left" />
      </button>
      <button type="button" className="icon-btn lightbox-nav next" onClick={() => go(1)} aria-label="Próximo item">
        <ChevronIcon />
      </button>
    </div>
  );
}
