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
      bx-bg-button-primary-bg
      bx-text-button-primary-text
      hover:bx-bg-button-primary-hoverBg
      hover:bx-border-button-primary-hoverBorder
    `,
    secondary: `
      bx-bg-button-secondary-bg
      bx-text-button-secondary-text
      hover:bx-bg-button-secondary-hoverBg
      hover:bx-border-button-secondary-hoverBorder
    `,
  };

  return (
    <button
      className={`
        bx-cursor-pointer 
        bx-w-auto 
        bx-border
        bx-border-button-${variant}-border
        bx-text-btn
        bx-font-arial
        bx-h-18
        bx-min-w-70
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
