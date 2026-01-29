import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2";
  
  let variantStyles = "";
  
  switch (variant) {
    case 'primary':
      variantStyles = "bg-[#FF6B35] text-white hover:bg-[#e85a2a]";
      break;
    case 'secondary':
      variantStyles = "bg-[#4A90E2] text-white hover:bg-[#357abd]";
      break;
    case 'outline':
      variantStyles = "bg-transparent border-2 border-white text-white hover:bg-white/20";
      break;
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;