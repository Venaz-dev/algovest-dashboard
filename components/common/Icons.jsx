import React from "react";

const Icons = ({ name, size, color, className }) => {
  return name === "check" ? (
    <svg
      width={size || 32}
      height={size || 32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-2.286 22.996l-6.926-6.927 2.424-2.424 4.502 4.502 8.502-8.502 2.425 2.424-10.927 10.927z"
        fill={color || "#06AA65"}
      />
    </svg>
  ) : name === "twitter" ? (
    <svg
      width={size || 18}
      height={size || 18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0v18h18V0H0zm13.955 6.459c.005.11.007.22.007.33 0 3.379-2.571 7.274-7.274 7.274a7.235 7.235 0 01-3.919-1.148 5.16 5.16 0 003.785-1.059 2.56 2.56 0 01-2.388-1.775 2.552 2.552 0 001.155-.044A2.558 2.558 0 013.27 7.53v-.032c.345.191.739.306 1.158.32a2.555 2.555 0 01-.791-3.414 7.258 7.258 0 005.27 2.672 2.557 2.557 0 014.356-2.332 5.117 5.117 0 001.623-.62 2.564 2.564 0 01-1.124 1.414c.518-.062 1.01-.2 1.469-.403a5.192 5.192 0 01-1.276 1.324z"
        fill={color || "#222"}
        fillOpacity={0.7}
      />
    </svg>
  ) : name === "minus-sign" ? (
    <svg
      width={size || 24}
      height={size || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path stroke={color || "#06AA65"} strokeWidth={3} d="M0 10.5h24" />
    </svg>
  ) : name === "plus-sign" ? (
    <svg
      width={size || 24}
      height={size || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke={color || "#06AA65"}
        strokeWidth={3}
        d="M0 10.5h24M10.5 24V0"
      />
    </svg>
  ) : name === "outlink" ? (
    <svg
      width={size || 28}
      height={size || 28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.876 6.206v2.016h8.97L5.5 20.575 6.92 22 19.27 9.647v8.97h2.016V6.206H8.876z"
        fill={color || "#fff"}
      />
    </svg>
  ) : name === "triple-dot" ? (
    <svg width={51} height={51} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x={0.5}
        y={0.5}
        width={50}
        height={50}
        rx={25}
        fill="#F1F1F1"
        stroke="#D0D0D0"
      />
      <circle cx={15.419} cy={26.093} r={3.558} fill="#222" />
      <circle cx={26.538} cy={26.093} r={3.558} fill="#222" />
      <circle cx={37.657} cy={26.093} r={3.558} fill="#222" />
    </svg>
  ) : null;
};

export default Icons;
