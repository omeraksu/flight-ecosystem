import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  required = false,
  id,
  className = "",
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId} className="block text-sm font-bold text-gray-700">
        {label}
        {required && <span className="text-[#D4183D] ml-1">*</span>}
      </Label>
      <Input
        id={inputId}
        className={`w-full h-12 px-4 rounded-xl border border-[#E5E7EB] bg-white text-sm 
          focus:ring-2 focus:ring-[#FF4500]/20 focus:border-[#FF4500] outline-none transition-all 
          placeholder:text-gray-400 disabled:bg-[#F3F4F6] disabled:text-gray-500 disabled:cursor-not-allowed
          ${error ? "border-[#D4183D] focus:ring-[#D4183D]/20 focus:border-[#D4183D]" : ""}
          ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-[#D4183D] font-medium">{error}</p>}
    </div>
  );
};
