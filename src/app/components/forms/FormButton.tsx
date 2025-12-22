import React from "react";
import { Button } from "../ui/button";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `bg-[#FF4500] hover:bg-[#D84315] text-white font-bold shadow-lg 
    shadow-[#FF4500]/30 transition-all transform hover:scale-105 active:scale-95`,
  secondary: `bg-white hover:bg-gray-50 text-[#FF4500] font-bold border-2 
    border-[#FF4500] transition-all transform hover:scale-105 active:scale-95`,
  ghost: `bg-transparent hover:bg-gray-100 text-gray-700 font-bold transition-all`,
};

export const FormButton: React.FC<FormButtonProps> = ({
  variant = "primary",
  loading = false,
  fullWidth = false,
  children,
  disabled,
  className = "",
  ...props
}) => {
  return (
    <Button
      className={`px-12 py-3 rounded-xl text-sm
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </Button>
  );
};
