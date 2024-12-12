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
      bg-button-primary-bg
      text-button-primary-text
      hover:bg-button-primary-hoverBg
      hover:border-button-primary-hoverBorder
    `,
    secondary: `
      bg-button-secondary-bg
      text-button-secondary-text
      hover:bg-button-secondary-hoverBg
      hover:border-button-secondary-hoverBorder
    `,
  };

  return (
    <button
      className={`cursor-pointer w-auto border border-button-${variant}-border text-btn font-arial h-18 min-w-70 px-[15px] py-0 text-center overflow-visible box-content ${variantStyles[variant]} ${className || ''} `}
      {...props}
    >
      {children}
    </button>
  );
};
