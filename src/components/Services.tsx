import { business, otherServices, services } from '../data/site';
import { useReveal } from '../lib/hooks';
import { serviceMessage, whatsappLink } from '../lib/whatsapp';
import { ArrowIcon, ServiceIcon } from './Icons';

export function Services() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="servicos" className="section services" aria-labelledby="servicos-title" ref={ref}>
      <div className="container">
        <div className="section-head services-head reveal">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 id="servicos-title" className="section-title">
              O que fazemos pelo seu veículo
            </h2>
          </div>
          <p className="section-lead">
            Escolha o serviço e fale direto com a equipe pelo WhatsApp. {business.insurers}.
          </p>
        </div>

        <ul className="service-list" role="list">
          {services.map((s) => (
            <li key={s.id} className="service reveal">
              <span className="service-icon">
                <ServiceIcon name={s.icon} />
              </span>
              <div className="service-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
              </div>
              <a
                className="service-cta"
                href={whatsappLink(serviceMessage(s.quote))}
                target="_blank"
                rel="noopener"
                aria-label={`Consultar ${s.title} pelo WhatsApp`}
              >
                <span>Consultar</span>
                <ArrowIcon width={18} height={18} />
              </a>
            </li>
          ))}
        </ul>

        <p className="services-more reveal">
          <span className="services-more-label">Também fazemos</span>
          {otherServices.map((o) => (
            <span key={o} className="chip">
              {o}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
