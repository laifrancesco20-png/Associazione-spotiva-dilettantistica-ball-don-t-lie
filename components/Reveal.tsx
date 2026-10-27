import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Ritardo in millisecondi, utile per far comparire le card una dopo l'altra */
  delay?: number;
  /** Direzione da cui arriva l'elemento */
  from?: 'bottom' | 'left' | 'right' | 'zoom' | 'wipe';
  onClick?: () => void;
}

// Fa comparire il contenuto con una leggera animazione quando entra nello schermo
const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, from = 'bottom', onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const direction = from === 'bottom' ? '' : `reveal-${from}`;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`reveal ${direction} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default Reveal;
