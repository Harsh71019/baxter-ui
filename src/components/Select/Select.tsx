import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  required?: boolean;
  onChange?: (value: string) => void;
  error?: string;
  placeholder: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  required,
  onChange,
  error,
  placeholder = 'Select',
  className,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className="bx-flex bx-flex-col bx-gap-1">
      {label && (
        <label className="bx-flex bx-gap-1 bx-text-xs bx-font-arial bx-text-gray-700">
          {required && <span className="bx-text-red-500">*</span>}
          {label}
        </label>
      )}
      <select
        className={`
          bx-h-[18px] bx-px-5 bx-py-0 
          bx-text-xs bx-font-arial bx-text-gray-700
          bx-border bx-border-gray-300 bx-rounded
          bx-bg-white bx-cursor-pointer
          bx-appearance-none
          hover:bx-border-[#627782]
          focus:bx-outline-none focus:bx-border-[#627782]
          ${error ? 'bx-border-red-500' : ''}
          ${className || ''}
        `}
        onChange={handleChange}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="bx-text-xs bx-text-red-500 bx-font-arial">{error}</span>}
    </div>
  );
};
