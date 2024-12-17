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
      text-button-primary-text
      hover:bg-button-primary-hoverBg
      hover:border-button-primary-hoverBorder
    `,
    secondary: `
      text-button-secondary-text
      hover:bg-button-secondary-hoverBg
      hover:border-button-secondary-hoverBorder
    `,
  };

  return (
    <button
      style={{
        background: `url("https://dev-923.sharesource.com/NH-CoreDeviceManagement-Portlet/css/images/header_bg.png") repeat-x scroll 0 0 #d4d4d4`,
      }}
      className={`text-shadow min-h-5 font-arial font-bold cursor-pointer border-solid border-button-primary-border border-[1px] border-button-${variant}-border rounded-[3px] text-btn font-arial h-18 min-w-24 px-[15px] py-0 text-center overflow-visible box-content ${variantStyles[variant]} ${className || ''} `}
      {...props}
    >
      {children}
    </button>
  );
};
