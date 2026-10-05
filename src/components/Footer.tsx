import { business, nav } from '../data/site';
import { whatsappLink } from '../lib/whatsapp';
import { InstagramIcon, WhatsAppIcon } from './Icons';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" data-float-avoid>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="media/marca/logo-dpaula.webp" alt={business.name} width={575} height={222} loading="lazy" />
          <p>
            {business.address.street} - {business.address.district}, {business.address.city} - {business.address.state}
          </p>
        </div>
        <nav className="footer-nav" aria-label="Rodapé">
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-contact">
          <a href={whatsappLink()} target="_blank" rel="noopener">
            <WhatsAppIcon width={18} height={18} />
            {business.phoneDisplay}
          </a>
          <a href={business.instagram.url} target="_blank" rel="noopener">
            <InstagramIcon width={18} height={18} />
            {business.instagram.handle}
          </a>
        </div>
      </div>
      <div className="container footer-legal">
        <p>
          © {year} {business.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
