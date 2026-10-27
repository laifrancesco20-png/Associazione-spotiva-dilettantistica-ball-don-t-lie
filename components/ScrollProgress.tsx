import React, { useEffect, useRef } from 'react';

// Sottile barra arancione in cima alla pagina che si riempie mentre si scorre
const ScrollProgress: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      ref.current?.style.setProperty('--progress', String(progress));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-progress fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] pointer-events-none"
    ></div>
  );
};

export default ScrollProgress;
