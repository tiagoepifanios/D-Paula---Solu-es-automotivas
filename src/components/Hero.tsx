import { useEffect, useRef, useState } from 'react';
import { business } from '../data/site';
import { usePrefersReducedMotion } from '../lib/hooks';
import { whatsappLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './Icons';

/**
 * Escolhe UMA resolução por acesso (evita download duplicado).
 * Celulares e conexões em modo econômico recebem 720p; telas maiores, 1080p.
 */
function pickVideoBase(): string {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  const large = window.innerWidth >= 768 && window.innerWidth * Math.min(window.devicePixelRatio || 1, 2) > 1300;
  return large && !saveData ? 'media/hero/hero-1080' : 'media/hero/hero-720';
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [base] = useState(pickVideoBase);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced) return;
    v.muted = true; // garante autoplay em navegadores que exigem a propriedade
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => setBlocked(true));
    };
    const onPlaying = () => {
      setPlaying(true);
      setBlocked(false);
    };
    // Rede de segurança: se o navegador ignorar o atributo loop, reinicia sem pausa.
    const onEnded = () => {
      v.currentTime = 0;
      tryPlay();
    };
    v.addEventListener('playing', onPlaying);
    v.addEventListener('ended', onEnded);
    tryPlay();

    // Pausa fora da tela para poupar bateria; retoma ao voltar.
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) tryPlay();
      else v.pause();
    });
    io.observe(v);
    return () => {
      v.removeEventListener('playing', onPlaying);
      v.removeEventListener('ended', onEnded);
      io.disconnect();
    };
  }, [reduced]);

  const showStill = reduced || blocked;

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source media="(max-width: 760px)" srcSet="media/hero/hero-poster-960.webp" type="image/webp" />
          <source srcSet="media/hero/hero-poster.webp" type="image/webp" />
          <img className="hero-poster" src="media/hero/hero-poster.jpg" alt="" width={1920} height={1080} fetchPriority="high" decoding="async" />
        </picture>
        {!reduced && (
          <video
            ref={videoRef}
            className={`hero-video${playing && !blocked ? ' is-playing' : ''}`}
            poster="media/hero/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
          >
            {/* O navegador baixa apenas o primeiro formato compatível. */}
            <source src={`${base}.mp4`} type="video/mp4" />
            <source src={`${base}.webm`} type="video/webm" />
          </video>
        )}
        {showStill && (
          <picture>
            <source media="(max-width: 760px)" srcSet="media/hero/hero-still-960.webp" type="image/webp" />
            <source srcSet="media/hero/hero-still.webp" type="image/webp" />
            <img className="hero-still" src="media/hero/hero-still.jpg" alt="" width={1920} height={1080} decoding="async" />
          </picture>
        )}
        <div className="hero-shade" />
      </div>

      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          {business.address.city} · {business.address.state}
        </p>
        <h1 id="hero-title" className="hero-title">
          Seu carro merece atenção <span className="nowrap">em cada detalhe.</span>
        </h1>
        <p className="hero-text">
          Conheça as soluções da D’Paula e fale com nossa equipe sobre o cuidado que seu veículo precisa.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener">
            <WhatsAppIcon width={20} height={20} />
            Solicitar orçamento
          </a>
          <a className="btn btn-outline" href="#servicos">
            Conhecer serviços
          </a>
        </div>
      </div>

      <a className="scroll-cue" href="#sobre" aria-label="Rolar para a próxima seção">
        <span className="scroll-cue-track" aria-hidden="true">
          <span className="scroll-cue-dot" />
        </span>
      </a>
    </section>
  );
}
