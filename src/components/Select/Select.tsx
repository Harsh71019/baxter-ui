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
    <div className="flex flex-col gap-1">
      {label && (
        <label className="flex gap-1 text-xs font-arial text-gray-700">
          {required && <span className="text-red-500">*</span>}
          {label}
        </label>
      )}
      <select
        className={`
          h-[18px] px-5 py-0 
          text-xs font-arial text-gray-700
          border border-gray-300 rounded
          bg-white cursor-pointer
          appearance-none
          hover:border-[#627782]
          focus:outline-none focus:border-[#627782]
          ${error ? 'border-red-500' : ''}
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
      {error && <span className="text-xs text-red-500 font-arial">{error}</span>}
    </div>
  );
};
