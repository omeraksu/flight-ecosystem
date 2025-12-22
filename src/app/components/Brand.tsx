import React from "react";
import logoSvg from "../../assets/logo.svg";

export function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  return (
    <img 
      src={logoSvg} 
      alt="Flight Ecosystem Logo" 
      className={`h-12 ${className}`}
      style={{ 
        filter: light ? 'none' : 'invert(1) brightness(2)'
      }}
    />
  );
}

export const COLORS = {
  primary: "#ED723D", // Orange
  secondary: "#330C00", // Dark Brown
  success: "#00FFCD", // Teal
  error: "#E72A19", // Red
  yellow: "#FFEE8F",
  pink: "#FBB1FF"
};
