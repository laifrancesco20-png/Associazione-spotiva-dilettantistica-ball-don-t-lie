import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'light';
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
  const baseStyles = "px-7 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-2";

  let variantStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "bg-[#FF6B35] text-white hover:bg-[#FA5A1E] shadow-[0_10px_30px_-5px_rgba(255,107,53,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(255,107,53,0.55)]";
      break;
    case 'secondary':
      variantStyles = "bg-[#4A90E2] text-white hover:bg-[#357abd] shadow-[0_10px_30px_-5px_rgba(74,144,226,0.45)]";
      break;
    case 'outline':
      variantStyles = "bg-transparent border-2 border-white text-white hover:bg-white/20";
      break;
    case 'light':
      variantStyles = "bg-white text-[#1A202C] border border-slate-200 hover:border-[#FF6B35] hover:text-[#FF6B35] shadow-[0_10px_25px_-10px_rgba(26,32,44,0.2)]";
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
