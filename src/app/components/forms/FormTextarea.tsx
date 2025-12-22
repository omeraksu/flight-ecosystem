import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
  showCharCount?: boolean;
  helperText?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  error,
  required = false,
  showCharCount = false,
  helperText,
  id,
  className = "",
  maxLength,
  value,
  ...props
}) => {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
  const currentLength = typeof value === "string" ? value.length : 0;

  return (
    <div className="space-y-2">
      <Label htmlFor={textareaId} className="block text-sm font-bold text-gray-700">
        {label}
        {required && <span className="text-[#D4183D] ml-1">*</span>}
      </Label>
      <Textarea
        id={textareaId}
        className={`w-full p-4 rounded-xl border border-[#E5E7EB] bg-white text-sm 
          focus:ring-2 focus:ring-[#FF4500]/20 focus:border-[#FF4500] outline-none transition-all 
          placeholder:text-gray-400 resize-none
          disabled:bg-[#F3F4F6] disabled:text-gray-500 disabled:cursor-not-allowed
          ${error ? "border-[#D4183D] focus:ring-[#D4183D]/20 focus:border-[#D4183D]" : ""}
          ${className}`}
        maxLength={maxLength}
        value={value}
        {...props}
      />
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {helperText && !error && (
            <p className="text-xs text-gray-400">{helperText}</p>
          )}
          {error && <p className="text-xs text-[#D4183D] font-medium">{error}</p>}
        </div>
        {showCharCount && maxLength && (
          <p className="text-xs text-gray-400">
            {currentLength}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
};
