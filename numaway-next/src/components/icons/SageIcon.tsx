import React from "react";

interface SageIconProps {
  className?: string;
  size?: number;
}

const SageIcon: React.FC<SageIconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer glow ring */}
    <circle
      cx="24"
      cy="24"
      r="20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.3"
    />
    
    {/* Inner wisdom circle */}
    <circle
      cx="24"
      cy="24"
      r="14"
      stroke="currentColor"
      strokeWidth="2"
      strokeOpacity="0.6"
    />
    
    {/* Stylized 'S' for Sage - representing a wise scroll/path */}
    <path
      d="M30 16C30 16 28 14 24 14C20 14 17 16.5 17 19.5C17 22.5 20 24 24 24C28 24 31 25.5 31 28.5C31 31.5 28 34 24 34C20 34 18 32 18 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Top wisdom dot */}
    <circle cx="24" cy="10" r="2" fill="currentColor" />
    
    {/* Bottom wisdom dot */}
    <circle cx="24" cy="38" r="2" fill="currentColor" />
    
    {/* Left accent */}
    <circle cx="10" cy="24" r="1.5" fill="currentColor" fillOpacity="0.6" />
    
    {/* Right accent */}
    <circle cx="38" cy="24" r="1.5" fill="currentColor" fillOpacity="0.6" />
  </svg>
);

export default SageIcon;
