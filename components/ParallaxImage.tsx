import React, { useEffect, useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string;
  /** Quanto si muove l'immagine rispetto allo scorrimento (0 = ferma) */
  speed?: number;
}

// Immagine di sfondo che scorre un po' più lenta della pagina, per dare profondità
const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt = '', className = '', speed = 0.25 }) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const node = ref.current;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!node || reduceMotion) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = Math.min(window.scrollY, window.innerHeight) * speed;
      node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`absolute inset-0 w-full h-full object-cover will-change-transform ${className}`}
      style={{ transform: 'scale(1.08)' }}
    />
  );
};

export default ParallaxImage;
