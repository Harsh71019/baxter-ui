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
        <label
          className={`flex gap-1 text-xs font-arial text-black ${required ? 'font-bold' : ''}`}
        >
          {required && <span className="font-bold text-red-black">*</span>}
          {label}
        </label>
      )}
      <select
        className={`w-[240px] h-[22px] p-[1px] m-[1px] text-xs font-arial text-black border border-[#c5c5c5] bg-white cursor-pointer focus:outline-none focus:border-[#000] focus:rounded focus:border-2 ${className || ''} `}
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
    </div>
  );
};
