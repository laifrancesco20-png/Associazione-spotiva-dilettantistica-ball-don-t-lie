import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  // Lo sfondo bianco è solo il predefinito: se la card ne riceve uno, vince quello
  const background = /(^|\s)bg-/.test(className) ? '' : 'bg-white/[0.04]';
  return (
    <div
      className={`${background} rounded-2xl p-7 md:p-8 border border-white/10 shadow-[0_10px_30px_-10px_rgba(26,32,44,0.08),0_4px_6px_-2px_rgba(26,32,44,0.03)] ${
        hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-15px_rgba(26,32,44,0.18)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
