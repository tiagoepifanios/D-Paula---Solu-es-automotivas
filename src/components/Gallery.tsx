import { useCallback, useEffect, useRef, useState } from 'react';
import { business, gallery } from '../data/site';
import { useReveal } from '../lib/hooks';
import { ChevronIcon, InstagramIcon, PlayIcon } from './Icons';
import { Lightbox } from './Lightbox';

export function Gallery() {
  const ref = useReveal<HTMLElement>();
  const trackRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [progress, setProgress] = useState(0);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const update = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    setEdge({ start: t.scrollLeft < 8, end: t.scrollLeft > max - 8 });
    setProgress(max > 0 ? t.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    update();
    t.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      t.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const item = t.querySelector('li');
    const step = item ? (item as HTMLElement).offsetWidth + 16 : t.clientWidth * 0.8;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    t.scrollBy({ left: dir * step * (window.innerWidth > 900 ? 2 : 1), behavior: reduced ? 'auto' : 'smooth' });
  };

  const close = () => {
    setOpen(null);
    lastTrigger.current?.focus();
  };

  return (
    <section id="trabalho" className="section work" aria-labelledby="trabalho-title" ref={ref}>
      <div className="container">
        <div className="section-head work-head reveal">
          <div>
            <p className="eyebrow">Nosso trabalho</p>
            <h2 id="trabalho-title" className="section-title">
              Por dentro da oficina
            </h2>
          </div>
          <div className="work-controls">
            <span className="work-count" aria-hidden="true">
              {gallery.length} itens
            </span>
            <button type="button" className="icon-btn" onClick={() => scrollBy(-1)} disabled={edge.start} aria-label="Ver itens anteriores">
              <ChevronIcon dir="left" />
            </button>
            <button type="button" className="icon-btn" onClick={() => scrollBy(1)} disabled={edge.end} aria-label="Ver mais itens">
              <ChevronIcon />
            </button>
          </div>
        </div>
      </div>

      <div className={`work-rail${edge.end ? ' at-end' : ''}${edge.start ? ' at-start' : ''}`}>
        <ul className="work-track" ref={trackRef} role="list" aria-label="Galeria de fotos e vídeos">
          {gallery.map((item, i) => (
            <li key={item.id} className="work-item">
              <button
                type="button"
                className="work-card"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setOpen(i);
                }}
                aria-label={`${item.type === 'video' ? 'Assistir' : 'Ampliar'}: ${item.alt}`}
              >
                <img src={item.thumb} alt="" width={400} height={Math.round((400 * item.height) / item.width)} loading="lazy" decoding="async" />
                {item.type === 'video' && (
                  <span className="work-play" aria-hidden="true">
                    <PlayIcon width={22} height={22} />
                  </span>
                )}
                <span className="work-caption">{item.caption}</span>
              </button>
            </li>
          ))}
          <li className="work-item work-item-more">
            <a className="work-more" href={business.instagram.url} target="_blank" rel="noopener">
              <InstagramIcon width={28} height={28} />
              <span>Mais fotos e vídeos no Instagram</span>
              <strong>{business.instagram.handle}</strong>
            </a>
          </li>
        </ul>
        <div className="work-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.08, progress)})` }} />
        </div>
      </div>

      {open !== null && <Lightbox items={gallery} index={open} onIndex={setOpen} onClose={close} />}
    </section>
  );
}
