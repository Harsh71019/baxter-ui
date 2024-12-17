import React, { useState, useMemo } from 'react';

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
  disabled = false,
  ...props
}) => {
  const [localError, setLocalError] = useState<string | undefined>(error);

  const regexExp = useMemo(() => {
    return typeof regex === 'string' ? new RegExp(regex) : regex;
  }, [regex]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (regexExp && !regexExp.test(value)) {
      setLocalError('Invalid input');
    } else {
      setLocalError(undefined);
    }

    onChange?.(value);
  };

  return (
    <div
      className={`flex ${
        labelPosition === 'left' ? 'flex-row gap-2' : 'flex-col gap-1'
      }`}
    >
      {label && (
        <label className={`font-bold flex gap-1 text-xs font-arial text-black`}>
          {required && <span className="font-bold">*</span>}
          {label}
        </label>
      )}
      <input
        className={`
          w-[240px] h-[22px] px-2 text-xs font-arial text-black
          border border-border-50 bg-white cursor-pointer
          focus:outline-none focus:border-border-100 focus:rounded focus:border-2
          focus:bg-yellow-50
          ${disabled ? 'bg-border-50 cursor-not-allowed' : ''}
          ${localError ? 'border-red-500' : ''}
          ${className || ''}
        `}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      {(localError || error) && (
        <span className="text-xs text-red-500 font-arial">
          {localError || error}
        </span>
      )}
    </div>
  );
};
