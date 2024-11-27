// Select.tsx
import React from 'react';
import styles from './Select.module.scss';

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
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {required && <span className={styles.required}>*</span>}
          {label}
        </label>
      )}
      <select
        className={`${styles.select} ${error ? styles.error : ''} ${className || ''}`}
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
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
