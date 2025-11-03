import React from 'react';

const Logo = ({ className = "h-16" }) => {
  return (
    <svg
      viewBox="0 0 240 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dosa illustration - triangular/rolled shape */}
      <g transform="translate(10, 20)">
        {/* Outer dosa */}
        <ellipse cx="35" cy="35" rx="32" ry="28" fill="#f59e0b" opacity="0.3"/>
        <path
          d="M 15 35 Q 35 20, 55 35 L 50 45 Q 35 55, 20 45 Z"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1.5"
        />
        {/* Inner filling visible */}
        <ellipse cx="35" cy="35" rx="15" ry="12" fill="#fbbf24" opacity="0.6"/>
        
        {/* Dosa roll/fold effect */}
        <path
          d="M 25 35 Q 35 30, 45 35 Q 35 40, 25 35"
          fill="#f59e0b"
          opacity="0.8"
        />
        
        {/* Steam lines */}
        <path d="M 20 15 Q 22 10, 20 5" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M 35 12 Q 37 7, 35 2" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M 50 15 Q 52 10, 50 5" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.4"/>
      </g>
      
      {/* Decorative circle border around dosa */}
      <circle cx="45" cy="55" r="38" stroke="#dc2626" strokeWidth="2" fill="none" opacity="0.2"/>
      
      {/* Text */}
      <text
        x="95"
        y="45"
        fontFamily="Inter, sans-serif"
        fontSize="32"
        fontWeight="900"
        fill="#1f2937"
        letterSpacing="-0.5"
      >
        Dosa
      </text>
      <text
        x="95"
        y="70"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="#dc2626"
        letterSpacing="0.5"
      >
        Express
      </text>
      
      {/* Since 1999 badge */}
      <text
        x="95"
        y="85"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="#6b7280"
        letterSpacing="1"
      >
        SINCE 1999
      </text>
      
      {/* Accent line */}
      <line
        x1="95"
        y1="52"
        x2="230"
        y2="52"
        stroke="#f59e0b"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
};

export default Logo;
