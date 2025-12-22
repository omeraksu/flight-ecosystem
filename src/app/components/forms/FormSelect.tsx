import React from "react";
import { Label } from "../ui/label";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  required?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  options,
  error,
  required = false,
  id,
  className = "",
  ...props
}) => {
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <Label htmlFor={selectId} className="block text-sm font-bold text-gray-700">
        {label}
        {required && <span className="text-[#D4183D] ml-1">*</span>}
      </Label>
      <select
        id={selectId}
        className={`w-full h-12 px-4 rounded-xl border border-[#E5E7EB] bg-white text-sm 
          focus:ring-2 focus:ring-[#FF4500]/20 focus:border-[#FF4500] outline-none transition-all 
          appearance-none cursor-pointer
          disabled:bg-[#F3F4F6] disabled:text-gray-500 disabled:cursor-not-allowed
          ${error ? "border-[#D4183D] focus:ring-[#D4183D]/20 focus:border-[#D4183D]" : ""}
          ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-[#D4183D] font-medium">{error}</p>}
    </div>
  );
};
