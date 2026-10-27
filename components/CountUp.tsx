import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Il valore da mostrare, ad esempio "8+", "20k+", "100%" */
  value: string;
  duration?: number;
}

// Fa salire il numero da zero al valore finale quando entra nello schermo.
// Il testo finale resta sempre identico a quello scritto in `value`.
const CountUp: React.FC<CountUpProps> = ({ value, duration = 1400 }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const ref = useRef<HTMLSpanElement>(null);
  const animate =
    !!match &&
    'IntersectionObserver' in window &&
    !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [current, setCurrent] = useState(animate ? 0 : target);

  useEffect(() => {
    const node = ref.current;
    if (!animate || !node) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  if (!match) return <span>{value}</span>;
  return <span ref={ref}>{current}{suffix}</span>;
};

export default CountUp;
