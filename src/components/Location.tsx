import { business } from '../data/site';
import { useNearViewport, useReveal } from '../lib/hooks';
import { whatsappLink } from '../lib/whatsapp';
import { ClockIcon, PhoneIcon, PinIcon, RouteIcon, WhatsAppIcon } from './Icons';

/** Na prévia hospedada (sem acesso a sites externos) o mapa incorporado é substituído pelo link. */
const embedMap = import.meta.env.VITE_PREVIEW !== '1';

export function Location() {
  const ref = useReveal<HTMLElement>();
  const [mapRef, nearMap] = useNearViewport<HTMLDivElement>('300px');
  const a = business.address;

  return (
    <section id="localizacao" className="section location" aria-labelledby="localizacao-title" ref={ref}>
      <div className="container location-grid">
        <div className="location-info reveal">
          <p className="eyebrow">Localização e contato</p>
          <h2 id="localizacao-title" className="section-title">
            Venha até a loja
          </h2>

          <ul className="contact-list" role="list">
            <li>
              <PinIcon />
              <div>
                <h3>Endereço</h3>
                <address>
                  {a.street} - {a.district}
                  <br />
                  {a.city} - {a.state}, {a.postalCode}
                </address>
              </div>
            </li>
            <li>
              <ClockIcon />
              <div>
                <h3>Horários</h3>
                <dl className="hours">
                  {business.hours.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
            <li>
              <PhoneIcon />
              <div>
                <h3>Telefone e WhatsApp</h3>
                <p>
                  <a href={`tel:${business.phoneHref}`} className="plain-link">
                    {business.phoneDisplay}
                  </a>
                </p>
              </div>
            </li>
          </ul>

          <div className="location-actions">
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener">
              <WhatsAppIcon width={20} height={20} />
              Chamar no WhatsApp
            </a>
            <a className="btn btn-outline" href={business.directionsUrl} target="_blank" rel="noopener">
              <RouteIcon width={18} height={18} />
              Como chegar
            </a>
          </div>
        </div>

        <div className="map reveal" ref={mapRef} data-float-avoid>
          {nearMap && embedMap ? (
            <iframe
              title={`Mapa: ${business.name}, ${a.street}, ${a.city}`}
              src={business.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : null}
          <a className="map-fallback" href={business.googleMapsUrl} target="_blank" rel="noopener">
            <PinIcon width={28} height={28} />
            <span>Abrir no Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
