import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface DateProps {
  label?: string;
  labelPosition?: 'top' | 'left';
  minDate?: Date;
  maxDate?: Date;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  error?: string;
  required?: boolean;
}

export const Date: React.FC<DateProps> = ({
  label,
  labelPosition = 'top',
  minDate,
  maxDate,
  onChange,
  disabled = false,
  className = '',
  error,
  required = false,
}) => {
  const [dateValue, setDateValue] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setDateValue(date);
    onChange?.(date ? date.toISOString() : '');
  };

  return (
    <div
      className={`flex ${labelPosition === 'left' ? 'flex-row gap-2 items-center' : 'flex-col gap-1'}`}
    >
      {label && (
        <label className="flex gap-1 font-arial text-xs font-bold text-black">
          {required && <span className="text-red-500">*</span>}
          {label}
        </label>
      )}
      <div>
        <DatePicker
          selected={dateValue}
          onChange={handleDateChange}
          dateFormat="dd MMMM yyyy"
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          popperClassName="custom-datepicker-popper"
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          popperPlacement="bottom-start"
          className={`h-[22px] w-[240px] cursor-pointer border border-border-50 bg-white font-arial text-xs text-black focus:rounded focus:border-2 focus:border-border-100 focus:bg-yellow-50 focus:outline-none ${
            disabled ? 'cursor-not-allowed bg-border-50' : ''
          } ${error ? 'border-red-500' : ''} ${className}`}
          dayClassName={() => 'border border-border-50'}
        />
        {error && <span className="font-arial text-xs text-red-500">{error}</span>}
      </div>
    </div>
  );
};

Date.displayName = 'Date';
