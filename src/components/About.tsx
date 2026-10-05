import { business } from '../data/site';
import { useReveal } from '../lib/hooks';

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="sobre" className="section about" aria-labelledby="sobre-title" ref={ref}>
      <div className="container about-grid">
        <figure className="about-photo reveal">
          <picture>
            <source media="(max-width: 700px)" srcSet="media/fotos/fachada-640.webp" />
            <img
              src="media/fotos/fachada.webp"
              alt="Fachada azul da D’Paula Soluções Automotivas com o letreiro e a área de pneus"
              width={1080}
              height={775}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <figcaption>
            {business.address.street} · {business.address.district}
          </figcaption>
        </figure>

        <div className="about-text reveal">
          <p className="eyebrow">Sobre a D’Paula</p>
          <h2 id="sobre-title" className="section-title">
            Pneus, rodas, funilaria e pintura no mesmo endereço.
          </h2>
          <p>
            A D’Paula Soluções Automotivas fica no Centro de São Lourenço da Serra e reúne borracharia, venda de pneus e
            rodas, alinhamento, balanceamento, funilaria, pintura e polimento.
          </p>
          <p>
            Trabalhamos com pneus para carros e motos, borracharia para veículos leves e pesados e atendemos clientes de
            todas as companhias de seguro. Conte para a nossa equipe o que está acontecendo com o seu veículo e peça seu
            orçamento.
          </p>
          <dl className="about-facts">
            <div>
              <dt>Seguradoras</dt>
              <dd>Todas as companhias</dd>
            </div>
            <div>
              <dt>Borracharia</dt>
              <dd>Leve e pesada</dd>
            </div>
            <div>
              <dt>Pneus</dt>
              <dd>Carro e moto</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
