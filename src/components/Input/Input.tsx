import React, { useState } from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  labelPosition?: 'top' | 'left';
  required?: boolean;
  regex?: string | RegExp;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  labelPosition = 'top',
  required,
  regex,
  onChange,
  error,
  className,
  ...props
}) => {
  const [localError, setLocalError] = useState<string | undefined>(error);

  const actualRegex = typeof regex === 'string' ? new RegExp(regex) : regex;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (actualRegex && !actualRegex.test(value)) {
      setLocalError('Invalid input');
    } else {
      setLocalError(undefined);
    }

    onChange?.(value);
  };


  return (
    <div
      className={`bx-flex ${
        labelPosition === 'left' ? 'bx-flex-row bx-gap-2' : 'bx-flex-col bx-gap-1'
      }`}
    >
      {label && (
        <label className="bx-text-xs bx-font-arial bx-text-gray-700">
          {required && <span className="bx-text-red-500">*</span>}
          {label}
        </label>
      )}
      <input
        className={`
          bx-h-[18px] bx-px-2 bx-text-xs bx-font-arial bx-text-gray-700
          bx-border bx-border-gray-300 bx-rounded
          bx-bg-white bx-appearance-none
          hover:bx-border-[#627782]
          focus:bx-outline-none focus:bx-border-[#627782]
          ${localError ? 'bx-border-red-500' : ''}
          ${className || ''}
        `}
        onChange={handleChange}
        {...props}
      />
      {(localError || error) && (
        <span className="bx-text-xs bx-text-red-500 bx-font-arial">
          {localError || error}
        </span>
      )}
    </div>
  );
};
