import { useEffect, useState } from 'react';
import { business, nav } from '../data/site';
import { whatsappLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './Icons';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? ' is-solid' : ''}${open ? ' is-open' : ''}`}>
      <div className="header-inner">
        <a href="#inicio" className="brand" aria-label={`${business.name} — início`} onClick={() => setOpen(false)}>
          <img src="media/marca/logo-dpaula.webp" alt={business.name} width={575} height={222} />
        </a>

        <nav className="nav-desktop" aria-label="Seções do site">
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn-sm btn-ghost header-cta" href={whatsappLink()} target="_blank" rel="noopener">
          <WhatsAppIcon width={18} height={18} />
          <span>Orçamento</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-bars" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div id="menu-mobile" className="nav-mobile" hidden={!open}>
        <nav aria-label="Menu">
          <ul>
            {nav.map((n, i) => (
              <li key={n.id} style={{ ['--i' as string]: i }}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-primary btn-block" href={whatsappLink()} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
          <WhatsAppIcon width={20} height={20} />
          Solicitar orçamento
        </a>
        <p className="nav-mobile-meta">
          {business.address.street} · {business.address.city} - {business.address.state}
        </p>
      </div>
    </header>
  );
}
