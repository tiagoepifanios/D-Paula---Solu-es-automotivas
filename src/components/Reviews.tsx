import { business, reviews } from '../data/site';
import { useReveal } from '../lib/hooks';
import { StarIcon } from './Icons';

/** Renderiza apenas se houver avaliações confirmadas em data/site.ts. */
export function Reviews() {
  const ref = useReveal<HTMLElement>();
  if (!reviews.items.length) return null;
  return (
    <section className="section reviews" aria-labelledby="avaliacoes-title" ref={ref}>
      <div className="container reviews-grid">
        <div className="reviews-score reveal">
          <p className="eyebrow">Avaliações no {reviews.source}</p>
          <h2 id="avaliacoes-title" className="visually-hidden">
            Avaliações de clientes
          </h2>
          <p className="score">
            <span className="score-num">{reviews.rating}</span>
            <span className="score-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
          </p>
          <p className="score-meta">
            {reviews.count} avaliações no perfil da empresa · consultado em {reviews.checkedAt}
          </p>
          <a className="link-arrow" href={business.googleMapsUrl} target="_blank" rel="noopener">
            Ver todas no Google
          </a>
        </div>
        <ul className="review-list" role="list">
          {reviews.items.map((r) => (
            <li key={r.author} className="review reveal">
              <blockquote>
                <p>“{r.text}”</p>
              </blockquote>
              <p className="review-author">{r.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
