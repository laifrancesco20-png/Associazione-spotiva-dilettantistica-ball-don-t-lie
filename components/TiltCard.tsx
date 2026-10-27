import React, { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Pulsante-card che si inclina leggermente seguendo il mouse (solo con il mouse, non al tocco)
const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const node = ref.current;
    if (!node || event.pointerType !== 'mouse') return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    node.style.setProperty('--ry', `${(x - 0.5) * 8}deg`);
    node.style.setProperty('--rx', `${(0.5 - y) * 8}deg`);
    node.style.setProperty('--mx', `${x * 100}%`);
    node.style.setProperty('--my', `${y * 100}%`);
    node.classList.add('is-tilting');
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--rx', '0deg');
    node.style.setProperty('--ry', '0deg');
    node.classList.remove('is-tilting');
  };

  return (
    <button ref={ref} onClick={onClick} onPointerMove={handleMove} onPointerLeave={handleLeave} className={`tilt ${className}`}>
      {children}
      <span className="tilt-light pointer-events-none absolute inset-0"></span>
    </button>
  );
};

export default TiltCard;
