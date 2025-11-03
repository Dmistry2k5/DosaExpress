import React from 'react';

const Logo = ({ className = "h-16" }) => {
  return (
    <svg
      viewBox="0 0 200 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dosa shape - elegant curved design */}
      <path
        d="M 30 40 Q 50 25, 70 40 Q 80 50, 70 60 Q 50 75, 30 60 Q 20 50, 30 40"
        fill="#dc2626"
        opacity="0.9"
      />
      <path
        d="M 35 40 Q 50 30, 65 40 Q 72 48, 65 56 Q 50 70, 35 56 Q 28 48, 35 40"
        fill="#f59e0b"
        opacity="0.8"
      />
      
      {/* Text */}
      <text
        x="85"
        y="45"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="#1f2937"
      >
        Dosa
      </text>
      <text
        x="85"
        y="65"
        fontFamily="Inter, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#dc2626"
      >
        Express
      </text>
      
      {/* Accent line */}
      <line
        x1="85"
        y1="50"
        x2="190"
        y2="50"
        stroke="#f59e0b"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
};

export default Logo;
