// Button.tsx
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const variantStyles = {
    primary: `
      bx-bg-[#f4f4f4] 
      bx-text-[#333]
      hover:bx-bg-[#b9ced9]
      hover:bx-border-[#627782]
    `,
    secondary: `
      bx-bg-[#9e9e9e]
      bx-text-white
      hover:bx-bg-[#8e8e8e]
      hover:bx-border-[#627782]
    `,
  };

  return (
    <button
      className={`
        bx-cursor-pointer 
        bx-w-auto 
        bx-border 
        bx-border-[#c5c5c5] 
        bx-text-xs 
        bx-font-arial 
        bx-h-[18px] 
        bx-min-w-[70px] 
        bx-px-[15px] 
        bx-py-0 
        bx-text-center 
        bx-overflow-visible 
        bx-box-content
        ${variantStyles[variant]}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
