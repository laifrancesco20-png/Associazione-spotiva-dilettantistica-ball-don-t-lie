import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  // Lo sfondo bianco è solo il predefinito: se la card ne riceve uno, vince quello
  const background = /(^|\s)bg-/.test(className) ? '' : 'bg-white';
  return (
    <div className={`${background} rounded-2xl shadow-lg p-6 ${hoverEffect ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;